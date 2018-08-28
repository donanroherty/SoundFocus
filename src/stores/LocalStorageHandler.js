export default class LocalStorageHandler {
  constructor() {
    this.trackedStores = []
  }

  @action
  trackStore = storeRef => {
    // A lit of MobX stores registered with the handler
    this.trackedStores.push(storeRef)

    // Reacts to property changes, updating local data to match store
    this.userPropStoreReaction = reaction(
      () => toJS(storeRef),
      (storeData, reaction) => {
        this.updateStoreValues(storeData)
      }
    )
  }

  // Set local data to match store data
  @action
  updateStoreValues = async store => {
    try {
      await AsyncStorage.setItem(store.storeName, JSON.stringify(store))
    } catch (e) {
      console.log(e)
    }
  }

  // Refreshes store values to match local data
  @action
  refreshStore = async store => {
    try {
      const localStore = await this.getStore(toJS(store))
      // Find matching keys between local and store data, updating store to match
      Object.keys(localStore).forEach(key => {
        if (store[key]) {
          store[key] = localStore[key]
        }
      })
    } catch (e) {
      console.log(e)
    }
  }

  // Returns stored data for a MobX store if stored data exists.  Otherwise returns the input store data
  @action
  getStore = async store => {
    try {
      const localStore = (await AsyncStorage.getItem(store.storeName)) || JSON.stringify(store)
      return JSON.parse(localStore)
    } catch (e) {
      console.log(e)
    }
  }
}
