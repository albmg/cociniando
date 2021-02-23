import { useState } from 'react'
import * as firebase from 'firebase'

export function useRegister () {
  const [error, setError] = useState('')
  const [user, setUser] = useState(null)
  const [token, setToken] = useState('')
  console.log('soy token', token)

  async function register(email, password) {
    try {
      const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password)
      setUser(user)
      // window.user = user
      const token = await user.getIdToken()
      setToken(token)
    } catch ({ message }) {
      setError(message)
    }
  }

  async function login(email, password) {
    try {
      const { user } = await firebase.auth().signInWithEmailAndPassword(email, password)
      setUser(user)
      // window.user = user
      const token = await user.getIdToken()
      setToken(token)
    } catch ({ message }) {
      setError(message)
    }
  }

  return { error, register, user, login, setUser, setError, token }
}
