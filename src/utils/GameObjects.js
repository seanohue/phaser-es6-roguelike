/**
 * Takes an array of Phaser game objects and anchors them to
 * the center of the game world.
 * @param {*} objects
 * @return {*} objects
 */
export function centerGameObjects (objects) {
  objects.forEach((object) => {
    object.anchor.setTo(0.5)
  })
  return objects
}
