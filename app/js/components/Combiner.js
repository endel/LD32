import Element from './Element';

var combinations = require('../data/elements').combinations;

export default class Combiner extends PIXI.Sprite {

  constructor(inventory) {
    this.inventory = inventory;

    super(PIXI.Texture.fromImage("images/combiner.png"));

    this.elements = []
    this.maxElements = 2;

    this.droppable({ accepts: "draggable", drop: this.onDrop.bind(this) });
  }

  get isEmpty() {
    return this.elements.length == 0;
  }

  remove(element) {
    this.elements.splice(this.elements.indexOf(element), 1);
  }

  onDrop(originalElement, mouse) {
    var element = originalElement;
    var dragOptions = element.dragOptions;

    if (this.elements.length < this.maxElements) {

      if (element.isBase) {
        element = element.copy();
        originalElement.x = originalElement.startX;
        originalElement.y = originalElement.startY;

      } else {
        // base elements are not removed from inventory
        this.inventory.removeElement(element)
      }

      element.combiner = this;
      this.elements.push(element)

      let result = this.combine();
      if (result) {
        this.inventory.addElement(new Element(result, false));
      }

    } else {
      dragOptions.revert = true;
    }

  }

  combine() {
    let numElements = this.elements.length;

    for (let result in combinations) {
      // clone combinations array
      let items = JSON.parse(JSON.stringify(combinations[result]));

      for (var i = 0; i<numElements; i++) {
        let foundElement = items.indexOf(this.elements[i].identifier);
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
