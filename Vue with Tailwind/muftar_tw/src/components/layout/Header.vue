<template>
    <!-- Muftar Logo -->
    <div class="w-6 lg:hidden absolute right-0 top-0 mt-16 mr-16">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path
                d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
        </svg>
    </div>
    <div class="container mx-auto mt-14 bg-[#3C58A8] xl:bg-transparent lg:bg-transparent absolute xl:relative lg:relative w-64 xl:w-full lg:w-full">
        <ul class="xl:flex lg:flex justify-between font-bold text-white xl:text-[#242021] lg:text-[#242021] p-4">
            <div class="xl:flex lg:flex items-center xl:space-x-12 lg:space-x-12">
                <li>
                    <router-link :to="{ name:'' }">
                    <img class="hidden xl:block lg:block" src="../../assets/images/logo.svg" alt="">
                    <img class="xl:hidden lg:hidden" src="../../assets/images/logo-White.svg" alt="">
                    </router-link>
                </li>
                <li><router-link :to="{ name:'' }">Mission</router-link></li>
                <li><router-link :to="{ name:'' }">Solutions</router-link></li>
                <li><router-link :to="{ name:'' }">Pricing</router-link></li>
                <li><router-link :to="{ name:'' }">Knowledge Bar</router-link></li>
            </div>
            <div class="xl:flex xl:space-x-12 lg:flex lg:space-x-12 items-center">
            <li><button>Login</button></li>
            <li><button class="bg-[#3C58A8] rounded-md p-2 px-7 text-white">Join Our Waitlist</button></li>
            </div>
        </ul>
    </div>
</template>