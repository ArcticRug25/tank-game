import bullets from '../canvas/bullets'
import { image } from '../service/image'
import ModelAbstract from './modelAbstract'

export default class bulletsModel extends ModelAbstract implements IModel {
  public canvas: ICanvas = bullets
  name = 'bullets'
  render(): void {
    super.draw()
  }

  image(): HTMLImageElement {
    return image.get('bullet')!
  }
}
