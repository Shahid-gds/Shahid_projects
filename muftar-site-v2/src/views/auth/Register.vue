<template>
  <div class="custom-border-height absolute bottom-0">
  </div>
  <div class="custom-border-height absolute bottom-0">
  </div>
  <div class="" v-if="!emailVerification">
    <div class="custom-border-height absolute bottom-0">
    </div>
    <div class=" lg:flex mx-auto px-6 md:pb-5">
      <div class="lg:w-1/2 custom-border-height">
        <div class="lg:mt-20 mt-10 mx-auto">
          <div class="lg:mt-20 mt-[10rem] xl:ml-40  lg:ml-[5rem]  md:w-[60%] w-[15rem] mx-auto px-6">
            <img src="@/assets/images/signupImg.svg" alt="" class="w-full">
          </div>
        </div>
      </div>

      <div class="lg:w-1/2 lg:mt-28 md:mt-96 mt-10 signup-section">
        <div class="xl:ml-48 lg:ml-20 xl:w-1/2">
          <div class="loader-overlay" v-if="loading">
            <div class="loader"></div>
          </div>
          <div class="pb-5">
            <h1 class="sm:text-5xl text-2xl font-bold text-[#3D5AA9]">Register</h1>
            <p>Welcome aboard! Let's get started with Muftar!</p>
          </div>
          <form action="">
            <div class="space-y-3">
              <div class="pb-3">
                <label for="">First Name</label>
                <input class="border-2 w-full rounded-md p-2 px-4 outline-none"
                  :class="{ 'border-red-500': emptyFields.includes('fname') }" type="text"
                  placeholder="Enter your first name" v-model="fname" required>
              </div>
              <div class="pb-3">
                <label for="">Last Name</label>
                <input class="border-2 w-full rounded-md p-2 px-4 outline-none"
                  :class="{ 'border-red-500': emptyFields.includes('lname') }" type="text"
                  placeholder="Enter your first name" v-model="lname" required>
              </div>
              <div class="pb-3">
                <label for="">Email Address</label>
                <input class="border-2 w-full rounded-md p-2 px-4 outline-none"
                  :class="{ 'border-red-500': emptyFields.includes('email') }" type="email" placeholder="test@example.com"
                  v-model="email" required>
              </div>
              <div class="relative mx-auto text-gray-600">
                <label for="">Password</label>
                <input class="border-2 w-full rounded-md p-2 px-4 outline-none"
                  :class="{ 'border-red-500': emptyFields.includes('password') }" placeholder="At least 8 characters"
                  v-model="password" :type="passwordVisible ? 'text' : 'password'" required>
                <div class="absolute right-0 top-6 mt-3 mr-2 cursor-pointer" @click="togglePasswordVisibility">
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
              <div class="text-[red] text-xl mt-3">
                <p>{{ emailErrorMessage }}</p>
              </div>
            </div>
            <div class="flex justify-center">
              <button @click.prevent="registerUser" v-if="!processing"
                class="bg-[#3C58A8] text-[white] mt-3 text-center px-10 p-2 rounded-md text-xl">
                Register
              </button>
              <div class="italic text-[#3C58A8] mt-3 text-center px-10 border-2 p-2 rounded-md border-[#3C58A8]"
                v-if="processing">Please Wait...</div>
            </div>

          </form>

          <div class="mt-8 flex justify-center border-t-2 py-5 border-b-2 space-x-1">
            <p>Have an account?</p>
            <a href="/login" class="text-[#15A2FF]">
              Login
            </a>
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
import VerifyEmail from './VerifyEmail.vue'
import { useRoute } from 'vue-router'

const { error, register } = useRegister();
const route = useRoute();
const referralID = ref(route.query.ref)
const emailVerification = ref(false);
const processing = ref(false);
const fname = ref('');
const lname = ref('');
const email = ref('');
const password = ref('');
const responseMessage = ref('');
const emptyFields = ref([]);
const passwordVisible = ref(false);
const emailAlreadyRegistered = ref(false);
const emailErrorMessage = ref('')
const togglePasswordVisibility = () => {
  passwordVisible.value = !passwordVisible.value;
};
const registerUser = async () => {
  processing.value = true
  emptyFields.value = [];

  if (!fname.value || !lname.value || !email.value || !password.value) {
    responseMessage.value = 'Please fill in the required fields.';
    if (!fname.value) emptyFields.value.push('fname');
    if (!lname.value) emptyFields.value.push('lname');
    if (!email.value) emptyFields.value.push('email');
    if (!password.value) emptyFields.value.push('password');
    processing.value = false;
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

  if (!fname.value || !lname.value || !email.value || !password.value) {
    responseMessage.value = 'Please fill in the required fields.';
    if (!fname.value) emptyFields.value.push('fname');
    if (!lname.value) emptyFields.value.push('lname');
    if (!email.value) emptyFields.value.push('email');
    if (!password.value) emptyFields.value.push('password');
    return;
  }
  if (referralID.value) {
    axios.post(`https://ecostructure-demo.muftar.com/register?ref=${referralID.value}`, {
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
    axios.post('https://ecostructure-demo.muftar.com/register', {
      fname: fname.value,
      lname: lname.value,
      email: email.value,
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

watch([fname, lname, email, password], () => {
  emptyFields.value = emptyFields.value.filter(field => {
    return field !== 'fname' && field !== 'lname' && field !== 'email' && field !== 'password';
  });
  responseMessage.value = '';
});

onMounted(async () => {
  try {
    if (referralID) {

      const response = await axios.get('https://ecostructure-demo.muftar.com/click/count', {
        headers: {
          'Content-Type': 'application/json',
          referralID: referralID.value,
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


@media only screen and (max-width: 1024px) {
  .custom-border-height {
    border-right-color: white;
  }

  h1 {
    text-align: center;
  }

  p {
    text-align: center;
  }
}
</style>
   