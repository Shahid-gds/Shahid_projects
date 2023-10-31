<template>
  <div>

    <!-- TOP TABS COMPLIANCE -->
    <div class="flex space-x-5 ">
      <div class="bg-[#3D5AA9] h-16 px-8 my-auto text-white   items-center uppercase   flex space-x-3">
        <!-- <img src="@/assets/icons/compliance/safety.svg" alt="Safety"> -->
        <mdicon size="28" name="shield-half-full" />
        <h1>Safety Center</h1>
      </div>
      <div class="my-auto  font-bold text-lg select-none cursor-pointer"
        :class="{ 'text-primary border-b-4 border-b-primary pb-2': current_tab == 0, 'text-gray-500 border-b-4 border-transparent pb-2': current_tab != 0 }"
        @click="gotoRoute(0, 'DriverInfo')">
        Driver Info
      </div>

      <div class="my-auto  font-bold text-lg select-none cursor-pointer"
        :class="{ 'text-primary border-b-4 border-b-primary pb-2': current_tab == 1, 'text-gray-500 border-b-4 border-transparent pb-2': current_tab != 1 }"
        @click="gotoRoute(1, 'Accidents')">
        Accidents
      </div>

      <div class="my-auto  font-bold text-lg select-none cursor-pointer"
        :class="{ 'text-primary border-b-4 border-b-primary pb-2': current_tab == 2, 'text-gray-500 border-b-4 border-transparent pb-2': current_tab != 2 }"
        @click="gotoRoute(2, 'ComplianceAnalytics')">
        Analytics
      </div>
    </div>


    <div>
      <Transition name="slide-fade">
        <router-view />
      </Transition>
    </div>
  </div>
</template>



<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute();
const router = useRouter();

const gotoRoute = (i, route) => {
  router.push({ name: route })

}

const current_tab = computed(() => {
  let ct = 0
  if (route.name == 'DriverInfo') {
    ct = 0
  } else if (route.name == 'Reports' || route.name == 'Claims' || route.name == 'Insurance') {
    ct = 1
  } else if (route.name == 'ComplianceAnalytics') {
    ct = 2
  }
  return ct
})

</script>


<style scoped>
.tab-border-bottom {
  display: block;
  position: relative;
  background: #3D5AA9;
  padding: 2px;
  border: 1px solid #3D5AA9;
  /* margin-top: 50px; */
}

.tab-border-bottom:before,
.tab-border-bottom:after {
  content: '';
  display: block;
  position: absolute;
  bottom: 100%;
  width: 0;
  height: 0;
}

.tab-border-bottom:before {
  left: 70px;
  border: 11px solid transparent;
  border-bottom-color: #3D5AA9;
}

.tab-border-bottom:after {
  left: 70px;
  border: 10px solid transparent;
  border-bottom-color: #3D5AA9;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.8s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}




.slide-fade-enter-active {
  transition: all 0.3s ease-out;

}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);

}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}
</style>
