<template>
    <section class="hero-section">
        <div class="container w-full mx-auto p-6">
            <div class="lg:flex w-full items-center lg:space-x-20">
                <div class="w-full lg:mt-36">
                    <div>
                        <img class="hero-shadow w-full h-full -ml-8" src="@/assets/images/heroSecMobileShadow.svg" alt="">
                    </div>
                    <div>
                        <img class="w-full h-full md:-ml-10 xl:-mt-[32rem] lg:-mt-[25rem] md:-mt-[35rem]" src="@/assets/images/heroSecMobile.svg" alt="">
                    </div>
                </div>
                <div class="w-full lg:mt-16">
                    <div class="xl:text-5xl sm:text-4xl text-[1.5rem] font-[900] text-[#333333]  text-heading">
                        <h1 class="leading-tight">Logistics Simplified,
                        Paperwork Digitized,
                        Transport Made Simple</h1>
                    </div>
                    <div class="lg:mt-14 sm:mt-8 mt-4 span-textOne">
                        <span class="xl:text-5xl text-2xl text-[#333333]">That's </span>
                        <span class="xl:text-5xl text-2xl text-[#3A54B4]">Muftar.</span>
                    </div>
                    <div class="sm:mt-6 mt-2 span-textOne">
                        <span class="xl:text-3xl text-xl text-[#2B2B2B]">Get Started </span>
                        <span class="xl:text-3xl text-xl text-[#3A54B4]">FREE </span>
                        <span class="xl:text-3xl text-xl text-[#2B2B2B]">Today!</span>
                    </div>
                    <div class="lg:mt-10 sm:mt-4 mt-2 text-paras">
                        <div class="text-lg text-[#333333]">
                            <p>
                                Muftar is all about simplifying logistics, eliminating paperwork and inefficiencies, and
                                connecting the world.
                            </p>
                        </div>
                        <div class="text-lg text-[#333333] lg:mt-8 mt-2">
                            <p>
                                We provide a fully integrated, digitized platform that effortlessly manages all aspects of
                                logistics.
                            </p>
                        </div>
                        <div class="text-lg text-[#333333] lg:mt-8 mt-2">
                            <p>
                                As we like to say, we're not just moving goods, we're moving the industry forward.
                            </p>
                        </div>
                        <div class="bg-[#3A54B4] w-full p-2.5 rounded-lg text-white text-center sm:mt-10 mt-4 min-h-[3rem] relative">
                        <router-link  :to="{name: 'Register'}" class="absolute flex items-center justify-center w-full h-full top-0 left-0"> START FREE TODAY
                        </router-link>
                        </div>
                    </div>
                    <!-- <div class="flex justify-center mt-10 space-x-5">
                        <div>
                            <button>
                                <img src="@/assets/buttons/playstore.svg" alt="">
                            </button>
                        </div>
                        <div>
                            <button>
                                <img src="@/assets/buttons/applestore.svg" alt="">
                            </button>
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
    </section>
    <section class="">
        <div class="container w-full mx-auto p-6 pb-16">
            <div class="lg:flex w-full items-center">
               <div>
                <div>
                    <video class="hero-video rounded-xl xl:max-w-xl" autoplay muted loop playsinline>
                      <source src="https://firebasestorage.googleapis.com/v0/b/muftar-site.appspot.com/o/site-assets%2Fvideos%2FMuftar-explained.mp4?alt=media&token=b496b0db-e448-4422-8457-dafffe1a02a9" type="video/mp4">
                      <source src="https://firebasestorage.googleapis.com/v0/b/muftar-site.appspot.com/o/site-assets%2Fvideos%2FMuftar-explained.webm?alt=media&token=b496b0db-e448-4422-8457-dafffe1a02a9" type="video/webm">
                      Your browser does not support the video tag.
                    </video>
                  </div>
                <div class="relative bg-[#3A54B4] p-2.5 py-5 rounded-lg text-white text-center lg:mt-20 mt-5">
                    <a href="/solutions" class="absolute flex items-center justify-center w-full h-full top-0 left-0"> Learn More
                        </a>
                </div>
               </div>
                <div class="xl:w-full lg:mt-16 mt-4 2xl:ml-56 lg:ml-24">
                    <div class="sm:text-5xl text-[1.3rem] font-[900] text-[#333333] space-y-2 text-heading 2xl:w-9/12">
                        <h1>Unveiling the Future
                        of Logistics</h1>
                    </div>
                    <div class="lg:mt-14 mt-3 text-heading">
                        <span class="sm:text-4xl text-[1.3rem] text-[#3A54B4]">Join Muftar's Digital Revolution</span>
                    </div>
                    <div class="lg:mt-16 mt-5 text-paras">
                        <div class="text-lg text-[#333333]">
                            <p>
                                Welcome to the age of simplified logistics, powered by Muftar. As the world becomes more
                                connected, so too should your logistics processes. That's why we're here to introduce you to
                                a tool that makes the complex simple and the cumbersome efficient.
                            </p>
                        </div>
                        <div class="text-lg text-[#333333] sm:mt-8 mt-4">
                            <p>
                                Take a moment to see how Muftar can revolutionize your logistics operations, reduce your
                                carbon footprint, and help you move goods seamlessly across the world.
                            </p>
                        </div>
                    </div>
                </div>
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
@media (max-width: 767px) {
    .hero-shadow{
      display: none;
    }
    /*.text-heading{
        text-align: center;
        font-size: 1.5rem;
    }
    .span-textOne{
        text-align: center;
    }
    .text-paras{
        text-align: center;
    }*/
  }
</style>