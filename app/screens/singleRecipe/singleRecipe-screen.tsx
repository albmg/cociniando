import React from "react"
import { ViewStyle } from "react-native"
import { Screen } from "../../components"
import { SingleRecipeCard } from "../../components/singleRecipe-card/singleRecipe-card"

const ROOT: ViewStyle = {
  flex: 1,
}

export const SingleRecipeScreen = function SingleRecipeScreen() {
  const RECIPE = {
    title: "macarrones a la carbonara",
    url: "https://cdn.cookmonkeys.es/recetas/medium/macarrones-a-la-carbonara-en-thermomix-13776.jpg",
    time: 20,
    description: "lorem ipsum... lorem ipsum... lorem ipsum... lorem ipsum... lorem ipsum... lorem ipsum... lorem ipsum...lorem ipsum...lorem ipsum...lorem ipsum... lorem ipsum... lorem ipsum... lorem ipsum... lorem ipsum... lorem ipsum... lorem ipsum... lorem ipsum...lorem ipsum...lorem ipsum...lorem ipsum...",
    reminders: ['pasta', 'huevos', 'panceta']
  }

  return (
    <Screen style={ROOT}>
      {/* <Header headerText="RecipeId" /> */}
      <SingleRecipeCard title={RECIPE.title} url={RECIPE.url} time={RECIPE.time} description={RECIPE.description} reminders={RECIPE.reminders.join(" , ")}/>
    </Screen>
  )
}
