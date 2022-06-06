import { image, imgPromises } from './service/image'
import './style.scss'
import config from './config'
import './canvas/straw'

const app = document.querySelector<HTMLDivElement>('#app')!
app.style.width = `${config.canvas.width}px`
app.style.height = `${config.canvas.height}px`

async function bootStrap() {
  await Promise.all(imgPromises)
  image.get('straw')
}

bootStrap()
