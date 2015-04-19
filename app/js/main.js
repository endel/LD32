/* jshint devel:true */

import PIXI from 'pixi.js'
window.PIXI = PIXI;
require('./vendor/pixi.draggable')

Math.clamp = function(num, min, max) {
  return num < min ? min : (num > max ? max : num);
}

// Globals
window.SCALE_RATIO = 1;
window.DEFAULT_FONT = '20px emulogicregular'
window.LARGE_FONT = '32px emulogicregular'
window.SCREEN_WIDTH = 1136
window.SCREEN_HEIGHT = 640

import GameController from './GameController'
import Intro from './Intro'

window.renderer = new PIXI.WebGLRenderer(SCREEN_WIDTH, SCREEN_HEIGHT, {
  antialias: false,
  resolution: 1
})
document.body.appendChild(renderer.view);

window.controller = new GameController();
controller.setStage(new Intro)
controller.start();
