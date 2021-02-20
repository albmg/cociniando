import React from "react"
import { ViewStyle, View, SectionList, TextStyle } from "react-native"
import { Screen, Text } from "../../components"
import { SingleRecipeCard } from "../../components/singleRecipe-card/singleRecipe-card"
import { SwiperComponent } from "../../components/swiper/swiper"
import Swiper from 'react-native-swiper'
import { color, fontSize } from "../../theme"
import { ShowTimeCard } from "../../components/showTime-card/showTime-card"

const ROOT: ViewStyle = {
  flex: 1,
  // backgroundColor: color.palette.lighterGrey
  backgroundColor: '#e6e6e6'
}

const DOTS: ViewStyle = {
  marginBottom: '26%',
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

const SECTIONTITLE: TextStyle = {
  color: '#75c700',
  backgroundColor: color.palette.white,
  padding: 5,
  fontSize: fontSize.large,
  marginTop: 20,
  borderRadius: 5,
  textAlign: 'center'
}

const VIEWSECTION: ViewStyle = {
  // top: 50,
  flex: 1,
  margin: 3,
  borderRadius: 5,
}

const TIMESECTION: ViewStyle = {
  bottom: 25,
  height: "10%"
}

const LINESECTION = {
  backgroundColor: '#75c700',
  height: 5
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
    diners: 4,
    content: [
      {
        title: "Ingredientes",
        data: ['pasta', 'huevos', 'panceta', 'pasta', 'huevos', 'panceta', 'pasta', 'huevos', 'panceta', 'pasta', 'huevos', 'panceta']
      },
      {
        title: "Elaboración",
        data: ["Precalentar horno a 200 ºC", "Calentar agua", "Cortar verdura en juliana"]
      }
    ]
  }

  return (
    <Screen style={ROOT}>
      {/* <Header headerText="RecipeId" /> */}
      <Swiper showsButtons={false} paginationStyle={DOTS} dot={<View style={DOT} />} activeDot={<View style={ACTIVEDOT} />} height={275}>
          {RECIPE.img.map((recipe, index) => <SwiperComponent key={index} url={recipe.url} name={recipe.name} />)}
      </Swiper>
      <View style={TIMESECTION}>
        <ShowTimeCard time={RECIPE.time} diners={RECIPE.diners}/>
      </View>
      <View style={VIEWSECTION}>
        <SectionList
          sections={RECIPE.content}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => <SingleRecipeCard content={item} />}
          renderSectionHeader={({ section: { title } }) => (
            <>
            <Text style={SECTIONTITLE}>{title}</Text>
            <View style={LINESECTION}></View>
            </>
          )}
        />
      </View>
    </Screen>
  )
}
