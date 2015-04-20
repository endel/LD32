import WorkingArea from '../components/WorkingArea'
import Inventory from '../components/Inventory'
import DeliveryArea from '../components/DeliveryArea'
import TalkBox from '../components/TalkBox'
import Hud from '../components/Hud'
import WaveController from '../controllers/WaveController'

export default class Craft extends PIXI.Stage {

  constructor() {
    super();

    var boxMargin = 16;

    this.hud = new Hud();
    this.talkBox = new TalkBox();
    this.inventory = new Inventory()
    this.workingArea = new WorkingArea(this.inventory);
    this.deliveryArea = new DeliveryArea();

    // this.waveController = new WaveController();

    this.bg = new PIXI.TilingSprite(
      PIXI.Texture.fromFrame("inGameBG.png"),
      SCREEN_WIDTH,
      SCREEN_HEIGHT
    );
    this.bg.y = this.hud.height;
    this.addChild(this.bg);

    this.inventory.x = boxMargin;
    this.inventory.y = this.hud.height;
    this.addChild(this.inventory)

    this.workingArea.x = this.inventory.x + this.inventory.width + boxMargin
    this.workingArea.y = this.inventory.y + boxMargin;
    this.addChild(this.workingArea);

    this.deliveryArea.x = this.workingArea.x + this.workingArea.width + boxMargin;
    this.deliveryArea.y = this.inventory.y + boxMargin;
    this.addChild(this.deliveryArea);

    this.talkBox.x = 0
    this.talkBox.y = (SCREEN_HEIGHT / SCALE_RATIO) - this.talkBox.height
    this.addChild(this.talkBox);

    this.addChild(this.hud);

    // setup
    this.inventory.setup();
  }

  update() {
  }

}

