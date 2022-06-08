import config from '../config'
import WaterModel from '../model/waterModel'
import CanvasAbstract from './canvasAbstract'

class Water extends CanvasAbstract {
  constructor() {
    super()
    super.createModels(config.straw.num, WaterModel)
  }

  render(): void {
    super.renderModels()
  }
}

export default new Water()
