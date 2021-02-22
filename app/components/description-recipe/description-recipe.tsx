import React, { useState } from "react"
import { TextStyle, View, ViewStyle, Pressable, Text } from "react-native"
// import { color, typography } from "../../theme"
// import { Text } from "../"
import { TakePhoto } from "../take-photo/take-photo"

const ROOT: ViewStyle = {
  // backgroundColor: color.palette.black,
  flex: 1,
}

const BACKGROUND: TextStyle = {
  backgroundColor: 'white',
  color: 'purple',
  padding: 5,
  marginTop: 20
}

export interface DescriptionRecipeProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: ViewStyle
}

/**
 * Describe your component here
 */
export const DescriptionRecipe = function DescriptionRecipe(props: DescriptionRecipeProps, { navigation }) {
  const { style } = props
  const [clicked, setClicked] = useState(false)
  console.log(clicked)

  return (
    <View style={ROOT}>
    <Pressable onPress={() => navigation.navigate('TakePhoto')}><Text style={BACKGROUND}>Ir a component take photo</Text></Pressable>
    {/* <Pressable onPress={() => setClicked(true)}>
      <Text>Hacer foto</Text>
    </Pressable>
    {clicked && <TakePhoto /> } */}
  </View>
  )
}
