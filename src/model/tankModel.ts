import { image } from '../service/image'
import { directionEnum } from './../types/directionEnum'
import ModelAbstract from './modelAbstract'

export default class TankModel extends ModelAbstract implements IModel {
  protected direction: directionEnum = directionEnum.BOTTOM
  render(): void {
    this.randomDirection()
    super.draw(this.randomImage())
  }

  // 随机产生方向
  randomDirection() {
    this.direction = Object.keys(directionEnum)[Math.floor(Math.random() * 4)] as directionEnum
  }

  randomImage() {
    return image.get('tankBottom')!
  }
}
