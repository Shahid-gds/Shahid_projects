<template>
  <div>
      <div class="mob grid gap-1 grid-cols-2 text-black">
          <div>
              <img src="@/assets/media/broker.png" alt="">
          </div>
          <div class="p-20 ">
              <h1 class="text-2xl font-bold customeBorderColor block w-96 p-2">Get More Loads Delivered</h1>
              <p class="mt-24 font-bold">Let Muftar Take Care Of The Rest!</p>
              <p class="mt-4">
                  The brokers/shipper portal is our software that enables you to keep improved management of your clientle and you will be able to port your data to ensure that you uphold a synchronous connection across your business
              </p>
               
          </div>
        </div>
  </div>
</template>

<script>
export default {
name:'BrokerShipper'
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