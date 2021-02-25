import React, { useContext } from "react"
import { View, Text, ViewStyle, TextStyle } from "react-native"
import { TextField } from "../../components/text-field/text-field"
import { color, fontSize } from "../../theme"
import { ScrollView } from "react-native-gesture-handler"
import { PreviewRecipeContext } from "../../context/previewRecipeContext"

const ROOT: ViewStyle = {
  flex: 1
}

const TEXTSTYLE: TextStyle = {
  color: color.palette.black
}

const TITLETEXT: TextStyle = {
  color: '#75c700',
  fontSize: fontSize.large,
  marginLeft: 5,
  backgroundColor: color.palette.white,
  marginTop: 5
}

const INPUTSTYLE: ViewStyle = {
  // borderWidth: 1,
  borderColor: color.palette.lighterGrey,
  padding: 5
}

export const RecipeInstructionsScreen = function RecipeInstructionsScreen() {
  const {
    setMaking
  } = useContext(PreviewRecipeContext)

  return (
    <View style={ROOT}>
      <ScrollView>
        <Text style={TITLETEXT}>Elaboración</Text>
          <View style={INPUTSTYLE}>
            <TextField style={TEXTSTYLE} placeholder="Añade elaboración" multiline={true} numberOfLines={10} onChangeText={(text) => setMaking(text)}/>
          </View>
      </ScrollView>
    </View>
  )
}
