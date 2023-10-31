<template>
  <div>
      <div class="mob grid gap-1 grid-cols-2 text-black">
          <div>
              <!-- <img src="@/assets/media/driver.png" alt=""> -->
          </div>
          <div class="p-20 ">
              <h1 class="text-2xl font-bold customeBorderColor block w-64 p-2">An App For Drivers</h1>
              <p class="mt-24 font-bold">Let Muftar Take Care Of The Rest!</p>
              <p class="mt-4">
                  Our driver app powers the drivers with on the go connections to keep them up to date with their progression of their route. Drivers will find our inbuilt navigation system tailored to fleets and once the load is delivered  our document scanner will create a seemless flow to conclude loads faster!
              </p>
              
          </div>
        </div>
  </div>
</template>

<script>
export default {
name:'DriverTab'
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