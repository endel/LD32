import ParticleManager from '../components/ParticleManager';

export default class GameController {

  constructor() {
    super();
    this.currentStage = null;
    this.particleManager = new ParticleManager();
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
    this.particleManager.update();

    if (this.currentStage) {
      this.currentStage.update();
    }
  }

  setStage(stage, transition = null) {
    if (this.stages.indexOf(stage) !== -1) {
      this.stages.push(this.currentStage);
    }

    if (transition && this.currentStage && this.currentStage.transitionScreen) {
      this.currentStage.transitionScreen.open(stage) ;
    } else {
      this.setCurrentStage(stage)
    }
  }

  setCurrentStage(stage) {
    if (this.currentStage) {
      this.currentStage.dispose();
    }

    this.currentStage = stage;
  }

  loop() {
    renderer.render(this.currentStage);
    window.requestAnimationFrame(this.loop.bind(this));
  }

}
