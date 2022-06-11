import _ from 'lodash'
import type { imgMapKey } from '../service/image'
import { image } from '../service/image'
import { directionEnum } from './../types/directionEnum'
import ModelAbstract from './modelAbstract'

export default class TankModel extends ModelAbstract implements IModel {
  name = 'tank'
  protected direction: directionEnum = directionEnum.BOTTOM
  render(): void {
    this.randomDirection()
    super.draw(this.randomImage())
  }

  // 随机产生方向
  randomDirection() {
    this.direction = Object.values(directionEnum)[Math.floor(Math.random() * 4)] as directionEnum
  }

  randomImage() {
    const direction = this.name + _.upperFirst(this.direction)
    return image.get(direction as imgMapKey)!
  }
}
