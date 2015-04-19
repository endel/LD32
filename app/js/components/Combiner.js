import Element from './Element';

var combinations = require('../data/elements').combinations;

export default class Combiner extends PIXI.Sprite {

  constructor(inventory) {
    this.inventory = inventory;

    super(PIXI.Texture.fromImage("images/combiner.png"));

    this.elements = []
    this.maxElements = 2;

    this.droppable({ accepts: "draggable", drop: this.onDrop.bind(this), stop: this.onDropStop.bind(this) });
  }

  get isEmpty() {
    return this.elements.length == 0;
  }

  remove(element, splice = true) {
    element.parent.removeChild(element);
    element.combiner = null;
    if (splice) {
      this.elements.splice(this.elements.indexOf(element), 1);
    }
  }

  clearElements() {
  }

  onDrop(originalElement, mouse) {
    var element = originalElement;
    var dragOptions = element.dragOptions;

    console.log("Elements: ", this.elements.length);

    if (this.elements.length < this.maxElements) {
      if (element.isBase) {

        element = new Element(originalElement.identifier, false);
        element.x = originalElement.dragElement.x;
        element.y = originalElement.dragElement.y;
        this.parent.addChild(element);

        dragOptions.revert = true;
        dragOptions.revertDuration = 0;

      } else {
        // base elements are not removed from inventory
        this.inventory.removeElement(element)
      }

      element.combiner = this;
      this.elements.push(element)

      let result = this.combine();
      if (this.elements.length == 2) {
        for (var i=0; i < this.elements.length; i++) {
          this.remove(this.elements[i], false);
        }

        if (result) {
          this.inventory.addElement(new Element(result, false));
        }

        this.elements = [];
      }

    } else {
      dragOptions.revert = true;
    }

  }

  onDropStop(element, move) {
    console.log("on drop stop!")
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
