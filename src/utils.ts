import steel from './canvas/steel'
import wall from './canvas/wall'
import config from './config'

export function isModelTouch(
  x: number,
  y: number,
  width = config.model.width,
  height = config.model.height,
  untouchableModels = [...wall.models, ...steel.models],
): IModel | undefined {
  return untouchableModels.find((model) => {
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
