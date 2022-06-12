import straw from '../canvas/straw'
import { image } from '../service/image'
import ModelAbstract from './modelAbstract'

export default class StrawModel extends ModelAbstract implements IModel {
  public canvas: ICanvas = straw
  name = 'straw'
  render(): void {
    super.draw()
  }

  image(): HTMLImageElement {
    return image.get('straw')!
  }
}
