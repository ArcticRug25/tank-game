import ModelAbstract from './modelAbstract'

export default class StrawModel extends ModelAbstract implements IModel {
  render(): void {
    super.draw()
  }
}
