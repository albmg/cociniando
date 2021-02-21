import React, { useState } from "react"
import { View, Text, ViewStyle, TextStyle } from "react-native"
import { TextField } from "../../components/text-field/text-field"
import { Button } from "../../components/button/button"
import { color, fontSize } from "../../theme"
import { AddIngredients } from "../../components/add-ingredients/add-ingredients"
import { ScrollView } from "react-native-gesture-handler"

const ROOT: ViewStyle = {
  flex: 1
}

const TEXTSTYLE: TextStyle = {
  color: color.palette.black
}

const SCROLLTEXT: TextStyle = {
  color: '#75c700',
  fontSize: fontSize.large,
  marginLeft: 5,
  backgroundColor: color.palette.white,
  marginTop: 5
}

const SCROLLTEXT2: TextStyle = {
  color: color.palette.black,
  fontSize: fontSize.medium,
}

const SCROLLVIEW: ViewStyle = {
  backgroundColor: color.palette.white
}

const INPUTSTYLE: ViewStyle = {
  borderWidth: 1,
  borderColor: color.palette.lighterGrey,
  padding: 5
}

export const CreateRecipeScreen = function CreateRecipeScreen() {
  const [recipeName, setRecipeName] = useState('null')
  const [time, setTime] = useState('null')
  const [diners, setDiners] = useState('null')
  const [ingredients, setIngredients] = useState([])
  const [making, setMaking] = useState('null')
  console.log(recipeName)
  console.log(time)
  console.log(diners)
  console.log(ingredients)
  console.log(making)

  return (
    <View style={ROOT}>
      <ScrollView>
        <Text>Crea tu propia receta</Text>
        <View >
          <Text style={SCROLLTEXT}>Nombre</Text>
          <TextField style={INPUTSTYLE} placeholder="Añade un nombre para tu receta" onChangeText={(text) => setRecipeName(text)} />
          <Text style={SCROLLTEXT}>Duración</Text>
          <TextField style={INPUTSTYLE} placeholder="Añade tiempo de elaboración" onChangeText={(text) => setTime(text)} />
          <Text style={SCROLLTEXT}>Nº Personas</Text>
          <TextField style={INPUTSTYLE} placeholder="Añade nº comensales" onChangeText={(text) => setDiners(text)}/>
          {ingredients.length > 0 &&
            <ScrollView>
              <Text style={SCROLLTEXT}>Ingredientes</Text>
              <View style={SCROLLVIEW}>
                {ingredients.map((item) => <Text style={SCROLLTEXT2} key={item.id}>{item}</Text>)}
              </View>
            </ScrollView>}
          <View style={INPUTSTYLE}>
            <Text style={SCROLLTEXT}>Instrucciones</Text>
            <TextField style={TEXTSTYLE} placeholder="Añade elaboración" multiline={true} numberOfLines={10} onChangeText={(text) => setMaking(text)}/>
          </View>
          <AddIngredients ingredients={ingredients} setIngredients={setIngredients}/>
          <Button><Text>Enviar</Text></Button>
        </View>
      </ScrollView>
    </View>
  )
}
