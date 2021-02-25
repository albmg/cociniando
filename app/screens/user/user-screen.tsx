import React from "react"
import { TextStyle, ViewStyle, View } from "react-native"
import { Header, Screen, Text, Button } from "../../components"
import * as firebase from 'firebase'
import { useCurrentUser } from "../../hooks/use-current-user"
import { color } from "../../theme"

const ROOT: ViewStyle = {
  flex: 1,
}

const TEXT: TextStyle = {
  color: '#75c700',
  fontWeight: 'bold'
}

const BUTTONSTYLE = {
  backgroundColor: color.palette.black
}

const BUTTONVIEW: ViewStyle = {
  flex: 1,
  justifyContent: 'flex-end'
}

export const UserScreen = function UserScreen() {
  // const { setError, setUser } = useRegister()
  const user = useCurrentUser()

  console.log('soy user en userscreen', user)
  console.log(user.email)
  console.log(user.providerData)

  async function logout() {
    firebase.auth().signOut().then(() => {
      // removeValue()
      // setError('')
      // setUser(null)
      // setLoading(false)
    }).catch((error) => {
      // setError(error.message)
      console.error(error)
    })
  }

  return (
    <Screen style={ROOT}>
      <Header headerText="User" />
      <View>
          <Text style={TEXT}>
          {/* User: {JSON.stringify({ ...user })} */}
          Bienvenido: {user.email}
          </Text>
     </View>
     <View style={BUTTONVIEW}>
      <Button style={BUTTONSTYLE} onPress={logout}><Text>Cerrar sesión</Text></Button>
     </View>
    </Screen>
  )
}
