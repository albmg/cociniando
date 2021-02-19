import React from "react"
import { ViewStyle } from "react-native"
import { Header, Screen, Text } from "../../components"
import { SingleRecipeCard } from "../../components/singleRecipe-card/singleRecipe-card"
// import { spacing } from "../../theme"

// import { useQuery } from 'react-query'

const ROOT: ViewStyle = {
  flex: 1,
}

const WRAPPER = {
  height: '50%',

}

const STYLEHEADER = {
  height: '20%',
  bottom: 70
}
const DOTS: ViewStyle = {
  // position: 'absolute',
  marginBottom: '57%'
}

export const SingleRecipeScreen = function SingleRecipeScreen({ route }) {
  const { recipeTitle } = route.params

  const RECIPE = {
    title: "macarrones",
    url: "https://cdn.cookmonkeys.es/recetas/medium/macarrones-a-la-carbonara-en-thermomix-13776.jpg",
    time: 20,
    description: "lorem ipsum... lorem ipsum... lorem ipsum... lorem ipsum... lorem ipsum... lorem ipsum... "
  }

  return (
    <Screen style={ROOT}>
      <Header style={STYLEHEADER} headerText={`${recipeTitle} `} />
      <SingleRecipeCard title={RECIPE.title} url={RECIPE.url} time={RECIPE.time} description={RECIPE.description}></SingleRecipeCard>
    </Screen>
  )
}
