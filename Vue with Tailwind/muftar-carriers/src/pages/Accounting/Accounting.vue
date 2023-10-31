<template>
    <div class="overflow-y-auto">
        <div class="flex   space-x-5 text-center">
            <div class="bg-[#3D5AA9] h-16 px-8 my-auto text-white items-center uppercase   flex space-x-3">
                <!-- <img width="28" height="28" src="@/assets/icons/menu-icons/money.svg" alt="Safety"> -->
                <mdicon size="28" name="cash" />
                <h1>Accounting</h1>
            </div>
            <div class="my-auto  font-bold text-lg select-none cursor-pointer"
                :class="{ 'text-primary border-b-4 border-b-primary pb-2': current_tab == 0, 'text-gray-500 border-b-4 border-transparent pb-2': current_tab != 0 }"
                @click="gotoRoute(0, 'Analytics')">
                Analytics
            </div>


            <div class="my-auto  font-bold text-lg select-none cursor-pointer"
                :class="{ 'text-primary border-b-4 border-b-primary pb-2': current_tab == 1, 'text-gray-500 border-b-4 border-transparent pb-2': current_tab != 1 }"
                @click="gotoRoute(1, 'Statements')">
                Statements
            </div>
            

            <div class="my-auto  font-bold text-lg select-none cursor-pointer"
                :class="{ 'text-primary border-b-4 border-b-primary pb-2': current_tab == 2, 'text-gray-500 border-b-4 border-transparent pb-2': current_tab != 2 }"
                @click="gotoRoute(1, 'Fuel')">
                Fuel
            </div>

        
            <div class="my-auto  font-bold text-lg select-none cursor-pointer"
                :class="{ 'text-primary border-b-4 border-b-primary pb-2': current_tab == 3, 'text-gray-500 border-b-4 border-transparent pb-2': current_tab != 3 }"
                @click="gotoRoute(3, 'Factoring')">
                Factoring
            </div>


        </div>
        <div>
            <Transition name="slide-fade">
                <router-view></router-view>
            </Transition>
        </div>
    </div>
</template>
<script>
export default {
    name: "Dispatch",
    components: {},
    data() {
        return {
            route: this.$route.name,
        };
    },
    mounted() {
        window.scrollTo(0, 0);
    },
    methods: {
        gotoRoute(i, route) {
            this.$router.push({ name: route });
        },
    },
    computed: {
        current_tab() {
            let ct = 0;
            if (this.$route.name == "Analytics") {
                ct = 0;
            } else if (this.$route.name == "Statements" || this.$route.name == 'Table') {
                ct = 1;
            } else if (this.$route.name == "Fuel") {
                ct = 2;
            } else if (this.$route.name == "Factoring") {
                ct = 3;
            }
            return ct;
        },
    },
};
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
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);

}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(-20px);
    opacity: 0;
}
</style>
  