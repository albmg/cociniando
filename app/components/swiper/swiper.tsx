import React from 'react'
import { TextStyle, Text, View, ViewStyle, ImageBackground, ImageStyle } from 'react-native'
import { color, fontSize } from "../../theme"
import { observer } from "mobx-react-lite"
import { SwiperProps } from "./swiper.props"

const SLIDE: ViewStyle = {
  alignItems: 'center',
  // backgroundColor: '#9DD6EB',
  flex: 1,
  justifyContent: 'center',
  bottom: '20%',
  width: '100%'
}

const VIEWTEXT: ViewStyle = {
  flex: 1,
  justifyContent: 'flex-end',
}

const TEXTSLIDE: TextStyle = {
  fontSize: fontSize.large,
  fontWeight: 'bold',
  color: color.palette.white,
  // backgroundColor: "black",
  marginBottom: 15,
  marginLeft: 10
}

const IMAGE: ImageStyle = {
  borderRadius: 5,
  height: '100%',
  width: '100%'
}

export const SwiperComponent = observer(function SwiperComponent(props: SwiperProps) {
  const { url, name, style, index } = props

  return (
        <View style={SLIDE}>
          <ImageBackground style={IMAGE} source={{ uri: url }}>
            <View style={VIEWTEXT}>
              <Text style={TEXTSLIDE}>{name}</Text>
            </View>
          </ImageBackground>
        </View>
  )
})
