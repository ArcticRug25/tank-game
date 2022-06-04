const el = document.querySelector<HTMLCanvasElement>('#canvas')!
const app = el.getContext('2d')!

app.fillStyle = '#000'
app.fillRect(0, 0, 300, 300)

app.fillStyle = '#f1c40f'
app.fillRect(el.width / 2 - 50, el.height / 2 - 50, 100, 100)
