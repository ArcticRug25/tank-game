import config from '../config'
import BossModel from '../model/bossModel'
import CanvasAbstract from './canvasAbstract'

export default new class Boss extends CanvasAbstract implements ICanvas {
  num(): number {
    return 0
  }

  Model(): ModelConstructor {
    return BossModel
  }

  render(): void {
    super.createModels()
    this.createBoss()
    super.renderModels()
  }

  createBoss() {
    [{ x: config.canvas.width / 2, y: config.canvas.height - config.model.height }].forEach((position) => {
      const BossModel = this.Model() as ModelConstructor
      const instance = new BossModel(position.x, position.y)
      this.models.push(instance)
    })
  }
}('boss')
