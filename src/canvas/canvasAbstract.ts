import config from '../config'

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
    this.positionCollection(num).forEach((position) => {
      const instance = new Model(this.canvas, position.x, position.y)
      instance.render()
    })
  }

  // 批量获取唯一坐标
  protected positionCollection(num: number) {
    const collection = [] as { x: number; y: number }[]
    for (let i = 0; i < num; i++) {
      while (true) {
        const position = this.position()
        const exists = collection.some(item => item.x === position.x && item.y === position.y)
        if (!exists) {
          collection.push(position)
          break
        }
      }
    }
    return collection
  }

  protected position() {
    return {
      x: Math.floor(Math.random() * (config.canvas.width / config.model.width)) * config.model.width,
      y: Math.floor(Math.random() * (config.canvas.height / config.model.height)) * config.model.height,
    }
  }
}
