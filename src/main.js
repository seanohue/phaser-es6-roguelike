import 'pixi'
import 'p2'
import Phaser from 'phaser'

import BootState from './states/Boot'
import SplashState from './states/Splash'
import GameState from './states/Game'
import ROT from './lib/ROT'

import {getHeight, getWidth} from './utils/DOM'

class Game extends Phaser.Game {
  constructor () {
    const docElement = document.documentElement

    const width  = getWidth(docElement)
    const height = getHeight(docElement)

    super(width, height, Phaser.CANVAS, 'content', null)

    this.state.add('Boot', BootState, false)
    this.state.add('Splash', SplashState, false)
    this.state.add('Game', GameState, false)

    this.state.start('Boot')
  }
}

window.game = new Game()
