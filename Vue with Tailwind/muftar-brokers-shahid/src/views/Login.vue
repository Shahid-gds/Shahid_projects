<template>
    <div class="bg-[url('@/assets/images/bg.svg')] bg-cover h-screen flex justify-center items-center text-center">
            <div>
                <div class="w-[350px]">
                  <div class="flex">
                    <div class="w-36">
                    </div>
                    <div class="logo-image">
                        <img src="@/assets/images/logo.svg" alt="Login Logo" />
                    </div>
                    <div class="w-36">
                    </div>
                  </div>
                  <p class="text-[black] font-semibold uppercase">Welcome to Muftar Portals</p>
                  <h1 class="text-[#3C5AA8] text-4xl font-bold uppercase">Login</h1>
                                       
                    <div class="flex flex-col space-y-5 mt-5">
                        <form class="flex flex-col space-y-5 mt-5">
                                <div class="flex flex-row space-x-2 rounded-md bg-white py-1 px-2 border">
                                <input
                                    class="w-full p-2 border-none outline-none focus:ring-0 bg-transparent text-[#ACACAC] placeholder:text-[#ACACAC] text-[17px]"
                                    placeholder="Muftar ID or Email" type="text">
                            </div>
                            <div class="flex flex-row space-x-2 rounded-md bg-white py-1 px-2 border">
                                <input
                                    class="w-full p-2 border-none outline-none focus:ring-0 bg-transparent text-[#ACACAC] placeholder:text-[#ACACAC] text-[17px]"
                                    placeholder="Password" type="password">
                            </div>

                            <div class="flex justify-between">
                                <div class="flex">

                                    <input
                                        class="h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-primary checked:border-primary focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                        type="checkbox">
                                    <label class="text-[#838383] text-[17px] font-[500]">
                                        Remember Me
                                    </label>
                                </div>
                                <div>
                                    <router-link to="" class="text-[#838383] text-[17px] font-[500]">
                                        Forget Password ?
                                    </router-link>
                                </div>
                            </div>
                       <router-link to="/createload">
                        <button  type="submit"
                        class="btn-color rounded-md flex justify-center py-3 text-xl space-x-4 text-white uppercase w-full">
                        <p>Login</p>
                    </button>
                       </router-link>
                        </form>

                    </div>
                    <p class="text-sm text-center  my-5" style="color: #ACACAC">
                        Copyright © 2022 <span class="font-bold">Muftar</span>. All Rights Reserved.
                    </p>
                </div>
            </div>
    </div>
</template>

<style scoped>
h1 {
    font-family: 'Avenir', sans-serif;
}
.btn-color {
    background: linear-gradient(to top, #3C59A8 0%, #1E2D54 100%);
}
</style>