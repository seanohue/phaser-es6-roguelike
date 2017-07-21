import config from '../config'

/**
 * Takes a DOM element and returns its height
 * @param {Element} DOMElement
 * @return {number} height
*/
export function getHeight(DOMElement) {
  return docElement.clientHeight > config.gameHeight
    ? config.gameHeight
    : docElement.clientHeight
}

/**
 * Takes a DOM element and returns its width
 * @param {Element} DOMElement
 * @return {number} width
*/
export function getWidth(DOMElement) {
  return docElement.clientWidth > config.gameWidth
    ? config.gameWidth
    : docElement.clientWidth
}