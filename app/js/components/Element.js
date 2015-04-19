var _default = require('../data/elements').default;
var combinations = require('../data/elements').combinations;

export default class Element extends PIXI.DisplayObjectContainer {

  constructor(identifier, isBase = true) {
    super();

    console.log("New element: ", identifier, isBase)

    this.setIdentifier(identifier);
    this.isBase = isBase

    this.draggable({
      label: (isBase ? "inventory" : "working"),
      revert: "invalid",
      revertDuration: 200,
      cursor: "move",
      helper: (isBase ? "clone" : "original"),
      cursorAt: [ this.width / 2, this.height / 2 ],
      // start: this.dragStart.bind(this),
      // drag: this.dragging.bind(this)
    });

    this.droppable({
      accepts: ["inventory", "working"],
      drop: this.onDrop.bind(this),
      greedy: true // prevent event propagation
    });
  }

  setIdentifier(identifier) {
    // remove previous icon
    if (this.icon) {
      this.icon.parent.removeChild(this.icon);
      this.label.parent.removeChild(this.label);
    }

    this.icon = new PIXI.Sprite(PIXI.Texture.fromImage("images/elements/" + identifier + ".png"));
    this.addChild(this.icon)

    this.data = _default[ identifier ] || combinations[ identifier ];
    this.identifier = identifier;

    this.label = new PIXI.Text(this.data.label, {
      font: "20px Arial",
      stroke: "#fff",
      align: "center"
    });
    this.addChild(this.label);
  }

  update() {
  }

  remove() {
    this.parent.removeChild(this);
  }

  onDrop(element, cursor) {
    let result = this.combine(element);
    if (result) {

      if (element.isBase) {
        element.dragOptions.revert = true;
        element.dragOptions.revertDuration = 0;
      } else {
        element.remove();
      }

      console.log("Result: ", result)
      this.setIdentifier(result);
      // this.inventory.addElement(new Element(result, false));
    }
  }

  copy() {
    return new Element(this.identifier);
  }

  combine(element) {
    var elements = [this, element];

    for (let result in combinations) {
      // clone combinations array
      let items = JSON.parse(JSON.stringify(combinations[result].requirements));

      for (var i = 0; i<elements.length; i++) {
        let foundElement = items.indexOf(elements[i].identifier);
        if (foundElement >= 0) {
          items.splice(foundElement, 1)
        }
      }

      if (items.length == 0) {
        return result;
      }
    }

    return false;
  }

}


