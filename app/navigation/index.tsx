// Nothing to see here. Wait for Jorge's leassons
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import { RecipesScreen } from "../screens/recipes/recipes-screen"
import { SingleRecipeScreen } from "../screens/singleRecipe/singleRecipe-screen"
import { CreateRecipeScreen } from "../screens/createRecipe/createRecipe-screen"
import { DescriptionRecipeScreen } from "../screens/description-recipe/description-recipe-screen"
import { TakePhotoScreen } from "../screens/take-photo/take-photo-screen"
import { TakePhoto } from "../components/take-photo/take-photo"

// import Ionicons from '@expo/vector-icons/Ionicons'
import { State } from 'react-native-gesture-handler'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()
const TopTab = createMaterialTopTabNavigator()

console.log(State)

export const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Recipes" component={RecipesScreen} />
    <Stack.Screen name="SingleRecipe" component={SingleRecipeScreen} />
    <Stack.Screen name="TakePhoto" component={TakePhoto} />
  </Stack.Navigator>
)

export const TopTabNavigator = () => (
  <TopTab.Navigator>
    <Tab.Screen name="Descripción" component={DescriptionRecipeScreen} />
    <Tab.Screen name="Crear" component={CreateRecipeScreen} />
  </TopTab.Navigator>
)

export const TabNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={StackNavigator} />
      <Tab.Screen name="Crear" component={TopTabNavigator} />
    </Tab.Navigator>
  </NavigationContainer>
)
