<template>
    <!-- MAIN CONTAINER -->
    <div class=" h-screen flex justify-center items-center bg-[url('@/assets/images/Login-bg.png')] bg-cover ">
        <!-- CENTERED CARD SECTION -->
        <div class="mb-16 flex flex-col space-y-14 justify-between">

            <!-- Image Section -->
            <div class="mx-auto ">
                <img class="w-35" src="@/assets/img/loginlogo.svg" alt="Login Logo" />
            </div>

            <!-- CARD TEXT SECTION -->
            <div class="">
                <p class="text-black text-center">Choose Account Type</p>
                <h1 class="text-4xl text-[#194799] text-center" style="font-weight: bolder">
                    Welcome Back!
                </h1>
            </div>

            <!-- LOGIN  -->
            <div>
                <!-- Registration Form -->
                <div v-if="register">
                    <AppRegisterForm />
                </div>
                <!-- GO TO ORGANIZATION LOGIN AND USER LOGIN BUTTONS -->
                <div v-else>
                    <div class="flex justify-between">
                        <router-link to="login">
                            <div class="cards">
                                <div class="w-64 h-56 p-2 rounded-3xl flex flex-col justify-center items-center">
                                    <img class="w-20 h-20" src="@/assets/icons/login/people-2.svg" alt="Org Login Icon">
                                    <p class="mt-5 login-color">ORGANIZATION</p>
                                </div>
                            </div>
                        </router-link>
                        <div class="w-40"></div>
                        <router-link to="user-login">
                            <div class="cards">
                                <div class="w-64 h-56 p-2 rounded-3xl flex flex-col justify-center items-center">
                                    <img class="w-20 h-20" src="@/assets/icons/login/user-3.svg" alt="User Login Icon">
                                    <p class="mt-5 login-color">USER</p>
                                </div>
                            </div>
                        </router-link>
                    </div>
                    <div class="flex flex-col my-6">
                        <h2 class="text-sm text-center text-black my-4">Register an Account</h2>
                        <p class="text-sm text-center text-black" style="color: black">
                            Copyright © 2022 Muftar Corp. All Rights Reserved. | Contact Us
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import AppRegisterForm from '@/components/Auth/AppRegisterForm.vue';

export default {
    name: "AppRegister",
    components: {
        AppRegisterForm
    },
    data: () => ({
        register: false
    })

};
</script>
<style scoped>
.cards {
    position: relative;
    display: inline-block;
    background-image: linear-gradient(to right, #FFFFFF, #C7DAF9);
    border-radius: 20px;
}

.cards p {
    color: #194799;
    font-weight: bold;
}

.cards:hover p {
    color: #ffff;
    font-weight: bold;
}

.cards:hover {
    background-image: linear-gradient(to right, #38549E, #38549E);
}

.cards .img-top {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 99;
}

.cards:hover .img-top {
    display: inline;
}

.logo-image {
    margin: auto;
    width: 20%;
    /* padding: 10px; */
}

.color {
    color: #fff;
}


/* .login-color{
    color: #194799;
  } */
</style>