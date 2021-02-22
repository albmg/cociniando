import React, { useState } from "react"
import { View, Text, ViewStyle, TextStyle } from "react-native"
import { color, fontSize } from "../../theme"
import { AddIngredients } from "../../components/add-ingredients/add-ingredients"
import { ScrollView } from "react-native-gesture-handler"

const ROOT: ViewStyle = {
  flex: 1
}

const SCROLLTEXT: TextStyle = {
  color: '#75c700',
  fontSize: fontSize.large,
  marginLeft: 5,
  backgroundColor: color.palette.white,
  marginTop: 5
}

const SCROLLTEXT2: TextStyle = {
  color: color.palette.black,
  fontSize: fontSize.medium,
}

const SCROLLVIEW: ViewStyle = {
  backgroundColor: color.palette.white
}

export const RecipeIngredientsScreen = function RecipeIngredientsScreen() {
  const [ingredients, setIngredients] = useState([])

  return (
    <View style={ROOT}>
      <ScrollView>
        <Text style={SCROLLTEXT}>Ingredientes</Text>
        <View >
          {ingredients.length > 0 &&
            <ScrollView>
              <View style={SCROLLVIEW}>
                {ingredients.map((item) => <Text style={SCROLLTEXT2} key={item.id}>{item}</Text>)}
              </View>
            </ScrollView>}
          <AddIngredients ingredients={ingredients} setIngredients={setIngredients}/>
        </View>
      </ScrollView>
    </View>
  )
}
