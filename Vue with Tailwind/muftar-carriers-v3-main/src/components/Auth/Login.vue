<template>
    <!-- ORGANIZATION LOGIN FORM -->
    <div
        class="bg-[url('@/assets/images/Login-bg.png')] bg-cover h-screen flex justify-center items-center text-center">
        <XyzTransition appear duration="auto" xyz="fade up-5 duration-10">
            <div v-if="true">
                <div class="w-[350px]">
                    <div class="logo-image">
                        <img src="@/assets/img/loginlogo.svg" alt="Login Logo" />
                    </div>

                    <p class="text-black ">Welcome to Muftar Portals</p>
                    <h1 class="text-primary  text-4xl"> Login</h1>
                    <div class="flex flex-col space-y-5 mt-5">
                        <form @submit.prevent="loginUser" class="flex flex-col space-y-5 mt-5">
                            <p v-if="err_msg" class="text-red-500 font-extrabold">Incorrect email or password</p>

                            <div class="flex flex-row space-x-2 rounded-md bg-white py-1 px-2 border">
                                <!-- <Icon class="my-auto text-gray-400" icon="fluent:organization-48-filled" width="24" /> -->
                                <input
                                    class="w-full border-none focus:ring-0 bg-transparent text-gray-400 placeholder:text-gray-400"
                                    placeholder="Muftar ID or Email" v-model="email" type="text">
                            </div>


                            <div class="flex flex-row space-x-2 rounded-md bg-white py-1 px-2 border">
                                <!-- <Icon class="my-auto text-gray-400" icon="teenyicons:password-solid" width="24" /> -->
                                <input
                                    class="w-full border-none focus:ring-0 bg-transparent text-gray-400 placeholder:text-gray-400"
                                    placeholder="Password" v-model="password" type="password">
                            </div>

                            <div class="flex justify-between items-center mt-3 m-2">
                                <div>

                                    <input
                                        class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-primary checked:border-primary focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                        type="checkbox" value="" id="flexCheckDefault">
                                    <label class="form-check-label inline-block text-secondry " for="flexCheckDefault">
                                        Remember Me
                                    </label>
                                </div>
                                <div>
                                    <router-link to="/forgot-password" class="text-secondry">
                                        Forget Password ?
                                    </router-link>
                                </div>
                            </div>
                            <br />

                            <div v-if="loading" class="mx-auto" role="status">
                                <svg aria-hidden="true"
                                    class="mr-2 w-16 h-16 text-gray-200 animate-spin dark:text-gray-600 fill-primary"
                                    viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                        fill="currentColor" />
                                    <path
                                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                        fill="currentFill" />
                                </svg>
                                <span class="sr-only">Loading...</span>
                            </div>
                            <button v-if="!loading" type="submit"
                                class="btn-color rounded-md flex justify-center py-3 text-xl space-x-4 text-white uppercase w-full">
                                <Icon v-if="!loading" class="my-auto" icon="fa-solid:user-lock" />
                                <p>Login</p>
                            </button>
                        </form>

                    </div>
                    <p class="mt-4 text-secondry"><router-link to="/register" class="text-blue-500">Don't Have An
                            Account?</router-link></p>
                    <p class="text-sm text-center  my-5" style="color: #ACACAC">
                        Copyright © 2022 <span class="font-bold">Muftar</span>. All Rights Reserved.
                    </p>
                </div>
            </div>
        </XyzTransition>
    </div>

</template>
<script>
import { fb } from '../../_firebase/init';
import { mapActions, mapMutations } from 'vuex'

import axios from 'axios'

export default {
    name: "OrganizationLogin",
    data() {
        return {
            email: "",
            password: "",
            mc: "",
            loading: false,
            err_msg: false,
            animate: false
        }
    },
    components: {

    },
    methods: {
        ...mapActions(['getUserId']),
        ...mapMutations(['SET_USERDATA', 'SET_ORG_DATA', 'SET_TOKEN']),
        loginUser() {
            this.loading = true
            fb.auth().signInWithEmailAndPassword(this.email, this.password).then(
                (res) => {
                    console.log({ res: res.user.uid })
                    this.SET_TOKEN(res.user.ya)
                    this.getLoggedUserData(res.user.uid)
                },
                (err) => {
                    // alert(`Error - ${err.message}`);
                    // alert(this.err_msg);
                    console.log(err)
                    this.err_msg = true
                    console.log(this.err_msg)
                    this.loading = false
                }
            );
        },
        getLoggedUserData(userID) {
            // this.loading = true
            console.log(userID)
            console.log('logging in user by email')
            const config = {
                headers: {
                    'userID': userID
                }
            }
            axios.get(this.$api_path + 'carriers/team/user/login', config
            ).then((res) => {
                localStorage.setItem('userID', userID)
                this.SET_USERDATA(res.data.result.user)
                this.SET_ORG_DATA(res.data.result.org)
                this.getUserId(res.data.result.user)
                this.$router.replace('/overview')
                this.loading = false
            }).catch((err) => {
                console.log(err)
                this.loading = false
            })
        },

    },
};
</script>
<style scoped>
.btn-color {
    background: linear-gradient(to top, #3C59A8 0%, #1E2D54 100%);
}

.form-control {
    /* background-image: linear-gradient(#1b7ac0, #052f65); */
    background-color: #ffffff;
    border: 2px solid white;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    border-radius: 30px;
    height: 3rem;
    width: 25rem;
}

textarea:focus,
input:focus {
    color: #ACACAC;
}

input:text {
    color: #ACACAC;
}

input,
select,
textarea {
    color: #ACACAC;
}

.wrapper {
    background: url("../../assets/images/Login-bg.png") no-repeat fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}

.logo-image {
    margin: auto;
    width: 30%;
    /* padding: 10px; */
}

.err input {
    border: 1px solid red !important;
}

.left-inner-addon {
    position: relative;
}

.left-inner-addon input {
    padding-left: 35px !important;
}

.left-inner-addon .svg-inline--fa {
    position: relative !important;
    top: 40px !important;
    left: 15px;
    color: #fff;
}
</style>