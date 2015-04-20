import Element from './Element'

var elements = require('../data/elements');

export default class Inventory extends PIXI.Sprite {

  constructor() {
    super(PIXI.Texture.fromFrame("inventory.png"));

    this.itemsY = 100
    this.itemsMarginY = 4
    this.itemsMarginX = 18
    this.itemsPerLine = 2;

    this.elements = []
  }

  setup(elements) {
    // remove previous elements
    while (this.elements.length > 0) {
      this.elements[0].parent.removeChild(this.elements[0]);
      this.removeElement(this.elements[0])
    }

    // add new elements
    for (var i=0; i<elements.length; i++) {
      this.addElement(new Element(elements[i]));
    }
  }

  removeElement(element) {
    this.elements.splice(this.elements.indexOf(element), 1);
  }

  addElement(element) {
    element.y = this.y + this.itemsY + ((element.height + this.itemsMarginY) * this.elements.length)
    element.x = this.x + this.itemsMarginX;
    this.elements.push(element)
    this.parent.addChild(element);
  }

}
