import React from "react"
import { useSwiper } from "../hooks/use-swiper"

export const SwiperImageContext = React.createContext(null)

const StoreProvider = ({ children }) => {
  const swiper = useSwiper()
  const store = {
    swiper
  }

  return (<SwiperImageContext.Provider value={store}>{children}</SwiperImageContext.Provider>)
}

export default StoreProvider
