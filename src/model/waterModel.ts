import { image } from '../service/image'
import ModelAbstract from './modelAbstract'

export default class WaterModel extends ModelAbstract implements IModel {
  name = 'water'
  render(): void {
  }

  image(): HTMLImageElement {
    return image.get('water')!
  }
}
