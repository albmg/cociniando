import * as React from "react"
import { View, ViewStyle, Text, ImageBackground, ImageStyle, TextStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { color, fontSize } from "../../theme"
import { SingleRecipeCardProps } from "./singleRecipe-card.props"

const CONTAINER: ViewStyle = {
  justifyContent: "center",
}

const TEXTDESCRIPTION: TextStyle = {
  marginLeft: 15,
  marginRight: 15
}

const REMINDERS: ViewStyle = {
  marginBottom: 15
}
/**
 * Describe your component here
 */
export const SingleRecipeCard = observer(function SingleRecipeCard(props: SingleRecipeCardProps) {
  const { url, title, style, description, time, reminders } = props

  return (
    <View style={[CONTAINER, style]}>
        <View style={REMINDERS}>
          <Text style={TEXTDESCRIPTION}>Ingredientes: </Text>
          <Text style={TEXTDESCRIPTION}>{reminders}</Text>
        </View>
        <View style={REMINDERS}>
          <Text style={TEXTDESCRIPTION}>Tiempo: {time} min.</Text>
        </View>
        <View>
          <Text style={TEXTDESCRIPTION}>Elaboración: </Text>
          <Text style={TEXTDESCRIPTION}>{description}</Text>
        </View>
    </View>
  )
})
