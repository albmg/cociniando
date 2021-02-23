import React from "react"
import { TextStyle, ViewStyle, View } from "react-native"
import { Header, Screen, Text, Button } from "../../components"
import { color } from "../../theme"
import { useRegister } from '../../hooks/use-auth'
import * as firebase from 'firebase'

const ROOT: ViewStyle = {
  flex: 1,
}
// const CONTENT: ViewStyle = {
//   flex: 1,
//   padding: spacing[4],
// }

const TEXT: TextStyle = {
  color: color.palette.black
}

export const UserScreen = function UserScreen() {
  const { setError, setUser, user } = useRegister()

  async function logout() {
    firebase.auth().signOut().then(() => {
      setError('')
      setUser(null)
      // setLoading(false)
    }).catch((error) => {
      setError(error.message)
    })
  }

  return (
    <Screen style={ROOT}>
      <Header headerText="User" />
      <View>
        <Text style={TEXT}>
         User: {JSON.stringify({ ...user })}
        </Text>
     </View>
     <Button onPress={logout}><Text>Logout</Text></Button>
    </Screen>
  )
}
