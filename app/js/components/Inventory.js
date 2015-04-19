import Element from './Element'

var elements = require('../data/elements');

export default class Inventory extends PIXI.Sprite {

  constructor() {
    super(PIXI.Texture.fromImage("images/combiner.png"));

    this.width = 100;
    this.height = 400;
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
    element.y = this.y + element.height * this.elements.length
    element.x = this.x;
    this.elements.push(element)
    this.parent.addChild(element);
  }

}
