import bullet from '../canvas/bullet'
import { image } from '../service/image'
import ModelAbstract from './modelAbstract'

export default class bulletModel extends ModelAbstract implements IModel {
  public canvas: ICanvas = bullet
  name = 'bullet'
  render(): void {
    super.draw()
  }

  image(): HTMLImageElement {
    return image.get('bullet')!
  }
}
