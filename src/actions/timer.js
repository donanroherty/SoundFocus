import * as types from 'actions/actionTypes'

/** Timer functions */
// Resets all timer values to default
export const timerReset = () => ({ type: types.TIMER_RESET })
// Starts or resumes an interval
export const timerResume = () => ({ type: types.TIMER_RESUME })
// Pauses an interval
export const timerPause = () => ({ type: types.TIMER_PAUSE })
// Toggles between pause/resume interval depending on current timer state
export const timerToggleActive = () => ({ type: types.TIMER_TOGGLE_ACTIVE })
// Called by the setInterval callback to advance the timers simulation
export const timerTick = () => ({ type: types.TIMER_TICK })
// Initializes values for an upcoming interval
export const timerSetupInterval = () => ({ type: types.TIMER_SETUP_INTERVAL })

/** Settings */
export const setIntervalLength = val => ({ type: types.SET_INTERVAL_LENGTH, val: val })
export const setIntervalsPerSession = val => ({ type: types.SET_INTERVALS_PER_SESSION, val: val })
