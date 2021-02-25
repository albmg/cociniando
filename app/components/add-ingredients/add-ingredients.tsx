import React, { useState } from "react"
import { TextStyle, View, ViewStyle, Alert, Modal, Pressable, ScrollView } from "react-native"
import { observer } from "mobx-react-lite"
import { color, fontSize } from "../../theme"
import { Text } from "../"
import { AddIngredientsProps } from "./addIngredients.props"

const CENTEREDVIEWVIEw: ViewStyle = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  marginTop: 20,
  marginBottom: 35
}

const MODALVIEW: ViewStyle = {
  margin: 20,
  backgroundColor: "white",
  borderRadius: 20,
  padding: 35,
  alignItems: "center",
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5,
  width: "80%",
  height: "80%"
}

const BUTTON = {
  borderRadius: 10,
  padding: 10,
  elevation: 2,
  height: 40,
  marginTop: 15
}

const BUTTONOPEN = {
  backgroundColor: '#75c700',
}

const BUTTONACCEPT = {
  backgroundColor: color.palette.orange,
}

const BUTTONCLOSE = {
  backgroundColor: 'red'
}

const TEXTSTYLE: TextStyle = {
  color: "white",
  fontWeight: "bold",
  textAlign: "center",
}

const TEXTSTYLE2: TextStyle = {
  color: "white",
  fontWeight: "bold",
  textAlign: "center",
  padding: 15,
}

const MODALTEXT: TextStyle = {
  marginBottom: 15,
  textAlign: "center",
  color: '#75c700',
  fontSize: fontSize.medium
}

const VISTA: ViewStyle = {
  width: 250
}

/**
 * Describe your component here
 */
export const AddIngredients = observer(function AddIngredients(props: AddIngredientsProps) {
  const { style, ingredients, setIngredients } = props
  const [modalVisible, setModalVisible] = useState(false)

  const DATA = [
    {
      id: 1,
      name: "pasta"
    },
    {
      id: 2,
      name: "huevos"
    },
    {
      id: 3,
      name: "harina"
    },
    {
      id: 4,
      name: "azúcar"
    },
    {
      id: 5,
      name: "aceite"
    },
    {
      id: 6,
      name: "manzana"
    },
    {
      id: 7,
      name: "aguacate"
    },
    {
      id: 8,
      name: "jamón"
    }
  ]

  return (
    <View style={CENTEREDVIEWVIEw}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.")
          setModalVisible(!modalVisible)
        }}
      >
        <View style={CENTEREDVIEWVIEw}>
          <View style={MODALVIEW}>
            <Text style={MODALTEXT}>Ingredientes</Text>
            <ScrollView >
              <View style={VISTA}>{DATA.map((item) =>
                <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? 'green' : '#75c700', margin: 5, borderRadius: 5 }]}
                           key={item.id}
                           onPress={() => { !ingredients.includes(item.name) ? setIngredients([...ingredients, item.name]) : Alert.alert(`Ingrediente ${item.name} ya ha sido añadido`) }}>
                  <Text style={TEXTSTYLE2}>{item.name}</Text>
                </Pressable>)}
              </View>
            </ScrollView>
            <Pressable
              style={[BUTTON, BUTTONACCEPT]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={TEXTSTYLE}>Aceptar</Text>
            </Pressable>
            <Pressable style={[BUTTON, BUTTONCLOSE]} onPress={() => setIngredients('')}><Text>Reset</Text></Pressable>
          </View>
          <View></View>
        </View>
      </Modal>
      <Pressable
        style={[BUTTON, BUTTONOPEN]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={TEXTSTYLE}>Añadir ingredientes</Text>
      </Pressable>
    </View>
  )
})
