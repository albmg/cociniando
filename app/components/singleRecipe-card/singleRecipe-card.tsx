import * as React from "react"
import { View, ViewStyle, Text, ImageBackground } from "react-native"
import { observer } from "mobx-react-lite"
// import { color, fontSize, spacing, typography } from "../../theme"
import { SingleRecipeCardProps } from "./singleRecipe-card.props"

const CONTAINER: ViewStyle = {
  justifyContent: "center",
}

/**
 * Describe your component here
 */
export const SingleRecipeCard = observer(function SingleRecipeCard(props: SingleRecipeCardProps) {
  const { url, title, style, description } = props

  return (
    <View style={[CONTAINER, style]}>
     <ImageBackground source={{ uri: url }}>
       <Text>{title}</Text>
     </ImageBackground>
     <Text>{description}</Text>
    </View>
  )
})
