import React, { useState } from "react"
import { TextStyle, ViewStyle, TextInput, View, TouchableOpacity } from "react-native"
import { Header, Screen, Text, Button } from "../../components"
import { color, fontSize } from "../../theme"
import { useRegister } from '../../hooks/use-auth'
import { UserScreen } from "../user/user-screen"

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

export const RegisterScreen = function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const { error, register, user, setError, setUser } = useRegister()

  // console.log('soy user en register', user)

  return (
    <Screen style={ROOT}>
      {user
        ? <UserScreen user={user} setError={setError} setUser={setUser}/>
        : <>
      <View style={ROOT}>
          <Header headerText="Register" />
            <Text style={TITLETEXT}>Crear una cuenta</Text>
            <TextInput style={INPUT} placeholder="Email" onChangeText={setEmail} value={email} />
            <TextInput style={INPUT} placeholder="Contraseña" onChangeText={setPassword} value={password} secureTextEntry={true} />
            <TextInput style={INPUT} placeholder="Repetir contraseña" onChangeText={setRepeatPassword} value={repeatPassword} secureTextEntry={true} />
            <Button style={REGBUTTON} onPress={() => register(email, password)}><Text>Regístrate</Text></Button>
            <TouchableOpacity style={BUTTONSTYLE} onPress={() => navigation.navigate('Login')}>
              <Text style={TEXT}>Ya tienes una cuenta? Inicia sesión</Text>
            </TouchableOpacity>
          {!!error && <Text style={ERROR}> Error: {error} </Text>}
      </View>

        </>

      }
    </Screen>
  )
}
