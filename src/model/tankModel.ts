import _ from 'lodash'
import tank from '../canvas/tank'
import type { imgMapKey } from '../service/image'
import { image } from '../service/image'
import { isTouch } from '../utils'
import { directionEnum } from './../types/directionEnum'
import ModelAbstract from './modelAbstract'

export default class TankModel extends ModelAbstract implements IModel {
  public canvas: ICanvas = tank
  name = 'tank'
  public direction: directionEnum = directionEnum.BOTTOM

  constructor(
    public x: number,
    public y: number,
  ) {
    super(x, y)
    this.randomDirection()
  }

  render(): void {
    this.move()
    // Math.floor(Math.random() * 5) === 1
    if (_.random(20) === 1)
      this.direction = directionEnum.BOTTOM
  }

  protected move() {
    while (true) {
      let x = this.x
      let y = this.y
      switch (this.direction) {
        case directionEnum.TOP:
          y--
          break
        case directionEnum.RIGHT:
          x++
          break
        case directionEnum.BOTTOM:
          y++
          break
        case directionEnum.LEFT:
          x--
          break
      }

      if (isTouch(x, y)) {
        this.randomDirection()
      }
      else {
        this.x = x
        this.y = y
        break
      }
    }
    super.draw()
  }

  image() {
    const direction = this.name + _.upperFirst(this.direction)
    return image.get(direction as imgMapKey)!
  }

  // 随机产生方向
  protected randomDirection() {
    this.direction = Object.values(directionEnum)[Math.floor(Math.random() * 4)] as directionEnum
  }
}
