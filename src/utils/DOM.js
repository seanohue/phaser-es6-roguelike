import config from '../config'

/**
 * Takes a DOM element and returns its height
 * @param {Element} docElement
 * @return {number} height
*/
export function getHeight (docElement) {
  return docElement.clientHeight > config.gameHeight
    ? config.gameHeight
    : docElement.clientHeight
}

/**
 * Takes a DOM element and returns its width
 * @param {Element} docElement
 * @return {number} width
*/
export function getWidth (docElement) {
  return docElement.clientWidth > config.gameWidth
    ? config.gameWidth
    : docElement.clientWidth
}
