import config from '../config'
import Position from '../service/position'

export default abstract class CanvasAbstract {
  public models: IModel[] = []
  abstract num(): number
  abstract Model(): ModelConstructor | BulletModelConstructor
  abstract render(): void
  constructor(
    protected name: string,
    protected app = document.querySelector<HTMLDivElement>('#app')!,
    protected el = document.createElement('canvas'),
    public ctx = el.getContext('2d')!,
  ) {
    this.createCanvas()
  }

  // 创建画布
  protected createCanvas() {
    this.el.width = config.canvas.width
    this.el.height = config.canvas.height
    this.el.setAttribute('name', this.name)

    // this.app.insertAdjacentElement('afterbegin', this.el)
    this.app.appendChild(this.el)
  }

  // 生成模型实例
  protected createModels() {
    Position.getCollection(this.num()).forEach((position) => {
      const Model = this.Model() as ModelConstructor
      const instance = new Model(position.x, position.y)
      this.models.push(instance)
    })
  }

  // 渲染模型到画布
  public renderModels() {
    this.models.forEach(model => model.render())
  }

  public clearRect() {
    this.ctx.clearRect(0, 0, config.canvas.width, config.canvas.height)
  }

  public removeModel(model: IModel) {
    this.models = this.models.filter(m => m !== model)
  }
}
