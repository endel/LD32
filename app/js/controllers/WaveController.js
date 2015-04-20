var waves = require('../data/waves');

export default class WaveController {

  constructor(options) {
    this.deliveryArea = options.deliveryArea;
    this.hud = options.hud;
    this.inventory = options.inventory;

    this.deliveryArea.onDeliver = this.onDeliver.bind(this);

    this.sectionIterator = this.sectionList();

    this.section = this.sectionIterator.next().value;
    this.sectionIndex = 0;
    this.waveData = waves[this.section][this.sectionIndex];

    this.currentWave = 0;
    this.maxWaves = 10;
  }

  *sectionList() {
    yield "intro";
    yield "easy";
    yield "medium";
    yield "hard";
  }

  start() {
    events.emit('talk', "pictureCustomer_0001.png", this.waveData.text);

    // update wave number label
    this.hud.waveLabel.setText(this.currentWave+1);

    this.inventory.setup(this.waveData.inventory);
  }

  nextWave() {

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
    var messages = [
      "We ran out of time! We lost this round!",
      "Are you nuts, smith? We can't fight empty handed! We lost that one!"
    ]
    events.emit('talk', 'pictureBlacksmith_0001.png', messages[ Math.floor((Math.random() * messages.length)) ]);
    this.nextWave()
  }

}

