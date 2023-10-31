<template>
<div class="carrierMain" style="background-color: #0E1012">
  <div class="pt-32 flex justify-center flex-col items-center">
    <h1 class="text-white text-center pb-3 text-4xl uppercase font-bold customeBorderCarrier">Our carrier dashboard</h1>
    <p class="text-center text-white pt-3 w-6/12 mx-auto">
      Our Carrier Portal is completely digital, allowing the supply chain to power fleets with an omniscient overseeing of all loads and drivers, ensuring efficacy throughout as well as maintaining all safety and compliance rules. — Muftar Digital brings lightning-speed efficiency to the supply chain, offering carriers the freedom to conduct business efficiently, using our technologically advanced software.<br> <br>

      With our software, you can navigate the transport system from anywhere by logging on to our website via your desktop or mobile. This affords you the peace of mind you need to continue with your daily business while keeping track of every particular of the supply chain process.<br /> <br />

      Gain insights on miles traveled as well as real-time access to drivers’ locations. In addition, you can oversee the allocating of parcels, prepare entries, pay agents, and much more—all easy, affordable and 100% accessible, all the time.
    </p>
  </div>
  <div>
    <img class="hidemob" src="@/assets/media/home/carrier.png" alt="">
    <img class="webhide" src="@/assets/media/home/carriermob.png" alt="">
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

.webhide{
  display: none;
}
.customeBorderCarrier{
  position: relative;
}
.customeBorderCarrier::after{
  content: "";
  position: absolute;
  background-image: linear-gradient(120deg, #34487D, #0E1012) ;
  border-radius: 100px;
  width: 100%;
  height: 5px;
  bottom: 0;
  left: 0;
}
.carrierMain{
   background-image: url('../../assets/backgrounds/home/trustedBg.png');
  background-size: contain;
  background-repeat: no-repeat;
}
@media screen and (max-width: 900px) {
  .hidemob{
    display: none;
  }
  .webhide{
  display: block;
  margin-left: 40px;
  margin-top: 30px;
}
}
</style>
