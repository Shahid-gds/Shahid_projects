<template>
    <div class="">
        <div class="flex gap-2 px-10 items-center justify-between">
            <div class="flex space-x-2">
                <img v-if="route.name == 'Reports'" class="w-6 h-6 mt-3" src="@/assets/icons/dispatch/acnt-icon.svg"
                    alt="" />
                <img v-else-if="route.name == 'Claims'" class="w-6 h-6 mt-3" src="@/assets/icons/compliance/claims.svg"
                    alt="" />
                <img v-else-if="route.name == 'Insurance'" class="w-6 h-6 mt-3"
                    src="@/assets/icons/compliance/insurance.svg" alt="" />
                <p class="mt-3 text-xl uppercase text-primary">{{ route.name }}</p>
            </div>
            <div class="flex space-x-16">
                <div class="tab m-3 text-gray-500 text-lg" :class="{ 'selected-tab': current_tab == 0 }"
                    @click="gotoRoute(0, 'Reports')">Reports</div>
                <div class="tab m-3 text-gray-500 text-lg" :class="{ 'selected-tab': current_tab == 1 }"
                    @click="gotoRoute(1, 'Claims')">Claims</div>
                <div class="tab m-3 text-gray-500 text-lg" :class="{ 'selected-tab': current_tab == 2 }"
                    @click="gotoRoute(2, 'Insurance')">Insurance</div>
            </div>
        </div>
        <div class="px-10">
            <router-view />
        </div>
    </div>
</template>
  


<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute();
const router = useRouter();

const gotoRoute = (i, route) => {
    router.replace({ name: route })
}

const current_tab = computed(() => {
    let ct = 0
    if (route.name == 'Reports') {
        ct = 0
        console.log('TAB ACCIDENTS' + ct);
    } else if (route.name == 'Claims') {
        ct = 1
        console.log('TAB ACCIDENTS' + ct);
    } else if (route.name == 'Insurance') {
        ct = 2
        console.log('TAB ACCIDENTS' + ct);
    }
    return ct
})

</script>
<!-- <script>
export default {
    name: 'Accidents',
    data() {
        return {
            dummy: [
                {},
                {},
                {},
                {},
                {},
                {},
                {}
            ]
        }
    },
    methods: {
        gotoRoute(i, route) {
            this.$router.replace({ name: route })
        }
    },
    computed: {
        current_tab() {
            let ct = 0
            if (this.$route.name == 'Reports') {
                ct = 0
                console.log('TAB ACCIDENTS' + ct);
            } else if (this.$route.name == 'Claims') {
                ct = 1
                console.log('TAB ACCIDENTS' + ct);
            } else if (this.$route.name == 'Insurance') {
                ct = 2
                console.log('TAB ACCIDENTS' + ct);
            }
            return ct
        },

    }
}
</script> -->
  
<style scoped>
.tab {
    text-align: center;
    cursor: pointer;
    border-bottom: none;
}

.selected-tab {
    color: #4b65ae;
    font-weight: bolder;
    border-bottom: 3px solid #4b65ae;
}
</style>