import * as firebase from "firebase"

export const useCurrentUser = () => {
  return firebase.auth().currentUser
}
