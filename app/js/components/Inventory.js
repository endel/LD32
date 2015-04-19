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

  setup() {
    for (var name in elements.default) {
      this.addElement(new Element(name));
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
