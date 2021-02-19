import React from "react"
import { ViewStyle, FlatList } from "react-native"
import { Header, Screen } from "../../components"
import { RecipeCard } from "../../components/recipe-card/recipe-card"

// import { useQuery } from 'react-query'

const ROOT: ViewStyle = {
  flex: 1,
}

const CARD_STYLE = {
  marginVertical: 8,
  width: '48%',
}
const CARD_STYLE_THIRD = {
  marginVertical: 8,
  width: '100%',
}

const COLUMNWRAPPER: ViewStyle = {
  flexWrap: 'wrap',
  flex: 1,
  justifyContent: 'center',
}

const STYLEHEADER = {
  height: '20%',
  bottom: 70
}

export const RecipesScreen = function RecipesScreen() {
  // const { isLoading, isError, data, error } = useQuery('recipes', getLastRecipes)

  // if (isLoading) {
  //   return <Text>Loading...</Text>
  // }

  // if (isError) {
  //   return <Text>Error: {error}</Text>
  // }

  // const recipes = data.data

  const RECIPES = [
    {
      title: "macarrones",
      url: "https://cdn.cookmonkeys.es/recetas/medium/macarrones-a-la-carbonara-en-thermomix-13776.jpg",
      time: 2
    }
  ]

  function renderItem ({ item, index }) {
    // console.log(index)
    const cardStyle = index % 3 === 2 ? CARD_STYLE_THIRD : CARD_STYLE
    return <RecipeCard style={cardStyle} url={item.url} title={item.title} time={item.time} onPress={() => console.log('hola')}></RecipeCard>
  }

  return (
    <Screen style={ROOT}>
      <Header style={STYLEHEADER} headerText="Countries" />
      <FlatList
        keyExtractor={(item) => item.id}
        data={RECIPES}
        renderItem={renderItem}
        numColumns={3}
        columnWrapperStyle={COLUMNWRAPPER}
      />
    </Screen>
  )
}
