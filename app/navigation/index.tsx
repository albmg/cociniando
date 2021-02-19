// Nothing to see here. Wait for Jorge's leassons
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
// import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { RecipesScreen } from "../screens/recipes/recipes-screen"
import { SingleRecipeScreen } from "../screens/singleRecipe/singleRecipe-screen"

// import Ionicons from '@expo/vector-icons/Ionicons'
import { State } from 'react-native-gesture-handler'

// const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

console.log(State)

export const TabNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={RecipesScreen} />
      <Tab.Screen name="Recipe" component={SingleRecipeScreen} />
    </Tab.Navigator>
  </NavigationContainer>
)
