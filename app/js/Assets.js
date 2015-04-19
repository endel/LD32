export default class Assets {

  static texturePaths = [
    'images/combiner.png',
    'images/grass.png',
    'images/elements/amarelo.png',
    'images/elements/azul.png',
    'images/elements/laranja.png',
    'images/elements/roxo.png',
    'images/elements/verde.png',
    'images/elements/vermelho.png'
  ]

  static textures = [];

  static texture(path) {
    return this.textures[ path ];
  }

  static load() {
    var numLoaded = 0,
        numTotal = this.textures.length;

    var onLoaded = function() {

    }

    for (var i=0; i<this.textures.length; i++) {
      let path = this.textures[i];
      this.textures[ path ] = PIXI.Texture.fromImage(path);
      this.textures[ path ].on('loaded', )
    }
  }

}
