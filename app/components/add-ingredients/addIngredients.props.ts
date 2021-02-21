import { ViewStyle } from "react-native"

export interface AddIngredientsProps {
 /**
   * An optional style override useful for padding & margin.
   */
  style?: ViewStyle;

  ingredients: Array<string>
  // eslint-disable-next-line @typescript-eslint/ban-types
  setIngredients: Function
}
