import { observable, action, computed } from 'mobx'

export const TIMER_MODE = Object.freeze({
  NONE: 'NONE',
  WORK: 'WORK',
  SHORT_BREAK: 'SHORT_BREAK',
  LONG_BREAK: 'LONG_BREAK'
})

class TimerStore {
  constructor(appStore) {
    this.appStore = appStore
    this.timer = null

    // Set up the first interval
    this.setupInterval()
  }

  // The current interval type.  Is NONE when app starts and the timer is yet to be initialized
  @observable
  timerMode = TIMER_MODE.NONE

  // The number of seconds remaining in the current interval
  @observable
  remaining = 5

  // The number of intervals completed by the user
  // TODO: Save this to local storage
  @observable
  intervalsCompleted = 0

  // True if the timer is ticking
  @computed
  get timerIsActive() {
    return this.timer !== null
  }

  // Prepares timer to start a new interval
  @action
  setupInterval = () => {
    const { userPropertyStore } = this.appStore
    const prevTimerMode = this.timerMode

    // Get the new timer mode
    this.timerMode =
      this.timerMode !== TIMER_MODE.WORK
        ? TIMER_MODE.WORK
        : this.intervalsCompleted % userPropertyStore.workIntervalCount === 0
          ? TIMER_MODE.LONG_BREAK
          : TIMER_MODE.SHORT_BREAK

    // Initialize the remaining time based on timer mode
    this.remaining =
      this.timerMode === TIMER_MODE.WORK
        ? userPropertyStore.workDuration * 60 // Convert to seconds
        : this.timerMode === TIMER_MODE.SHORT_BREAK
          ? userPropertyStore.shortBreakDuration * 60
          : userPropertyStore.longBreakDuration * 60

    // Start the clock automatically if continous mode is set by user
    if (userPropertyStore.continuousMode && prevTimerMode !== TIMER_MODE.NONE) {
      this.resume()
    }
  }

  // Reset timer and intervals to default values
  @action
  reset = () => {
    const { userPropertyStore } = this.appStore

    this.pause()
    this.remaining = userPropertyStore.workDuration * 60
    this.timerMode = TIMER_MODE.WORK
    this.intervalsCompleted = 0
  }

  // Toggle timer state between paused and active
  @action
  toggleActive = () => {
    if (this.timerIsActive) {
      this.pause()
    } else {
      this.resume()
    }
  }

  // Resume a paused timer
  @action
  resume = () => {
    this.timer = setInterval(this.tick, 1000)
  }

  // Pause the timer
  @action
  pause = () => {
    clearInterval(this.timer)
  }

  // Called every tick of the timer to update the time and change interval when appropriate
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

export default TimerStore
