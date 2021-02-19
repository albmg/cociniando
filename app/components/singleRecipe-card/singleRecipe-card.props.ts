import { ViewStyle } from "react-native"

export interface SingleRecipeCardProps {
 /**
   * An optional style override useful for padding & margin.
   */
  style?: ViewStyle;

  url: string

  title: string

  description: string

  time: number
}
