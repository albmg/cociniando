import React, { useState } from "react"
import { View, Text, Pressable, ViewStyle, TextStyle } from "react-native"
import { TextField } from "../../components/text-field/text-field"
import { Button } from "../../components/button/button"
import { color } from "../../theme"

const ROOT: ViewStyle = {
  flex: 1
}

const TEXTSTYLE: TextStyle = {
  color: color.palette.black
}

export const CreateRecipeScreen = function CreateRecipeScreen() {
  const [recipeName, setRecipeName] = useState('null')
  const [time, setTime] = useState('null')
  const [diners, setDiners] = useState('null')
  const [ingredients, setIngredients] = useState([])
  console.log(recipeName)
  console.log(time)
  console.log(diners)

  return (
    <View style={ROOT}>
      <Text>Crea tu propia receta</Text>
      <View >
        <TextField placeholder="Añade un nombre para tu receta" onChangeText={(text) => setRecipeName(text)}/>
        <TextField placeholder="Añade tiempo de elaboración" onChangeText={(text) => setTime(text)}/>
        <TextField placeholder="Añade nº comensales" onChangeText={(text) => setDiners(text)}/>
        <TextField placeholder="Añade ingredientes"/>
        <TextField style={TEXTSTYLE} placeholder="Añade elaboración" multiline={true}/>
        {/* <Pressable><Text>Enviar</Text></Pressable> */}
        <Button><Text>Enviar</Text></Button>
      </View>
    </View>
  )
}
