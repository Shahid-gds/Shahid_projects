<template>
  <div class=" md:flex items-center justify-center flex-col relative top-80 z-50">
      <div class="felx flex-col justify-center items-center text-center solution-bg" style="width: 80%; margin: auto; ">
        <h1 class="text-white font-bold text-4xl mt-40">No Rigid Services, Just Solutions!</h1>
      <h1 class="text-white">Flexible, Organized & Accelerated Solutions</h1>
      <p class="text-white mt-10">
        We are Muftar Corp. We are a professional logistics management company, offering specialized solutions for the entire transportation industry.
      </p>
      <div class="pt-5 pb-5 md:flex items-center justify-center">
        <a class=" md:flex items-center justify-center text-black font-bold md:px-8 py-2 mr-2 bg-white rounded-2xl mobJust text-center w-48 " href="/waitlist">Read More</a>
        <a class=" md:flex items-center justify-center ml-2 text-white md:px-8 py-2 joinWaitlisButton mobJust text-center w-48 " href="/waitlist">Join Our Waitlist!</a>
      </div>
    </div>
  </div>
  <!-- <img class="absolute bottom-32" src="@/assets/backgrounds/home/just-solution-bg.png" alt=""> -->
</template>
<script>
export default {
  components: {},
  data() {
    return {
      contact: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
    };
  },
  methods: {
    sendContactForm() {
      console.log(this.contact);
    },
  },
};
</script>
<style scroped>
  .solution-bg{
    background-image: url("../../assets/icons/home/just-solution-bg.png");
  background-size: 100% !important;
  background-repeat: no-repeat !important;
  height: 80vh;
  }
.joinWaitlisButton{
  background-color: #34487D;
  border-radius: 15px;
}
.waitListBtn {
  display: flex;
  margin: auto;
}
.callnow {
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(3.5px);
  -webkit-backdrop-filter: blur(3.5px);
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}
.full-section {
  width: 100%;
  min-height: 60vh;
  padding-bottom: 5rem;
  overflow: hidden;
  position: relative;
  /* background-attachment: fixed; */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.req-quote-group {
  width: 100%;
  height: 100%;
}
.quote-form {
  width: 50rem;
}
@media screen and (max-width: 900px) {
  .full-section {
    min-height: 80vh;
  }
  form.quote-form.glassmorph.p-10.min-w-96.rounded-xl.shadow-lg.w-9\/12 {
    width: 100%;
  }
  .mobJust{
    display: block;
    margin: auto;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .solutionNew{
    width: 90% !important;
  }
}
</style>
