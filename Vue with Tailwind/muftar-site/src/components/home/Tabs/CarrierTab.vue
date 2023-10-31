<template>
  <div>
      <div class="mob grid gap-1 grid-cols-2 text-black">
          <div class="p-20 ">
              <h1 class="text-xl font-bold customeBorderColor block w-96 p-2">Supercharge Your Carrier Service</h1>
              <p class="mt-24 font-bold">Let Muftar Take Care Of The Rest!</p>
              <p class="mt-4">
                  Our Carrier Portal digitizes the supply chain to power fleets to have an omniscience oversight for loads, drivers, and safety/compliance. We bring lightspeed efficiency to supply chain and as a carrier you can conduct business in a streamlined fashion using our software. <br> <br>

                  Navigate through your transport system from the comfort of your home, from providing insights on miles traveled, and real-time access to drivers' location to allocating parcels, preparing entries, paying agents - accessible, affordable, and easy.
              </p>
               
          </div>
          <div>
              <img src="@/assets/media/carrier.png" alt="">
          </div>
        </div>
  </div>
</template>

<script>
export default {
name:'CarrierTab'
}
</script>

<style scoped>
.glassmorph-nav {
  background: #fff;
  border: 2px solid #5D8AC7;
  border-radius: 10px;
  margin-top: 20%;
  width: 20%;
}
.customeBorderColor{
  position: relative;
}
.customeBorderColor::after{
  content: "";
  position: absolute;
  background-image: linear-gradient(120deg, rgb(236, 235, 235), #5D8AC7, rgb(236, 235, 235)) ;
  border-radius: 100px;
  width: 100%;
  height: 5px;
  bottom: 0;
  left: 0;
}
@media screen and (max-width: 900px) {
.mob{
  display: block !important;
}
}
</style>