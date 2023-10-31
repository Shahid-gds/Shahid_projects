<template>
 <div class="CustomerHeroMain" style="background-color: #0E1012;">
    <div class="hero heroMobCustomer relative">
    <div
      class="relative mobMargin z-10 w-1/2 h-full flex flex-col items-center justify-start mt-56 ml-20">
        <h1 class="text-white text-4xl customerBorder w-72 mb-10">Our <b>Customers</b></h1>
        <p class="text-white text-xl">Our customers are our partners - we are recognized by our customers and we make sure they are always satisfied!</p>
         <div class="w-36 mt-20">
           <a class="mobMargin bgWaitList md:flex items-center justify-center text-white p-2  text-center" href="/waitlist">Join The Waitlist!</a>
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
.CustomerHeroMain{
  background-image: url('../../assets/backgrounds/customers/customerBGMain.png');
  background-size: contain;
  background-repeat: no-repeat;
}
.bgWaitList{

  background: #34487D;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(3.5px);
  -webkit-backdrop-filter: blur(3.5px);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.18);

}
.customerBorder{
  position: relative;
}
.customerBorder::after{
  content: "";
  position: absolute;
  background-image: linear-gradient(120deg, #34487D, #ffffff,#34487D) ;
  border-radius: 35px;
  width: 100%;
  height: 5px;
  bottom: 0;
  left: 0;
}
.joinlistAboutHeading{
  position: relative;
}
.joinlistAboutHeading::after{
  content: "";
  position: absolute;
  background-image: linear-gradient(120deg, rgb(236, 235, 235), #5D8AC7, rgb(236, 235, 235)) ;
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
  .mobMargin{
    margin-top: 8rem !important;
    text-align: center !important;
  }
  .CustomerHeroMain{
    background-size: 200% 100% !important;
    background-repeat: no-repeat;
    background-position: top;
  }
  .heroMobCustomer {
    min-height: 65vh;
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
