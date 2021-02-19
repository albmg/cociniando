import { GestureResponderEvent, ViewStyle } from "react-native"

export interface RecipeCardProps {
 /**
   * An optional style override useful for padding & margin.
   */
  style?: ViewStyle;

  url: string

  title: string

  time: number

  onPress: (event: GestureResponderEvent) => void
}
