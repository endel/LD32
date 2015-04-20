export default class ParticleEmitter extends PIXI.DisplayObjectContainer {

  constructor() {
    super();

    this.ttl = 10;
    this.life = this.ttl;
    this.alive = true;

    this.elapsed = Date.now();

    this.emitter = new cloudkid.Emitter( this, [ PIXI.Texture.fromFrame('dust-particle.png') ], {
      "alpha": {
        "start": 0.8,
        "end": 0.0
      },
      "scale": {
        "start": 1,
        "end": 2
      },
      // "color": {
      //   "start": "fb1010",
      //   "end": "f5b830"
      // },
      "speed": {
        "start": 250,
        "end": 150
      },
      "startRotation": {
        "min": 0,
        "max": 360
      },
      "rotationSpeed": {
        "min": 0,
        "max": 0
      },
      "lifetime": {
        "min": 0.15,
        "max": 0.3
      },
      "frequency": 0.008,
      "emitterLifetime": 0.1,
      "maxParticles": 100,
      "pos": {
        "x": 0,
        "y": 0
      },
      "addAtBack": false,
      "spawnType": "circle",
      "spawnCircle": {
        "x": 0,
        "y": 0,
        "r": 10
      }
    });
    this.emitter.emit = true;

    controller.particleManager.push(this);
  }

  update() {
    var now = Date.now();
    this.emitter.update((now - this.elapsed) * 0.001);
    this.elapsed = now;

    this.life--;
    if (this.life < 0) {
      this.alive = false;
    }
  }

}
