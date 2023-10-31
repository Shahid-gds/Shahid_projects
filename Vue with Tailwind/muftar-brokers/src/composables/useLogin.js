import { ref } from 'vue'
import { firebase } from '../_firebase/init.js'

const error = ref(null)

const login = async (email, password) => {
  error.value = null

  try {
    const res = await firebase.auth().signInWithEmailAndPassword(email, password);
    error.value = null
    return res
  } catch (err) {
    console.log(err.message)
    error.value = 'Incorrect login credentials'
  }
}

const useLogin = () => {
  return { error, login }
}

export default useLogin
