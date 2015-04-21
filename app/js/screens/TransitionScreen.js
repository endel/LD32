export default class TransitionScreen extends PIXI.DisplayObjectContainer {

  constructor() {
    super();

    this.stageTo = null;

    // transition variables
    this.leftDoor = new PIXI.Sprite(PIXI.Texture.fromFrame("transitionleft.png"));
    this.leftDoor.x = -this.leftDoor.width;
    this.addChild(this.leftDoor);

    this.rightDoor = new PIXI.Sprite(PIXI.Texture.fromFrame("transitionright.png"));
    this.rightDoor.x = SCREEN_WIDTH;
    this.addChild(this.rightDoor);

    this.renderable = false;
  }

  open(stageTo = null) {
    this.stageTo = stageTo
    this.renderable = true;
    TweenMax.to(this.leftDoor, 1, { x: 0, ease: Power2.easeOut })
    TweenMax.to(this.rightDoor, 1, { x: SCREEN_WIDTH / 2, ease: Power2.easeOut, onComplete: this.onOpenComplete.bind(this) })
  }

  onOpenComplete() {
    this.close();

    this.parent.removeChild(this);
    controller.setCurrentStage(this.stageTo)
    this.stageTo.addChild(this);
  }

  close() {
    TweenMax.to(this.leftDoor, 1, { x: -this.leftDoor.width, ease: Power2.easeOut })
    TweenMax.to(this.rightDoor, 1, { x: SCREEN_WIDTH, ease: Power2.easeOut, onComplete: this.onCloseComplete.bind(this) })
  }

  onCloseComplete() {
    this.renderable = false;
  }

}
