import config from '../config'

export type imgMapKey = keyof typeof config.images

export const image = new Map<imgMapKey, HTMLImageElement>()

export const imgPromises = Object.entries(config.images).map(([key, value]) => {
  return new Promise((resolve) => {
    const img = document.createElement('img')
    img.src = value
    img.onload = () => {
      image.set(key as imgMapKey, img)
      resolve(img)
    }
  })
})
