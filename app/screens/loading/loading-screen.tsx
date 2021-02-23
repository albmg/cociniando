import React from "react"
import { TextStyle, ViewStyle, ActivityIndicator, Text, View } from "react-native"
import { Header, Screen } from "../../components"
import { color, spacing } from "../../theme"

const ROOT: ViewStyle = {
  flex: 1,
  backgroundColor: 'purple'
}
const CONTENT: ViewStyle = {
  flex: 1,
  padding: spacing[4],
}

const TEXT: TextStyle = {
  color: color.palette.white,
  fontSize: 25
}

export const LoadingScreen = function LoadingScreen() {
  return (
    <Screen style={ROOT}>
      <ActivityIndicator />
      <View style={CONTENT}>
        <Text style={TEXT}>LOADING...</Text>
      </View>
    </Screen>
  )
}
