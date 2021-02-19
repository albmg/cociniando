import * as React from "react"
import { View, ViewStyle, Text, ImageBackground, ImageStyle, TextStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { color, fontSize } from "../../theme"
import { SingleRecipeCardProps } from "./singleRecipe-card.props"

const CONTAINER: ViewStyle = {
  justifyContent: "center",
}

const IMAGESTYLE: ImageStyle = {
  width: "100%",
  height: "70%"
}

const TITLESLIDE: ViewStyle = {
  flex: 1,
  justifyContent: 'center'
}

const TITLETEXT: TextStyle = {
  fontSize: fontSize.large,
  color: color.palette.white,
  marginLeft: 15,
  bottom: 15
}

const DESCRIPTIONTEXT: ViewStyle = {
  flex: 1,
  alignItems: 'flex-start',
  justifyContent: 'center'
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
     <ImageBackground style={IMAGESTYLE} source={{ uri: url }}>
       <View style={TITLESLIDE}>
         <Text style={TITLETEXT}>{title}</Text>
         </View>
     </ImageBackground>
     <View style={DESCRIPTIONTEXT}>
        <View style={REMINDERS}>
          <Text style={TEXTDESCRIPTION}>Ingredientes: </Text>
          <Text style={TEXTDESCRIPTION}>{reminders}</Text>
        </View>
        <View style={REMINDERS}>
          <Text style={TEXTDESCRIPTION}>Tiempo: {time}</Text>
        </View>
        <View>
          <Text style={TEXTDESCRIPTION}>Elaboración: </Text>
          <Text style={TEXTDESCRIPTION}>{description}</Text>
        </View>
     </View>
    </View>
  )
})
