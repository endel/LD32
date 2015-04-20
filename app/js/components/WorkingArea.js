import Element from './Element';

var combinations = require('../data/elements').combinations;

export default class WorkingArea extends PIXI.Sprite {

  constructor(inventory) {
    super(PIXI.Texture.fromFrame("craftArea.png"));

    this.inventory = inventory;

    this.elements = []
    this.maxElements = 2;

    this.instructionLabel = new PIXI.Text("Create your weapons here", {
      font: DEFAULT_FONT,
      fill: "#fff",
      align: "center",
    })
    this.instructionLabel.anchor.x = 0.5;
    this.instructionLabel.anchor.y = 0.5;
    this.instructionLabel.x = this.width / 2;
    this.instructionLabel.y = this.height / 2;
    this.addChild(this.instructionLabel);

    this.droppable({
      accepts: "draggable",
      drop: this.onDrop.bind(this)
    });
  }

  get isEmpty() {
    return this.elements.length == 0;
  }

  clear() {
    for (var i=0; i<this.elements.length; i++) {
      if (this.elements[i].parent) {
        this.elements[i].parent.removeChild(this.elements[i]);
      }
    }
    this.elements = [];
  }

  onDrop(originalElement, mouse) {
    // remove instruction label if it still on stage
    if (this.instructionLabel.parent) {
      this.instructionLabel.parent.removeChild(this.instructionLabel);
    }

    var element = originalElement;
    var dragOptions = element.dragOptions;

    if (element.isBase) {

      element = new Element(originalElement.identifier, false);
      element.x = originalElement.dragElement.x;
      element.y = originalElement.dragElement.y;
      this.parent.addChild(element);

      dragOptions.revert = true;
      dragOptions.revertDuration = 0;
    }

    events.emit('element-drop', element);
    this.elements.push(element);

    element.workingArea = this;
  }

}
