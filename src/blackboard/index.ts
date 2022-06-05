import './style.css'
// 创建黑板画布
export class Blackboard {
  private height: number
  private width: number
  public el: HTMLCanvasElement
  private app: CanvasRenderingContext2D
  public btns: HTMLDivElement
  private bgColor: string
  private lineColor: string
  constructor() {
    this.el = document.querySelector<HTMLCanvasElement>('#canvas')!
    this.height = this.el.height
    this.width = this.el.width
    this.btns = document.createElement('div')
    this.app = this.el.getContext('2d')!
    this.bgColor = '#000'
    this.lineColor = '#fff'
    this.initCanvas()
    this.bindEvent()
  }

  private bindEvent() {
    const drawLineCb = this.drawLine.bind(this)
    this.el.addEventListener('mousedown', () => {
      this.app.beginPath()
      this.app.strokeStyle = this.lineColor
      this.el.addEventListener('mousemove', drawLineCb)

      document.addEventListener('mouseup', () => {
        this.el.removeEventListener('mousemove', drawLineCb)
      })
    })
  }

  private drawLine(e: MouseEvent) {
    this.app.lineTo(e.offsetX, e.offsetY)
    this.app.stroke()
  }

  private initCanvas() {
    this.fillColor()
    this.btns.classList.add('btns')
    this.el.insertAdjacentElement('afterend', this.btns)
  }

  public setBgColor(color: string) {
    this.bgColor = color
    this.fillColor()
    return this
  }

  public clean() {
    const el = document.createElement('button')
    el.innerText = '清屏'
    this.btns.insertAdjacentElement('afterbegin', el)

    el.addEventListener('click', () => {
      this.fillColor()
    })

    return this
  }

  private fillColor() {
    this.app.fillStyle = this.bgColor
    this.app.fillRect(0, 0, this.width, this.height)
  }

  public setLineColor() {
    const colors = ['#1abc9c', '#f1c40f', '#9b59b6', '#ecf0f1']
    const container = document.createElement('div')
    container.classList.add('color-container')
    colors.forEach((color) => {
      const div = document.createElement('div')
      div.style.cssText = `width:20px;height:20px;background-color:${color}`
      container.insertAdjacentElement('afterbegin', div)

      div.addEventListener('click', () => {
        this.lineColor = color
        this.app.lineWidth = 1
      })
    })
    this.btns.insertAdjacentElement('beforeend', container)
  }

  public erase() {
    const el = document.createElement('button')
    el.innerText = '橡皮擦'
    this.btns.insertAdjacentElement('afterbegin', el)

    el.addEventListener('click', () => {
      this.lineColor = this.bgColor
      this.app.lineWidth = 10
    })

    return this
  }

  public draw() {
    const el = document.createElement('button')
    el.innerText = '写字'
    this.btns.insertAdjacentElement('afterbegin', el)

    el.addEventListener('click', () => {
      this.lineColor = '#fff'
      this.app.lineWidth = 1
    })

    return this
  }

  public short() {
    const el = document.createElement('button')
    el.innerText = '截图'
    this.btns.insertAdjacentElement('afterbegin', el)
    const img = document.createElement('img')
    el.addEventListener('click', () => {
      img.src = this.el.toDataURL('image/jpeg')
      img.classList.add('img-short')
    })

    this.btns.insertAdjacentElement('afterend', img)

    return this
  }
}

const instance = new Blackboard()

instance.clean().erase().draw().short()
instance.setLineColor()
