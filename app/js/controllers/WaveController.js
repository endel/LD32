var waves = require('../data/waves');

export default class WaveController {

  constructor(options) {
    this.deliveryArea = options.deliveryArea;
    this.hud = options.hud;
    this.inventory = options.inventory;
    this.workingArea = options.workingArea;

    this.deliveryArea.onDeliver = this.onDeliver.bind(this);

    this.sectionIterator = this.sectionList();

    this.section = this.sectionIterator.next().value;
    this.sectionIndex = 0;
    this.waveData = waves[this.section][this.sectionIndex];

    this.currentWave = 0;
    this.maxWaves = 10;

    this.timeInterval = null;
    this.currentTime = 10;

    events.on('element-drop', this.tryStartCountdown.bind(this));
  }

  *sectionList() {
    yield "intro";
    yield "easy";
    yield "medium";
    yield "hard";
  }

  start() {
    events.emit('talk', "pictureCustomer_0001.png", this.waveData.text);

    this.currentTime = this.waveData.countdown + 1;
    this.timeTick();

    // update wave number label
    this.hud.waveLabel.setText(this.currentWave+1);

    this.inventory.setup(this.waveData.inventory);
  }

  tryStartCountdown() {
    if (!this.timeInterval) {
      this.timeInterval = setInterval(this.timeTick.bind(this), 1000);
      this.timeTick();
    }
  }

  timeTick() {
    if (--this.currentTime >= 0) {
      this.hud.timeLabel.setText(this.currentTime);
    } else {
      this.onTimeFailure();
    }
  }

  nextWave() {
    if (this.timeInterval) {
      clearInterval(this.timeInterval);
      this.timeInterval = null;
    }

    // clear working area
    this.workingArea.clear();

    if (this.sectionIndex + 1 >= waves[this.section].length) {
      this.sectionIndex = 0;
      this.section = this.sectionIterator.next().value
    } else {
      this.sectionIndex++;
    }

    this.waveData = waves[this.section][this.sectionIndex];
    this.currentWave++;

    // 1.5 seconds until next  wave
    setTimeout(this.start.bind(this), 3000);
  }

  onDeliver(element) {
    let performance = this.waveData.responses[ element.identifier ] || "bad";

    events.emit('talk', "pictureCustomer_0001.png", this.waveData.feedbacks[ performance ]);

    this.hud.addProgress(performance);
    this.nextWave()
  }

  onTimeFailure() {
    // is delivery area with something?
    // auto-push delivery button!
    if (this.deliveryArea.button.enabled) {
      this.deliveryArea.doDeliver();

    } else {
      var messages = [
        "We ran out of time! We lost this round!",
        "Are you nuts, smith? We can't fight empty handed! We lost that one!"
      ];
      events.emit('talk', "pictureCustomer_0001.png", messages[ Math.floor((Math.random() * messages.length)) ]);

      this.hud.addProgress("bad");

      this.nextWave()
    }
  }

}

