<template>
    <section class="hero-section">
        <div class="container mx-auto mt-40 pb-24 px-6 xl:flex xl:space-x-10 items-center">
           
           <div class="xl:w-[70%] pb-20">
            <div>
                <div class="">
                    <h1 class="sm:text-5xl text-3xl pb-2 text-[#333333]">Muftar Partner Program</h1>
                <p class="sm:text-2xl text-xl text-[#30488C] font-[400]">Transforming Connections into Opportunities</p>
                </div>
               <div class="mt-12 text-lg text-[#2B2B2B]">
                <div>Earn Up to 10% Commission on Referrals</div>
                <div>and Unlock Exclusive Partner Benefits</div>
               </div>
            </div>
           <div class="mt-10 border-2 p-3 w-[138px] h-[50px] text-center border-[#3A54B4] rounded-xl text-[#3A54B4] font-[600]">
            <router-link to="/register" class="">
                <button class="">Get Started</button>
            </router-link>
           </div>
           </div>
           <div class="w-full">
            <img src="../assets/images/earnwithusImg.svg" alt="">
        </div>
        </div>
    </section>
</template>

<style scoped>
.hero-section {
    background-image: url('../assets/images/sectionBg.svg');
    height: auto;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
}
</style>