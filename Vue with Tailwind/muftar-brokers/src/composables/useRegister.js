
import { ref } from "vue"
import { projectAuth } from "../firebase/config"
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';


const error = ref(null)

const register = async (fname, lname, email, password) => {
  error.value = null;

  try {
    const res = await createUserWithEmailAndPassword(projectAuth, email, password);
    if (!res || !res.user) {
      throw new Error('Could not complete the Sign Up');
    }
    await updateProfile(res.user, { displayName: `${fname} ${lname}` });
    error.value = null;
  } catch (err) {
    console.log(err.code);
    switch (err.code) {
      case 'auth/invalid-email':
        error.value = 'Invalid Credentials';
        break;
      case 'auth/weak-password':
        error.value = 'Password should be at least 6 characters';
        break;
      case 'auth/email-already-in-use':
        error.value = 'This Email is aleady in Use';
        break;
  
      default:
        error.value = err.message;
    }
  }
};

const useRegister = () => {
    return { error, register }
}

export default useRegister