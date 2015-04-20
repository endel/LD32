export default class ParticleManager {

  constructor() {
    this.emitters = [];
  }

  push(emitter) {
    this.emitters.push(emitter)
  }

  update() {
    var i = this.emitters.length;
    while (i--) {
      this.emitters[i].update();
      if (!this.emitters[i].alive) {
        this.emitters[i].splice(i, 1);
      }
    }
  }

}
