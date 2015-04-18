/* jshint devel:true */

import PIXI from 'pixi.js'
window.PIXI = PIXI;

require('./vendor/pixi.draggable')

Math.clamp = function(num, min, max) {
  return num < min ? min : (num > max ? max : num);
}

window.SCALE_RATIO = 2;

import GameController from './GameController'
import Intro from './Intro'

window.renderer = new PIXI.WebGLRenderer(window.innerWidth, window.innerHeight, {
  antialias: false,
  resolution: SCALE_RATIO
})
document.body.appendChild(renderer.view);

window.controller = new GameController();
controller.setStage(new Intro)
controller.start();
