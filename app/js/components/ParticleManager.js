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
      // TODO: remove particle emitter
      // if (!this.emitters[i].alive) {
      //   this.emitters.splice(i, 1);
      // }
    }
  }

}
