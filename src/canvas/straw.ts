import config from '../config'
import StrawModel from '../model/strawModel'
import CanvasAbstract from './canvasAbstract'

class Straw extends CanvasAbstract {
  constructor() {
    super()
    super.createModels(config.straw.num, StrawModel)
  }

  render(): void {
    super.renderModels()
  }
}

export default new Straw()
