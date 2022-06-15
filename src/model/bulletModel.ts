import boss from '../canvas/boss'
import bullet from '../canvas/bullet'
import player from '../canvas/player'
import steel from '../canvas/steel'
import tank from '../canvas/tank'
import wall from '../canvas/wall'
import config from '../config'
import { image } from '../service/image'
import { directionEnum } from '../types/directionEnum'
import { isCanvasTouch, isModelTouch } from '../utils'
import ModelAbstract from './modelAbstract'

export default class bulletModel extends ModelAbstract implements IModel {
  public canvas: ICanvas = bullet
  name = 'bullet'
  public direction: directionEnum
  constructor(public tank: IModel) {
    super(tank.x + config.model.width / 2, tank.y + config.model.height / 2)
    this.direction = this.tank.direction as directionEnum
  }

  render(): void {
    let x = this.x
    let y = this.y
    const step = this.tank.name === 'player' ? 10 : 5
    switch (this.direction) {
      case directionEnum.TOP:
        y -= step
        break
      case directionEnum.RIGHT:
        x += step
        break
      case directionEnum.BOTTOM:
        y += step
        break
      case directionEnum.LEFT:
        x -= step
        break
    }
    // 碰撞检测
    const touchModel = isModelTouch(
      x,
      y,
      config.bullet.width,
      config.bullet.height,
      [...wall.models, ...steel.models, ...boss.models, ...tank.models, ...player.models],
    )
    if (isCanvasTouch(x, y, config.bullet.width, config.bullet.height)) {
      this.destroy()
    }
    else if (touchModel && touchModel.name !== this.tank.name) {
      this.destroy()
      if (touchModel.name !== 'steel')
        touchModel.destroy()
      this.blast(touchModel)
    }
    else {
      this.x = x
      this.y = y
      this.draw()
    }
  }

  image(): HTMLImageElement {
    return image.get('bullet')!
  }

  protected draw() {
    this.canvas.ctx.drawImage(this.image(), this.x, this.y, config.bullet.width, config.bullet.height)
  }
}
