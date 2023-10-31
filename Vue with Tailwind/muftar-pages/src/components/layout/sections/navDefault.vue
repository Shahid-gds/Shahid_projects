<template>
    <section>
      <div class="">
          <NavBar />
      </div>
      
     <div class="flex">
      <div class="p-1.5 h-[100%] w-[20%]">
        <dashboardMenu />
      </div>
      <slot />
     </div>
    </section>

</template>

<script setup>
import NavBar from '../NavBar.vue'
import dashboardMenu from '../dashboardMenu.vue'
</script>