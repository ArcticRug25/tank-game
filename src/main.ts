import { imgPromises } from './service/image'
import './style.scss'
import config from './config'
import straw from './canvas/straw'
import wall from './canvas/wall'
import water from './canvas/water'
import steel from './canvas/steel'
import tank from './canvas/tank'
import bullets from './canvas/bullets'

const app = document.querySelector<HTMLDivElement>('#app')!
app.style.width = `${config.canvas.width}px`
app.style.height = `${config.canvas.height}px`

async function bootStrap() {
  await Promise.all(imgPromises)

  straw.render()
  wall.render()
  water.render()
  steel.render()
  tank.render()
  bullets.render()
}

bootStrap()
