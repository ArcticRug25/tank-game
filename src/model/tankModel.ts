import _ from 'lodash'
import type { imgMapKey } from '../service/image'
import { image } from '../service/image'
import { directionEnum } from './../types/directionEnum'
import ModelAbstract from './modelAbstract'

export default class TankModel extends ModelAbstract implements IModel {
  name = 'tank'
  protected direction: directionEnum = directionEnum.BOTTOM

  constructor(
    protected canvas: CanvasRenderingContext2D,
    public x: number,
    public y: number,
  ) {
    super(canvas, x, y)
    this.randomDirection()
  }

  render(): void {
    this.move()
  }

  protected move() {
    switch (this.direction) {
      case directionEnum.TOP:
        this.y -= 2
        break
      case directionEnum.RIGHT:
        this.x += 2
        break
      case directionEnum.BOTTOM:
        this.y += 2
        break
      case directionEnum.LEFT:
        this.x -= 2
        break
    }
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
