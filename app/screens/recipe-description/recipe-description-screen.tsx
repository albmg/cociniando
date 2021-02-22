import React, { useState } from "react"
import { ViewStyle, Pressable, View, TextStyle } from "react-native"
import { Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color, fontSize } from "../../theme"
import { SwiperComponent } from "../../components/swiper/swiper"
import Swiper from 'react-native-swiper'
import { TextField } from "../../components/text-field/text-field"
import { ScrollView } from "react-native-gesture-handler"
import { useSwiper } from "../../hooks/use-swiper"

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

const BACKGROUND: TextStyle = {
  backgroundColor: 'purple',
  color: color.palette.white,
  padding: 5,
  marginTop: 20
}

const TITLETEXT: TextStyle = {
  color: color.palette.black,
  textAlign: 'center',
  marginTop: 15
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

const INPUTSTYLE: ViewStyle = {
  // borderWidth: 1,
  borderColor: color.palette.lighterGrey,
  padding: 15
}

export const RecipeDescriptionScreen = function RecipeDescriptionScreen({ navigation }) {
  const [recipeName, setRecipeName] = useState('null')
  const [time, setTime] = useState('null')
  const [diners, setDiners] = useState('null')

  const { swiperImages } = useSwiper()
  console.log('soy swiper en description', swiperImages)

  // const swiperImages = [{ name: "hola", url: "file:/data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252FMyApp-f591c2c7-5f73-4998-a39b-2183e3967778/ImagePicker/a375bc49-893a-4998-a1a8-7de0161fc635.jpg" }, { name: "hola", url: "file:/data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252FMyApp-f591c2c7-5f73-4998-a39b-2183e3967778/ImagePicker/a375bc49-893a-4998-a1a8-7de0161fc635.jpg" }]
  return (
    <View style={ROOT}>
      <ScrollView>
      {swiperImages.length > 0 && <Swiper showsButtons={false} paginationStyle={DOTS} dot={<View style={DOT} />} activeDot={<View style={ACTIVEDOT} />} height={275}>
            {swiperImages.map((recipe, index) => <SwiperComponent key={index} url={recipe.url} name={recipe.name} />)}
        </Swiper>}
      {swiperImages.length > 0 ? <Text style={TITLETEXT}>Añadir otra foto</Text> : <Text style={TITLETEXT}>Añadir foto de la receta</Text>}
        <View style={BUTTONCONTAINER}>
          <Pressable onPress={() => navigation.navigate('TakePhoto')}><Text style={BACKGROUND}>Acceder a la cámara</Text></Pressable>
          <Pressable onPress={() => navigation.navigate('PickPhoto')}><Text style={BACKGROUND}>Acceder al teléfono</Text></Pressable>
        </View>
        <View>
            <TextField style={INPUTSTYLE} placeholder="Añade un nombre para tu receta" onChangeText={(text) => setRecipeName(text)} />
            <TextField style={INPUTSTYLE} placeholder="Añade tiempo de elaboración" onChangeText={(text) => setTime(text)} />
            <TextField style={INPUTSTYLE} placeholder="Añade nº porciones" onChangeText={(text) => setDiners(text)}/>
        </View>
      </ScrollView>
    </View>
  )
}
