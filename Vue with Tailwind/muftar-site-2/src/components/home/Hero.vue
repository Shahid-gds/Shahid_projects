<template>
  <div style="background: linear-gradient(to bottom, #1D3781, #FFFFFF);">
    <div id="HomeHero" class="relative mb-72">
    </div>
    <div  class="flex justify-center items-center mb-52">
      <div class="direction-matters-section flex justify-center flex-col items-center pl-3 pr-3 absolute w-full">
    <h1 class="text-4xl font-bold heading-text__color text-center">Directions that matter</h1>
    <p class="para-text__color"> Our Only Direction Is Moving Forward </p>
    <div class="flex justify-center md:justify-between items-center gap-40 mt-32 flex-wrap">
      <div style="background: linear-gradient(to bottom, #E4E4E4, #ffff);" class="w-46 h-40 p-2 rounded-xl relative flex items-center justify-center">
        <img class="absolute bottom-32 w-16" src="@/assets/backgrounds/home/direction-1.svg" alt="">
        <div class="flex flex-col justify-center w-80 text-center items-center">
          <p class="mt-10 font-bold">PROFESSIONAL</p>
        <p class="mt-4">We treat our clients like family, listening carefully to their every need and advising them on the most viable options.</p>
        </div>
      </div>
      <div style="background: linear-gradient(to bottom, #E4E4E4, #ffff);" class="w-46 h-40 p-2 rounded-xl relative flex items-center justify-center">
        <img class="absolute bottom-32 w-16" src="@/assets/backgrounds/home/direction-2.svg" alt="">
        <div class="flex flex-col justify-center w-80 text-center items-center">
          <p class="mt-10 font-bold">TRUSTWORTHY</p>
        <p class="mt-4">Our dedication to providing our services 
on time and safely is what makes 
us stand out.</p>
        </div>
      </div>
      <div style="background: linear-gradient(to bottom, #E4E4E4, #ffff);" class="w-46 h-40 p-2 rounded-xl relative flex items-center justify-center">
        <img class="absolute bottom-32 w-16" src="@/assets/backgrounds/home/direction-3.svg" alt="">
        <div class="flex flex-col justify-center w-80 text-center items-center">
          <p class="mt-10 font-bold">UNIQUE</p>
        <p class="mt-4">Our focus is to streamline the entire transportation process, providing real-time access of each load </p>
        </div>
      </div>
    </div>
  </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["nonMobile"],
  components: {
  },
  data() {
    return {};
  },
};
</script>
<style scroped>
  #HomeHero{
  background-image: url('../../assets/backgrounds/home/home-hero.png');
  background-size: 100% !important;
  background-repeat: no-repeat !important;
  height: 130vh;
  }
  @media screen and (max-width:800px) {
    #HomeHero{
      height: 90vh !important;
    }
  }
  @media screen and (max-width:600px) {
    #HomeHero{
      height: 60vh !important;
    }
  }
  @media screen and (max-width:500px) {
    #HomeHero{
      height: 50vh !important;
    }
  }
  @media screen and (max-width:400px) {
    #HomeHero{
      height: 40vh !important;
    }
  }
</style>
