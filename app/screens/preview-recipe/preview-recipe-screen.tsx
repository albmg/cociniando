import React, { useContext } from "react"
import { TextStyle, ViewStyle } from "react-native"
import { Screen, Text } from "../../components"
import { color } from "../../theme"
import { PreviewRecipeContext } from "../../context/previewRecipeContext"

const ROOT: ViewStyle = {
  // backgroundColor: color.palette.black,
  flex: 1,
}

const TEXT: TextStyle = {
  color: color.palette.black
}
export const PreviewRecipeScreen = function PreviewRecipeScreen() {
  const {
    recipeName,
    time,
    diners,
    ingredients,
    making,
    swiper: { swiperImages }
  } = useContext(PreviewRecipeContext)

  return (
    <Screen style={ROOT} preset="scroll">
      <Text style={TEXT}>Url: {swiperImages}</Text>
      <Text style={TEXT}>Nombre receta: {recipeName}</Text>
      <Text style={TEXT}>Tiempo: {time} min</Text>
      <Text style={TEXT}>Porciones: {diners}</Text>
      <Text style={TEXT}>Ingredientes: {ingredients}</Text>
      <Text style={TEXT}>Instrucciones: {making}</Text>
    </Screen>
  )
}
