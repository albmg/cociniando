import React, { useState, useEffect, useRef } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, Text, View, TextStyle, ImageStyle, ImageBackground } from "react-native"
import { Camera } from 'expo-camera'
import { Button } from "../../components"

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
  fontSize: 18,
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

export const TakePhoto = observer(function TakePhoto() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()

  const [hasPermission, setHasPermission] = useState(null)
  const [type, setType] = useState(Camera.Constants.Type.back)
  const [imageUri, setImageUri] = useState('')
  const cameraRef = useRef<Camera>(null)

  async function takePhoto() {
    // console.tron.logImportant('not working')
    const { base64, width, height, uri } = await cameraRef.current.takePictureAsync({ quality: 1, base64: true })
    setImageUri(uri)
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
    return <Text>No access to camera</Text>
  }
  if (imageUri) {
    return (
      <View style={IMAGECONTAINER}>
        <ImageBackground source={{ uri: imageUri }} style={IMAGE}>
          <View style={ BUTTONCONTAINER}>
            <Button onPress={() => setImageUri('')}>
              <Text>Repeat</Text>
            </Button>
            <Button>
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
         <Button onPress={flipCamera}>
           <Text style={TEXT}>Flip camera</Text>
         </Button>
         <Button onPress={takePhoto}>
           <Text style={TEXT}>Take photo</Text>
         </Button>
       </View>
     </Camera>
   </View>
  )
})
