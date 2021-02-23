import React, { useState } from "react"
import { TextStyle, ViewStyle, TextInput, View } from "react-native"
import { Header, Screen, Text, Button } from "../../components"
import { color } from "../../theme"
import { useRegister } from '../../hooks/use-auth'
import * as firebase from 'firebase'

const ROOT: ViewStyle = {
  flex: 1,
}

const TEXT: TextStyle = {
  color: color.palette.black,
}

const ERROR = {
  color: 'red'
}

export const RegisterScreen = function RegisterScreen() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { error, register, login, user, setError, setUser } = useRegister()

  // console.log('soy user en register', user)

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
      {user
        ? <>
          <Header headerText="User" />
           <View>
              <Text style={TEXT}>
              {/* User: {JSON.stringify({ ...user })} */}
              {user.email}
              </Text>
            </View>
            <Button onPress={logout}><Text>Logout</Text></Button>
        </>
        : <>
      <View>
          <Header headerText="Register" />
            <TextInput placeholder="Email" onChangeText={setEmail} value={email} />
            <TextInput placeholder="Password" onChangeText={setPassword} value={password} secureTextEntry={true} />
            <Button onPress={() => register(email, password)}><Text>Register</Text></Button>
            <Button onPress={() => login(email, password)}><Text>Login</Text></Button>
          {!!error && <Text style={ERROR}> Error: {error} </Text>}
      </View>

        </>

      }
    </Screen>
  )
}
