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
    }
    
    var credits = new PIXI.Sprite(PIXI.Texture.fromFrame("homecredits.png"));
    credits.anchor.x = 0.5;
    credits.x = SCREEN_WIDTH/2;
    credits.y = SCREEN_HEIGHT - 60;
    this.addChild(credits);

    var epa = new PIXI.Graphics();
    epa.alpha = 0
    epa.beginFill(0xFFFF00);
    epa.lineStyle(5, 0xFF0000);
    epa.drawRect(0, 0, 200, 50);
    epa.x = 60;
    epa.y = SCREEN_HEIGHT - 60;
    epa.interactive = true;
    epa.buttonMode = true;
    epa.click = epa.tap = this.openPortfolio.bind("epa");
    this.addChild(epa);

    var epaabout = new PIXI.Sprite(PIXI.Texture.fromFrame("aboutGD.png"));
    epaabout.interactive = true;
    epaabout.anchor.x = 0;
    epaabout.anchor.y = 1
    epaabout.x = epa.x;
    epaabout.y = SCREEN_HEIGHT - 70;
    epaabout.alpha = 0;
    this.addChild(epaabout);

    epa.mouseover = this.showAbout.bind(epaabout);
    epa.mouseout = this.hideAbout.bind(epaabout);


    var endel = new PIXI.Graphics();
    endel.alpha = 0
    endel.beginFill(0xFFFF00);
    endel.lineStyle(5, 0xFF0000);
    endel.drawRect(0, 0, 200, 50);
    endel.x = 320;
    endel.y = SCREEN_HEIGHT - 60;
    endel.interactive = true;
    endel.buttonMode = true;
    endel.click = endel.tap = this.openPortfolio.bind("endel");
    this.addChild(endel);

    var endelabout = new PIXI.Sprite(PIXI.Texture.fromFrame("aboutProg.png"));
    endelabout.interactive = true;
    endelabout.anchor.x = 0;
    endelabout.anchor.y = 1
    endelabout.x = endel.x;
    endelabout.y = SCREEN_HEIGHT - 70;
    endelabout.alpha = 0;
    this.addChild(endelabout);

    endel.mouseover = this.showAbout.bind(endelabout);
    endel.mouseout = this.hideAbout.bind(endelabout);

    var testa = new PIXI.Graphics();
    testa.alpha = 0
    testa.beginFill(0xFFFF00);
    testa.lineStyle(5, 0xFF0000);
    testa.drawRect(0, 0, 250, 50);
    testa.x = 550;
    testa.y = SCREEN_HEIGHT - 60;
    testa.interactive = true;
    testa.buttonMode = true;
    testa.click = testa.tap = this.openPortfolio.bind("testa");
    this.addChild(testa);

    var testaabout = new PIXI.Sprite(PIXI.Texture.fromFrame("aboutGD.png"));
    testaabout.interactive = true;
    testaabout.anchor.x = 0;
    testaabout.anchor.y = 1
    testaabout.x = testa.x + 40;
    testaabout.y = SCREEN_HEIGHT - 70;
    testaabout.alpha = 0;
    this.addChild(testaabout);

    testa.mouseover = this.showAbout.bind(testaabout);
    testa.mouseout = this.hideAbout.bind(testaabout);

    var tomo = new PIXI.Graphics();
    tomo.alpha = 0
    tomo.beginFill(0xFFFF00);
    tomo.lineStyle(5, 0xFF0000);
    tomo.drawRect(0, 0, 200, 50);
    tomo.x = 860;
    tomo.y = SCREEN_HEIGHT - 60;
    tomo.interactive = true;
    tomo.buttonMode = true;
    tomo.click = tomo.tap = this.openPortfolio.bind("tomo");
    this.addChild(tomo);


    var tomoabout = new PIXI.Sprite(PIXI.Texture.fromFrame("aboutArt.png"));
    tomoabout.interactive = true;
    tomoabout.anchor.x = 0;
    tomoabout.anchor.y = 1
    tomoabout.x = tomo.x;
    tomoabout.y = SCREEN_HEIGHT - 70;
    tomoabout.alpha = 0;
    this.addChild(tomoabout);

    tomo.mouseover = this.showAbout.bind(tomoabout);
    tomo.mouseout = this.hideAbout.bind(tomoabout);


    // move guys
    TweenMax.from(store, 2.0, { x: SCREEN_WIDTH + store.width, ease: Power1.easeOut })
    TweenMax.from(balcony, 2.0, { x: SCREEN_WIDTH + store.width/2, ease: Power1.easeOut })
    TweenMax.to(ground1, 2.0, { x: -SCREEN_WIDTH, ease: Power1.easeOut })
    TweenMax.to(ground2, 2.0, { x: 0, ease: Power1.easeOut })
    TweenMax.from(credits, 2.0, { x: SCREEN_WIDTH * 2, ease: Power1.easeOut })
    TweenMax.from(blacksmithTalk, 0.5, { alpha:0, y: 350, delay:2.0, ease: Power1.easeOut })
    TweenMax.from(blacksmithIdle, 0.5, { alpha:0, y: 350, delay:2.0, ease: Power1.easeOut })

    TweenMax.to(cloud1, 40.0, { x: -300, repeat: 10 })
    TweenMax.to(cloud2, 50.0, { x: -300, delay:3, repeat: 10 })

    var startLabel = new PIXI.Graphics();
    startLabel.alpha = 0
    startLabel.beginFill(0xFFFF00);
    startLabel.lineStyle(5, 0xFF0000);
    startLabel.drawRect(0, 0, 300, 50);
    startLabel.x = SCREEN_WIDTH / 2 - startLabel.width/2;
    startLabel.y = (SCREEN_HEIGHT / 2) + 115;
    startLabel.interactive = true;
    startLabel.click = startLabel.tap = this.startGame.bind(this);
    this.addChild(startLabel);
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

}
