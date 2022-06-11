import { image } from '../service/image'
import ModelAbstract from './modelAbstract'

export default class StrawModel extends ModelAbstract implements IModel {
  name = 'straw'
  render(): void {
    super.draw(image.get('straw')!)
  }
}
