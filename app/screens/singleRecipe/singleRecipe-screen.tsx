import React from "react"
import { ViewStyle, View } from "react-native"
import { Screen, Text } from "../../components"
import { SingleRecipeCard } from "../../components/singleRecipe-card/singleRecipe-card"
import { SwiperComponent } from "../../components/swiper/swiper"
import Swiper from 'react-native-swiper'

const ROOT: ViewStyle = {
  flex: 1,
}

const DOTS: ViewStyle = {
  // position: 'absolute',
  marginBottom: '24%',
  marginLeft: "70%"
}

const DOT = {
  backgroundColor: 'rgba(255,255,255,.3)',
  width: 8,
  height: 8,
  borderRadius: 7,
  marginLeft: 7,
  marginRight: 7
}

const ACTIVEDOT = {
  backgroundColor: '#fff',
  width: 8,
  height: 8,
  borderRadius: 7,
  marginLeft: 7,
  marginRight: 7
}

export const SingleRecipeScreen = function SingleRecipeScreen() {
  const RECIPE = {
    title: "macarrones a la carbonara",
    img: [
      {
        name: "plato final",
        url: "https://cdn.cookmonkeys.es/recetas/medium/macarrones-a-la-carbonara-en-thermomix-13776.jpg"
      },
      {
        name: "preparando la masa",
        url: "https://cdn.cookmonkeys.es/recetas/medium/ensalada-arlesienne-8799.jpeg"
      },
      {
        name: "preparando la masa",
        url: "https://cdn.cookmonkeys.es/recetas/medium/ensalada-arlesienne-8799.jpeg"
      },
      {
        name: "preparando la masa",
        url: "https://cdn.cookmonkeys.es/recetas/medium/ensalada-arlesienne-8799.jpeg"
      },
    ],
    time: 20,
    description: "lorem ipsum... lorem ipsum... lorem ipsum... lorem ipsum... lorem ipsum... lorem ipsum... lorem ipsum...lorem ipsum...lorem ipsum...lorem ipsum... lorem ipsum... lorem ipsum... lorem ipsum... lorem ipsum... lorem ipsum... lorem ipsum... lorem ipsum...lorem ipsum...lorem ipsum...lorem ipsum...",
    reminders: ['pasta', 'huevos', 'panceta']
  }

  return (
    <Screen style={ROOT}>
      {/* <Header headerText="RecipeId" /> */}
      <Swiper showsButtons={false} paginationStyle={DOTS} dot={<View style={DOT}></View>} activeDot={<View style={ACTIVEDOT} />} height={300}>
          {RECIPE.img.map((recipe, index) => <SwiperComponent key={index} url={recipe.url} name={recipe.name} />)}
      </Swiper>
      <SingleRecipeCard title={RECIPE.title} time={RECIPE.time} description={RECIPE.description} reminders={RECIPE.reminders.join(" , ")}/>
    </Screen>
  )
}
