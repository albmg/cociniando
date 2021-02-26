import React, { useEffect, useState } from "react"
import { ViewStyle, FlatList, Text, TextStyle } from "react-native"
import { Header, Screen } from "../../components"
import { RecipeCard } from "../../components/recipe-card/recipe-card"
import { typography, fontSize } from "../../theme"
// import { useQuery } from 'react-query'
import firebase from "firebase"
import 'firebase/firestore'

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

export const RecipesScreen = function RecipesScreen({ navigation }) {
  // const { isLoading, isError, data, error } = useQuery('recipes', getLastRecipes)

  // if (isLoading) {
  //   return <Text>Loading...</Text>
  // }

  // if (isError) {
  //   return <Text>Error: {error}</Text>
  // }

  // const recipes = data.data

  // const [recipes, setRecipes] = useState([])
  // const db = firebase.firestore()

  // const fetchRecipes = async () => {
  //   const response = db.collection('recipes')
  //   const data = await response.get()
  //   data.docs.forEach(item => {
  //     setRecipes([...recipes, item.data()])
  //     // console.log('soy item.data() --->', item.data())
  //   })
  // }

  // useEffect(() => {
  //   fetchRecipes()
  // }, [])

  // console.log('soy recipes from firebase-->', recipes)

  const RECIPES = [
    {
      title: "macarrones",
      images: [
        {
          url: "https://cdn.cookmonkeys.es/recetas/medium/macarrones-a-la-carbonara-en-thermomix-13776.jpg",
          name: "macarrones"
        },
        {
          url: "https://cdn6.recetasdeescandalo.com/wp-content/uploads/2020/04/Macarrones-con-atun-y-tomate.-Receta-de-pasta-rica-y-facil-para-triunfar.jpg",
          name: "macarrones"
        }, {
          url: "https://live.mrf.io/statics/i/ps/www.cocinacaserayfacil.net/wp-content/uploads/2018/08/Macarrones-con-tomate-y-chorizo.jpg?width=1200&enable=upscale",
          name: "macarrones"
        },
      ],
      time: 20,
      id: 1
    },
    {
      title: "ensalada",
      images: [
        {
          url: "https://cdn.cookmonkeys.es/recetas/medium/ensalada-arlesienne-8799.jpeg",
          name: "ensalada"
        }
      ],
      time: 10,
      id: 2
    },
    {
      title: "queque",
      images: [
        {
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAE_HaWhtpD9luX5ngy8z_5Pbg1GjLNXfQ9w&usqp=CAU",
          name: "queque"
        }
      ],
      time: 60,
      id: 3
    },
    {
      title: "carne",
      images: [
        {
          url: "https://firebasestorage.googleapis.com/v0/b/cociniando.appspot.com/o/images%2FPrimera%20?alt=media&token=00b1d7c6-d18f-4f16-ac31-e8555c1bd7b7",
          name: "carne"
        }
      ],
      time: 20,
      id: 4
    },
    {
      title: "pescado",
      images: [
        {
          url: "https://firebasestorage.googleapis.com/v0/b/cociniando.appspot.com/o/images%2FSegunda%20?alt=media&token=8ce9ed93-64d9-4efb-b5a0-975dab784073",
          name: "pescado"
        }
      ],
      time: 10,
      id: 5
    },
    {
      title: "papas arrugadas",
      images: [
        {
          url: "https://www.hola.com/imagenes/cocina/recetas/20200211160355/receta-papas-arrugadas-mojos/0-781-763/papas-age-m.jpg",
          name: "papas arrugadas"
        }
      ],
      time: 60,
      id: 6
    }
  ]

  function renderItem ({ item, index }) {
    const cardStyle = index % 3 === 2 ? CARD_STYLE_THIRD : CARD_STYLE
    return <RecipeCard
            style={cardStyle}
            id={item.id}
            url={item.images[0].url}
            // title={item.title}
            // time={item.time}
            onPress={() => navigation.navigate('SingleRecipe', { recipeId: item.id, images: item.images }) }>
            </RecipeCard>
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
