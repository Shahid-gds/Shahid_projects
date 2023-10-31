<template>
    <div>
      <div id="HomeHero" class="relative">
        <div class="flex flex-col justify-center items-center absolute left-10 right-10 text-center margin">
          <h1 class="text-white text-4xl font-bold text-center">Transportation Hassle-Free</h1>
          <p class="text-white text-2xl text-center">Paperless . Trackable . Innovative</p>
        </div>
      </div>
      
    </div>
  </template>
    <script>
  export default {
    components: {},
    data() {
      return {};
    },
  };
  </script>
    <style scoped>
  #HomeHero {
    background-image: url("../../assets/backgrounds/alpha-landing/home-hero.png");
    background-size: 100% !important;
    background-repeat: no-repeat !important;
    /* height: clamp(250px, 55vw, 775px) !important; */
    height: clamp(269px, 71vw, 923px) !important;
  }
  .margin{
    margin-top: 10rem;
  }
  @media screen and (max-width: 999px) {
    .margin{
    margin-top: 6rem;
  }
  .margin h1{
    font-size: 16px;
  }
  .margin p{
    font-size: 10px;
  }
  }
  @media screen and (max-width: 777px){
    .margin{
    margin-top: 4rem;
  }
  }
  @media screen and (max-width: 600px) {
    .margin{
    margin-top: 3rem;
  }
  }
  </style>