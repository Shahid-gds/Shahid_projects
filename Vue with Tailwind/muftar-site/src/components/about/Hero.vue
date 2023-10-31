<template>
  <div class="hero relative">
    <!-- <video id="hero-video" v-if="nonMobile" autoplay loop muted>
        <source src="@/assets/media/hero.mp4" type="video/mp4">
      </video> -->
    <img id="hero-video" src="@/assets/backgrounds/about/about-bg.png" />
    <!-- <div class="overlay career-overlay"></div> -->
    <div
      class="relative z-10 w-1/2 h-full text-center mx-auto flex flex-col items-center justify-center">
      <h1
        class="main-text text-6xl text-white text-center md:my-30 mt-40 md:text-6xl aboutCustomeBorder">
        ABOUT OUR <b>COMPANY</b>
      </h1>
      <h1 class="text-xl text-white my-13 text-center my-10 md:text-3xl">
        Providing An <i>Innovative Solution</i> for Transportation
      </h1>
      <div class="w-full md:w-10/12 mx-auto">
        <p class="text-white text-center  my-5 md:my-10 md:mt-10 md:text-1xl">
          Muftar started with an idea to <strong><em>assist the transport industry</em></strong> in their daily operations by providing access to their drivers' activity to <strong><em>ensure timely deliveries</em></strong>, booking a load, and paying vendors to make life easier for trucking firms to become efficient by <strong><em>cutting the cost</em></strong> by half.</p>
        <p class="text-white text-center mt-4 md:text-1xl">
          Our 24/7 customer support will make sure your queries are answered timely, and our savvy developers will ensure the app runs as faster as your deliveries.
        </p>

        <p class="text-white text-center mt-4 mb-10 md:text-1xl">
          Our amazing software is built to address the <strong><em> importance of efficiency </em></strong> and digitization that is lacking in the transportation industry. <strong><em>You’re in good hands! </em></strong>
          <i class="fa-regular fa-phone-arrow-up-right"></i>
        </p>
      </div>
        <div class="glassmorph-nav rounded mx-auto flex justify-between items-center p-5">
          <a href="/waitlist" class="text-white text-2xl">
            JOIN WAITLIST
          </a>
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
.bgWaitList{
  background: #5D8AC7;
  padding: 5px;
}
.joinlistAbout{
  position: relative;
}
.joinlistAbout::after{
  content: "";
  position: absolute;
  background-image: linear-gradient(120deg, #5D8AC7, rgb(236, 235, 235)) ;
  border-radius: 35px;
  width: 5px;
  height: 100%;
  bottom: 0;
  left: 0;
}
.aboutCustomeBorder{
  position: relative;
}
.aboutCustomeBorder::after{
  content: "";
  position: absolute;
  background-image: linear-gradient(120deg, rgb(0, 0, 0), #5D8AC7, rgb(0, 0, 0)) ;
  border-radius: 35px;
  width: 100%;
  height: 5px;
  bottom: 0;
  left: 0;
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
  min-height: 80vh;
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
