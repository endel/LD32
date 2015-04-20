import WorkingArea from '../components/WorkingArea'
import Inventory from '../components/Inventory'
import DeliveryArea from '../components/DeliveryArea'
import TalkBox from '../components/TalkBox'
import Hud from '../components/Hud'
import WaveController from '../controllers/WaveController'

export default class Craft extends PIXI.Stage {

  constructor() {
    super();

    sounds.stop('intro_background')

    // play background sound
    sounds.fade(0.0, 1.0, 2000);
    sounds.play('game_background');
    soundsBackground.fade(0.0, 1.0, 100);
    soundsBackground.play('game_music')


    var boxMargin = 16;

    this.hud = new Hud();
    this.talkBox = new TalkBox();
    this.inventory = new Inventory()
    this.workingArea = new WorkingArea(this.inventory);
    this.deliveryArea = new DeliveryArea();

    this.waveController = new WaveController({
      deliveryArea: this.deliveryArea,
      hud: this.hud,
      inventory: this.inventory,
      workingArea: this.workingArea
    });
    window.waveController = this.waveController;

    this.bg = new PIXI.Sprite(PIXI.Texture.fromFrame("inGameBG.png"));

    var hudHeight = 72;
    this.bg.y = hudHeight;
    this.addChild(this.bg);

    this.inventory.x = 10;
    this.inventory.y = hudHeight + 4;
    this.addChild(this.inventory)

    this.workingArea.x = this.inventory.x + this.inventory.width + boxMargin
    this.workingArea.y = this.inventory.y + 4;
    this.addChild(this.workingArea);

    this.deliveryArea.x = this.workingArea.x + this.workingArea.width + boxMargin;
    this.deliveryArea.y = this.workingArea.y;
    this.addChild(this.deliveryArea);

    this.talkBox.x = 0
    this.talkBox.y = (SCREEN_HEIGHT / SCALE_RATIO) - this.talkBox.height
    this.addChild(this.talkBox);

    this.addChild(this.hud);

    this.waveController.start();
  }

  update() {
  }

  dispose() {
    this.removeChildren();
  }

}

