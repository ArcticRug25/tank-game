import config from '../config'
import SteelModel from '../model/steelModel'
import CanvasAbstract from './canvasAbstract'

class Steel extends CanvasAbstract {
  constructor() {
    super()
    super.createModels(config.straw.num, SteelModel)
  }

  render(): void {
    super.renderModels()
  }
}

export default new Steel()
