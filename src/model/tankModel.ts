import _ from 'lodash'
import config from '../config'
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

      if (this.isTouch(x, y)) {
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

  // 碰撞检测
  protected isTouch(x: number, y: number): boolean {
    if (x < 0 || x + this.width > config.canvas.width || y < 0 || y + this.height > config.canvas.height)
      return true
    return false
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
