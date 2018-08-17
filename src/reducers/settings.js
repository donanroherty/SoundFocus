import { OPEN_SETTING_MODAL, CLOSE_SETTING_MODAL } from 'actions/actionTypes'

const initialState = {
  settingModalIsOpen: false
}

const settings = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_SETTING_MODAL:
      return { ...state, settingModalIsOpen: true }

    case CLOSE_SETTING_MODAL:
      return { ...state, settingModalIsOpen: false }

    default:
      return state
  }
}

export default settings
