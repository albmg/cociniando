import * as React from "react"
import { TextStyle, View, ViewStyle, ImageBackground, ImageStyle, Text, TouchableOpacity } from "react-native"
import { observer } from "mobx-react-lite"
import { color, typography, fontSize } from "../../theme"
import { RecipeCardProps } from "./recipe-card.props"

const CONTAINER: ViewStyle = {
  justifyContent: "center",
  alignItems: "center",
}

const TOPTEXT: TextStyle = {
  fontFamily: typography.primary,
  fontSize: fontSize.large,
  color: color.text,
  top: 25,
  marginHorizontal: 20,
}

const BOTTOMTEXT: TextStyle = {
  fontFamily: typography.primary,
  fontSize: fontSize.medium,
  color: color.text,
  top: 75,
  marginHorizontal: 10
}
const FULLSIZE: ImageStyle = {
  borderRadius: 5,
  // width: "125%",
  height: 150,
  overflow: 'hidden'
}

const TOUCHABLE: ViewStyle = {
  width: '90%'
}

/**
 * Describe your component here
 */
export const RecipeCard = observer(function RecipeCard(props: RecipeCardProps) {
  const { style, url, title, time, onPress } = props

  return (
    <View style={[CONTAINER, style]}>
      <TouchableOpacity style={TOUCHABLE} onPress={onPress}><ImageBackground style={FULLSIZE} source={{ uri: url }}>
        <View>
          <Text style={TOPTEXT}>{title}</Text>
          <Text style={BOTTOMTEXT}>{time} days</Text>
        </View>
      </ImageBackground>
      </TouchableOpacity>
    </View>
  )
})
