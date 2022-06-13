import config from '../config'
import PlayerModel from '../model/playerModel'
import CanvasAbstract from './canvasAbstract'

export default new class Player extends CanvasAbstract implements ICanvas {
  num(): number {
    return 0
  }

  Model(): ModelConstructor {
    return PlayerModel
  }

  render(): void {
    super.createModels()
    this.createPlayer()
    super.renderModels()
  }

  createPlayer() {
    [{ x: config.canvas.width / 2 - config.model.width * 3, y: config.canvas.height - config.model.height }].forEach((position) => {
      const PlayerModel = this.Model() as ModelConstructor
      const instance = new PlayerModel(position.x, position.y)
      this.models.push(instance)
    })
  }
}('boss')
