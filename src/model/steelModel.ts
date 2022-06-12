import { image } from '../service/image'
import ModelAbstract from './modelAbstract'

export default class SteelModel extends ModelAbstract implements IModel {
  name = 'steel'
  render(): void {
    super.draw()
  }

  image(): HTMLImageElement {
    return image.get('steel')!
  }
}
