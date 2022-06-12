import config from '../config'
import TankModel from '../model/tankModel'
import position from '../service/position'
import CanvasAbstract from './canvasAbstract'

export default new class Tank extends CanvasAbstract implements ICanvas {
  num(): number {
    return config.tank.num
  }

  Model(): ModelConstructor {
    return TankModel
  }

  render(): void {
    this.createModels()
    super.renderModels()

    setInterval(() => {
      this.renderModels()
    }, config.tankMoveTime)
  }

  protected createModels(): void {
    for (let i = 0; i < this.num(); i++) {
      const pos = position.position()
      const TankModel = this.Model()
      const tankInstance = new TankModel(pos.x, 0)
      this.models.push(tankInstance)
    }
  }

  protected renderModels(): void {
    this.ctx.clearRect(0, 0, config.canvas.width, config.canvas.height)
    super.renderModels()
  }
}('tank')

