import config from '../config'
import BulletModel from '../model/bulletModel'
import CanvasAbstract from './canvasAbstract'
import tank from './tank'

export default new class Bullet extends CanvasAbstract implements ICanvas {
  num(): number {
    return 0
  }

  Model(): BulletModelConstructor {
    return BulletModel
  }

  render(): void {
    setInterval(() => {
      this.createBullet()
      this.renderModels()
    }, 100)
  }

  createBullet() {
    tank.models.forEach((tank) => {
      const isExists = this.models.some(bulletMod => bulletMod.tank === tank)
      if (!isExists)
        this.models.push(new BulletModel(tank))
    })
  }

  public renderModels(): void {
    this.ctx.clearRect(0, 0, config.canvas.width, config.canvas.height)
    super.renderModels()
  }
}('bullet')
