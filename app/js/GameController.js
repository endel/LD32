export default class GameController {

  constructor() {
    super();
    this.currentStage = null;
    this.stages = []
  }

  start() {
    this.updateInterval = setInterval(this.update.bind(this), 60 / 1000)
    this.loop();
  }

  stop() {
    clearInterval(this.updateInterval);
  }

  update() {
    if (this.currentStage) {
      this.currentStage.update();
    }
  }

  setStage(stage) {
    this.currentStage = stage;
    if (this.stages.indexOf(stage) !== -1) {
      this.stages.push(this.currentStage);
    }
  }

  loop() {
    renderer.render(this.currentStage);
    // for(var i=0,l=this.stages.length;i<l;i++) {
    //   renderer.render(this.stages[i]);
    // }
    window.requestAnimationFrame(this.loop.bind(this));
  }

}
