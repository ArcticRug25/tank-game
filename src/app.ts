import { imgPromises } from './service/image'
import './style.scss'
import config from './config'
import straw from './canvas/straw'
import wall from './canvas/wall'
import water from './canvas/water'
import steel from './canvas/steel'
import tank from './canvas/tank'
import bullet from './canvas/bullet'
import boss from './canvas/boss'
import player from './canvas/player'
import audio from './service/audio'

const app = document.querySelector<HTMLDivElement>('#app')!
app.style.width = `${config.canvas.width}px`
app.style.height = `${config.canvas.height}px`

export default {
  isStart: false,
  state: 9,
  interval: 0,
  bootstrap() {
    app.addEventListener('click', async () => {
      await this.start()
      this.interval = setInterval(() => {
        if (!tank.models.length)
          this.state = 1
        if (!player.models.length || !boss.models.length)
          this.state = 0
        if (this.state !== 9)
          this.stop()
      }, 100)
    })
  },
  async start() {
    if (this.isStart)
      return

    audio.start()
    this.isStart = true
    app.style.backgroundImage = 'none'
    await Promise.all(imgPromises)

    straw.render()
    wall.render()
    water.render()
    steel.render()
    tank.render()
    bullet.render()
    boss.render()
    player.render()
  },
  async stop() {
    clearInterval(this.interval)
    tank.stop()
    bullet.stop()
    this.text()
  },
  text() {
    const el = document.createElement('canvas')
    el.width = config.canvas.width
    el.height = config.canvas.height
    const ctx = el.getContext('2d')!
    ctx.fillStyle = 'red'
    ctx.font = '80px CascadiaMono'
    ctx.textBaseline = 'top'
    ctx.textAlign = 'center'
    ctx.fillText(
      this.state === 1 ? '游戏胜利' : '游戏失败',
      config.canvas.width / 2,
      config.canvas.height / 2,
    )
    app.appendChild(el)
  },
}
