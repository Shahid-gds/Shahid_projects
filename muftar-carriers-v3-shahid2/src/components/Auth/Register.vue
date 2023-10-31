<template>
    <!-- USER LOGIN FORM -->
    <div
        class="bg-[url('@/assets/images/Login-bg.png')] bg-cover h-screen flex justify-center items-center text-center">
        <XyzTransition appear duration="auto" xyz="fade up-5 duration-10">
            <div class="w-[40rem] px-10" v-if="true">
                <div class="container px-10">
                    <div class="logo-image">
                        <img src="@/assets/img/loginlogo.svg" alt="Login Logo" />
                    </div>
                    <p class="text-black ">Welcome to,</p>

                    <h1 class="text-primary  text-4xl">Register</h1>
                    <!-- v-click-away="onClickAway" -->
                    <form @submit.prevent="checkVerification()">
                        <div class="rounded-lg relative mt-2 cursor-pointer border bg-white py-3 text-xl text-gray-800"
                            @click="orglistshow = !orglistshow">
                            <div>
                                {{ selectedOrg? selectedOrg.name : 'Select Organization' }}
                            </div>
                            <XyzTransition xyz="fade up-25% duration-4" mode="in-out">
                                <div class="absolute z-50 text-center mx-auto w-full border  border-t-0 top-12 bg-white "
                                    v-if="orglistshow && true">
                                    <div v-for="(org, idx) in orglist" :key="idx" @click="selectOrg(org)"
                                        class="py-4  hover:bg-gray-100">
                                        {{ org.name }}
                                    </div>

                                </div>
                            </XyzTransition>

                        </div>
                        <span class="text-red-600">{{ feedback }}</span>



                        <XyzTransitionGroup appear duration="auto" class="example-grid"
                            xyz="fade small-25% thick-25%  duration-6">



                            <div v-if="selectedOrg" class="flex flex-col space-y-5 mt-5">
                                <div xyz="fade small stagger"
                                    class="flex flex-row space-x-2 rounded-md bg-white py-1 px-2 border"
                                    :class="{ ' border-red-400': errmsg == true }">
                                    <!-- <Icon class="my-auto text-gray-400" icon="fa6-solid:user-lock" width="24" /> -->
                                    <img class="h-6 w-6 my-auto" src="@/assets/icons/login/user-3.svg" />
                                    <input
                                        class="w-full border-none focus:ring-0 bg-transparent text-gray-400 placeholder:text-gray-400"
                                        placeholder="First Name" v-model="fname" type="text">
                                </div>
                                <div xyz="fade small stagger"
                                    class="flex flex-row space-x-2 rounded-md bg-white py-1 px-2 border"
                                    :class="{ ' border-red-400': errmsg == true }">
                                    <!-- <Icon class="my-auto text-gray-400" icon="fa6-solid:user-lock" width="24" /> -->
                                    <input
                                        class="w-full border-none focus:ring-0 bg-transparent text-gray-400 placeholder:text-gray-400"
                                        placeholder="Last Name" v-model="lname" type="text">
                                </div>
                                <div xyz="fade small stagger"
                                    class="flex flex-row space-x-2 rounded-md bg-white py-1 px-2 border"
                                    :class="{ ' border-red-400': errmsg == true }">
                                    <!-- <Icon class="my-auto text-gray-400" icon="ic:baseline-email" width="24" /> -->
                                    <input
                                        class="w-full border-none focus:ring-0 bg-transparent text-gray-400 placeholder:text-gray-400"
                                        placeholder="Email" v-model="email" type="text">
                                </div>
                                <div class="rounded-lg relative flex space-x-4 px-2 text-[1rem] cursor-pointer border bg-white py-3 text-gray-400"
                                    @click="rolelistshow = !rolelistshow">
                                    <Icon class="my-auto text-gray-400" width="24"
                                        icon="ic:sharp-keyboard-arrow-down" />
                                    <div>
                                        {{ selectedRole? selectedRole: 'Select Role' }}
                                    </div>
                                    <div class="absolute z-50 w-full border right-0 border-t-0  top-12 bg-white "
                                        v-if="rolelistshow">
                                        <div v-for="(option, o_idx) in options" :key="o_idx"
                                            @click="selectedRole = option" class="py-4 text-gray-400 hover:bg-gray-100">
                                            {{ option }}
                                        </div>

                                    </div>
                                </div>



                                <div xyz="fade small stagger"
                                    class="flex flex-row space-x-2 rounded-md bg-white py-1 px-2 border"
                                    :class="{ ' border-red-400': errmsg == true }">
                                    <!-- <Icon class="my-auto text-gray-400" icon="teenyicons:password-solid" width="24" /> -->
                                    <input
                                        class="w-full border-none focus:ring-0 bg-transparent text-gray-400 placeholder:text-gray-400"
                                        placeholder="Password" v-model="password" type="password">
                                </div>
                                <div xyz="fade small stagger"
                                    class="flex flex-row space-x-2 rounded-md bg-white py-1 px-2 border"
                                    :class="{ ' border-red-400': errmsg == true }">
                                    <!-- <Icon class="my-auto text-gray-400" icon="teenyicons:password-solid" width="24" /> -->
                                    <input
                                        class="w-full border-none focus:ring-0 bg-transparent text-gray-400 placeholder:text-gray-400"
                                        placeholder="Confirm Password" v-model="password2" type="password">
                                </div>

                                <div xyz="fade small stagger" class="flex justify-between items-center mt-3 m-2">
                                    <div>
                                        <input
                                            class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-primary checked:border-primary focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                            type="checkbox" value="" id="flexCheckDefault">
                                        <label class="form-check-label inline-block text-secondry "
                                            for="flexCheckDefault">
                                            Remember Me
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </XyzTransitionGroup>


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
                            class="btn-color mt-5 rounded-md flex justify-center py-3 text-xl space-x-4 text-white uppercase w-full">
                            <!-- <Icon class="my-auto" icon="fa-solid:user-lock" /> -->
                            <p>Register</p>
                        </button>
                    </form>


                </div>
                <p class="mt-4 text-gray-400">Already have an Account? | <router-link class="text-primary font-"
                        to="/login">Login</router-link>
                </p>
                <p class="text-sm text-center  my-5" style="color: #ACACAC">
                    Copyright © 2022 <span class="font-bold">Muftar.</span> All Rights Reserved.
                </p>
            </div>
        </XyzTransition>
    </div>


</template>
<script>
import { fb } from '../../_firebase/init';
import { mapActions, mapMutations } from 'vuex'
import axios from 'axios'

export default {
    name: "AppLogin",
    components: {
        // Icon
    },
    data() {
        return {
            orglistshow: false,
            rolelistshow: false,
            loading: false,
            selectedOrg: null,
            status: 'unverified',
            orglist: ["Organization: Muftar Transport", "Test: Muftar Transport", "New: Muftar Transport", "Update: Muftar Transport"],
            fname: '',
            lname: '',
            role: 'admin',
            email: "",
            password: '',
            password2: '',
            mc: "",
            errmsg: false,
            options: ["admin", "dispatch", "safety", "accounting"],
            feedback: '',
            selectedRole: null,
        }
    },
    methods: {
        ...mapActions(['getUserId']),
        ...mapMutations(['SET_TOKEN', 'SET_ORG_DATA', 'SET_USERDATA']),
        onClickAway() {
            this.orglistshow = false;
        },

        checkVerification() {
            if (this.password == '' || this.email == '') {
                this.feedback = "Please enter all fields."
            } else if (this.selectedRole == '' || this.selectedRole == 'Select Role') {
                this.feedback = "Please select a role."
            } else {
                if (this.password != this.password2) {
                    this.feedback = "Passwords do not match"
                } else {
                    this.loading = true
                    this.register()
                }
            }
        },
        selectOrg(org) {
            this.selectedOrg = { id: org.id, name: org.name }
        },
        getListOfOrgs() {
            axios.get(this.$api_path + 'carriers/all'
            ).then((res) => {
                console.log(res.data)
                this.orglist = res.data.result
            }).catch((err) => {
                console.log(err)
            })
        },
        register() {
            this.loading = true
            fb.auth().createUserWithEmailAndPassword(this.email, this.password)
                .then((userCredential) => {
                    console.log('triggered')
                    // Signed in
                    var user = userCredential.user;
                    console.log('user details', user)
                    this.SET_TOKEN(user.ya)
                    this.logUser(user.uid)
                })
                .catch((error) => {
                    this.feedback = error.message;
                    this.loading = false
                    console.log(error)
                    // ..
                });
        },
        logUser(userID) {
            // this.loading = true
            const config = {
                headers: {
                    'orgID': this.selectedOrg.id,
                    'userID': userID
                }
            }
            let payload = {
                fname: this.fname,
                lname: this.lname,
                status: this.status,
                email: this.email,
                role: this.selectedRole,
            }
            axios.post(this.$api_path + 'carriers/team/register', payload, config
            ).then((res) => {
                if (res.data.status == 'success') {
                    console.log(res.data)
                    localStorage.setItem('userID', res.data.result.user.id)
                    this.SET_ORG_DATA(res.data.result.org)
                    this.SET_USERDATA(res.data.result.user)
                    this.getUserId(res.data.result.user)
                    this.$router.replace('/overview')
                } else {
                    this.feedback = res.data.feedback
                }
                false
            }).catch((err) => {
                console.log(err)
            })
        }
    },
    created() {
        this.getListOfOrgs()
    }
};
</script>
<style scoped>
.btn-color {
    background: linear-gradient(to top, #3C59A8 0%, #1E2D54 100%);
}

.logo-image {
    margin: auto;
    width: 30%;

}

.err input {
    border: 1px solid red !important;
}
</style>