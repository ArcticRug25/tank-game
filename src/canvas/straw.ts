import config from '../config'
import StrawModel from '../model/strawModel'
import CanvasAbstract from './canvasAbstract'

class Straw extends CanvasAbstract {
  render(): void {
    super.drawModels(config.straw.num, StrawModel)
  }
}

export default new Straw()
