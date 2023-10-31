<template>
  <div style="background-color: #0E1012;">
      <div class="flex items-center justify-evenly pt-20 flex-wrap">
          <div class="flex flex-col  justify-center items-center">
              <div class="w-60 customerBox flex flex-col  justify-center items-center">
                  <img class="mb-5 w-24" src="@/assets/icons/customer/customer1.png" alt="">
                  <p>Etiam facilisis ligula nec velit posuere egestas. Nunc dictum lectus sem, vel dignissim purus luctus quis.</p>
              </div>
          </div>
          <div class="flex flex-col justify-center items-center">
              <div class="w-60 customerBox flex flex-col  justify-center items-center">
                  <img class="  mb-10" src="@/assets/icons/customer/customer2.png" alt="">
                  <p>Etiam facilisis ligula nec velit posuere egestas. Nunc dictum lectus sem, vel dignissim purus luctus quis.</p>
              </div>
          </div>
          <div class="flex flex-col justify-center items-center">
              <div class="w-60 customerBox flex flex-col  justify-center items-center">
                  <img class=" mb-10" src="@/assets/icons/customer/customer3.png" alt="">
                  <p>Etiam facilisis ligula nec velit posuere egestas. Nunc dictum lectus sem, vel dignissim purus luctus quis.</p>
              </div>
          </div>
      </div>
      <div class="flex items-center justify-evenly mt-20 flex-wrap">
          <div class="flex flex-col justify-center items-center">
              <div class="w-60 customerBox flex flex-col  justify-center items-center">
                  <img class="mb-10 w-24" src="@/assets/icons/customer/customer4.png" alt="">
                  <p>Etiam facilisis ligula nec velit posuere egestas. Nunc dictum lectus sem, vel dignissim purus luctus quis.</p>
              </div>
          </div>
          <div class="flex flex-col justify-center items-center">
              <div class="w-60 customerBox flex flex-col  justify-center items-center">
                  <img class="mb-1 mobileView" src="@/assets/icons/customer/customer5.png" alt="">
                  <p>Etiam facilisis ligula nec velit posuere egestas. Nunc dictum lectus sem, vel dignissim purus luctus quis.</p>
              </div>
          </div>
          <div class="flex flex-col justify-center items-center">
              <div class="w-60 customerBox flex flex-col  justify-center items-center">
                  <img class="mb-7 mobileView" src="@/assets/icons/customer/customer6.png" alt="">
                  <p>Etiam facilisis ligula nec velit posuere egestas. Nunc dictum lectus sem, vel dignissim purus luctus quis.</p>
              </div>
          </div>
      </div>
      <div class="flex items-center justify-around mt-20 pb-20 flex-wrap">
          <div class="flex flex-col justify-center items-center">
              <div class="w-60 customerBox flex flex-col  justify-center items-center">
                  <img class="mb-5 mt-8 w-24 mobileViewLess" src="@/assets/icons/customer/customer7.png" alt="">
                  <p>Etiam facilisis ligula nec velit posuere egestas. Nunc dictum lectus sem, vel dignissim purus luctus quis.</p>
              </div>
          </div>
          <div class="flex flex-col justify-center items-center">
              <div class="w-60 customerBox flex flex-col  justify-center items-center">
                  <img class="w-24" src="@/assets/icons/customer/customer8.png" alt="">
                  <p>Etiam facilisis ligula nec velit posuere egestas. Nunc dictum lectus sem, vel dignissim purus luctus quis.</p>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
name:'customersInfo'
}
</script>
<style scoped>
.customerBox{
    background-color: #ffffff;
    padding: 15px;
    border-radius: 25px;
    color: rgb(0, 0, 0);
}
@media screen and (max-width: 900px){
    .mobileViewLess{
        margin-top: 0 !important;
    }
    .mobileView{
        margin-top: 50px !important;
    }
}
</style>
