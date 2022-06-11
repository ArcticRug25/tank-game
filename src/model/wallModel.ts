import { image } from '../service/image'
import ModelAbstract from './modelAbstract'

export default class WallModel extends ModelAbstract implements IModel {
  name = 'wall'
  render(): void {
    super.draw(image.get('wall')!)
  }
}
