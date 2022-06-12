import config from '../config'

export default abstract class ModelAbstract {
  abstract name: string
  abstract render(): void
  abstract image(): HTMLImageElement
  protected width = config.model.width
  protected height = config.model.height

  constructor(
    protected canvas: CanvasRenderingContext2D,
    public x: number,
    public y: number,
  ) {}

  protected draw() {
    this.canvas.drawImage(this.image(), this.x, this.y, config.model.width, config.model.height)
  }
}
