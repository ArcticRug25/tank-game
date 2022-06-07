import config from '../config'

interface positionType { x: number; y: number }

class Position {
  collection: positionType[] = []
  // 批量获取唯一坐标
  public getCollection(num: number) {
    const collection = [] as positionType[]
    for (let i = 0; i < num; i++) {
      while (true) {
        const position = this.position()
        const exists = collection.some(item => item.x === position.x && item.y === position.y)
        if (!exists) {
          collection.push(position)
          this.collection.push(position)
          break
        }
      }
    }
    return collection
  }

  public position() {
    return {
      x: Math.floor(Math.random() * (config.canvas.width / config.model.width)) * config.model.width,
      y: Math.floor(Math.random() * (config.canvas.height / config.model.height - 5)) * config.model.height + config.model.height * 2,
    }
  }
}

export default new Position()
