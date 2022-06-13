import boss from '../canvas/boss'
import { image } from '../service/image'
import ModelAbstract from './modelAbstract'

export default class BossModel extends ModelAbstract implements IModel {
  public canvas: ICanvas = boss
  name = 'boss'
  render(): void {
    super.draw()
  }

  image(): HTMLImageElement {
    return image.get('boss')!
  }
}
