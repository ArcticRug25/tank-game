import config from '../config'
import WaterModel from '../model/waterModel'
import CanvasAbstract from './canvasAbstract'

class Water extends CanvasAbstract implements ICanvas {
  num(): number {
    return config.water.num
  }

  Model(): ModelConstructor {
    return WaterModel
  }

  render(): void {
    super.createModels()
    super.renderModels()
  }
}

export default new Water('water')
