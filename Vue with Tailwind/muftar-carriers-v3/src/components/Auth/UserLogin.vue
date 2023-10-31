<template>
    <!-- USER LOGIN FORM -->
    <div
        class="bg-[url('@/assets/images/Login-bg.png')] bg-cover h-screen flex justify-center items-center text-center">
        <div>
            <div class="form-group">
                <div class="logo-image">
                    <img src="@/assets/img/loginlogo.svg" alt="Login Logo" />
                </div>
                <p class="text-black ">Welcome to,</p>

                <h1 class="text-primary  text-4xl">User Login</h1>
                <form id="signup-form" @submit.prevent="loginUser">
                    <div class="left-inner-addon mb-3" :class="{ 'err': errmsg == true }">
                        <img class="relative top-10 left-5 w-4" src="@/assets/img/person-lock.svg"
                            alt="Organization icon" />

                        <input type="text" aria-hidden="true" placeholder="User ID/Name " class="m-2 form-control"
                            v-model="email" />
                    </div>
                    <div class="left-inner-addon" :class="{ 'err': errmsg == true }">
                        <img class="relative top-10 left-5 w-4" src="@/assets/img/passIcon.svg" alt="" />
                        <input type="password" placeholder="Password" class="m-2 form-control border-red-500"
                            v-model="password" />
                        <p v-if="errmsg" class="text-red-500 font-extrabold">Incorrect email or password</p>
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
                            <router-link to="/forgot-Password" class="text-secondry">
                                Forget Password ?
                            </router-link>
                        </div>
                    </div>
                    <br />
                    <div class=" flex justify-center items-center relative">

                        <img class="absolute top-[14px] left-[36%] w-[1.2rem]" src="@/assets/img/loginIcon.svg"
                            alt="" />
                        <button type="submit" class="btn btn-color text-white uppercase w-40">
                            Login
                        </button>
                    </div>
                </form>
                <p class="mt-4 text-secondry">Don't Have An Account? | <span class="text-primary font-">Sign Up</span>
                </p>
                <p class="text-sm text-center  my-5" style="color: #ACACAC">
                    Copyright © 2022 <span class="font-bold">Muftar</span>. All Rights Reserved. | Contact Us
                </p>
            </div>
        </div>
    </div>

</template>
<script>
import { fb } from '../../_firebase/init';
import { mapActions } from 'vuex'
export default {
    name: "AppLogin",
    data() {
        return {
            email: "",
            password: "",
            mc: "",
            errmsg: false
        }
    },
    methods: {
        ...mapActions(['getUserId']),
        loginUser() {
            fb.auth().signInWithEmailAndPassword(this.email, this.password).then(
                (res) => {
                    console.log({ res: res.user.uid })
                    localStorage.setItem('userID ', res.user.uid)
                    this.getUserId(res.user.uid)
                    this.$router.replace('/overview')
                },
                (err) => {
                    // alert(`Error - ${err.message}`);
                    // alert(this.errmsg);
                    console.log(err)
                    this.errmsg = true
                    console.log(this.errmsg)
                }
            );
        }
    }
};
</script>
<style scoped>
.btn-color {
    background: linear-gradient(to top, #3C59A8 0%, #1E2D54 100%);
    border: none;
    width: 25rem;
    height: 3rem;
    border-radius: 30px;
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