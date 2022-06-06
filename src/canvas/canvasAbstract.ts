import config from '../config'

export default abstract class CanvasAbstract {
  protected items = []
  constructor(
    protected app = document.querySelector<HTMLDivElement>('#app')!,
    protected el = document.createElement('canvas'),
    protected canvas = el.getContext('2d')!,
  ) {
    this.createCanvas()
    this.drawModels()
  }

  protected createCanvas() {
    this.el.width = config.canvas.width
    this.el.height = config.canvas.height

    this.app.insertAdjacentElement('afterbegin', this.el)
  }

  protected drawModels() {
    // const img = document.createElement('img')
    // img.src = strawImgUrl
    // // 图片加载是异步的，需要等加载完成再渲染
    // img.addEventListener('load', () => {
    //   const position = this.position()
    //   this.canvas.drawImage(img, position.x, position.y, config.model.width, config.model.height)
    // })
  }

  protected position() {
    return {
      x: 20,
      y: 30,
    }
  }
}
