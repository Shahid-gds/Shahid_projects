<template>
    <section class="media-section">
        <div class="container w-full mx-auto p-6 xl:pb-56 xl:flex">
            <div class="lg:flex w-full items-center lg:space-x-20">
                <div class="container mx-auto xl:mt-36 mt-16">
                    <div class="w-1/2 h-1/2 -left-80 -top-80 absolute">
                        <img src="@/assets/images/blueblurTop.svg" alt="">
                    </div>
                    <div class="leading-10">
                        <h1 class="text-5xl text-[#333333]">Brand Assets</h1>
                        <p class="text-[1.5rem] text-[#3A54B4]">Download Official Muftar Brand Assets</p>
                    </div>
                    <div class="mt-16 xl:w-3/4">
                        <p class="text-[1.2rem] text-[#2B2B2B]">All Muftar trademarks, logos, or other brand elements are subject to Muftar's Marks Usage Agreement.</p>
                    </div>
                    <div class="flex items-center mt-10 ml-5"  v-for="item in items">
                          <div class="flex items-center space-x-4 xl:w-3/5 w-full">
                            <div>
                              <img src="@/assets/icons/downloadIcon.svg" alt="">
                            </div>
                            <div class="text-[#3A54B4] text-[1rem]">
                              <p>{{ item.name }}</p>
                            </div>
                          </div>
                          <div class="md:flex md:space-x-7 items-center w-full">
                            <div class="text-[#B6CBEF] text-[1rem] md:w-20">
                              <p>{{ item.size }}</p>
                            </div>
                            <div class="text-[#B6CBEF] text-[1rem]">
                              <p>{{ item.updated }}</p>
                            </div>
                          </div>
                      </div>
                </div>
                
            </div>
            <div class="container mx-auto mt-36 w-full">
                <!-- <div class="w-1/2 h-1/2 top-20 left-[60rem] absolute">
                    <img  src="@/assets/images/blueblurTop.svg" alt="">
                </div> -->
                <div class="w-full 2xl:ml-36">
                    <img class="2xl:w-[85%]" src="../assets/images/mediaSecleftImg.svg" alt="">
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
const items = [
  {
    name: "Download Logo Kit",
    size: "6.7 mb",
    updated: "Updated 2 months ago"
  },
  {
    name: "Download Badges",
    size: "3.8 mb",
    updated: "Updated 2 months ago"
  },
  {
    name: "Download Photography",
    size: "15.7 mb",
    updated: "Updated 2 months ago"
  },
  {
    name: "Download App Screenshots",
    size: "288 mb",
    updated: "Updated 2 months ago"
  },
  {
    name: "Download Brand Book",
    size: "27 mb",
    updated: "Updated 2 months ago"
  },
  {
    name: "Download Press Release",
    size: "2.8 mb",
    updated: "Updated 2 months ago"
  },
];
</script>
<style scoped>
.media-section {
    background-image: url('../assets/images/mediapageBg.svg');
    height: auto;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
}
</style>