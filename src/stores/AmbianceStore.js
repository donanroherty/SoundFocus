import { observable, action, computed } from 'mobx'

class AudioTrack {
  @observable
  volume = 0.75

  @observable
  isActive = false

  @action
  setVolume = newVolume => {
    console.log('setVolume', newVolume)
    this.volume = newVolume
  }

  @action
  toggleActive = () => {
    this.isActive = !this.isActive
  }
}

export default class AmbianceStore {
  constructor(appStore) {}

  @observable
  whiteNoise = new AudioTrack()

  @observable
  pinkNoise = new AudioTrack()

  @observable
  brownNoise = new AudioTrack()
}
