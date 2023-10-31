<template>
<div class="py-10 aap-download">
  <!-- <div class="app-grid ">
    <div class="flex justify-start mb-32 ml-32 flex-col flex-wrap firstPara">
      <h1 class="text-4xl mobHeading uppercase font-bold text-black pb-5 w-full p-6">Driver</h1>
      <p class="text-black pt-5 p-6">Let Muftar take care of the rest!</p>
      <p class="text-black pt-5 p-6 w-8/12">
        Our driver app powers drivers with on-the-go connections to maintain a timeous progression of their route.
      </p>
      <p class="text-whiblackte pt-5 p-6 w-8/12">
        Drivers using our in-built navigation system helps them deliver loads hassle-free.   What's more, with our document scanner, in which each load has a unique QR code, drivers experience a seamless flow, concluding loads faster.
      </p>
    </div>

    <div class="flex justify-around items-center">
        <img src="@/assets/media/home/mobile-tab.png" class="w-9/12" alt="">
    </div>

  </div>

  <div class="app-grid ">

    <div class="flex justify-around items-center">
        <img src="@/assets/media/home/laptop.png" alt="" style="width: 80%;">
    </div>

    <div class="flex justify-start mb-32 ml-32 flex-col firstPara">
      <h1 class="text-4xl mobHeading  uppercase font-bold text-black w-full pb-5 p-6">Brokers and Shippers</h1>
      <p class="text-black pt-5 p-6">Let Muftar take care of the rest!</p>
      <p class="text-black pt-5 p-6 w-8/12">
        Brokers, shippers and carriers can easily access their transportation portal using our technologically advanced software. By using our website (via mobile or desktop)our software enables you to enhance and improve the management of your clientele, offering you the ability to port your data at the click of a button. This will ensure a synchronous connection throughout your business operation.<br /> <br />

        Furthermore, having access in real-time means that you can oversee drivers throughout the
        transportation process from anywhere through our website.
      </p>
      <div class="p-6">
      </div>
    </div>


  </div>
  <div class="app-grid">
    <div class="flex justify-start mb-32 ml-32 flex-col flex-wrap firstPara">
      <h1 class="text-4xl mobHeading uppercase font-bold text-black pb-5 w-full p-6">Carrier Dashboard</h1>
      <p class="text-black pt-5 p-6">Let Muftar take care of the rest!</p>
      <p class="text-black pt-5 p-6 w-8/12">
        Our Carrier Portal is completely digital, allowing the supply chain to power fleets with an omniscient overseeing of all loads and drivers, ensuring efficacy throughout as well as maintaining all safety and compliance rules. — Muftar Digital brings lightning-speed efficiency to the supply chain, offering carriers the freedom to conduct business efficiently, using our technologically advanced software.


      </p>
      <p class="text-whiblackte pt-5 p-6 w-8/12">
        With our software, you can navigate the transport system from anywhere by logging on to our website via your desktop or mobile. This affords you the peace of mind you need to continue with your daily business while keeping track of every particular of the supply chain process.

Gain insights on miles traveled as well as real-time access to drivers’ locations. In addition, you can oversee the allocating of parcels, prepare entries, pay agents, and much more—all easy, affordable and 100% accessible, all the time.
      </p>
    </div>

    <div class="flex justify-end items-center">
        <img src="@/assets/media/home/carrier-tab.png" class="w-9/12" alt="">
    </div>

  </div> -->
  <div class="flex justify-between gap-72 pl-20 pr-20 items-center relative mb-32 mt-36">
    <div>
      <h1 class="text-4xl mobHeading uppercase font-bold text-black pb-5 w-full p-6">Driver</h1>
      <p class="text-black pt-5 p-6">Let Muftar take care of the rest!</p>
      <p class="text-black pt-5 p-6"  style="width:40rem">
        Our driver app powers drivers with on-the-go connections to maintain a timeous progression of their route.
      </p>
      <p class="text-whiblackte pt-5 p-6" style="width:40rem">
        Drivers using our in-built navigation system helps them deliver loads hassle-free.   What's more, with our document scanner, in which each load has a unique QR code, drivers experience a seamless flow, concluding loads faster.
      </p>
    </div>
    <img src="@/assets/media/home/app-1.png" class="absolute right-0" alt="" style="width:35rem; height:35rem; object-fit: contain;">
  </div>
  <div class="flex justify-between gap-72 pl-20 pr-20 items-center relative flex-row-reverse mb-32">
    <div>
      <h1 class="text-4xl mobHeading uppercase font-bold text-black pb-5 w-full p-6">Driver</h1>
      <p class="text-black pt-5 p-6">Let Muftar take care of the rest!</p>
      <p class="text-black pt-5 p-6" style="width:40rem">
        Our driver app powers drivers with on-the-go connections to maintain a timeous progression of their route.
      </p>
      <p class="text-whiblackte pt-5 p-6 " style="width:40rem">
        Drivers using our in-built navigation system helps them deliver loads hassle-free.   What's more, with our document scanner, in which each load has a unique QR code, drivers experience a seamless flow, concluding loads faster.
      </p>
    </div>
    <img class="absolute left-0" src="@/assets/media/home/app-2.png" alt="" style="width:35rem; height:35rem; object-fit: contain;">

  </div>
  <div class="flex justify-between gap-72 pl-20 pr-20 items-center relative mb-32">
    <div>
      <h1 class="text-4xl mobHeading uppercase font-bold text-black pb-5 w-full p-6">Driver</h1>
      <p class="text-black pt-5 p-6">Let Muftar take care of the rest!</p>
      <p class="text-black pt-5 p-6"  style="width:40rem">
        Our driver app powers drivers with on-the-go connections to maintain a timeous progression of their route.
      </p>
      <p class="text-whiblackte pt-5 p-6" style="width:40rem">
        Drivers using our in-built navigation system helps them deliver loads hassle-free.   What's more, with our document scanner, in which each load has a unique QR code, drivers experience a seamless flow, concluding loads faster.
      </p>
    </div>
    <img src="@/assets/media/home/app-3.png" class="absolute right-0" alt="" style="width:35rem; height:35rem; object-fit: contain;">
  </div>
</div>
</template>
<script>
export default {
  components: {
  },
  data() {
    return {
      openTab: 1
    };
  },
  methods:{
   toggleTabs: function(tabNumber){
      this.openTab = tabNumber
    }
  },
};
</script>
<style scroped>
  .aap-download{
    background-image: url('../../assets/backgrounds/home/app-download-bg.png');
    background-repeat: no-repeat !important;
    /* max-height: 320vh; */
    background-size: contain;
    background-position: right;

  }

.transitionCustome{
   -moz-transition: all 1s ease-in;
    /* WebKit */
    -webkit-transition: all 1s ease-in;
    /* Opera */
    -o-transition: all 1s ease-in;
    /* Standard */
    transition: all 1s ease-in;
}
.tabactive{
  background-color: #5d8ac7;
}
.customeBorderDownload{
  position: relative;
}
.customeBorderDownload::after{
  content: "";
  position: absolute;
  background-image: linear-gradient(120deg, #34487D, #0E1012) ;
  border-radius: 100px;
  width: 80%;
  height: 5px;
  bottom: 0;
  left: 25px;
}
.customeBorderTop{
  position: relative;
}
.customeBorderTop::after{
  content: "";
  position: absolute;
  background-image: linear-gradient(120deg, #34487D, #0E1012) ;
  border-radius: 100px;
  width: 80%;
  height: 5px;
  top: 0;
  left: 25px;
}
.app-grid {
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  justify-items: stretch;
  align-items: stretch;
}
.app-preview {
  width: 50%;
  margin: auto;
}
.q-t {
  font-size: 3rem;
}
.btn {
  font-size: 1.1em;
  color: #fff;
  border-radius: 30px;
  margin: auto;
}
.btn span {
  color: white;
  font-size: 0;
}

.btn:hover {
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(3.5px);
  -webkit-backdrop-filter: blur(3.5px);
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}
.btn:hover span {
  font-size: 1em;
  border-top-left-radius: 50px;
  transition: all 0.1s ease;
}
.btn:hover .ico {
  margin-left: 0px;
  /* transform: rotate(360deg); */
  transition: all 0.1s ease;
}
.btn:hover .span {
  visibility: visible;
  transition: all 0.1s ease;
}

.btn:hover .ico::before {
  transition: all 3s ease;
  content: "\f10b" !important;
  font-family: Ionicons;
  margin-left: -5px;
}

@media screen and (max-width: 900px) {
  .firstPara{
  margin-left: 0 !important;
}
.app-grid {
  grid-template-columns: 1fr;
}
  /* .q-t {
    font-size: 5rem;
  } */
  /* .mobHeading{
    font-size: 1.575rem !important;
  } */
}
</style>
