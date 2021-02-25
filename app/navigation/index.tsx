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
import { PreviewRecipeScreen } from "../screens/preview-recipe/preview-recipe-screen"
import { RegisterScreen } from "../screens/register/register-screen"
import { LoginScreen } from "../screens/login/login-screen"
import { UserScreen } from '../screens/user/user-screen'
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'

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
  <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
    <Stack.Screen name="Recipes" component={RecipesScreen} />
    <Stack.Screen name="SingleRecipe" component={SingleRecipeScreen} />
    <Stack.Screen name="TakePhoto" component={TakePhotoScreen} />
    <Stack.Screen name="PickPhoto" component={ImagePickerScreen} />
  </Stack.Navigator>
)

export const TopTabNavigator = () => (
  <TopTab.Navigator
    tabBarOptions= {{
      activeTintColor: '#75c700',
      labelStyle: { fontSize: 9 },
      inactiveTintColor: 'black',
      showIcon: true,
    }}
    >
    <Tab.Screen name="Descripción" component={RecipeDescriptionScreen}/>
    <Tab.Screen name="Ingredientes" component={RecipeIngredientsScreen} />
    <Tab.Screen name="Elaboración" component={RecipeInstructionsScreen} />
    <Tab.Screen name="Previsualizar" component={PreviewRecipeScreen} />
  </TopTab.Navigator>
)

export const TabNavigator = (props) => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // eslint-disable-next-line react/display-name
        tabBarIcon: ({ color }) => {
          let iconName: string

          if (route.name === 'Home') {
            iconName = 'home'
          } else if (route.name === 'Crear') {
            iconName = 'add'
          } else if (route.name === 'User' || 'Account') {
            iconName = 'person'
          }

          return <MaterialIcons name={iconName} size={24} color={color} />
        },
      })}
    tabBarOptions={{
      activeTintColor: '#75c700',
      inactiveTintColor: 'gray'
    }}
      >
      <Tab.Screen name="Home" component={StackNavigator}/>
      {props.user && <Tab.Screen name="Crear" component={TopTabNavigator} />}
      {props.user ? <Tab.Screen name="User" component={UserScreen}/> : <Tab.Screen name="Account" component={AuthNavigator} />}
    </Tab.Navigator>
  </NavigationContainer>
)
