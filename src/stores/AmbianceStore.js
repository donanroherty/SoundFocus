import { observable, action } from 'mobx'

class AudioTrack {
  @observable
  volume = 0.75

  @observable
  muted = true

  @action
  setVolume = newVolume => {
    this.volume = newVolume
  }

  @action
  toggleActive = () => {
    this.muted = !this.muted
  }
}

class TrackManager {}

export default class AmbianceStore {
  constructor(appStore) {
    this.appStore = appStore
  }

  @observable
  globalMute = false

  @observable
  whiteNoise = new AudioTrack()

  @observable
  pinkNoise = new AudioTrack()

  @observable
  brownNoise = new AudioTrack()
}
