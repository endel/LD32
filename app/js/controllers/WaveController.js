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
    events.emit('wave-start');

    events.emit('talk', 'customer', 'normal', this.waveData.text);

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
    events.emit('wave-prepare');

    if (this.timeInterval) {
      clearInterval(this.timeInterval);
      this.timeInterval = null;
    }

    // clear working area
    this.workingArea.clear();

    if (this.sectionIndex + 1 >= Math.clamp(waves[this.section].length, 0, 3)) {
      this.sectionIndex = 0;
      this.section = this.sectionIterator.next().value
    } else {
      this.sectionIndex++;
    }

    console.log(this.section);

    this.waveData = waves[this.section][this.sectionIndex];
    this.currentWave++;

    // 1.5 seconds until next  wave
    setTimeout(this.start.bind(this), 3000);
  }

  getElementPerformance(identifier) {
    return this.waveData.responses[ identifier ] || "bad";
  }

  onDeliver(element) {
    let performance = this.getElementPerformance(element.identifier);

    if(performance == "bad"){
      sounds.play('game_wave_lose');
    }else{
      sounds.play('game_wave_win');
    }

    events.emit('talk', 'customer', performance, this.waveData.feedbacks[ performance ]);

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
      events.emit('talk', 'customer', 'bad', messages[ Math.floor((Math.random() * messages.length)) ]);

      this.hud.addProgress("bad");
      sounds.play('game_wave_lose');

      this.nextWave()
    }
  }

}

