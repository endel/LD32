import Combiner from './components/Combiner'
import Inventory from './components/Inventory'

export default class Craft extends PIXI.Stage {

  constructor() {
    super();

    this.inventory = new Inventory()
    this.combiner = new Combiner(this.inventory);

    this.combiner.x = 4
    this.combiner.y = 4
    this.addChild(this.combiner);

    this.inventory.x = (window.innerWidth / SCALE_RATIO) - this.inventory.width - 4;
    this.inventory.y = (window.innerHeight / SCALE_RATIO) - this.inventory.height - 4;
    this.addChild(this.inventory)
    this.inventory.setup();
  }

  update() {
  }

}

