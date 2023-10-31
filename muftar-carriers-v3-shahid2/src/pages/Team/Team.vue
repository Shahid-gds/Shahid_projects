<template>
    <div>

        <!-- TOP TABS COMPLIANCE -->
        <div class="flex   space-x-5 ">
            <div class="bg-[#3D5AA9] h-16 px-8 my-auto text-white   items-center uppercase   flex space-x-3">
                <img height="28" width="28" src="@/assets/icons/menu-icons/team-white.svg" alt="Safety">
                <!-- <mdicon size="28" name="handshake" /> -->
                <h1>Team</h1>
            </div>

            <div class="my-auto  font-bold text-lg select-none cursor-pointer"
                :class="{ 'text-primary border-b-4 border-b-primary pb-2': current_tab == 0, 'text-gray-500 border-b-4 border-transparent pb-2': current_tab != 0 }"
                @click="gotoRoute(0, 'Members')">
                Members
            </div>

            <div class="my-auto  font-bold text-lg select-none cursor-pointer"
                :class="{ 'text-primary border-b-4 border-b-primary pb-2': current_tab == 1, 'text-gray-500 border-b-4 border-transparent pb-2': current_tab != 1 }"
                @click="gotoRoute(1, 'Applicants')">
                Applicants
            </div>



            <!-- <div class="w-40 text-center cursor-pointer  m-3 mt-6  text-lg space-y-5" @click="gotoRoute(0, 'Members')">
                <p :class="{ 'text-primary': current_tab == 0, 'text-gray-500': current_tab !== 0 }">
                    Members
                </p>
                <div :class="{ 'invisible': current_tab !== 0 }" class="tab-border-bottom"></div>
            </div>
            <div class="w-40 text-center cursor-pointer  m-3 mt-6  text-lg space-y-5"
                @click="gotoRoute(1, 'Applicants')">
                <p :class="{ 'text-primary': current_tab == 1, 'text-gray-500': current_tab !== 1 }">
                    Applicants
                </p>
                <div :class="{ 'invisible': current_tab !== 1 }" class="tab-border-bottom"></div>
            </div> -->
        </div>

        <div>
            <Transition name="slide-fade">
                <router-view />
            </Transition>
        </div>
    </div>
</template>


<script setup>

import { useRouter, useRoute } from 'vue-router'
import { computed } from 'vue'
const router = useRouter();
const route = useRoute();
const gotoRoute = (i, route) => {
    router.push({ name: route })
}

const current_tab = computed(() => {
    let ct = 0
    if (route.name == 'Members') {
        ct = 0;
    } else if (route.name == 'Applicants') {
        ct = 1;
    }
    return ct
})

</script>

<!-- <script>

export default {

    methods: {
        gotoRoute(i, route) {
            this.$router.push({ name: route })
        }
    },
    computed: {
        current_tab() {
            let ct = 0
            if (this.$route.name == 'Members') {
                ct = 0;
            } else if (this.$route.name == 'Applicants') {
                ct = 1;
            }
            return ct
        }
    }
}

</script> -->


<style scoped>
.tab-border-bottom {
    display: block;
    position: relative;
    background: #194799;
    padding: 2px;
    border: 1px solid #194799;
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
    border-bottom-color: #194799;
}

.tab-border-bottom:after {
    left: 70px;
    border: 10px solid transparent;
    border-bottom-color: #194799;
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