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
  }

  protected createModels(): void {
    for (let i = 0; i < this.num(); i++) {
      const pos = position.position()
      const TankModel = this.Model()
      const tankInstance = new TankModel(this.canvas, pos.x, 0)
      this.models.push(tankInstance)
    }
  }
}

export default new Tank()
