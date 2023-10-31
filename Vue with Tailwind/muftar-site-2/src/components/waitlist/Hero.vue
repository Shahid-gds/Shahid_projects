<template>
 <div class="waitlistBgMain">
    <div class="hero relative">
    <!-- <img id="hero-video" src="@/assets/backgrounds/wait.png" /> -->

    <Navbar />
   <div class="flex justify-center items-center mt-40 flex-col">
      <h1 class="text-black text-4xl waitlistBorder"><b>WAIT LIST</b></h1>
      <p class="mt-10"><b><i>WE</i></b> LOVE TO SEE YOU <b><i>GROW</i></b> WITH US</p>
      <a class="bgcolor mb-20 p-2 mt-20 md:flex items-center justify-center text-white md:px-5 py-1 glassmorph-nav text-center" href="/waitlist">Join The Waitlist!</a>
    </div>
  </div>
 </div>
</template>
<script>
import Navbar from "@/components/layout/Navbar.vue";
export default {
  props: ["nonMobile"],
  name: "Hero",
  components: {
    Navbar,
  },
  data() {
    return {};
  },
};
</script>
<style scroped>
.waitlistBorder{
  position: relative;
}
.waitlistBorder::after{
  content: "";
  position: absolute;
  background-image: linear-gradient(120deg, #c0d2e9, #000000, #c0d2e9)  ;
  border-radius: 35px;
  width: 100%;
  height: 5px;
  bottom: 0;
  left: 0;
}
.waitlistBgMain{
  background-image: url('../../assets/backgrounds/career/careersBG.png');
  background-size: cover;
  background-repeat: no-repeat;
}
.callnow {
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(3.5px);
  -webkit-backdrop-filter: blur(3.5px);
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}
.hero {
  width: 100%;
  min-height: 50vh;
  overflow: hidden;
  /* display: flex;
  align-items: center;
  justify-content: center; */
}
#hero-video {
  width: 100%;
  min-height: 90vh;
  object-fit: cover;
  position: fixed;
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
    min-height: 30vh;
  }
  #hero-video {
    min-height: 100vh;
  }
  .main-text {
    font-size: 2.75rem !important;
  }
  .main-para {
    padding: 0%;
    margin-top: 0% !important;
    width: 200% !important;
  }
  .callnowMain {
    flex-direction: column !important;
  }
  .callnow {
    width: 100% !important;
    text-align: inherit !important;
    font-size: 14px !important;
    margin: 0 !important;
    margin-top: 10px !important;
  }
  /* #hero-video{
    width: 100%;
    min-height: 60vh;
  } */
  /* #hero-video { display: none; }
  .hero {
    background: url("https://firebasestorage.googleapis.com/v0/b/muftar-site.appspot.com/o/hero-mobile.png?alt=media&token=e93c4c3a-f801-421d-977f-c03215ad6458") no-repeat;
    background-size: cover;
  } */
}
</style>
