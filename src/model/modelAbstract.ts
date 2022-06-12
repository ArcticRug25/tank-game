import config from '../config'

export default abstract class ModelAbstract {
  protected abstract name: string
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

  protected destory() {
    this.canvas.removeModel(this)
  }
}
