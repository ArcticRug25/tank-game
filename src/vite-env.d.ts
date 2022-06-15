/// <reference types="vite/client" />

interface ModelConstructor {
  new (x: number, y: number): IModel
}

interface BulletModelConstructor {
  new (tank: IModel): IModel
}

interface IModel {
  render(): void
  x: number
  y: number
  width: number
  height: number
  image(): HTMLImageElement
  tank?: IModel
  direction?: string
  destroy(): void
  name: string
}

interface ICanvas {
  Model(): ModelConstructor | BulletModelConstructor
  num(): number
  ctx: CanvasRenderingContext2D
  removeModel(model: IModel): void
  renderModels(): void
  clearRect(): void
  stop?(): void
}
