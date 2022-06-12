import bulletModel from '../model/bulletModel'
import CanvasAbstract from './canvasAbstract'

export default new class Bullet extends CanvasAbstract implements ICanvas {
  num(): number {
    return 0
  }

  Model(): ModelConstructor {
    return bulletModel
  }

  render(): void {
    super.createModels()
    super.renderModels()
  }
}()
