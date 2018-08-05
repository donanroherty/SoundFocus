import { RESET_TIMER } from 'actions/actionTypes'

const initialState = {
  intervalTime: 25,
  remaining: 25,
  timerActive: false
}

const timer = (state = initialState, action) => {
  switch (action.type) {
    case RESET_TIMER:
      return { ...state, timerActive: false, remaining: intervalTime }
    default:
      return state
  }
}

export default timer
