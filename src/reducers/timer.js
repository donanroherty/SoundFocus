import {
  TIMER_SETUP_INTERVAL,
  TIMER_RESET,
  TIMER_RESUME,
  TIMER_PAUSE,
  TIMER_TOGGLE_ACTIVE,
  TIMER_TICK
} from 'actions/actionTypes'

export const TIMER_MODE = Object.freeze({
  NONE: 'NONE',
  WORK: 'WORK',
  SHORT_BREAK: 'SHORT_BREAK',
  LONG_BREAK: 'LONG_BREAK'
})

/**
 * Work = 1500 = 25mins
 * Short break = 300 = 5mins
 * Long break - 1200 = 20mins
 */
const initialState = {
  intervalSeconds: 6,
  shortBreakSeconds: 2,
  longBreakSeconds: 10,
  intervalCountPerCycle: 4,
  timerMode: TIMER_MODE.NONE,
  remaining: 5,
  intervalsCompleted: 0,
  timerIsActive: false,
  continuousMode: true
}

const timer = (state = initialState, action) => {
  switch (action.type) {
    case TIMER_SETUP_INTERVAL:
      console.log('Intervals complete: ', state.intervalsCompleted)

      const newTimerMode =
        state.timerMode !== TIMER_MODE.WORK
          ? TIMER_MODE.WORK
          : state.intervalsCompleted % state.intervalCountPerCycle === 0
            ? TIMER_MODE.LONG_BREAK
            : TIMER_MODE.SHORT_BREAK

      const newRemaining =
        newTimerMode === TIMER_MODE.WORK
          ? state.intervalSeconds
          : newTimerMode === TIMER_MODE.SHORT_BREAK
            ? state.shortBreakSeconds
            : state.longBreakSeconds

      const shouldAutoPlayNextInterval = state.continuousMode && state.timerMode !== TIMER_MODE.NONE

      return {
        ...state,
        remaining: newRemaining,
        timerMode: newTimerMode,
        timerIsActive: shouldAutoPlayNextInterval
      }

    case TIMER_RESET:
      return {
        ...state,
        timerIsActive: false,
        remaining: state.intervalSeconds,
        timerMode: TIMER_MODE.WORK,
        intervalsCompleted: 0
      }

    case TIMER_RESUME:
      return {
        ...state,
        timerIsActive: true
      }

    case TIMER_PAUSE:
      return { ...state, timerIsActive: true }

    case TIMER_TOGGLE_ACTIVE:
      return { ...state, timerIsActive: !state.timerIsActive }

    case TIMER_TICK:
      if (state.remaining - 1 >= 0) {
        // Decrement remaining seconds and continue timer
        return { ...state, remaining: state.remaining - 1 }
      } else {
        return {
          ...state,
          timerIsActive: false,
          intervalsCompleted:
            state.timerMode === TIMER_MODE.WORK
              ? state.intervalsCompleted + 1
              : state.intervalsCompleted
        }
      }

    default:
      return state
  }
}

export default timer
