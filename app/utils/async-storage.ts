import AsyncStorage from '@react-native-async-storage/async-storage'

export const storeData = async (value) => {
  try {
    await AsyncStorage.setItem('token', value)
  } catch (e) {
    throw new Error(e)
  }
}

export const getData = async () => {
  try {
    const value = AsyncStorage.getItem('token')
    return value
  } catch (e) {
    return null
  }
}

export const removeValue = async () => {
  try {
    await AsyncStorage.removeItem('token')
  } catch (e) {
    throw new Error(e)
  }
  console.log('Done.')
}
