import './style.css'
// const el = document.querySelector<HTMLCanvasElement>('#canvas')!
// const app = el.getContext('2d')!

// app.fillStyle = '#000'
// app.fillRect(0, 0, 300, 300)

// app.fillStyle = '#f1c40f'
// app.fillRect(el.width / 2 - 50, el.height / 2 - 50, 100, 100)

// 绘制线条
// app.strokeStyle = '#8e44ad'
// app.lineWidth = 30
// app.lineJoin = 'round'
// app.strokeRect(50, 50, 200, 200)

// 绘制圆形
// // app.fillStyle = '#8e44ad'
// app.strokeStyle = 'red'
// app.lineWidth = 20
// app.arc(100, 100, 50, 0, 2 * Math.PI)
// app.stroke()

// 绘制多边形
// app.beginPath()
// app.moveTo(el.width / 2, 10)
// app.lineTo(el.width, 250)
// app.lineTo(10, 250)
// app.closePath()
// app.strokeStyle = '#e74c3c'
// app.lineWidth = 2
// app.stroke()

// 渐变色
// const gradient = app.createLinearGradient(0, 0, 300, 300)
// gradient.addColorStop(0, '#16a085')
// gradient.addColorStop(0.5, '#e67e22')
// gradient.addColorStop(1, '#9b59b6')
// app.strokeStyle = gradient
// app.lineWidth = 50
// app.lineJoin = 'round'
// app.stroke()
// app.strokeRect(50, 50, 200, 200)

// 文字处理
// app.fillStyle = '#34495e'
// app.fillRect(0, 0, el.width, el.height)
// app.font = '60px SourceHanSansSC-Normal'
// // app.fillStyle = 'white'
// app.strokeStyle = 'white'
// app.lineWidth = 2
// app.textBaseline = 'top'
// app.strokeText('Tank-Game', 50, 0)

// 图片贴图使用
// const img = document.createElement('img')
// img.src = '../images/965225f1apcdf02c8d85c7993cd87a5d.JPG'
// img.onload = () => {
//   const pattern = app.createPattern(img, 'repeat')!
//   app.fillStyle = pattern
//   app.fillRect(0, 0, 300, 300)
// }

// 绘制图片
// app.fillStyle = '#000'
// app.fillRect(0, 0, el.width, el.height)
// const img = document.createElement('img')
// img.src = './images/965225f1apcdf02c8d85c7993cd87a5d.JPG'
// img.onload = () => {
//   const ratio = scale(img, el)
//   el.width = img.naturalWidth * ratio
//   el.height = img.naturalHeight * ratio
//   app.drawImage(img, 0, 0, el.width, el.height)
// }

// function scale(img: HTMLImageElement, el: HTMLCanvasElement) {
//   return Math.min(el.width / img.naturalWidth, el.height / img.naturalHeight)
// }

// 绘制随机色块
// app.fillStyle = '#000'
// app.rect(0, 0, 300, 300)

// // for (let i = 0; i < 2000; i++) {
// //   app.fillStyle = 'white'
// //   app.fillRect(Math.random() * el.width, Math.random() * el.height, 5, 5)
// // }

// for (let i = 0; i < 20; i++) {
//   app.beginPath()
//   app.fillStyle = ['#1abc9c', '#27ae60', '#2980b9', '#8e44ad', '#e67e22', '#e74c3c'].sort(() => (Math.floor(Math.random() * 2) ? 1 : -1))[0]
//   app.arc(Math.random() * el.width, Math.random() * el.height, 5 + Math.random() * 10, 0, 2 * Math.PI)
//   app.fill()
// }

