import React, { useState } from "react"
import { useSwiper } from "../hooks/use-swiper"

export const PreviewRecipeContext = React.createContext(null)

const PreviewRecipeProvider = ({ children }) => {
  const [recipeName, setRecipeName] = useState('')
  const [time, setTime] = useState('')
  const [diners, setDiners] = useState('')
  const [ingredients, setIngredients] = useState([])
  const [making, setMaking] = useState([])
  const swiper = useSwiper()

  const store = {
    recipeName,
    setRecipeName,
    time,
    setTime,
    diners,
    setDiners,
    ingredients,
    setIngredients,
    making,
    setMaking,
    swiper
  }

  return (<PreviewRecipeContext.Provider value={store}>{children}</PreviewRecipeContext.Provider>)
}

export default PreviewRecipeProvider
