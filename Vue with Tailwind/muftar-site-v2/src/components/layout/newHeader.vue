<template>
  <div>
    <!-- Large view (hidden on mobile) -->
    <div class="lg:block hidden">
      <div class="lg:w-[500px] lg:h-screen flex flex-col justify-between lg:flex lg:flex-col lg:justify-between lg:visible" style="background: linear-gradient(135deg, rgba(0, 0, 142, 0.7) 0%, rgba(1, 114, 128, 0.7) 100%);">
        <div class="p-8">
          <img class="w-[253px] h-[49px]" src="@/assets/images/logo-White.svg" alt="">
        </div>
        <div class="lg:text-[36px] text-white p-10">
          <div class="font-[600]">Transport</div>
          <div class="font-[600]">Made Simple</div>
        </div>
      </div>
    </div>
    <!-- Mobile view -->
    <div class="lg:hidden">
     <div class="p-6 mt-5">
      <img src="@/assets/images/logoM.svg" alt="">       
     </div>
    </div>
  </div>
</template>
