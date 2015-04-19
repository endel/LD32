export default class Element extends PIXI.Sprite {

  constructor(identifier, isBase = true) {
    super(PIXI.Texture.fromImage("images/elements/" + identifier + ".png"));
    console.log("New element: ", identifier, isBase)

    this.identifier = identifier;
    this.width = 50;
    this.height = 50;
    this.isBase = isBase

    this.click = this.tap = this.dragStart.bind(this);

    this.draggable({
      revert: "invalid",
      revertDuration: 200,
      cursor: "move",
      helper: (isBase ? "clone" : "original"),
      cursorAt: [ this.width / 2, this.height / 2 ],
      start: this.dragStart.bind(this),
      drag: this.dragging.bind(this),
      stop: this.dragStop.bind(this)
    });
  }

  set combiner(_combiner) {
    this._combiner = _combiner;
    this.combinedAt = new Date();
  }

  update() {
  }

  dragStart() {
    var time = new Date();

    this.startX = this.x;
    this.startY = this.y;

    if (this._combiner && (time - this.combinedAt) > 100) {
      this._combiner.remove(this);
    }
  }

  dragging() {
  }

  dragStop() {
  }

  copy() {
    return new Element(this.identifier);
  }

}


