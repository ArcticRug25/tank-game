import _ from 'lodash'
import player from '../canvas/player'
import { image } from '../service/image'
import { directionEnum } from '../types/directionEnum'
import { isCanvasTouch, isModelTouch } from '../utils'
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
    let x = this.x
    let y = this.y
    switch (e.code) {
      case 'ArrowUp':
        this.direction = directionEnum.TOP
        y -= 5
        break
      case 'ArrowDown':
        this.direction = directionEnum.BOTTOM
        y += 5
        break
      case 'ArrowLeft':
        this.direction = directionEnum.LEFT
        x -= 5
        break
      case 'ArrowRight':
        this.direction = directionEnum.RIGHT
        x += 5
        break
    }
    this.canvas.renderModels()
    if (isCanvasTouch(x, y) || isModelTouch(x, y))
      return

    this.x = x
    this.y = y
    this.canvas.clearRect()
    this.canvas.renderModels()
  }
}
