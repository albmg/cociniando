import React, { useContext, useState } from "react"
import { ViewStyle, Pressable, View, TextStyle } from "react-native"
import { Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import { SwiperComponent } from "../../components/swiper/swiper"
import Swiper from 'react-native-swiper'
import { TextField } from "../../components/text-field/text-field"
import { ScrollView } from "react-native-gesture-handler"
import { SwiperImageContext } from "../../context/SwiperImageContext"

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

const TEXTINPUTSTYLE: TextStyle = {
  // borderWidth: 1,
  borderColor: color.palette.lighterGrey,
  padding: 15
}

const INPUTSTYLE: ViewStyle = {
  borderRadius: 5
}

// const CHECKBOXVIEW: ViewStyle = {
//   marginTop: 5,
//   alignItems: 'center'
// }
// const CHECKBOXTITLE: TextStyle = {
//   color: color.palette.black
// }

export const RecipeDescriptionScreen = function RecipeDescriptionScreen({ navigation }) {
  const [recipeName, setRecipeName] = useState('')
  const [time, setTime] = useState('')
  const [diners, setDiners] = useState('')
  const { swiper: { swiperImages } } = useContext(SwiperImageContext)

  console.log(recipeName)
  console.log(time)
  console.log(diners)

  console.log('soy swiper en description', swiperImages)

  return (
    <View style={ROOT}>
      <ScrollView>
      {swiperImages.length > 0 && <Swiper showsButtons={false} paginationStyle={DOTS} dot={<View style={DOT} />} activeDot={<View style={ACTIVEDOT} />} height={275}>
            {swiperImages.map((recipe, index) => <SwiperComponent key={index} url={recipe} name={recipe.name} />)}
        </Swiper>}
      {swiperImages.length > 0 ? <Text style={TITLETEXT}>Añadir otra foto</Text> : <Text style={TITLETEXT}>Añadir foto de la receta</Text>}
        <View style={BUTTONCONTAINER}>
          <Pressable onPress={() => navigation.navigate('TakePhoto')}><Text style={BACKGROUND}>Acceder a la cámara</Text></Pressable>
          <Pressable onPress={() => navigation.navigate('PickPhoto')}><Text style={BACKGROUND}>Acceder al teléfono</Text></Pressable>
        </View>
        <View style={INPUTSTYLE}>
            <TextField style={TEXTINPUTSTYLE} placeholder="Añade un nombre para tu receta" onChangeText={(text) => setRecipeName(text)} />
            <TextField style={TEXTINPUTSTYLE} placeholder="Añade tiempo de elaboración" onChangeText={(text) => setTime(text)} />
            <TextField style={TEXTINPUTSTYLE} placeholder="Añade nº porciones" onChangeText={(text) => setDiners(text)}/>
        </View>
        {/* <View style={CHECKBOXVIEW}>
          <Text style={CHECKBOXTITLE}>Selecciona una categoría:</Text>
          <Checkbox text={hola} numberOfLines={5}/>
        </View> */}
      </ScrollView>
    </View>
  )
}
