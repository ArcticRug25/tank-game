import config from '../config'
import TankModel from '../model/tankModel'
import position from '../service/position'
import CanvasAbstract from './canvasAbstract'

export class Tank extends CanvasAbstract implements ICanvas {
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
    }, 50)
  }

  protected createModels(): void {
    for (let i = 0; i < this.num(); i++) {
      const pos = position.position()
      const TankModel = this.Model()
      const tankInstance = new TankModel(this.canvas, pos.x, 0)
      this.models.push(tankInstance)
    }
  }

  protected renderModels(): void {
    this.canvas.clearRect(0, 0, config.canvas.width, config.canvas.height)
    this.models.forEach((model) => {
      model.render()
      this.canvas.drawImage(model.image(), model.x, model.y, config.model.width, config.model.height)
    })
  }
}

export default new Tank()
