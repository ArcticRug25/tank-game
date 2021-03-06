import config from '../config'
import StrawModel from '../model/strawModel'
import CanvasAbstract from './canvasAbstract'

export default new class Straw extends CanvasAbstract implements ICanvas {
  num(): number {
    return config.straw.num
  }

  Model(): ModelConstructor {
    return StrawModel
  }

  render(): void {
    super.createModels()
    super.renderModels()
  }
}('straw')
