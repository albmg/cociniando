import React, { useState, useEffect } from "react"
import { ViewStyle, Image, View, Platform, Alert, ImageStyle, Text, TextStyle } from "react-native"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import * as ImagePicker from 'expo-image-picker'
import { Button } from "../../components"
import { useSwiper } from "../../hooks/use-swiper"
import { NavigationContainer } from "@react-navigation/native"

const VIEW: ViewStyle = {
  flex: 1, alignItems: 'center', justifyContent: 'center'
}

const IMAGE: ImageStyle = {
  width: 200, height: 200
}

const BUTTONCONTAINER: ViewStyle = {
  flex: 1,
  backgroundColor: 'transparent',
  flexDirection: 'row',
  marginHorizontal: 20,
  // marginVertical: 40,
  marginBottom: 15,
  alignItems: 'center',
  justifyContent: 'space-around',
}

const TEXT: TextStyle = {
  fontSize: 18,
  color: 'white',
}

const BUTTONSTYLE = {
  marginHorizontal: 5
}

const IMAGEVIEW: ViewStyle = {
  marginTop: 15
}

export const ImagePickerScreen = function ImagePickerScreen() {
  const [hasPermission, setHasPermission] = useState(null)
  // const [image, setImage] = useState(null)
  // const [swiperImages, setSwiperImages] = useState([])
  const { image, setImage, swiperImages, handleSwiperImages } = useSwiper()
  console.log('soy image', image)
  console.log('soy swiperImages em imagePicker', swiperImages)

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestCameraRollPermissionsAsync()
        setHasPermission(status === 'granted')
        if (status !== 'granted') {
          Alert.alert('Sorry, we need camera roll permissions to make this work!')
        }
      }
    })()
  }, [])

  useEffect(() => {
    (async () => {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 0.2,
      })
      if (!result.cancelled) {
        setImage(result.uri)
      }
    })()
  }, [])

  function handleGoBack({ navigation }) {
    navigation.navigate.goBack()
  }

  // const pickImage = async () => {
  //   const result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.All,
  //     allowsEditing: true,
  //     aspect: [4, 3],
  //     quality: 0.2,
  //   })

  //   console.log(result)

  //   if (!result.cancelled) {
  //     setImage(result.uri)
  //     setSwiperImages(result.uri)
  //   }
  // }
  if (hasPermission === null) {
    return <View />
  }
  if (hasPermission === false) {
    return <Text>Sin acceso al teléfono</Text>
  }
  return (
      <View style={VIEW}>
        {/* <Button title="Seleccionar una imagen de la cámara" onPress={pickImage} /> */}
        {image && <View style={IMAGEVIEW}><Image source={{ uri: image }} style={IMAGE} /></View>}
        <View style={BUTTONCONTAINER}>
          <Button style={BUTTONSTYLE} onPress={() => handleSwiperImages(image)}><Text style={TEXT}>Añadir</Text></Button>
          <Button style={BUTTONSTYLE} onPress={() => setImage('')}><Text style={TEXT}>Cancelar</Text></Button>
          <Button style={BUTTONSTYLE} onPress={() => handleGoBack}><Text style={TEXT}>Go back</Text></Button>
        </View>
      </View>
  )
}
