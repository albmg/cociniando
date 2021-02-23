import React from "react"
import { TextStyle, ViewStyle, ScrollView } from "react-native"
import { Header, Screen, Text } from "../../components"
import { color, spacing } from "../../theme"

const ROOT: ViewStyle = {
  flex: 1,
}
const CONTENT: ViewStyle = {
  flex: 1,
  padding: spacing[4],
}

const TEXT: TextStyle = {
  color: color.palette.black,
}

export const LoginScreen = function LoginScreen() {
  return (
    <Screen style={ROOT}>
      <Header headerText="Login" />
      <ScrollView style={CONTENT}>
        <Text preset="default" text="Login" style={TEXT} />
      </ScrollView>
    </Screen>
  )
}
