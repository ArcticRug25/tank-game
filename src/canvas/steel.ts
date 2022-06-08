import config from '../config'
import SteelModel from '../model/steelModel'
import CanvasAbstract from './canvasAbstract'

class Steel extends CanvasAbstract {
  num(): number {
    return config.steel.num
  }

  Model(): ModelConstructor {
    return SteelModel
  }

  render(): void {
    super.createModels()
    super.renderModels()
  }
}

export default new Steel()
