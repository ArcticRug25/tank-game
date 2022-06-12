import steel from './canvas/steel'
import wall from './canvas/wall'
import water from './canvas/water'
import config from './config'

export function isTouch(
  x: number,
  y: number,
  width = config.model.width,
  height = config.model.height,
  untouchableModels = [...water.models, ...wall.models, ...steel.models],
): boolean {
  const isTouchCanvas = isCanvasTouch(x, y)
  if (isTouchCanvas)
    return true

  return untouchableModels.some((model) => {
    const state
      = x + width <= model.x
      || x >= model.x + model.width
      || y + height <= model.y
      || y >= model.y + model.height

    return !state
  })
}

export function isCanvasTouch(
  x: number,
  y: number,
  width = config.model.width,
  height = config.model.height,
): boolean {
  return (x < 0 || x + width > config.canvas.width || y < 0 || y + height > config.canvas.height)
}
