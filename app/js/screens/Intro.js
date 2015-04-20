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
    cloud1.x = SCREEN_WIDTH/2-100;
    this.addChild(cloud1);

    var cloud2 = new PIXI.Sprite(PIXI.Texture.fromFrame("homecloud2.png"));
    cloud2.y = 50;
    cloud2.x = SCREEN_WIDTH-100;
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
    


    // move guys
    TweenMax.from(store, 2.0, { x: SCREEN_WIDTH + store.width, ease: Power1.easeOut })
    TweenMax.from(balcony, 2.0, { x: SCREEN_WIDTH + store.width/2, ease: Power1.easeOut })
    TweenMax.to(ground1, 2.0, { x: -SCREEN_WIDTH, ease: Power1.easeOut })
    TweenMax.to(ground2, 2.0, { x: 0, ease: Power1.easeOut })
    TweenMax.from(blacksmithTalk, 0.5, { alpha:0, y: 350, delay:2.0, ease: Power1.easeOut })
    TweenMax.from(blacksmithIdle, 0.5, { alpha:0, y: 350, delay:2.0, ease: Power1.easeOut })

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

  update() {
  }

}
