import WorkingArea from './components/WorkingArea'
import Inventory from './components/Inventory'
import DeliveryArea from './components/DeliveryArea'

export default class Craft extends PIXI.Stage {

  constructor() {
    super();

    this.inventory = new Inventory()
    this.workingArea = new WorkingArea(this.inventory);
    this.deliveryArea = new DeliveryArea();

    this.workingArea.x = (window.innerWidth / SCALE_RATIO) - this.workingArea.width - 4;
    this.workingArea.y = (window.innerHeight / SCALE_RATIO) - this.workingArea.height - 4;
    this.addChild(this.workingArea);

    this.inventory.x = 4;
    this.inventory.y = 4;
    this.addChild(this.inventory)

    this.deliveryArea.x = (window.innerWidth / SCALE_RATIO) - this.deliveryArea.width - 4;
    this.deliveryArea.y = (window.innerHeight / SCALE_RATIO) - this.deliveryArea.height - 4;
    this.addChild(this.deliveryArea);

    // setup
    this.inventory.setup();
  }

  update() {
  }

}

