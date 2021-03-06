import React, { useState, useEffect, useRef, useContext } from "react"
import { ViewStyle, Text, View, TextStyle, ImageStyle, ImageBackground } from "react-native"
import { Camera } from 'expo-camera'
import { Button } from "../../components"
import * as firebase from 'firebase'
import { PreviewRecipeContext } from "../../context/previewRecipeContext"
import { FontAwesome } from '@expo/vector-icons'

const CONTAINER: ViewStyle = {
  flex: 1,
}

const CAMERA = {
  flex: 1
}

const BUTTONCONTAINER: ViewStyle = {
  flex: 1,
  backgroundColor: 'transparent',
  flexDirection: 'row',
  marginHorizontal: 20,
  marginVertical: 40,
  alignItems: 'flex-end',
  justifyContent: 'space-around',
}

const TEXT: TextStyle = {
  fontSize: 16,
  color: 'white',
}

const IMAGECONTAINER: ViewStyle = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
}

const IMAGE: ImageStyle = {
  width: "93%",
  height: "64%",
}

const FABUTTON = {
  backgroundColor: 'orange',

}
export const TakePhotoScreen = function TakePhotoScreen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null)
  const [type, setType] = useState(Camera.Constants.Type.back)
  // const [imageUri, setImageUri] = useState('')
  const cameraRef = useRef<Camera>(null)
  const { swiper: { imageUri, setImageUri, swiperImages, handleSwiperCameraImages } } = useContext(PreviewRecipeContext)

  const uploadImage = async (uri, imageName) => {
    const response = await fetch(uri)
    const blob = await response.blob()

    const ref = firebase.storage().ref().child(`images/${imageName}`)
    const snapshot = await ref.put(blob)
    return snapshot.ref.getDownloadURL().then(function(downloadURL) {
      console.log('FIle available at', downloadURL)
      setImageUri(downloadURL)
    })
  }

  const goBack = () => {
    navigation.navigate("Descripción")
  }

  async function takePhoto() {
    // console.tron.logImportant('not working')
    const { base64, width, height, uri } = await cameraRef.current.takePictureAsync({ quality: 1, base64: true })
    uploadImage(uri, 'pruebita')
    // setImageUri(uri)
  }

  async function flipCamera() {
    setType(type === Camera.Constants.Type.back
      ? Camera.Constants.Type.front
      : Camera.Constants.Type.back)
  }

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync()
      setHasPermission(status === 'granted')
    })()
  }, [])

  if (hasPermission === null) {
    return <View />
  }
  if (hasPermission === false) {
    return <Text>Sin acceso a la cámara</Text>
  }
  if (imageUri) {
    return (
      <View style={IMAGECONTAINER}>
        <ImageBackground source={{ uri: imageUri }} style={IMAGE}>
          <View style={ BUTTONCONTAINER}>
            <Button onPress={() => setImageUri('')}>
              <Text>Repeat</Text>
            </Button>
            <Button onPress={() => handleSwiperCameraImages(imageUri)}>
              <Text>Upload</Text>
            </Button>
          </View>
        </ImageBackground>
      </View>
    )
  }
  return (
    <View style={CONTAINER}>
      <Camera ref={cameraRef} style={CAMERA} type={type} >
        <View style={BUTTONCONTAINER}>
          <FontAwesome.Button style={FABUTTON} name="refresh" onPress={flipCamera}>
            <Text style={TEXT}>Flip camera</Text>
          </FontAwesome.Button>
          <FontAwesome.Button style={FABUTTON} name="camera" onPress={takePhoto}>
            <Text style={TEXT}>Take photo</Text>
          </FontAwesome.Button>
          <FontAwesome.Button name="undo" onPress={() => goBack()}>
            <Text style={TEXT}>Volver</Text>
          </FontAwesome.Button>
        </View>
      </Camera>
    </View>

  )
}
