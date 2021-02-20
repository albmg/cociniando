import { ViewStyle } from "react-native"

export interface SwiperProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: ViewStyle

  // city: string
  name: string
  // eslint-disable-next-line @typescript-eslint/ban-types
  url: string
  index: number

  // onPress: (event: GestureResponderEvent) => void
}
