export default class Element extends PIXI.Sprite {

  constructor(identifier, isBase = true) {
    super(PIXI.Texture.fromImage("images/elements/" + identifier + ".png"));

    this.identifier = identifier;
    this.width = 50;
    this.height = 50;
    this.isBase = isBase

    this.draggable({
      cursor: "move",
      helper: (isBase ? "clone" : "original"),
      cursorAt: [ this.width / 2, this.height / 2 ],
      start: this.dragStart.bind(this),
      drag: this.dragging.bind(this),
      stop: this.dragStop.bind(this)
    });
  }

  update() {
  }

  dragStart() {
    this.startX = this.x;
    this.startY = this.y;

    if (this.combiner) {
      this.combiner.remove(this);
      this.combiner = null;
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


