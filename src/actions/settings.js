import * as types from 'actions/actionTypes'

// Opens the modal dialog and passes data necessary to represent a setting
export const openSettingModal = settingData => ({
  type: types.OPEN_SETTING_MODAL,
  settingData: settingData
})
// Closes setting modal dialog
export const closeSettingModal = () => ({ type: types.CLOSE_SETTING_MODAL })
