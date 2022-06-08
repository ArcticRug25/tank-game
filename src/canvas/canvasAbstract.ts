import config from '../config'
import Position from '../service/position'

export default abstract class CanvasAbstract {
  protected models: IModel[] = []
  protected items = []
  abstract render(): void
  constructor(
    protected app = document.querySelector<HTMLDivElement>('#app')!,
    protected el = document.createElement('canvas'),
    protected canvas = el.getContext('2d')!,
  ) {
    this.createCanvas()
  }

  // 创建画布
  protected createCanvas() {
    this.el.width = config.canvas.width
    this.el.height = config.canvas.height

    this.app.insertAdjacentElement('afterbegin', this.el)
  }

  // 生成模型实例
  protected createModels(num: number, Model: ModelConstructor) {
    Position.getCollection(num).forEach((position) => {
      const instance = new Model(this.canvas, position.x, position.y)
      this.models.push(instance)
    })
  }

  // 渲染模型到画布
  protected renderModels() {
    this.models.forEach(model => model.render())
  }
}
