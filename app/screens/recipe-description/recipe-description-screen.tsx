import React, { useContext } from "react"
import { ViewStyle, Pressable, View, TextStyle } from "react-native"
import { Text, Screen } from "../../components"

import { color, fontSize } from "../../theme"
import { SwiperComponent } from "../../components/swiper/swiper"
import Swiper from 'react-native-swiper'
import { TextField } from "../../components/text-field/text-field"
import { ScrollView } from "react-native-gesture-handler"
import { PreviewRecipeContext } from "../../context/previewRecipeContext"

const ROOT: ViewStyle = {
  // backgroundColor: color.palette.black,
  flex: 1,
}

const BUTTONCONTAINER: ViewStyle = {
  flex: 1,
  backgroundColor: 'transparent',
  flexDirection: 'row',
  marginHorizontal: 20,
  marginVertical: 10,
  alignItems: 'flex-start',
  justifyContent: 'space-around',
}

const TEXTCAMERABUTTON: TextStyle = {
  color: color.palette.white,
  padding: 5,
  fontWeight: 'bold'
}

const CAMERABUTTON = {
  backgroundColor: 'orange',
  borderRadius: 5,
  padding: 10
}

const TITLETEXT: TextStyle = {
  color: color.palette.black,
  textAlign: 'center',
  marginTop: 15,
  fontSize: fontSize.large
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

const TEXTINPUTSTYLE: TextStyle = {
  // borderWidth: 1,
  borderColor: color.palette.lighterGrey,
  padding: 15
}

const INPUTSTYLE: ViewStyle = {
  borderRadius: 5
}

export const RecipeDescriptionScreen = function RecipeDescriptionScreen({ navigation }) {
  const {
    setRecipeName,
    setTime,
    setDiners,
    swiper: { swiperImages }
  } = useContext(PreviewRecipeContext)

  return (
    <Screen style={ROOT}>
       <View style={ROOT}>
          <ScrollView>
          {swiperImages.length > 0 && <Swiper showsButtons={false} paginationStyle={DOTS} dot={<View style={DOT} />} activeDot={<View style={ACTIVEDOT} />} height={275}>
                {swiperImages.map((item, index) => <SwiperComponent key={index} url={item} name={item.name}/>)}
            </Swiper>}
          {swiperImages.length > 0 ? <Text style={TITLETEXT}>Añadir otra foto</Text> : <Text style={TITLETEXT}>Añadir foto de la receta</Text>}
            <View style={BUTTONCONTAINER}>
              <Pressable style={CAMERABUTTON} onPress={() => navigation.navigate('TakePhoto')}><Text style={TEXTCAMERABUTTON}>Acceder a la cámara</Text></Pressable>
              <Pressable style={CAMERABUTTON} onPress={() => navigation.navigate('PickPhoto')}><Text style={TEXTCAMERABUTTON}>Acceder al teléfono</Text></Pressable>
            </View>
            <View style={INPUTSTYLE}>
                <TextField style={TEXTINPUTSTYLE} placeholder="Añade un nombre para tu receta" onChangeText={(text) => setRecipeName(text)} />
                <TextField style={TEXTINPUTSTYLE} placeholder="Añade tiempo de elaboración" onChangeText={(text) => setTime(text)} />
                <TextField style={TEXTINPUTSTYLE} placeholder="Añade nº porciones" onChangeText={(text) => setDiners(text)}/>
            </View>
          </ScrollView>
        </View>
    </Screen>
  )
}
