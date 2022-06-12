import config from '../config'
import SteelModel from '../model/steelModel'
import CanvasAbstract from './canvasAbstract'

export default new class Steel extends CanvasAbstract implements ICanvas {
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
}('steel')
