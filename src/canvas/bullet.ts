import config from '../config'
import BulletModel from '../model/bulletModel'
import CanvasAbstract from './canvasAbstract'
import player from './player'
import tank from './tank'

export default new class Bullet extends CanvasAbstract implements ICanvas {
  interval = 0
  num(): number {
    return 0
  }

  Model(): BulletModelConstructor {
    return BulletModel
  }

  render(): void {
    this.interval = setInterval(() => {
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

  addPlayerBullet() {
    this.models.push(new BulletModel(player.models[0]))
  }

  public stop() {
    clearInterval(this.interval)
  }
}('bullet')
