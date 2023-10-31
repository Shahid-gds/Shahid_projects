<template>
    <div id="">
        <div class="flex    space-x-6 text-center">
            <div class="bg-primary h-16 px-8 my-auto text-white items-center uppercase flex space-x-3">
                <mdicon size="28" name="truck-fast" />
                <h1>Dispatch</h1>
            </div>
            <div class="my-auto  font-bold text-lg select-none cursor-pointer"
                :class="{ 'text-primary border-b-4 border-b-primary pb-2': current_tab == 0, 'text-gray-500 border-b-4 border-transparent pb-2': current_tab != 0 }"
                @click="gotoRoute(0, 'FleetManager')">
                Fleet Manager
            </div>
            <div class="my-auto  font-bold text-lg select-none cursor-pointer"
                :class="{ 'text-primary border-b-4 border-b-primary pb-2': current_tab == 1, 'text-gray-500 border-b-4 border-transparent pb-2': current_tab != 1 }"
                @click="gotoRoute(1, 'LoadBoard')">
                Load Board
            </div>
            <div class="my-auto  font-bold text-lg select-none cursor-pointer"
                :class="{ 'text-primary border-b-4 border-b-primary pb-2': current_tab == 2, 'text-gray-500 border-b-4 border-transparent pb-2': current_tab != 2 }"
                @click="gotoRoute(2, 'ActiveOrder')">
                Active Order
            </div>
            <div class="my-auto  font-bold text-lg select-none cursor-pointer"
                :class="{ 'text-primary border-b-4 border-b-primary pb-2': current_tab == 3, 'text-gray-500 border-b-4 border-transparent pb-2': current_tab != 3 }"
                @click="gotoRoute(3, 'OrderHistory')">
                Order History
            </div>
        </div>
        <div>
            <!-- <router-view v-slot="{ Component }">
                  <transition name="slide-fade">
                      <component :is="Component"></component>
                  </transition>
              </router-view> -->
            <Transition name="slide-fade">
                <router-view></router-view>
            </Transition>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter();

const gotoRoute = (i, route) => {
    router.push({ name: route })
}

const current_tab = computed(() => {
    let ct = 0;
    if (route.name == "FleetManager") {
        ct = 0;
    } else if (route.name == "LoadBoard") {
        ct = 1;
    } else if (route.name == "ActiveOrder") {
        ct = 2;
    } else if (route.name == "OrderHistory") {
        ct = 3;
    }
    return ct;
})

</script>

<style scoped>
.tab-border-bottom {
    display: block;
    position: relative;
    background: #3D5AA9;
    padding: 2px;
    border: 1px solid #3D5AA9;
    margin-top: 20px;
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



.slide-fade-enter-active {
    transition: all 0.3s ease-out;

}

.slide-fade-leave-active {
    transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);

}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(-20px);
    opacity: 0;
}
</style>
