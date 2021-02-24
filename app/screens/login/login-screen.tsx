import React, { useState } from "react"
import { TextStyle, ViewStyle, TextInput, View, TouchableOpacity } from "react-native"
import { Header, Screen, Text, Button } from "../../components"
import { color, fontSize } from "../../theme"
import { UserScreen } from "../user/user-screen"
import { useRegister } from '../../hooks/use-auth'
// import { getData } from "../../utils/async-storage"

const ROOT: ViewStyle = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  padding: 20
}

const TEXT: TextStyle = {
  color: '#75c700',
  fontWeight: 'bold'
}

const ERROR = {
  color: 'red'
}

const BUTTONSTYLE = {
  marginTop: 15
}

const INPUT = {
  borderColor: color.palette.lighterGrey,
  padding: 10,
  borderWidth: 1,
  borderRadius: 5,
  width: 250,
  marginBottom: 15
}

const REGBUTTON = {
  width: 250
}

const TITLETEXT = {
  fontSize: fontSize.large,
  color: color.palette.black,
  marginBottom: 15
}

export const LoginScreen = function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { error, login, user, setError, setUser } = useRegister()

  // console.log('soy user', user)

  // const isSignedIn = getData().then(res => console.log("isSignedIn ------------>", res))
  // console.log(isSignedIn)

  return (
    <Screen style={ROOT}>
      {user
        ? <UserScreen user={user} setError={setError} setUser={setUser}/>
        : <>
      <View style={ROOT}>
          <Header headerText="Register" />
            <Text style={TITLETEXT}>Iniciar sesión</Text>
            <TextInput style={INPUT} placeholder="Email" onChangeText={setEmail} value={email} />
            <TextInput style={INPUT} placeholder="Contraseña" onChangeText={setPassword} value={password} secureTextEntry={true} />
            <Button style={REGBUTTON} onPress={() => login(email, password)}><Text>Login</Text></Button>
            <TouchableOpacity style={BUTTONSTYLE} onPress={() => navigation.navigate('SignUp')}>
              <Text style={TEXT}>No tienes cuenta? Regístrate</Text>
            </TouchableOpacity>
          {!!error && <Text style={ERROR}> Error: {error} </Text>}
      </View>
        </>
      }
    </Screen>
  )
}
