import DeliverButton from '../components/DeliverButton'

export default class DeliveryArea extends PIXI.DisplayObjectContainer {

  constructor() {
    super();

    this.area = new PIXI.Sprite(PIXI.Texture.fromFrame("deliverArea.png"));
    this.addChild(this.area);
    this.area.droppable({
      accepts: "draggable",
      drop: this.onDrop.bind(this),
      tolerance: "touch"
    });

    this.element = null;
    this.onDeliver = null;

    this.button = new DeliverButton();
    this.button.x = 4;
    this.button.y = this.area.height + 20;
    this.addChild(this.button);
    this.button.click = this.button.tap = this.doDeliver.bind(this);

    this.instructionLabel = new PIXI.Text("Place here your finished weapon", {
      font: DEFAULT_FONT,
      fill: "#fff",
      align: "center",
      wordWrap: true,
      wordWrapWidth: this.width - 40
    })
    this.instructionLabel.anchor.x = 0.5;
    this.instructionLabel.anchor.y = 0.5;
    this.instructionLabel.x = this.width / 2;
    this.instructionLabel.y = this.height / 2 - 42;
    this.addChild(this.instructionLabel);

    events.on('cancel-delivery', this.onCancelDelivery.bind(this))
  }

  onDrop(element, move) {
    // remove instruction label if it still on stage
    if (this.instructionLabel.parent) {
      this.instructionLabel.parent.removeChild(this.instructionLabel);
    }

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

    // snap element into delivery area
    element.x = this.x + (this.area.width / 2 - element.width / 2);
    element.y = this.y + this.area.height / 2;
    if (element.icon) {
      element.y += element.height / 4;
    }

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
    if (this.button.enabled) {
      // TODO: check result
      sounds.play('game_craft_deliver')

      if (this.onDeliver) {
        this.onDeliver(this.element);
      }

      this.element.remove();
      this.onCancelDelivery();
    }
  }

}

