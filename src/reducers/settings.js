import { OPEN_SETTING_MODAL, CLOSE_SETTING_MODAL } from 'actions/actionTypes'

const initialState = {
  settingModalIsOpen: false,
  settingModalData: {
    name: 'setting name',
    shortName: 'settingName',
    type: 'integer',
    unit: 'mins',
    min: 0,
    max: 1,
    value: 0,
    action: {}
  }
}

const settings = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_SETTING_MODAL:
      return { ...state, settingModalIsOpen: true, settingModalData: action.settingData }

    case CLOSE_SETTING_MODAL:
      return { ...state, settingModalIsOpen: false }

    default:
      return state
  }
}

export default settings
