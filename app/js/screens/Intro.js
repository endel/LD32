import Craft from './Craft'

export default class Intro extends PIXI.Stage {

  constructor() {
    super();
    sounds.play('intro_background')

    var background = new PIXI.Sprite(PIXI.Texture.fromFrame("homebg.png"));
    this.addChild(background);

    var ground1 = new PIXI.Sprite(PIXI.Texture.fromFrame("homeground.png"));
    ground1.y = SCREEN_HEIGHT - ground1.height;
    this.addChild(ground1);

    var ground2 = new PIXI.Sprite(PIXI.Texture.fromFrame("homeground.png"));
    ground2.y = SCREEN_HEIGHT - ground1.height;
    ground2.x = SCREEN_WIDTH;
    this.addChild(ground2);

    var cloud1 = new PIXI.Sprite(PIXI.Texture.fromFrame("homecloud1.png"));
    cloud1.y = 120;
    cloud1.x = SCREEN_WIDTH + cloud1.width;
    this.addChild(cloud1);

    var cloud2 = new PIXI.Sprite(PIXI.Texture.fromFrame("homecloud2.png"));
    cloud2.y = 50;
    cloud2.x = SCREEN_WIDTH + cloud2.width;
    this.addChild(cloud2);

    var store = new PIXI.Sprite(PIXI.Texture.fromFrame("homestore.png"));
    store.anchor.x = 0.5;
    store.x = SCREEN_WIDTH/2;
    store.y = 0;
    this.addChild(store);

    // create an array to store the textures
    var faceIdle = [];
    for (var i=0; i < 3; i++)
    {
      var texture = PIXI.Texture.fromFrame("homeBlacksmith_000" + (i+1) + ".png");
      faceIdle.push(texture);
    };

    var faceTalk = [];
    for (var i=3; i < 5; i++)
    {
      var texture = PIXI.Texture.fromFrame("homeBlacksmith_000" + (i+1) + ".png");
      faceTalk.push(texture);
    };

    // create an explosion MovieClip
    var blacksmithIdle = new PIXI.MovieClip(faceIdle);
    blacksmithIdle.position.x = SCREEN_WIDTH/2;
    blacksmithIdle.position.y = 314;
    blacksmithIdle.anchor.x = 0.5;
    blacksmithIdle.anchor.y = 0.5;
    blacksmithIdle.gotoAndPlay(0);
    blacksmithIdle.animationSpeed = 0.1;
    this.addChild(blacksmithIdle);

    // create an explosion MovieClip
    var blacksmithTalk = new PIXI.MovieClip(faceTalk);
    blacksmithTalk.position.x = SCREEN_WIDTH/2;
    blacksmithTalk.position.y = 314;
    blacksmithTalk.anchor.x = 0.5;
    blacksmithTalk.anchor.y = 0.5;
    blacksmithTalk.gotoAndPlay(0);
    blacksmithTalk.animationSpeed = 0.05;
    this.addChild(blacksmithTalk);
    blacksmithTalk.visible = false;

    window.faceChange = setInterval(changeFace,3000)

    var balcony = new PIXI.Sprite(PIXI.Texture.fromFrame("homebalconi.png"));
    balcony.anchor.x = 0.5;
    balcony.x = SCREEN_WIDTH/2;
    balcony.y = 304;
    this.addChild(balcony);

    function changeFace()
    {
        blacksmithTalk.visible = !blacksmithTalk.visible;
        blacksmithIdle.visible = !blacksmithIdle.visible;
        welcome.visible = blacksmithIdle.visible;
    }

    this.credits = new PIXI.Sprite(PIXI.Texture.fromFrame("homecredits.png"));
    this.credits.anchor.x = 0.5;
    this.credits.x = SCREEN_WIDTH/2;
    this.credits.y = SCREEN_HEIGHT - 60;
    this.addChild(this.credits);

    this.epa = new PIXI.Graphics();
    this.epa.alpha = 0
    this.epa.beginFill(0xFFFF00);
    this.epa.lineStyle(5, 0xFF0000);
    this.epa.drawRect(0, 0, 200, 50);
    this.epa.x = 60;
    this.epa.y = SCREEN_HEIGHT - 60;
    this.epa.interactive = true;
    this.epa.buttonMode = true;
    this.epa.click = this.epa.tap = this.openPortfolio.bind("epa");
    this.addChild(this.epa);

    var epaabout = new PIXI.Sprite(PIXI.Texture.fromFrame("aboutGD.png"));
    epaabout.interactive = true;
    epaabout.anchor.x = 0;
    epaabout.anchor.y = 1
    epaabout.x = this.epa.x;
    epaabout.y = SCREEN_HEIGHT - 70;
    epaabout.alpha = 0;
    this.addChild(epaabout);

    this.epa.mouseover = this.showAbout.bind(epaabout);
    this.epa.mouseout = this.hideAbout.bind(epaabout);


    this.endel = new PIXI.Graphics();
    this.endel.alpha = 0
    this.endel.beginFill(0xFFFF00);
    this.endel.lineStyle(5, 0xFF0000);
    this.endel.drawRect(0, 0, 200, 50);
    this.endel.x = 320;
    this.endel.y = SCREEN_HEIGHT - 60;
    this.endel.interactive = true;
    this.endel.buttonMode = true;
    this.endel.click = this.endel.tap = this.openPortfolio.bind("endel");
    this.addChild(this.endel);

    this.endelabout = new PIXI.Sprite(PIXI.Texture.fromFrame("aboutProg.png"));
    this.endelabout.interactive = true;
    this.endelabout.anchor.x = 0;
    this.endelabout.anchor.y = 1
    this.endelabout.x = this.endel.x;
    this.endelabout.y = SCREEN_HEIGHT - 70;
    this.endelabout.alpha = 0;
    this.addChild(this.endelabout);

    this.endel.mouseover = this.showAbout.bind(this.endelabout);
    this.endel.mouseout = this.hideAbout.bind(this.endelabout);

    this.testa = new PIXI.Graphics();
    this.testa.alpha = 0
    this.testa.beginFill(0xFFFF00);
    this.testa.lineStyle(5, 0xFF0000);
    this.testa.drawRect(0, 0, 250, 50);
    this.testa.x = 550;
    this.testa.y = SCREEN_HEIGHT - 60;
    this.testa.interactive = true;
    this.testa.buttonMode = true;
    this.testa.click = this.testa.tap = this.openPortfolio.bind("testa");
    this.addChild(this.testa);

    this.testaabout = new PIXI.Sprite(PIXI.Texture.fromFrame("aboutGD.png"));
    this.testaabout.interactive = true;
    this.testaabout.anchor.x = 0;
    this.testaabout.anchor.y = 1
    this.testaabout.x = this.testa.x + 40;
    this.testaabout.y = SCREEN_HEIGHT - 70;
    this.testaabout.alpha = 0;
    this.addChild(this.testaabout);

    this.testa.mouseover = this.showAbout.bind(this.testaabout);
    this.testa.mouseout = this.hideAbout.bind(this.testaabout);

    this.tomo = new PIXI.Graphics();
    this.tomo.alpha = 0
    this.tomo.beginFill(0xFFFF00);
    this.tomo.lineStyle(5, 0xFF0000);
    this.tomo.drawRect(0, 0, 200, 50);
    this.tomo.x = 860;
    this.tomo.y = SCREEN_HEIGHT - 60;
    this.tomo.interactive = true;
    this.tomo.buttonMode = true;
    this.tomo.click = this.tomo.tap = this.openPortfolio.bind("tomo");
    this.addChild(this.tomo);


    this.tomoabout = new PIXI.Sprite(PIXI.Texture.fromFrame("aboutArt.png"));
    this.tomoabout.interactive = true;
    this.tomoabout.anchor.x = 0;
    this.tomoabout.anchor.y = 1
    this.tomoabout.x = this.tomo.x;
    this.tomoabout.y = SCREEN_HEIGHT - 70;
    this.tomoabout.alpha = 0;
    this.addChild(this.tomoabout);

    this.tomo.mouseover = this.showAbout.bind(this.tomoabout);
    this.tomo.mouseout = this.hideAbout.bind(this.tomoabout);

    var welcome = new PIXI.Sprite(PIXI.Texture.fromFrame("homeballon1.png"));
    welcome.anchor.x = 0;
    welcome.anchor.y = 0;
    welcome.x = blacksmithTalk.x + 50;
    welcome.y = blacksmithTalk.y - 75;
    welcome.visible = true;
    welcome.alpha = 0;
    this.addChild(welcome);

    // move guys
    TweenMax.from(store, 2.0, { x: SCREEN_WIDTH + store.width, ease: Power1.easeOut })
    TweenMax.from(balcony, 2.0, { x: SCREEN_WIDTH + store.width/2, ease: Power1.easeOut })
    TweenMax.to(ground1, 2.0, { x: -SCREEN_WIDTH, ease: Power1.easeOut })
    TweenMax.to(ground2, 2.0, { x: 0, ease: Power1.easeOut })
    TweenMax.from(this.credits, 2.0, { x: SCREEN_WIDTH * 2, ease: Power1.easeOut })
    TweenMax.from(blacksmithTalk, 0.5, { alpha:0, y: 350, delay:2.0, ease: Power1.easeOut })
    TweenMax.from(blacksmithIdle, 0.5, { alpha:0, y: 350, delay:2.0, ease: Power1.easeOut })
    TweenMax.to(welcome, 0.2, { alpha:1, delay:2.2, ease: Power1.easeOut })
    TweenMax.to(cloud1, 40.0, { x: -300, repeat: 10 })
    TweenMax.to(cloud2, 50.0, { x: -300, delay:3, repeat: 10 })

    this.startLabel = new PIXI.Graphics();
    this.startLabel.alpha = 0
    this.startLabel.beginFill(0xFFFF00);
    this.startLabel.lineStyle(5, 0xFF0000);
    this.startLabel.drawRect(0, 0, 300, 50);
    this.startLabel.x = SCREEN_WIDTH / 2 - this.startLabel.width/2;
    this.startLabel.y = (SCREEN_HEIGHT / 2) + 115;
    this.startLabel.interactive = true;
    this.startLabel.click = this.startLabel.tap = this.startGame.bind(this);
    this.startLabel.buttonMode = true;
    this.addChild(this.startLabel);
  }

  startGame() {
    clearInterval(window.faceChange)
    sounds.play('intro_play')
    controller.setStage(new Craft);
  }

  showAbout()
  {
    TweenMax.to(this, 0.2, { alpha:1, ease: Power1.easeOut })
  }

  hideAbout()
  {
    TweenMax.to(this, 0.2, { alpha:0, ease: Power1.easeOut })
  }

  openPortfolio()
  {
    var id = this;
    switch(id)
    {
      case "epa":
        window.open("http://epaneto.com","_blank")
      break;
      case "endel":
        window.open("http://github.com/endel","_blank")
      break;
      case "testa":
        window.open("http://mairatesta.me","_blank")
      break;
      case "tomo":
        window.open("http://sergiotomo.deviantart.com/","_blank")
      break;
    }
  }

  update() {
  }

  dispose() {
    this.epa.click = this.epa.tap = null;
    this.epa.mouseover = null
    this.epa.mouseout = null

    this.endel.click = this.endel.tap = null;
    this.endel.mouseover = null
    this.endel.mouseout = null

    this.testa.click = this.testa.tap = null;
    this.testa.mouseover = null
    this.testa.mouseout = null

    this.tomo.click = this.tomo.tap = null;
    this.tomo.mouseover = null
    this.tomo.mouseout = null

    this.startLabel.click = this.startLabel.tap = null;
    this.startLabel.mouseover = null
    this.startLabel.mouseout = null

    this.removeChildren();
  }

}
