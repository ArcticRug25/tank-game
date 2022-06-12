import config from '../config'
import WallModel from '../model/wallModel'
import CanvasAbstract from './canvasAbstract'

class Wall extends CanvasAbstract implements ICanvas {
  num(): number {
    return config.wall.num
  }

  Model(): ModelConstructor {
    return WallModel
  }

  render(): void {
    super.createModels()
    super.renderModels()
  }
}

export default new Wall('wall')
