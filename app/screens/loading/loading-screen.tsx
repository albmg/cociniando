import React from "react"
import { TextStyle, ViewStyle, ActivityIndicator, Text, View } from "react-native"
import { Screen } from "../../components"
import { color, spacing } from "../../theme"

const ROOT: ViewStyle = {
  flex: 1,
  backgroundColor: '#75c700',
  justifyContent: 'center',
  alignItems: 'center'
}
const CONTENT: ViewStyle = {
  flex: 1,
  padding: spacing[4],
}

const TEXT: TextStyle = {
  color: color.palette.white,
  fontSize: 45
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
