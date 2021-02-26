import * as React from "react"
import { View, ViewStyle, Text, TextStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { color, fontSize } from "../../theme"
import { SingleRecipeCardProps } from "./singleRecipe-card.props"

const CONTAINER: ViewStyle = {
  justifyContent: "center",
}

const SECTIONDATA: TextStyle = {
  backgroundColor: color.palette.white,
  color: color.palette.black,
  fontSize: fontSize.medium,
  padding: 10
}

const LINE = {
  backgroundColor: color.palette.lighterGrey,
  height: 1
}

/**
 * Describe your component here
 */
export const SingleRecipeCard = observer(function SingleRecipeCard(props: SingleRecipeCardProps) {
  const { style, content } = props

  return (
    <View style={[CONTAINER, style]}>
        <Text style={SECTIONDATA}>{content}</Text>
        <View style={LINE}></View>
    </View>
  )
})
