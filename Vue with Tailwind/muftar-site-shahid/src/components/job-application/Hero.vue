<template>
  <div class="hero relative">
    <img id="hero-video" src="@/assets/backgrounds/job-application/customerBg.png" />

    <div class="overlay career-overlay"></div>
    <div
      class="
        relative
        z-10
        w-1/2
        h-full
        text-center
        mx-auto
        flex flex-col
        items-center
        justify-center
      "
    >
      <h1
        class="
          main-text
          text-6xl text-white text-center
          md:my-30
          mt-40
          md:text-6xl
        "
      >
        Our Customers
      </h1>
      <h1 class="text-xl text-white text-center my-10 md:text-3xl">
        We put pride in showcasing the many companies we work with!
      </h1>

      <div class="callnowMain flex justify-between mb-4">
        <div class="callnow flex justify-between items-center p-2">
          <div>
            <!-- <img class="mr-2" src="@/assets/icons/call.png" alt="" /> -->
          </div>
          <div class="text-white">
            call Us: <br />
            (770) 910-7310
          </div>
        </div>
        <div class="callnow flex justify-between items-center p-2 ml-2">
          <div>
            <!-- <img class="mr-2" src="@/assets/icons/time.png" alt="" /> -->
          </div>
          <div class="text-white">
            Opening Hours: <br />
            Mon-Fri: 8am – 5pm
          </div>
        </div>
      </div>
      
    </div>
    <OurSolution />
  </div>
</template>
<script>
import OurSolution from "./OurSolutions.vue";
export default {
  props: ["nonMobile"],
  components: {
    OurSolution,
  },
  data() {
    return {};
  },
};
</script>
<style scroped>
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
  min-height: 70vh;
  overflow: hidden;
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
.career-overlay {
  background: rgb(0, 0, 0);
  background: -moz-linear-gradient(
    93deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(76, 170, 199, 1) 100%
  );
  background: -webkit-linear-gradient(
    93deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(76, 170, 199, 1) 100%
  );
  background: linear-gradient(
    93deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(76, 170, 199, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#000000",endColorstr="#4caac7",GradientType=1);
}
@media screen and (max-width: 900px) {
  .hero {
    min-height: 90vh;
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
}
</style>
