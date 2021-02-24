// Nothing to see here. Wait for Jorge's leassons
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import { RecipesScreen } from "../screens/recipes/recipes-screen"
import { SingleRecipeScreen } from "../screens/singleRecipe/singleRecipe-screen"
import { RecipeIngredientsScreen } from "../screens/recipe-ingredientes/recipe-ingredients-screen"
import { RecipeDescriptionScreen } from "../screens/recipe-description/recipe-description-screen"
import { TakePhotoScreen } from "../screens/take-photo/take-photo-screen"
import { ImagePickerScreen } from "../screens/image-picker/image-picker-screen"
import { RecipeInstructionsScreen } from "../screens/recipe-instructions/recipe-instructions-screen"
import { RegisterScreen } from "../screens/register/register-screen"
import { LoginScreen } from "../screens/login/login-screen"

// import Ionicons from '@expo/vector-icons/Ionicons'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()
const TopTab = createMaterialTopTabNavigator()
const Auth = createStackNavigator()

export const AuthNavigator = () => (
  <Auth.Navigator>
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="SignUp" component={RegisterScreen} />
  </Auth.Navigator>
)

export const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Recipes" component={RecipesScreen} />
    <Stack.Screen name="SingleRecipe" component={SingleRecipeScreen} />
    <Stack.Screen name="TakePhoto" component={TakePhotoScreen} />
    <Stack.Screen name="PickPhoto" component={ImagePickerScreen} />
  </Stack.Navigator>
)

export const TopTabNavigator = () => (
  <TopTab.Navigator>
    <Tab.Screen name="Descripción" component={RecipeDescriptionScreen} />
    <Tab.Screen name="Ingredientes" component={RecipeIngredientsScreen} />
    <Tab.Screen name="Elaboración" component={RecipeInstructionsScreen} />
  </TopTab.Navigator>
)

export const TabNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={StackNavigator} />
      <Tab.Screen name="Crear" component={TopTabNavigator} />
      <Tab.Screen name="Account" component={AuthNavigator} />
    </Tab.Navigator>
  </NavigationContainer>
)
