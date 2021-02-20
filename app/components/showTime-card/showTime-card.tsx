import * as React from "react"
import { View, ViewStyle, Text, TextStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { color, fontSize } from "../../theme"
import { ShowTimeCardProps } from "./showTime-card.props"

const CONTAINER: ViewStyle = {
  flex: 1,
  flexDirection: 'row',
}

const TIMESTYLE: TextStyle = {
  backgroundColor: color.palette.white,
  color: '#75c700',
  fontSize: fontSize.large,
  padding: 10
}

const DINERS: ViewStyle = {
  alignItems: "flex-start"
}

const TIME: ViewStyle = {
  alignItems: "flex-end"
}

const LINE = {
  backgroundColor: '#75c700',
  height: 3
}

/**
 * Describe your component here
 */
export const ShowTimeCard = observer(function ShowTimeCard(props: ShowTimeCardProps) {
  const { style, time, diners } = props

  return (
    <View style={[CONTAINER, style]}>
      <View style={DINERS}>
        <Text style={TIMESTYLE}>{diners} people</Text>
      </View>
      <View style={TIME}>
        <Text style={TIMESTYLE}>{time} min</Text>
      </View>
      <View style={LINE}></View>
    </View>
  )
})
