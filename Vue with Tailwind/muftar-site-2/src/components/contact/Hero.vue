<template>
  <div class="contactHero"  style="background:#1B1B1E">
    <div class="hero relative">
    <div class="relative z-10 w-1/2 h-full text-center mx-auto flex flex-col items-center justify-center">
      <h1 class="contactBorder main-text text-6xl text-white text-center md:my-30 mt-40 md:text-6xl">
        CONTACT US
      </h1>
      <a class="bgWaitList mt-32 p-4 md:flex items-center justify-center text-white md:px-5 py-1 glassmorph-contact text-center" href="/waitlist">Join The Waitlist!</a>
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
.glassmorph-contact {
  background: #34487D;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(3.5px);
  -webkit-backdrop-filter: blur(3.5px);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}
.contactHero{
  background-image: url('../../assets/backgrounds/contact/contactMainBg.png') !important;
  background-size: contain !important;
  background-repeat: no-repeat !important;
}
.contactBorder{
  position: relative;
}
.contactBorder::after{
  content: "";
  position: absolute;
  background-image: linear-gradient(120deg, #242b40, #ffffff, #242b40);
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
  min-height: 65vh !important;
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
