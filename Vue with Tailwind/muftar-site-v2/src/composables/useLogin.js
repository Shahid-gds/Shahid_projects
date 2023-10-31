import { ref } from 'vue'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { projectAuth } from '../firebase/config'

const error = ref(null)

const login = async (email, password) => {
  error.value = null

  try {
    const res = await signInWithEmailAndPassword(projectAuth, email, password)
    error.value = null
    return res;
  } catch (err) {
    if (err.code === "auth/wrong-password") {
      error.value = 'Incorrect Password. Please try again'
    } 
    if (err.code === "auth/user-not-found") {
      error.value = 'This User is not Register.'
    }
    // else {
    //   console.error(err.message);
    //   error.value = "An error occured while logging in. Please try again"
    // }
  }
}

const useLogin = () => {
  return { error, login }
}

export default useLogin