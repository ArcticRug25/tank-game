import _ from 'lodash'
import player from '../canvas/player'
import { image } from '../service/image'
import { directionEnum } from '../types/directionEnum'
import ModelAbstract from './modelAbstract'

export default class PlayerModel extends ModelAbstract implements IModel {
  public canvas: ICanvas = player
  name = 'player'
  direction: directionEnum = directionEnum.TOP

  constructor(
    public x: number,
    public y: number,
  ) {
    super(x, y)
  }

  render(): void {
    super.draw()
  }

  image(): HTMLImageElement {
    const direction = this.name + _.upperFirst(this.direction)
    return image.get(direction as any)!
  }
}
