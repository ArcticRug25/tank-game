export default {
  getEl(id: string) {
    return document.querySelector<HTMLAudioElement>(id)!
  },
  start() {
    const el = this.getEl('#aStart')
    el.play()
  },
  fire() {
    const el = this.getEl('#aFire')
    el.play()
  },
  blast() {
    const el = this.getEl('#aBlast')
    el.play()
  },
}
