<template>
  <div class="" v-if="!emailVerification">
      <div class="w-full lg:mt-[10%] lg:flex justify-center px-10 signup-section">
        <div class="2xl:px-20">
          <div>
            <div class="loader-overlay" v-if="loading">
              <div class="loader"></div>
            </div>
            <div class="pb-5 lg:block hidden">
              <h1 class="sm:text-[24px] text-2xl font-bold">Register</h1>
            </div>
            <div class="pb-5 lg:hidden">
              <h1 class="sm:text-[24px] text-2xl font-bold">Register</h1>
              <p class="text-[#75788D]">Please fill in the form below to create an account. Easy isn't it?</p>
            </div>
            <form action="">
              <div class="space-y-3 w-full">
                <div class="flex space-x-3 w-full">
                  <div class="pb-3 w-full">
                    <input class="border-2 w-full rounded-md p-4 px-4 outline-none"
                      :class="{ 'border-red-500': emptyFields.includes('fname') }" type="text"
                      placeholder="Your first name" v-model="fname" required>
                  </div>
                  <div class="pb-3 w-full">
                    <input class="border-2 w-full rounded-md p-4 px-4 outline-none"
                      :class="{ 'border-red-500': emptyFields.includes('lname') }" type="text"
                      placeholder="Your last name" v-model="lname" required>
                  </div>
                 </div>
                <div class="pb-3 w-full">
                  <input class="border-2 w-full rounded-md p-4 px-4 outline-none"
                    :class="{ 'border-red-500': emptyFields.includes('email') }" type="email" placeholder="Your email address"
                    v-model="email" required>
                </div>
             <div class="pb-3 relative">
              <input class="border-2 w-full  rounded-md p-4 px-24 outline-none"
                :class="{ 'border-red-500': emptyFields.includes('phone') }" type="tel" placeholder="Phone number"
                v-model="phone" required @input="autoFormatPhoneNumber" pattern="^\+\d{0,1}-\d{0,3}-\d{0,3}-\d{0,4}$">
                <div class="absolute left-3 top-0 mt-4 mr-2 cursor-pointer flex space-x-3">
                  <img src="@/assets/images/flag.svg" alt="">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#898989" viewBox="0 0 24 24" stroke-width="1.5" stroke="none" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>                  
                  </div>
                </div>
                <p class="text-[#898989] mt-2 text-center sm:text-[16px] text-[14px]">Standard call, messaging or data rates may apply.</p>
            </div>
                <div class="relative mx-auto text-gray-600">
                  <input class="border-2 w-full rounded-md p-4 px-4 outline-none"
                    :class="{ 'border-red-500': emptyFields.includes('password') }" placeholder="Password"
                    v-model="password" :type="passwordVisible ? 'text' : 'password'" required>
                  <div class="absolute right-0 top-0 mt-4 mr-2 cursor-pointer" @click="togglePasswordVisibility">
                    <svg v-if="passwordVisible" xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="20" viewBox="0 0 25 16.093">
                      <defs>
                        <clipPath id="clip-path">
                          <rect id="Rectangle_119" data-name="Rectangle 119" width="25" height="16.093" fill="#15a2ff" />
                        </clipPath>
                      </defs>
                      <g id="Group_60" data-name="Group 60" transform="translate(0 0)">
                        <g id="Group_59" data-name="Group 59" transform="translate(0 0)" clip-path="url(#clip-path)">
                          <path id="Path_185" data-name="Path 185"
                            d="M160.439,74.24a4.023,4.023,0,1,0,4.023,4.023,4.026,4.026,0,0,0-4.023-4.023m-.305,2.83a.924.924,0,0,0-.916.916h-1.332a2.274,2.274,0,0,1,2.248-2.248Z"
                            transform="translate(-147.939 -70.217)" fill="#3D5AA9" />
                          <path id="Path_186" data-name="Path 186"
                            d="M24.709,7.214C23.349,5.522,18.494,0,12.5,0S1.651,5.522.291,7.214a1.335,1.335,0,0,0,0,1.665c1.36,1.693,6.215,7.214,12.209,7.214s10.849-5.522,12.209-7.214a1.335,1.335,0,0,0,0-1.665M12.5,13.874a5.827,5.827,0,1,1,5.827-5.827A5.826,5.826,0,0,1,12.5,13.874"
                            transform="translate(0)" fill="#3D5AA9" />
                        </g>
                      </g>
                    </svg>
                    <svg v-if="!passwordVisible" xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="19.509" viewBox="0 0 25 19.509">
                      <defs>
                        <clipPath id="clip-path">
                          <rect id="Rectangle_119" data-name="Rectangle 119" width="25" height="16.093" fill="#3D5AA9" />
                        </clipPath>
                      </defs>
                      <g id="Group_1719" data-name="Group 1719" transform="translate(-451.156 -19.661)">
                        <g id="Group_60" data-name="Group 60" transform="translate(451.156 21.804)">
                          <g id="Group_59" data-name="Group 59" transform="translate(0 0)" clip-path="url(#clip-path)">
                            <path id="Path_185" data-name="Path 185"
                              d="M160.439,74.24a4.023,4.023,0,1,0,4.023,4.023,4.026,4.026,0,0,0-4.023-4.023m-.305,2.83a.924.924,0,0,0-.916.916h-1.332a2.274,2.274,0,0,1,2.248-2.248Z"
                              transform="translate(-147.939 -70.217)" fill="#3D5AA9" />
                            <path id="Path_186" data-name="Path 186"
                              d="M24.709,7.214C23.349,5.522,18.494,0,12.5,0S1.651,5.522.291,7.214a1.335,1.335,0,0,0,0,1.665c1.36,1.693,6.215,7.214,12.209,7.214s10.849-5.522,12.209-7.214a1.335,1.335,0,0,0,0-1.665M12.5,13.874a5.827,5.827,0,1,1,5.827-5.827A5.826,5.826,0,0,1,12.5,13.874"
                              transform="translate(0)" fill="#3D5AA9" />
                          </g>
                        </g>
                        <path id="Path_14789" data-name="Path 14789" d="M3.71,2.673,22.259,20.749"
                          transform="translate(450.5 17.705)" fill="none" stroke="#3D5AA9" stroke-width="2" />
                      </g>
                    </svg>
                  </div>
                </div>
                <div class="text-[red] text-xl mt-3" v-if="!emailErrorMessage">
                  <p>{{ responseMessage }}</p>
                </div>
                <div class="text-[red] text-xl mt-3" v-if="!emailErrorMessage">
                  <p>{{ responseMessageCheck }}</p>
                </div>
                <div class="text-[red] text-xl mt-3">
                  <p>{{ emailErrorMessage }}</p>
                </div>
              </div>
              <div class="lg:block hidden">
                <div class="w-full flex">
                  <button @click.prevent="registerUser" v-if="!processing"
                    class="bg-[#0F0FB1] text-[white] mt-3 w-full text-center p-4 text-xl">
                    Sign Up
                  </button>
                  <button class="bg-[#00008E] mt-3 text-center w-[73px] p-4 text-xl flex justify-center" v-if="!processing">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="none" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>                
                  </button>
                  <div class="italic text-[#3C58A8] mt-3 text-center w-full border-2 p-4 border-[#0F0FB1]"  v-if="processing" >Please Wait...</div>
                </div>
              </div>
              <div class="w-full lg:hidden">
                <button @click.prevent="registerUser" v-if="!processing"
                  class="bg-[#00008E] text-[white] mt-3 w-full text-center p-4 text-xl rounded-lg">
                  Create Account
                </button>
                <div class="italic text-[#3C58A8] mt-3 text-center w-full border-2 p-4 border-[#0F0FB1]"  v-if="processing" >Please Wait...</div>
              </div>
              <div class="flex space-x-2 mt-8">
                <input type="checkbox" v-model="checkboxChecked" :class="{ 'border-red-500': emptyFields.includes('checkbox') }" @click="clearResponseMessageCheck">
                <p class="text-[#898989] text-[14px] sm:text-[16px]">I agree to the <span class="text-[#0F0FB1]"> <a href="/terms" target="_blank">Terms of Use</a> and <a href="/privacy" target="_blank">Privacy Policy</a></span></p>
              </div>
  
            </form>
            <div class="mt-8 flex justify-center border-t-2 py-5 space-x-1">
              <p>Already have an account?</p>
              <div v-if="!userEmailInLocalStorage" @click="redirectToLogin" class="text-[#00008E] font-[600] cursor-pointer">
                Sign In
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  <div class="mt-36" v-else-if="emailVerification">
    <VerifyEmail />
  </div>
</template>
<script setup>
import { ref, watch, onMounted, computed } from 'vue';
import { firebase } from '@/_firebase/init.js'
import axios from 'axios';
import useRegister from '@/composables/useRegister';
// import Congrats from './Congrats.vue'
// import VerifyEmail from './VerifyEmail.vue'
import { useRoute } from 'vue-router'
import { useRouter } from 'vue-router'

const { error, register } = useRegister();
const route = useRoute();
const router = useRouter();
const refcode = ref(route.query.ref);
const emailVerification = ref(false);
const processing = ref(false);
const fname = ref('');
const lname = ref('');
const email = ref('');
const password = ref('');
const phone = ref('');
const responseMessage = ref('');
const responseMessageCheck = ref('');
const emptyFields = ref([]);
const passwordVisible = ref(false);
const emailAlreadyRegistered = ref(false);
const emailErrorMessage = ref('')
const checkboxChecked = ref(false);
// const baseUrl = 'http://192.168.18.62:3000'
const baseUrl = 'https://ecostructure-demo.muftar.com'
const togglePasswordVisibility = () => {
  passwordVisible.value = !passwordVisible.value;
};
const autoFormatPhoneNumber = () => {
    phone.value = phone.value.replace(/\D/g, '');
    const phoneNumber = phone.value;
    if (phoneNumber.startsWith('')) {
      phone.value = `+${phoneNumber.substring(0, 1)}`;
      if (phoneNumber.length > 1) {
        phone.value += `-${phoneNumber.substring(1, 4)}`;
        if (phoneNumber.length > 4) {
          phone.value += `-${phoneNumber.substring(4, 7)}`;
          if (phoneNumber.length > 7) {
            phone.value += `-${phoneNumber.substring(7, 11)}`;
          }
        }
      }
    }
  }
const clearResponseMessageCheck = () => {
  responseMessageCheck.value = '';
};
const registerUser = async () => {
  localStorage.setItem('userEmail:', email.value)
  localStorage.setItem('userPhone:', phone.value)
  localStorage.setItem('refID:', refcode.value)
  processing.value = true
  emptyFields.value = [];

  if (!fname.value || !lname.value || !email.value || !phone.value  || !password.value) {
    responseMessage.value = 'Please fill in the required fields.';
    if (!fname.value) emptyFields.value.push('fname');
    if (!lname.value) emptyFields.value.push('lname');
    if (!email.value) emptyFields.value.push('email');
    if (!phone.value) emptyFields.value.push('phone');
    if (!password.value) emptyFields.value.push('password');
    processing.value = false
    return;
  }
  if (!checkboxChecked.value){
      responseMessageCheck.value = 'Please agree to the Terms of Use and Privacy Policy';
      emptyFields.value.push('checkbox');
      processing.value = false
      return;
    }
  console.log(firebase)
  console.log(email.value)
  console.log(password.value)
  firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
      var user = userCredential.user;
      setTimeout(() => {
        processing.value = false; // Stop loading
        // emailVerification.value = true;
      }, 2000);
      registerUserToDB(user.uid)
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode)
      console.log(errorMessage)

      if (errorCode === 'auth/email-already-in-use') {
        responseMessage.value = 'This Email is already Registered.';
      } else {
        responseMessage.value = 'An error occurred. Pleas try again.';
      }
      processing.value = false
    });
};
const registerUserToDB = (authID) => {
  console.log('regsitering to db')
  emptyFields.value = [];

  if (!fname.value || !lname.value || !email.value || !phone.value || !password.value) {
    responseMessage.value = 'Please fill in the required fields.';
    if (!fname.value) emptyFields.value.push('fname');
    if (!lname.value) emptyFields.value.push('lname');
    if (!email.value) emptyFields.value.push('email');
    if (!phone.value) emptyFields.value.push('phone');
    if (!password.value) emptyFields.value.push('password');
    return;
  }
  if (!checkboxChecked.value){
      emptyFields.value.push('checkbox');
      responseMessageCheck.value = 'Please agree to the Terms of Use and Privacy Policy';
      processing.value = false;
      return;
    }
  if (refcode.value) {
    axios.post(`${baseUrl}/register?ref=${refcode.value}`, {
      fname: fname.value,
      lname: lname.value,
      email: email.value,
    }, {
      headers: {
        'authID': authID,
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        console.log(res.data);
        const user_id = res.data.data._id;
        localStorage.setItem('user_id:', user_id)
        // Clear form fields
        fname.value = '';
        lname.value = '';
        email.value = '';
        password.value = '';
        phone.value = '';
        responseMessage.value = 'Message sent successfully!';
        processing.value = false
        // Show success popup
        emailVerification.value = true;
      }).catch((error) => {
        console.error('There was an error sending the message:', error);
        if (error.response && error.response.status === 400 && error.response.data.message === 'Email is already registered') {
          emailAlreadyRegistered.value = true;
          emailErrorMessage.value = 'This Email is already registered';
        } else {
          responseMessage.value = 'Failed to send the message. Please try again later.';
        }
        processing.value = false
      });
  } else {
    axios.post(`${baseUrl}/register`, {
      fname: fname.value,
      lname: lname.value,
      email: email.value,
      phone: phone.value,
      checkboxChecked: checkboxChecked.value,
    }, {
      headers: {
        'authID': authID,
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      console.log(res.data);
      const user_id = res.data.data._id;
      localStorage.setItem('user_id:', user_id)
      // Clear form fields
      fname.value = '';
      lname.value = '';
      email.value = '';
      password.value = '';
      phone.value = '';
      responseMessage.value = 'Message sent successfully!';
      processing.value = false
      // Show success popup
      emailVerification.value = true;
    }).catch((error) => {
      console.error('There was an error sending the message:', error);
      if (error.response && error.response.status === 400 && error.response.data.message === 'Email is already registered') {
        emailAlreadyRegistered.value = true;
        emailErrorMessage.value = 'This Email is already registered';
      } else {
        responseMessage.value = 'Failed to send the message. Please try again later.';
      }
      processing.value = false

    });
  }
}

watch([fname, lname, email, phone, password, checkboxChecked], () => {
  emptyFields.value = emptyFields.value.filter(field => {
    return field !== 'fname' && field !== 'lname' && field !== 'email' && field !== 'phone'  && field !== 'password' && field !== 'checkboxChecked';
  });
  responseMessage.value = '';
});
const redirectToLogin = () => {
    if(userEmailInLocalStorage) {
      router.push('/login')
    }
  }
const userEmailInLocalStorage = ref(localStorage.getItem('userEmail:') !== null);
  watch(() => localStorage.getItem('userEmail:'), (newEmail) => {
  userEmailInLocalStorage.value = newEmail !== null;
});
onMounted(async () => {
  try {
    if (refcode) {

      const response = await axios.get(`${baseUrl}/click/count`, {
        headers: {
          'Content-Type': 'application/json',
          refcode: refcode.value,
        },
      }).then(res => console.log(res)).catch(err => console.log(err))
      console.log('Referral data:', response.data);
    }
  } catch (error) {
    console.error('Error fetching referral data:', error);
  }
});

</script>

<style scoped>
/*.congrates {
  background-image: url('../../assets/images/congratesBg.svg');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}*/
/*.bg-svg-background {
  background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="739" height="568" viewBox="0 0 739 568"%3E%3Crect id="Rectangle_2261" data-name="Rectangle 2261" width="739" height="568" rx="30" fill="%23fff" opacity="0.15"/%3E%3C/svg%3E');
  background-size: cover;
  background-position: center;
}*/
.custom-border-height {
  border-right-width: 10px;
  border-right-style: solid;
  border-right-color: #3C58A8;
  height: 22rem;
}

.loader-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.loader {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>

   