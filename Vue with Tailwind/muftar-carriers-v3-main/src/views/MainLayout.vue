<template>
    <div v-if="checkAuth" class="flex flex-1 overflow-hidden">
        <!-- <TestModeBanner v-if="testmode == true" /> -->
        <!-- <div
              class="sticky top-0 z-10 w-full px-3 flex justify-end max-h-20">
              <div class="flex items-center">
                <img src="@/assets/img/toggle.svg" alt="" class="w-16 h-20 ml-4" />
              </div>
              <div class="m-4 cursor-pointer">
                <DropdownNotification />
              </div>
              <div class="flex items-center">
                <router-link to="/accounts">
                <img src="@/assets/img/accountPerson.svg" alt="" class="w-16 h-20 ml-4" />
                </router-link>
              </div>
            </div> -->

        <AppSidebar v-if="$route.name != 'CheckStatus'" :menu="filteredMenu" />

        <div class="flex flex-1 flex-col ">
            <!-- <Transition>
                      <router-view></router-view>
                  </Transition> -->

            <!-- <router-view v-slot="{ Component }">
                        <XyzTransition appear xyz="duration-4 fade  origin-center" mode="out-in">
                            <component :is="Component" />
                        </XyzTransition>
                    </router-view> -->

            <router-view v-slot="{ Component }">
                <transition name="route" mode="out-in">
                    <component :is="Component"></component>
                </transition>
            </router-view>
        </div>

        <!-- <AdminRemote v-if="testmode == true" /> -->
    </div>
</template>

<script setup>
import AppSidebar from "@/components/utils/navigation/AppSidebar.vue";
// import MobileMenu from "@/components/commons/MobileMenu";
// import AdminRemote from "@/components/utils/admin/AdminRemote.vue";
// import TestModeBanner from "@/components/utils/admin/TestModeBanner.vue";
// import DropdownAnimated from "../components/layout/DropdownAnimated.vue";
// import DropdownNotification from "../pages/Notifications/DropdownNotification.vue";

import { ref, computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore();

const menu = ref([{
    name: "Overview",
    icon: require("@/assets/icons/menu-icons/home.svg"),
    route: "/overview",
    granted_roles: ['*'],
    text: 'Overview'
},
{
    name: "Dispatch",
    icon: require("@/assets/icons/menu-icons/delivery.svg"),
    route: "/dispatch",
    granted_roles: ['dispatch', 'drivers'],
    text: 'Dispatch'
},
{
    name: "Compliance",
    icon: require("@/assets/icons/menu-icons/gavel.svg"),
    route: "/compliance",
    granted_roles: ['safety'],
    text: "Compliance"
},
{
    name: "Accounting",
    icon: require("@/assets/icons/menu-icons/money.svg"),
    route: "/accounting",
    granted_roles: ['accounting'],
    text: "Accounting"
},
{
    name: "Relationship",
    icon: require("@/assets/icons/menu-icons/hand-shake.svg"),
    route: "/relationship",
    granted_roles: [],
    text: "Relationships"
},
{
    name: "Team",
    icon: require("@/assets/icons/menu-icons/team.svg"),
    route: "/team",
    granted_roles: [],
    text: "Team"
},
{
    name: "Widgets",
    icon: require("@/assets/icons/menu-icons/widgets.svg"),
    route: "/widgets",
    granted_roles: [],
    text: "Widgets"
},
{
    name: "Integration",
    icon: require("@/assets/icons/menu-icons/integration.svg"),
    route: "/integrations",
    granted_roles: [],
    text: "Integration"
}

])

const checkAuth = computed(() => { return true })
const userdata = computed(() => store.state.userdata)
const filteredMenu = computed(() => {
    const userRole = userdata.value.role;
    return menu.value.filter(item => {
        if (item.granted_roles.includes('*')) {
            return true;
        } else if (item.granted_roles.includes(userRole)) {
            return true
        } else if (userRole == 'admin') {
            return true
        } else {
            return false
        }
    })
})

const getOrg = () => {
    store.dispatch('getOrg')
}

getOrg();
</script>


<style scoped>
/* ROUTE TRANSITION */

.route-enter-from {
    opacity: 0;
}

.route-leave-to {
    opacity: 0;
}

.route-enter-active {
    transition: opacity 0.3s ease;
}

.route-leave-active {
    transition: opacity 0.3s ease;

}
</style>
