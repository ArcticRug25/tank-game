import bullet from '../canvas/bullet'
import config from '../config'
import { image } from '../service/image'
import { directionEnum } from '../types/directionEnum'
import { isCanvasTouch } from '../utils'
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
    switch (this.direction) {
      case directionEnum.TOP:
        y -= 2
        break
      case directionEnum.RIGHT:
        x += 2
        break
      case directionEnum.BOTTOM:
        y += 2
        break
      case directionEnum.LEFT:
        x -= 2
        break
    }
    // 碰撞检测
    if (isCanvasTouch(x, y, 2, 2)) {
      this.destory()
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
