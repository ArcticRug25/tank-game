import steel from '../canvas/steel'
import { image } from '../service/image'
import ModelAbstract from './modelAbstract'

export default class SteelModel extends ModelAbstract implements IModel {
  public canvas: ICanvas = steel
  name = 'steel'
  render(): void {
    super.draw()
  }

  image(): HTMLImageElement {
    return image.get('steel')!
  }
}
