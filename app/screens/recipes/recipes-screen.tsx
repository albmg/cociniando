import React from "react"
import { ViewStyle, FlatList, Text, TextStyle } from "react-native"
import { Header, Screen } from "../../components"
import { RecipeCard } from "../../components/recipe-card/recipe-card"
import { color, typography, fontSize } from "../../theme"

// import { useQuery } from 'react-query'

const ROOT: ViewStyle = {
  flex: 1,
  alignItems: 'center'
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

const TEXTSTYLE: TextStyle = {
  fontFamily: typography.primary,
  fontSize: fontSize.large,
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
      time: 20
    },
    {
      title: "ensalada",
      url: "https://cdn.cookmonkeys.es/recetas/medium/ensalada-arlesienne-8799.jpeg",
      time: 10
    },
    {
      title: "queque",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAE_HaWhtpD9luX5ngy8z_5Pbg1GjLNXfQ9w&usqp=CAU",
      time: 60
    },
    {
      title: "macarrones",
      url: "https://cdn.cookmonkeys.es/recetas/medium/macarrones-a-la-carbonara-en-thermomix-13776.jpg",
      time: 20
    },
    {
      title: "ensalada",
      url: "https://cdn.cookmonkeys.es/recetas/medium/ensalada-arlesienne-8799.jpeg",
      time: 10
    },
    {
      title: "queque",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAE_HaWhtpD9luX5ngy8z_5Pbg1GjLNXfQ9w&usqp=CAU",
      time: 60
    }
  ]

  function renderItem ({ item, index }) {
    // console.log(index)
    const cardStyle = index % 3 === 2 ? CARD_STYLE_THIRD : CARD_STYLE
    return <RecipeCard style={cardStyle} url={item.url} title={item.title} time={item.time} onPress={() => console.log('hola')}></RecipeCard>
  }

  return (
    <Screen style={ROOT}>
      <Header style={STYLEHEADER} headerText="Recipes" />
      <Text style={TEXTSTYLE}>Últimas recetas</Text>
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
