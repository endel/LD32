import WorkingArea from './components/WorkingArea'
import Inventory from './components/Inventory'
import DeliveryArea from './components/DeliveryArea'
import DeliverButton from './components/DeliverButton'
import TalkBox from './components/TalkBox'
import Hud from './components/Hud'

export default class Craft extends PIXI.Stage {

  constructor() {
    super();

    var boxMargin = 4;

    this.hud = new Hud();
    this.talkBox = new TalkBox();
    this.inventory = new Inventory()
    this.workingArea = new WorkingArea(this.inventory);
    this.deliveryArea = new DeliveryArea();
    this.deliverButton = new DeliverButton();

    this.bg = new PIXI.TilingSprite(
      PIXI.Texture.fromImage("images/inGameBG.png"),
      SCREEN_WIDTH,
      SCREEN_HEIGHT
    );
    this.bg.y = this.hud.boxHeight;
    this.addChild(this.bg);

    this.inventory.x = 4;
    this.inventory.y = this.hud.boxHeight;
    this.addChild(this.inventory)

    this.workingArea.x = this.inventory.x + this.inventory.boxWidth + boxMargin
    this.workingArea.y = this.inventory.y + 68;
    this.addChild(this.workingArea);

    this.deliveryArea.x = this.workingArea.x + this.workingArea.boxWidth + boxMargin;
    this.deliveryArea.y = this.workingArea.y;
    this.addChild(this.deliveryArea);

    this.deliverButton.x = this.deliveryArea.x;
    this.deliverButton.y = this.deliveryArea.y + this.deliveryArea.boxHeight + boxMargin;
    this.addChild(this.deliverButton);

    this.talkBox.x = 0
    this.talkBox.y = (SCREEN_HEIGHT / SCALE_RATIO) - this.talkBox.boxHeight
    this.addChild(this.talkBox);

    this.addChild(this.hud);

    // setup
    this.inventory.setup();
  }

  update() {
  }

}

