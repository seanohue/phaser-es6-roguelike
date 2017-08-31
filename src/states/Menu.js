/* globals __DEV__ */
import Phaser from 'phaser'
import Mushroom from '../sprites/Mushroom'

export default class MenuState extends Phaser.State {
  init () {
    this.menuItems = []
  }

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
    this.loadMenu()
  }

  render () {
    if (__DEV__) {
      this.game.debug.spriteInfo(this.mushroom, 32, 32)
    }
  }

  loadBanner () {
    const bannerText = 'Roguelike ES6-Phaser-Webpack'
    const banner = this.configureBanner(
      this.addBannerText(bannerText)
    )
    if (__DEV__) {
      console.log('Loading Banner: ', banner)
    }
  }

  loadMenu () {
    const menuItems = [
      {
        label: 'Start Game',
        action () {}
      }, {
        label: 'Quit',
        action () {}
      }
    ]
    this.addMenuItems(menuItems)
    this.renderMenuItems()
  }

  addMenuItems(menuItems) {
    const isValidMenuItem = item =>
      typeof item.label === 'string' &&
      typeof item.action === 'function'

    const items = [].concat(menuItems)

    if (menuItems.every(isValidMenuItem)) {
      this.menuItems = this.menuItems.concat(menuItems)
    } else {
      throw new TypeError(
        'Menu Items must be an object, or an array of objects, each with a label and action.\nInstead, we have: ' + JSON.stringify(menuItems)
      )
    }
  }

  renderMenuItems () {
    this.menuItems.forEach(this.renderMenuItem.bind(this))
  }

  renderMenuItem (item, index) {
    const marginTop = 80 + (index * 36)
    const labelWidth = 24 * item.label.length;
    // TODO: Actually do the dang thing.
    const text = this.add.text(
      this.world.centerX - (labelWidth / 2),
      marginTop,
      item.label
    )

    text.anchor.set(0.5)

    console.log(text.events.onInputOver.add((text) => this.hover(item, text), text));
    text.events.onInputOut.add((text) => this.unhover(item, text), text);

    text.events.onInputDown.add((text) => this.click(item, text), text);
    // text.events.onInputUp.add(up, this);
  }

  hover(text) {
    console.log('hovering', text)
  }

  unhover(text) {}

  click(item, text) {
    console.log('Selected', item, text);
    item.action();
  }

  addBannerText (bannerText) {
    return this.add.text(
      this.world.centerX,
      this.game.height - 20,
      bannerText
    )
  }

  configureBanner (banner) {
    banner.font = 'Bangers'
    banner.fontSize = 40
    banner.fill = '#77BFA3'
    banner.smoothed = false
    banner.padding.set(10, 16)
    banner.anchor.setTo(0.5)
    return banner
  }
}
