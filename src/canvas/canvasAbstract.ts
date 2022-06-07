import config from '../config'
import Position from '../service/position'

export default abstract class CanvasAbstract {
  protected items = []
  abstract render(): void
  constructor(
    protected app = document.querySelector<HTMLDivElement>('#app')!,
    protected el = document.createElement('canvas'),
    protected canvas = el.getContext('2d')!,
  ) {
    this.createCanvas()
  }

  protected createCanvas() {
    this.el.width = config.canvas.width
    this.el.height = config.canvas.height

    this.app.insertAdjacentElement('afterbegin', this.el)
  }

  protected drawModels(num: number, Model: ModelConstructor) {
    Position.getCollection(num).forEach((position) => {
      const instance = new Model(this.canvas, position.x, position.y)
      instance.render()
    })
  }
}
