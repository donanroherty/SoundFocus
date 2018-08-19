import * as types from 'actions/actionTypes'

/**
 * Opens the modal dialog and passes data necessary to represent a setting
 * @param {*} settingData Data representing a settings type, name, value in order to build a dialog for a setting
 */
export const openSettingModal = settingData => ({
  type: types.OPEN_SETTING_MODAL,
  settingData: settingData
})

/** Closes setting modal dialog */
export const closeSettingModal = () => ({ type: types.CLOSE_SETTING_MODAL })

/**
 * Updates a the state of a setting
 * @param {string} setting shortName of a the setting thats being changed
 * @param {*} val The new value of the setting being changed
 */
export const updateUserSetting = (setting, value) => ({
  type: types.UPDATE_USER_SETTING,
  setting: setting,
  value: value
})
