import React from "react"
import { ViewStyle, ActivityIndicator } from "react-native"
import { Screen } from "../../components"

const ROOT: ViewStyle = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
}

export const LoadingScreen = function LoadingScreen() {
  return (
    <Screen style={ROOT}>
      <ActivityIndicator size="large" color='#75c700'/>
    </Screen>
  )
}
