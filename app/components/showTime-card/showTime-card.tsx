import * as React from "react"
import { View, ViewStyle, Text, TextStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { color, fontSize } from "../../theme"
import { ShowTimeCardProps } from "./showTime-card.props"
import { FontAwesome } from '@expo/vector-icons'

const CONTAINER: ViewStyle = {
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'center',
  top: 15
}

const TIMESTYLE: TextStyle = {
  backgroundColor: color.palette.white,
  color: '#75c700',
  fontSize: fontSize.xLarge,
  padding: 5,
  // width: "50%",
  textAlign: 'center',
  // marginHorizontal: 15
}

const FATYLE: TextStyle = {
  color: '#75c700',
  fontSize: fontSize.large,
  padding: 5,
  // width: "50%",
  textAlign: 'center',
  // marginLeft: 5,
  top: 10,
  // marginHorizontal: 5
}

const DINERS: ViewStyle = {
  flexDirection: 'row',
  borderBottomColor: '#75c700',
  borderBottomWidth: 1,
  marginRight: 5
}

const TIME: ViewStyle = {
  flexDirection: 'row',
  borderBottomColor: '#75c700',
  borderBottomWidth: 1
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
      <View style={LINE}></View>
      <View style={DINERS}>
        <FontAwesome style={FATYLE} name="cutlery" size={24} color="black" />
        <Text style={TIMESTYLE}>{diners}</Text>
      </View>
      <View style={TIME}>
        <FontAwesome style={FATYLE} name="clock-o" size={24} color="black" />
        <Text style={TIMESTYLE}>{time}</Text>
      </View>
      <View style={LINE}></View>
    </View>
  )
})
