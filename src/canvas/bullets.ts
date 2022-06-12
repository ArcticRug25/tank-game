import bulletsModel from '../model/bulletsModel'
import CanvasAbstract from './canvasAbstract'

export default new class Bullets extends CanvasAbstract implements ICanvas {
  num(): number {
    return 0
  }

  Model(): ModelConstructor {
    return bulletsModel
  }

  render(): void {
    super.createModels()
    super.renderModels()
  }
}()
