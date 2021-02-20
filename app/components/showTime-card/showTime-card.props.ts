import { ViewStyle } from "react-native"

export interface ShowTimeCardProps {
 /**
   * An optional style override useful for padding & margin.
   */
  style?: ViewStyle;

  time: number
  diners: number
}
