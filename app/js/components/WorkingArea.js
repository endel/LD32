import Element from './Element';

var combinations = require('../data/elements').combinations;

export default class WorkingArea extends PIXI.Sprite {

  constructor(inventory) {
    super(PIXI.Texture.fromFrame("craftArea.png"));

    this.inventory = inventory;

    this.elements = []
    this.maxElements = 2;

    this.width = SCREEN_WIDTH / 2;
    this.height = SCREEN_HEIGHT / 2;

    this.droppable({
      accepts: "draggable",
      drop: this.onDrop.bind(this)
    });
  }

  get isEmpty() {
    return this.elements.length == 0;
  }

  onDrop(originalElement, mouse) {
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

    element.workingArea = this;
  }

}
