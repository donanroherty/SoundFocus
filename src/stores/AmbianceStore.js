import { observable, action, computed } from 'mobx'

class AudioTrack {
  @observable
  volume = 1

  @observable
  muted = false
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
