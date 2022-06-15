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

const app = document.querySelector<HTMLDivElement>('#app')!
app.style.width = `${config.canvas.width}px`
app.style.height = `${config.canvas.height}px`

export default {
  isStart: false,
  bootstrap() {
    app.addEventListener('click', this.start.bind(this))
  },
  async start() {
    if (this.isStart)
      return

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

  },
}