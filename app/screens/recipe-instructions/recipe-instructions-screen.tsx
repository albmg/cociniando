import React, { useState, useContext } from "react"
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

  const initialState = {
    first: "",
    second: "",
    third: ""
  }

  const [state, setState] = useState(initialState)

  const handleChangeText = (value, name) => {
    setState({ ...state, [name]: value })
    const newMaking = Object.values(state)
    setMaking(newMaking)
  }

  return (
    <View style={ROOT}>
      <ScrollView>
        <Text style={TITLETEXT}>Elaboración</Text>
          <View style={INPUTSTYLE}>
            <TextField style={TEXTSTYLE} placeholder="Añade paso nº1" multiline={true} numberOfLines={4} onChangeText={(value) => handleChangeText(value, "first")} />
            <TextField style={TEXTSTYLE} placeholder="Añade paso nº2" multiline={true} numberOfLines={4} onChangeText={(value) => handleChangeText(value, "second")} />
            <TextField style={TEXTSTYLE} placeholder="Añade paso nº3" multiline={true} numberOfLines={4} onChangeText={(value) => handleChangeText(value, "third")} />
          </View>
      </ScrollView>
    </View>
  )
}
