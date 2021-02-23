import "./i18n"
import "./utils/ignore-warnings"
import React, { useEffect, useState } from "react"

import { SafeAreaProvider, initialWindowMetrics } from "react-native-safe-area-context"
import { initFonts } from "./theme/fonts" // expo

import { TabNavigator } from "./navigation"

import { ToggleStorybook } from "../storybook/toggle-storybook"

import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'

import StoreProvider from "./context/SwiperImageContext"

import { enableScreens } from "react-native-screens"

import * as firebase from 'firebase'
import { firebaseConfig } from './services/setup-firebase'
import { useRegister } from './hooks/use-auth'
import { LoadingScreen } from './screens/loading/loading-screen'

enableScreens()

export const NAVIGATION_PERSISTENCE_KEY = "NAVIGATION_STATE"

const queryClient = new QueryClient()

/**
 * This is the root component of our app.
 */
function App() {
  const { setError, setUser, token } = useRegister()
  const [loading, setLoading] = useState(true)

  // Kick off initial async loading actions, like loading fonts and RootStore
  useEffect(() => {
    (async () => {
      await initFonts() // expo
    })()
  }, [])

  // Before we show the app, we have to wait for our state to be ready.
  // In the meantime, don't render anything. This will be the background
  // color set in native by rootView's background color. You can replace
  // with your own loading component if you wish.

  useEffect(() => {
    firebase.apps.length === 0 && firebase.initializeApp(firebaseConfig)
    firebase.auth().onAuthStateChanged(user => {
      if (user != null) {
        console.log('We are authenticated now!', user.providerData)
        setUser({ uid: user.uid, displayName: user.displayName, email: user.email })
        setError('')
      }
      setLoading(false)
    })
  }, [])
  if (loading) {
    return <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <LoadingScreen />
    </SafeAreaProvider>
  }

  // otherwise, we're ready to render the app
  return (
    <ToggleStorybook>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <QueryClientProvider client={queryClient}>
          <StoreProvider>
            <TabNavigator />
          </StoreProvider>
        </QueryClientProvider>
        </SafeAreaProvider>
    </ToggleStorybook>
  )
}

export default App
