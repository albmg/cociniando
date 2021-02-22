import React from "react"
import { ViewStyle, Pressable, View, TextStyle } from "react-native"
import { Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"

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

export const DescriptionRecipeScreen = function DescriptionRecipeScreen({ navigation }) {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <View style={ROOT}>
      <Pressable onPress={() => navigation.navigate('TakePhoto')}><Text style={BACKGROUND}>Ir a component take photo</Text></Pressable>
    </View>
  )
}
