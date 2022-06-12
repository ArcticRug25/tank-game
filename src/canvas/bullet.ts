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
    // super.createModels()
    // super.renderModels()

    setTimeout(() => {
      this.createBullet()
      super.renderModels()
    }, 100)
  }

  createBullet() {
    tank.models.forEach((tank) => {
      const isExists = this.models.some(bulletMod => bulletMod.tank === tank)
      if (!isExists)
        this.models.push(new BulletModel(tank))
    })
  }
}('bullet')
