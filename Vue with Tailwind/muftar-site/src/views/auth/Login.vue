<template>       
       <div class="">
        <div class="custom-border-height absolute bottom-0">
        </div>
        <div class="container lg:flex mx-auto px-6 pb-28">
          <div class="lg:w-1/2 custom-border-height">
           <div class="lg:mt-20 mt-10">
            <!-- <div class="xl:ml-36">
              <img src="@/assets/img/muftarLogo.svg" alt="">
          </div> -->
              <div class="mt-20 xl:ml-20 loginImg">
                  <img src="@/assets/img/loginImg.svg" alt="">
              </div>
              <div class="text-center mt-10">
                  <h1 class="sm:text-4xl text-xl font-bold">Welcome Back!</h1>
                <p class="text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
              </div>
           </div>
          </div>
          <div class="lg:w-1/2 lg:mt-28 mt-96 login-section">
            <div class="xl:ml-48 lg:ml-20 xl:w-1/2">
              <div class="pb-5">
                <h1 class="sm:text-5xl text-2xl font-bold">Login</h1>
                <p>Welcome back to Muftar</p>
              </div>
             <div class="">
              <div class="pb-3">
                <input class="border-2 w-full rounded-md p-2 px-4" type="email" placeholder="Email" v-model="email">
              </div>
              <div class="relative mx-auto text-gray-600">
                <input class="border-2 w-full rounded-md p-2 px-4" type="password" placeholder="Password" v-model="password">
                <div class="absolute right-0 top-0 mt-3 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="16.093" viewBox="0 0 25 16.093">
                    <defs>
                      <clipPath id="clip-path">
                        <rect id="Rectangle_119" data-name="Rectangle 119" width="25" height="16.093" fill="#15a2ff"/>
                      </clipPath>
                    </defs>
                    <g id="Group_60" data-name="Group 60" transform="translate(0 0)">
                      <g id="Group_59" data-name="Group 59" transform="translate(0 0)" clip-path="url(#clip-path)">
                        <path id="Path_185" data-name="Path 185" d="M160.439,74.24a4.023,4.023,0,1,0,4.023,4.023,4.026,4.026,0,0,0-4.023-4.023m-.305,2.83a.924.924,0,0,0-.916.916h-1.332a2.274,2.274,0,0,1,2.248-2.248Z" transform="translate(-147.939 -70.217)" fill="#15a2ff"/>
                        <path id="Path_186" data-name="Path 186" d="M24.709,7.214C23.349,5.522,18.494,0,12.5,0S1.651,5.522.291,7.214a1.335,1.335,0,0,0,0,1.665c1.36,1.693,6.215,7.214,12.209,7.214s10.849-5.522,12.209-7.214a1.335,1.335,0,0,0,0-1.665M12.5,13.874a5.827,5.827,0,1,1,5.827-5.827A5.826,5.826,0,0,1,12.5,13.874" transform="translate(0)" fill="#15a2ff"/>
                      </g>
                    </g>
                  </svg>                  
                </div>
            </div>
             </div>
            <div class="flex justify-between py-2">
              <div></div>
              <div class="">
                <a href="#">Forgot Password?</a>
              </div>
            </div>
            <button @click="loginUser()" class="login text-white text-center p-2 w-full rounded-md text-xl cursor-pointer" v-if="!loading">
             Login 
            </button>
            <div v-else class="italic text-gray-400">
              Please wait
            </div>
            <div class="flex items-center space-x-2 mt-10">
              <div class="w-full border-b-2"></div>
              <span class="">OR</span>
              <div class="w-full border-b-2"></div>
            </div>
            <div class="flex space-x-2 mt-10">
              <div class="border-2 w-full rounded-lg">
                <div class="flex p-2 space-x-2 items-center justify-center">
                  <div class="w-5 h-5">
                  <img src="@/assets/icons/social/google.svg" alt="">                             
                  </div>
                  <div>
                    Google
                  </div>
                </div>
              </div>
              <div class="border-2 w-full rounded-lg">
                <div class="flex p-2 space-x-2 items-center justify-center">
                  <div class="w-5 h-5">
                  <img src="@/assets/icons/social/facebook.svg" alt="">                             
                  </div>
                  <div>
                   Facebook
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-8 flex justify-center border-t-2 py-5 border-b-2 space-x-1">
              <p>Don't you have an account?</p>
              <router-link :to="{name: 'Register'}">
                Register
              </router-link>
            </div>
            </div>
          </div>
        </div>
       </div>
  </template>
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
// import { fb, auth} from '@/_firebase/init';
import axios from 'axios'


const store = useStore();
const router = useRouter();
const loading = ref(false)
const email = ref('')
const password = ref('')
const  mc = ref('')
const err_msg = ref('')

// const loginUser = () => {
//       loading.value = false
//       console.log('email', email.value)
//       fb.auth().signInWithEmailAndPassword(email.value, password.value)
//       .then((res) => {
//               store.commit('SET_TOKEN',res.user.refreshToken, res.user.uid)
//               router.push('/account')
//               // this.getLoggedUserData(res.user.uid)
//           },
//           (err) => {
//               // alert(`Error - ${err.message}`);
//               // alert(this.err_msg);
//               console.log(err)
//               err_msg.value = true
//               loading.value = false
//           }
//       );
//   }

// const getLoggedUserData = (userID) => {
//             // this.loading = true
//             console.log(userID)
//             console.log('logging in user by email')
//             const config = {
//                 headers: {
//                     'userID': userID
//                 }
//             }
//             axios.get(this.$api_path + 'carriers/team/user/login', config
//             ).then((res) => {
//                 localStorage.setItem('userID', userID)
//                 this.SET_USERDATA(res.data.result.user)
//                 this.SET_ORG_DATA(res.data.result.org)
//                 this.getUserId(res.data.result.user)
//                 this.$router.replace('/overview')
//                 this.loading = false
//             }).catch((err) => {
//                 console.log(err)
//                 this.loading = false
//             })
//         }
</script>
  
  <style scoped>
  /* Set the background image */
  /*.container-div {
    background-image: url('../../assets/img/loginBg.svg');
    height: 99vh;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
  }*/

  h1{
    color: #3C58A8;
  }
  p{
    color: #666668;
  }
  a{
    color: #15A2FF;
  }
  span{
    color: #D6D6D6;
  }
   .custom-border-height {
    border-right-width: 10px;
    border-right-style: solid;
    border-right-color: #3C58A8;
    height: 22rem;
  }

  .login{
    background: #3C58A8;
  }
  @media only screen and (max-width: 1024px) {
    .custom-border-height {
      border-right-color: white;
    }
    h1{
      text-align: center;
    }
    p{
      text-align: center;
    }
    .loginImg{
      margin-left: 5rem;
    }
  }
  @media only screen and (max-width: 480px) {
    .loginImg{
      margin-left: 1rem;
    }
    .login-section{
      margin-top: 20em;
    }
  }
  </style>
      