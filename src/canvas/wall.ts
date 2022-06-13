import config from '../config'
import WallModel from '../model/wallModel'
import CanvasAbstract from './canvasAbstract'

export default new class Wall extends CanvasAbstract implements ICanvas {
  num(): number {
    return config.wall.num
  }

  Model(): ModelConstructor {
    return WallModel
  }

  render(): void {
    super.createModels()
    this.createBossWall()
    super.renderModels()
  }

  createBossWall() {
    const cw = config.canvas.width
    const ch = config.canvas.height
    const mw = config.model.width
    const mh = config.model.height
    const pos = [
      { x: cw / 2 - mw * 2, y: ch - mh },
      { x: cw / 2 - mw * 2, y: ch - mh * 2 },
      { x: cw / 2 - mw * 2, y: ch - mh * 3 },
      { x: cw / 2, y: ch - mh * 3 },
      { x: cw / 2 - mw, y: ch - mh * 3 },
      { x: cw / 2 + mw, y: ch - mh * 3 },
      { x: cw / 2 + mw * 2, y: ch - mh * 3 },
      { x: cw / 2 + mw * 2, y: ch - mh * 2 },
      { x: cw / 2 + mw * 2, y: ch - mh },
    ]
    pos.forEach((position) => {
      const WallModel = this.Model() as ModelConstructor
      const instance = new WallModel(position.x, position.y)
      this.models.push(instance)
    })
  }
}('wall')
