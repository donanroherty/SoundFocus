import { observable, action, computed } from 'mobx'

export const TIMER_MODE = Object.freeze({
  NONE: 'NONE',
  WORK: 'WORK',
  SHORT_BREAK: 'SHORT_BREAK',
  LONG_BREAK: 'LONG_BREAK'
})

export default class TimerStore {
  constructor(rootStore) {
    this.rootStore = rootStore
    this.timer = null

    this.setupInterval()
  }

  @observable
  timerMode = TIMER_MODE.NONE

  @observable
  remaining = 5

  @observable
  intervalsCompleted = 0

  @observable
  settingsModalIsOpen = false

  @computed
  get timerIsActive() {
    return this.timer !== null
  }

  @action
  setupInterval = () => {
    const { settings } = this.rootStore

    const newTimerMode =
      this.timerMode !== TIMER_MODE.WORK
        ? TIMER_MODE.WORK
        : this.intervalsCompleted % settings.intervalCount === 0
          ? TIMER_MODE.LONG_BREAK
          : TIMER_MODE.SHORT_BREAK

    const newRemaining =
      newTimerMode === TIMER_MODE.WORK
        ? settings.intervalSeconds
        : newTimerMode === TIMER_MODE.SHORT_BREAK
          ? settings.shortBreakSeconds
          : settings.longBreakSeconds

    const shouldAutoPlayNextInterval = settings.continuousMode && this.timerMode !== TIMER_MODE.NONE

    this.remaining = newRemaining
    this.timerMode = newTimerMode
    if (shouldAutoPlayNextInterval) {
      this.resume()
    }
  }

  @action
  reset = () => {
    const { settings } = this.rootStore

    this.pause()
    this.remaining = settings.intervalSeconds
    this.timerMode = TIMER_MODE.WORK
    this.intervalsCompleted = 0
  }

  @action
  toggleActive = () => {
    if (this.timerIsActive) {
      this.pause()
    } else {
      this.resume()
    }
  }

  @action
  resume = () => {
    this.timer = setInterval(this.tick, 1000)
  }

  @action
  pause = () => {
    clearInterval(this.timer)
  }

  @action
  tick = () => {
    if (this.remaining - 1 >= 0) {
      // Decrement remaining seconds and continue timer
      this.remaining--
    } else {
      this.pause()
      if (this.timerMode === TIMER_MODE.WORK) {
        this.intervalsCompleted++
      }
      this.setupInterval()
    }
  }
}
