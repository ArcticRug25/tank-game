import config from '../config'

export default abstract class ModelAbstract {
  public abstract name: string
  public abstract canvas: ICanvas
  abstract render(): void
  abstract image(): HTMLImageElement
  public width = config.model.width
  public height = config.model.height

  constructor(
    public x: number,
    public y: number,
  ) {}

  protected draw() {
    this.canvas.ctx.drawImage(this.image(), this.x, this.y, config.model.width, config.model.height)
  }

  public destroy() {
    this.canvas.removeModel(this)
    this.canvas.clearRect()
    this.canvas.renderModels()
  }

  protected blast(model: IModel) {
    Array(...Array(8).keys()).reduce((promise, val) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const img = new Image()
          img.src = `/src/static/images/blasts/blast${val}.gif`
          img.onload = () => {
            this.canvas.ctx.drawImage(img, model.x, model.y, model.width, model.height)
            resolve(promise)
          }
        }, 100)
      })
    }, Promise.resolve)
  }
}
