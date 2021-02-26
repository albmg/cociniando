import React, { useState, useEffect, useContext } from "react"
import { ViewStyle, Image, View, Platform, Alert, ImageStyle, Text, TextStyle } from "react-native"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import * as ImagePicker from 'expo-image-picker'
import { Button } from "../../components"
import * as firebase from 'firebase'
import { TextInput } from "react-native-gesture-handler"
import { color, fontSize } from "../../theme"
import { PreviewRecipeContext } from "../../context/previewRecipeContext"

const VIEW: ViewStyle = {
  flex: 1,
  justifyContent: 'center'
}

const IMAGE: ImageStyle = {
  width: 200, height: 200
}

const BUTTONCONTAINER: ViewStyle = {
  flex: 1,
  backgroundColor: 'transparent',
  flexDirection: 'row',
  marginHorizontal: 40,
  // marginVertical: 40,
  marginBottom: 15,
  alignItems: 'center',
  justifyContent: 'center',
}

const TEXT: TextStyle = {
  fontSize: 18,
  color: 'white',
  textAlign: 'center',
  // marginTop: 15
}

const TEXTPICKBUTTON: TextStyle = {
  fontSize: 18,
  color: 'white',
  textAlign: 'center',
  fontWeight: 'bold'
}

const TEXTIMAGE: TextStyle = {
  fontSize: fontSize.large,
  color: color.palette.black,
  marginTop: 15,
  textAlign: 'center'
}

const BUTTONSTYLE = {
  width: "80%",
  backgroundColor: '#5bc0de',
  marginTop: 25
}

const IMAGEVIEW: ViewStyle = {
  marginTop: 15,
  justifyContent: 'center',
  alignItems: 'center'
}

const PICKBUTTONSTYLE = {
  marginHorizontal: 5,
  marginTop: 15,
  backgroundColor: 'orange',
  width: "80%"
}

const VIEWSELECT: ViewStyle = {
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 40
}

const INPUT = {
  marginTop: 15,
  borderColor: color.palette.lighterGrey,
  padding: 10,
  borderWidth: 1,
  borderRadius: 5,
  width: "80%",
  // marginBottom: 15
}

const PREVIEW: ViewStyle = {
  flex: 1
}

export const ImagePickerScreen = function ImagePickerScreen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null)
  const [imageDescription, setImageDescription] = useState('')
  const { swiper: { image, setImage, swiperImages, handleSwiperImages } } = useContext(PreviewRecipeContext)

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

  const uploadImage = async (uri, imageName) => {
    const response = await fetch(uri)
    const blob = await response.blob()

    const ref = firebase.storage().ref().child(`images/${imageName} `)
    const snapshot = await ref.put(blob)
    return snapshot.ref.getDownloadURL().then(function(downloadURL) {
      console.log('FIle available at', downloadURL)
      setImage(downloadURL)
    })
  }

  const goBack = () => {
    navigation.navigate("Descripción")
  }

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.2,
    })

    // console.log(result.uri)

    if (!result.cancelled) {
      uploadImage(result.uri, imageDescription)

        .then(() => {
          console.log('it work')
        })
        .catch(error => {
          console.log('it doesnt work')
          console.log(error)
        })
    }
  }
  if (hasPermission === null) {
    return <View />
  }
  if (hasPermission === false) {
    return <Text>Sin acceso al teléfono</Text>
  }
  return (
      <View style={VIEW}>
        {image &&
        <View style={PREVIEW}>
          <View style={IMAGEVIEW}>
            <Image source={{ uri: image }} style={IMAGE} />
            <Text style={TEXTIMAGE}>{imageDescription}</Text>
          </View>
          <View style={BUTTONCONTAINER}>
            <Button style={BUTTONSTYLE} onPress={() => handleSwiperImages(image)}><Text style={TEXT}>Añadir</Text></Button>
            {/* <Button style={BUTTONSTYLE} onPress={() => deleteImage}><Text style={TEXT}>Cancelar</Text></Button> */}
          </View>
        </View>}
        <View style={VIEWSELECT}>
          <TextInput style={INPUT} onChangeText={(text) => setImageDescription(text)} placeholder={'Añade un nombre a la foto'}></TextInput>
          <Button style={PICKBUTTONSTYLE} onPress={pickImage}>
            {!image && swiperImages.length === 0 ? <Text style={TEXTPICKBUTTON}>Seleccionar una imagen de la cámara</Text>
              : <Text style={TEXTPICKBUTTON}>Seleccionar otra imagen</Text> }
          </Button>
          <Button style={BUTTONSTYLE} onPress={() => goBack()}><Text style={TEXT}>Volver</Text></Button>
        </View>
      </View>
  )
}
