<template>
    <div>

        <!-- TOP TABS COMPLIANCE -->
        <div class="flex  space-x-5 ">
            <div class="bg-[#3D5AA9] h-16 px-8 my-auto text-white   items-center uppercase   flex space-x-3">
                <!-- <img height="28" width="28" src="@/assets/icons/menu-icons/hand-shake.svg" alt="Safety"> -->
                <mdicon size="28" name="handshake" />
                <h1>Relationships</h1>
            </div>

            <div class="my-auto  font-bold text-lg select-none cursor-pointer"
                :class="{ 'text-primary border-b-4 border-b-primary pb-2': current_tab == 0, 'text-gray-500 border-b-4 border-transparent pb-2': current_tab != 0 }"
                @click="gotoRoute(0, 'Broker')">
                Broker
            </div>
        </div>

        <div>
            <Transition name="slide-fade">
                <router-view />
            </Transition>
        </div>
    </div>
</template>
<script>


export default {
    name: "AppCompliance",
    components: {
    },
    data() {
        return {
            route: this.$route.name
        }
    },
    mounted() {
        window.scrollTo(0, 0)
    },
    methods: {
        gotoRoute(i, route) {
            this.$router.push({ name: route })
        }
    },
    computed: {
        current_tab() {
            let ct = 0
            if (this.$route.name == 'Summry' || this.$route.name == 'AccountDetails' || this.$route.name == 'Billings' || this.$route.name == 'Facilities') {
                ct = 0
            }
            return ct
        }
    }
};
</script>
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
