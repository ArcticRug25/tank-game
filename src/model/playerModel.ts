import _ from 'lodash'
import player from '../canvas/player'
import { image } from '../service/image'
import { directionEnum } from '../types/directionEnum'
import ModelAbstract from './modelAbstract'

export default class PlayerModel extends ModelAbstract implements IModel {
  public canvas: ICanvas = player
  name = 'player'
  direction: directionEnum = directionEnum.TOP
  bindEvent = false

  constructor(
    public x: number,
    public y: number,
  ) {
    super(x, y)
  }

  render(): void {
    super.draw()
    if (!this.bindEvent) {
      document.addEventListener('keydown', this.changeDirection.bind(this))
      this.bindEvent = true
    }
  }

  image(): HTMLImageElement {
    const direction = this.name + _.upperFirst(this.direction)
    return image.get(direction as any)!
  }

  changeDirection(e: KeyboardEvent) {
    switch (e.code) {
      case 'ArrowUp':
        this.direction = directionEnum.TOP
        break
      case 'ArrowDown':
        this.direction = directionEnum.BOTTOM
        break
      case 'ArrowLeft':
        this.direction = directionEnum.LEFT
        break
      case 'ArrowRight':
        this.direction = directionEnum.RIGHT
        break
    }
    this.canvas.renderModels()
  }
}
