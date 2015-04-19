import ParticleEmitter from './ParticleEmitter';

var _default = require('../data/elements').default;
var combinations = require('../data/elements').combinations;

export default class Element extends PIXI.DisplayObjectContainer {

  constructor(identifier, isBase = true) {
    super();

    console.log("New element: ", identifier, isBase)

    this.setIdentifier(identifier);
    this.isBase = isBase

    this.draggable({
      label: (isBase ? "inventory" : "working"),
      revert: "invalid",
      revertDuration: 200,
      cursor: "move",
      helper: (isBase ? "clone" : "original"),
      cursorAt: [ this.width / 2, this.height / 2 ],
      // start: this.dragStart.bind(this),
      // drag: this.dragging.bind(this)
    });

    this.droppable({
      accepts: ["inventory", "working"],
      drop: this.onDrop.bind(this),
      greedy: true // prevent event propagation
    });
  }

  setIdentifier(identifier) {
    // remove previous icon
    if (this.icon) {
      this.icon.parent.removeChild(this.icon);
      this.label.parent.removeChild(this.label);
    }

    this.icon = new PIXI.Sprite(PIXI.Texture.fromFrame("element-" + identifier + ".png"));
    this.addChild(this.icon)

    this.data = _default[ identifier ] || combinations[ identifier ];
    this.identifier = identifier;

    this.label = new PIXI.Text(this.data.label, {
      font: DEFAULT_FONT,
      fill: "#fff",
      align: "center"
    });
    this.addChild(this.label);
  }

  update() {
  }

  remove() {
    this.parent.removeChild(this);
  }

  onDrop(element, cursor) {
    let result = this.combine(element);

    // cancel event when trying to drop directly on inventory
    if (this.isBase) {
      element.dragOptions.revert = true;
      element.dragOptions.revertDuration = 0;
      return;
    }

    if (element.isBase) {
      element.dragOptions.revert = true;
      element.dragOptions.revertDuration = 0;
    } else {
      element.remove();
    }

    if (result) {
      var messages = ["Yey.", "It worked.", "Sounds good."]
      events.emit('talk', 'pictureBlacksmith_0001.png', messages[ Math.floor((Math.random() * messages.length)) ]);
      sounds.play('craft-success')

      this.setIdentifier(result);
    } else {

      var messages = ["Argh, dammit.", "Fuck that shit.", "Nooooo."]
      events.emit('talk', 'pictureBlacksmith_0001.png', messages[ Math.floor((Math.random() * messages.length)) ]);

      sounds.play('craft-fail')

      // TODO: this is not working!
      var emitter = new ParticleEmitter();
      emitter.x = this.x;
      emitter.y = this.y;
      this.parent.addChild(emitter)
      emitter.update();

      this.remove();
    }
  }

  copy() {
    return new Element(this.identifier);
  }

  combine(element) {
    var elements = [this, element];

    for (let result in combinations) {
      // clone combinations array
      let items = JSON.parse(JSON.stringify(combinations[result].requirements));

      for (var i = 0; i<elements.length; i++) {
        let foundElement = items.indexOf(elements[i].identifier);
        if (foundElement >= 0) {
          items.splice(foundElement, 1)
        }
      }

      if (items.length == 0) {
        return result;
      }
    }

    return false;
  }

}


