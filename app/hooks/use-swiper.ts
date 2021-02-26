import { useState } from 'react'

export function useSwiper () {
  const [image, setImage] = useState(null)
  const [imageUri, setImageUri] = useState(null)
  const [swiperImages, setSwiperImages] = useState([])

  // const goTo = ({ navigation }) => navigation.navigate('Descripción')

  function handleSwiperImages (image) {
    const newSwiperImages = [...swiperImages, image]
    setSwiperImages(newSwiperImages)
    setImage(null)
  }

  function handleSwiperCameraImages (imageUri) {
    const newSwiperImages = [...swiperImages, imageUri]
    setSwiperImages(newSwiperImages)
  }

  return { image, setImage, imageUri, setImageUri, swiperImages, setSwiperImages, handleSwiperImages, handleSwiperCameraImages }
}
