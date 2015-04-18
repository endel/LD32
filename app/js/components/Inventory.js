import Element from './Element'

var elements = require('../data/elements');

export default class Inventory extends PIXI.Sprite {

  constructor() {
    super(PIXI.Texture.fromImage("images/combiner.png"));

    this.width = 400;
    this.height = 100;

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
    element.y = this.y
    element.x = this.x + element.width * this.elements.length;
    this.elements.push(element)
    this.parent.addChild(element);
  }

}
