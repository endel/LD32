import ParticleEmitter from './ParticleEmitter';

var _default = require('../data/elements').default;
var combinations = require('../data/elements').combinations;

var lastInteractionPoint = {x: null, y: null};

export default class Element extends PIXI.DisplayObjectContainer {

  constructor(identifier, isBase = true) {
    super();

    console.log("New element: ", identifier, isBase)

    this.isBase = isBase
    this.setIdentifier(identifier);
    this.isDelivering = false;
    this.isDragging = false;

    this.draggable({
      label: (isBase ? "inventory" : "working"),
      revert: "invalid",
      revertDuration: 200,
      cursor: "move",
      helper: (isBase ? "clone" : "original"),
      cursorAt: [ this.width / 2, this.height / 2 ],
      start: this.dragStart.bind(this),
      stop: this.dragStop.bind(this)
    });

    this.droppable({
      accepts: ["inventory", "working"],
      drop: this.onDrop.bind(this),
      greedy: true, // prevent event propagation
      tolerance: "touch"
    });

    events.on('wave-prepare', this.disableInteractivity.bind(this))
    events.on('wave-start', this.enableInteractivity.bind(this))
  }

  disableInteractivity() {
    if (this.isDragging) {
      controller.currentStage.interactionManager.DragAndDropManager.destroyHelperSprite(this);
    }
    this.interactive = false;
  }

  enableInteractivity() {
    this.interactive = true;
  }

  setIdentifier(identifier) {
    // remove previous icon
    if (this.icon) {
      this.icon.parent.removeChild(this.icon);
      this.icon = null;
    }

    if (this.label) {
      this.label.parent.removeChild(this.label);
    }

    let performanceOnThisWave = waveController.getElementPerformance(identifier);
    if (performanceOnThisWave == "great")
    {
      sounds.play("game_craft_perfect");
      sounds.play("game_craft_success");
    }else if(performanceOnThisWave == "good") {
      sounds.play("game_craft_success");
    }

    this.data = _default[ identifier ] || combinations[ identifier ];
    this.identifier = identifier;

    var labelOptions = {
      font: DEFAULT_FONT,
      fill: "#fff",
      align: "center",
      wordWrap: false
    };

    if (!this.isBase) {
      labelOptions.wordWrap = true;
      labelOptions.wordWrapWidth = 200;
    }

    if(performanceOnThisWave == "great"){
      labelOptions.fill = "#ffff00";
    }

    this.label = new PIXI.Text(this.data.label, labelOptions);
    this.addChild(this.label);

    var frameId = "element-" + identifier + ".png";
    if (PIXI.TextureCache[ frameId ]) {
      this.icon = new PIXI.Sprite(PIXI.Texture.fromFrame(frameId));
      this.icon.x = this.label.width / 2 - this.icon.width / 2
      this.icon.y = -(this.icon.height + 4)
      this.addChild(this.icon)
    }

  }

  update() {
  }

  remove() {
    if (this.parent) {
      this.parent.removeChild(this);
    }
  }

  dragStart(element, evt) {
    sounds.play('game_choose_item')

    this.isDragging = true;

    // cancel delivery if this element is being delivered
    if (this.isDelivering) {
      events.emit('cancel-delivery');
    }
    lastInteractionPoint = evt.global.clone();
  }

  dragStop(element, evt) {
    this.isDragging = false;

    // need to check this on drop + drag stop
    if (lastInteractionPoint.x !== evt.global.x &&
        lastInteractionPoint.y !== evt.global.y) {
      sounds.play('game_drop_item')
    }
    lastInteractionPoint = evt.global.clone();
  }

  onDrop(element, evt) {
    let result = this.combine(element);

    // cancel event when trying to drop directly on inventory
    if (this.isBase || this.isDelivering) {
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
      var messages = ["Yey.", "It worked.", "Sounds good.", "That's it, I'm out.", "I like that."]
      events.emit('talk', 'blacksmith', 'happy', messages[ Math.floor((Math.random() * messages.length)) ]);

      sounds.play('game_craft_success')

      lastInteractionPoint = evt.global.clone();

      this.setIdentifier(result);
    } else {

      var messages = ["Argh, shoot.", "What the hey.", "Nooooooooooooooooo.", "It's not working!", "Oh noes."]
      events.emit('talk', 'blacksmith', 'sad', messages[ Math.floor((Math.random() * messages.length)) ]);

      sounds.play('game_craft_fail')
      lastInteractionPoint = evt.global.clone();

      // TODO: this is not working!
      var emitter = new ParticleEmitter('dust-particle.png');
      if (this.icon) {
        emitter.x = this.x + this.icon.x + this.icon.width / 2;
        emitter.y = this.y + this.icon.y + this.icon.height / 2;
      } else {
        emitter.x = this.x + this.width / 2;
        emitter.y = this.y + this.height / 2;
      }
      this.parent.addChild(emitter)

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


