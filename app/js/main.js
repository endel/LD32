/* jshint devel:true */

import PIXI from 'pixi.js'
window.PIXI = PIXI;
PIXI.extras = {};
require('./vendor/pixi.draggable')
require('./vendor/pixi.particles')

require('./vendor/generatorRuntime') // for es6 generators, used in WaveController
require('./vendor/array.shuffle') // global shuffle method

window.Tween = require('gsap');

import EventEmitter from 'wolfy87-eventemitter';
import {Howl, Howler} from 'howler';

import GameController from './controllers/GameController'
import Loader from './screens/Loader'
import Intro from './screens/Intro';

console.log("Main...")
window.Intro = Intro;

Math.clamp = function(num, min, max) {
  return num < min ? min : (num > max ? max : num);
}

// Globals
window.SCALE_RATIO = 1;
window.DEFAULT_FONT = '20px emulogicregular'
window.LARGE_FONT = '32px emulogicregular'
window.SCREEN_WIDTH = 1136
window.SCREEN_HEIGHT = 640

// music / sound effects
window.sounds = new Howl(require('./data/sound_effects.json'));
window.soundsBackground = new Howl(require('./data/sound_effects.json'));

window.events = new EventEmitter()

window.renderer = new PIXI.WebGLRenderer(SCREEN_WIDTH, SCREEN_HEIGHT, {
  antialias: false,
  resolution: 1
})
document.body.appendChild(renderer.view);

window.controller = new GameController();
controller.setStage(new Loader)
controller.start();

window._trackEvent = function(a,b,c) {
	ga('send', 'event', a, b, c);
};
