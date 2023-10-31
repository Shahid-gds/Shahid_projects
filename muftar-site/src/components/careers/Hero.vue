<template>
 <div class="careerMainBg" style="background-color: black;">
    <div class="hero relative">
    <div class="flex justify-center items-center mt-40 flex-col">
      <h1 class="text-white text-4xl careersBorder"><b>JOIN OUR TEAM</b></h1>
      <p class="mt-10 text-white text-3xl"><b><i>WE</i></b> LOVE TO SEE YOU <b><i>GROW</i></b> WITH US</p>
      <a class="bgcolor mb-20 p-2 mt-20 md:flex items-center justify-center text-white md:px-5 py-1 glassmorph-career text-center" href="/waitlist">Join The Waitlist!</a>
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
.glassmorph-career {
  background: #34487D;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(3.5px);
  -webkit-backdrop-filter: blur(3.5px);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}
.careerMainBg{
  background-image: url('../../assets/backgrounds/career/careersBG.png');
  background-size: cover;
  background-repeat: no-repeat;
}

.careersBorder{
  position: relative;
}
.careersBorder::after{
  content: "";
  position: absolute;
  background-image: linear-gradient(120deg, #0d121f, #ffffff, #0d121f);
  border-radius: 35px;
  width: 100%;
  height: 5px;
  bottom: 0;
  left: 0;
}
.hero {
  width: 100%;
  min-height: 70vh;
  overflow: hidden;
}
#hero-video {
  width: 100%;
  min-height: 90vh;
  object-fit: cover;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: -1;
  transition: 1s;
}
.hero-content {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

@media screen and (max-width: 900px) {
  .hero {
    min-height: 90vh;
  }
  #hero-video {
    min-height: 100vh;
  }
}
</style>
