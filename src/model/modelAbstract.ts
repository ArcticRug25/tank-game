export default abstract class ModelAbstract {
  abstract name: string
  abstract render(): void
  abstract image(): HTMLImageElement

  constructor(
    protected canvas: CanvasRenderingContext2D,
    public x: number,
    public y: number,
  ) {}
}
