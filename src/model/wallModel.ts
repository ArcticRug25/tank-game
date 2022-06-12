import wall from '../canvas/wall'
import { image } from '../service/image'
import ModelAbstract from './modelAbstract'

export default class WallModel extends ModelAbstract implements IModel {
  public canvas: ICanvas = wall
  name = 'wall'
  render(): void {
    super.draw()
  }

  image(): HTMLImageElement {
    return image.get('wall')!
  }
}
