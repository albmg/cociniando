import { useState, useEffect } from 'react'

export function useSwiper () {
  const [image, setImage] = useState(null)
  const [swiperImages, setSwiperImages] = useState([])

  function handleSwiperImages (image) {
    setSwiperImages(image)
  }

  return { image, setImage, swiperImages, setSwiperImages, handleSwiperImages }
}
