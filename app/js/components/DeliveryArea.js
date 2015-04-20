import DeliverButton from '../components/DeliverButton'

export default class DeliveryArea extends PIXI.DisplayObjectContainer {

  constructor() {
    super();

    this.area = new PIXI.Sprite(PIXI.Texture.fromFrame("deliverArea.png"));
    this.addChild(this.area);
    this.area.droppable({
      accepts: "draggable",
      drop: this.onDrop.bind(this)
    });

    this.element = null;

    this.button = new DeliverButton();
    this.button.x = 4;
    this.button.y = this.area.height + 16;
    this.addChild(this.button);
    this.button.click = this.button.tap = this.doDeliver.bind(this);

    events.on('cancel-delivery', this.onCancelDelivery.bind(this))
  }

  onDrop(element, move) {
    console.log("Dropped: ", element);

    if (element.isBase) {
      element.dragOptions.revert = true;
      element.dragOptions.revertDuration = 0;
      return;
    }

    if (this.element) {
      console.log("Have element! Let's cancel this.")
      element.dragOptions.revert = true
      element.dragOptions.revertDuration = 0;
      return;
    }

    // WORKAROUND: this shouldn't be needed here.
    element.dragOptions.revert = false;

    this.element = element;
    this.element.isDelivering = true;
    this.button.enabled = true;
  }

  onCancelDelivery() {
    this.button.enabled = false;
    this.element.isDelivering = false;
    this.element = null;
  }

  doDeliver() {
    // TODO: check result
    sounds.play('game_craft_deliver')
    this.element.remove();
    this.onCancelDelivery();
  }

}

