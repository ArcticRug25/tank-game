import config from '../config'
import WallModel from '../model/wallModel'
import CanvasAbstract from './canvasAbstract'

class Wall extends CanvasAbstract {
  constructor() {
    super()
    super.createModels(config.straw.num, WallModel)
  }

  render(): void {
    super.renderModels()
  }
}

export default new Wall()
