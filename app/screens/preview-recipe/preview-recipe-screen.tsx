import React, { useContext } from "react"
import { TextStyle, ViewStyle, View, SectionList } from "react-native"
import { Button, Screen, Text } from "../../components"
import { color, fontSize } from "../../theme"
import { PreviewRecipeContext } from "../../context/previewRecipeContext"

import { SingleRecipeCard } from "../../components/singleRecipe-card/singleRecipe-card"
import { SwiperComponent } from "../../components/swiper/swiper"
import Swiper from 'react-native-swiper'

import { ShowTimeCard } from "../../components/showTime-card/showTime-card"

const ROOT: ViewStyle = {
  // backgroundColor: color.palette.black,
  flex: 1,
}

const TEXT: TextStyle = {
  color: color.palette.black
}

const DOTS: ViewStyle = {
  marginBottom: '18%',
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
  bottom: "10%",
}

const TIMESECTION: ViewStyle = {
  bottom: "10%",
  height: "10%"
}

const LINESECTION = {
  backgroundColor: '#75c700',
  height: 5
}

export const PreviewRecipeScreen = function PreviewRecipeScreen() {
  const {
    recipeName,
    time,
    diners,
    ingredients,
    making,
    swiper: { swiperImages }
  } = useContext(PreviewRecipeContext)

  console.log(making)

  return (
    <Screen style={ROOT} preset="scroll">
      <Swiper showsButtons={false} paginationStyle={DOTS} dot={<View style={DOT} />} activeDot={<View style={ACTIVEDOT} />} height={275}>
          {/* {RECIPE.img.map((recipe, index) => <SwiperComponent key={index} url={recipe.url} name={recipe.name} />)} */}
          {swiperImages.map((recipe, index) => <SwiperComponent key={index} url={recipe} name={recipe} />)}
      </Swiper>
      <View style={TIMESECTION}>
        <ShowTimeCard time={time} diners={diners}/>
      </View>
      <View style={VIEWSECTION}>
        <SectionList
          sections={ [{ title: "Ingredientes", data: ingredients }, { title: 'Elaboración', data: making }]}
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
      <Button><Text>Enviar</Text></Button>
    </Screen>
  )
}
