/* globals __DEV__ */
import Phaser from 'phaser'
import Mushroom from '../sprites/Mushroom'

export default class extends Phaser.State {
  init () {}
  preload () {}

  create () {
    this.loadBanner()

    this.mushroom = new Mushroom({
      game: this.game,
      x: this.world.centerX,
      y: this.world.centerY,
      asset: 'mushroom'
    })

    this.game.add.existing(this.mushroom)
  }

  render () {
    if (__DEV__) {
      this.game.debug.spriteInfo(this.mushroom, 32, 32)
    }
  }

  loadBanner () {
    const bannerText = 'Phaser + ES6 + Webpack'
    const banner = this.configureBanner(
      this.addBannerText(bannerText)
    )
    if (__DEV__) {
      console.log('Loading Banner: ', banner)
    }
  }

  addBannerText(bannerText) {
    return this.add.text(
      this.world.centerX,
      this.game.height - 80,
      bannerText
    )
  }

  configureBanner(banner) {
    banner.font     = 'Bangers'
    banner.fontSize = 40
    banner.fill     = '#77BFA3'
    banner.smoothed = false
    banner.padding.set(10, 16)
    banner.anchor.setTo(0.5)
    return banner
  }
}
