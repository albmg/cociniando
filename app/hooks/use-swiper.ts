import { useState } from 'react'

export function useSwiper () {
  const [image, setImage] = useState(null)
  const [swiperImages, setSwiperImages] = useState([])

  function handleSwiperImages (image) {
    const newSwiperImages = [...swiperImages, image]
    setSwiperImages(newSwiperImages)
  }

  return { image, setImage, swiperImages, setSwiperImages, handleSwiperImages }
}
