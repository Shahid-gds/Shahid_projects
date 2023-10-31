<template>
    <div class="relative text-lg w-48">
        <button class=" flex items-center     justify-between px-3 py-2  w-full border border-gray-500 rounded-lg"
            :class="{ 'border-2 bg-[#fff] text-[#000] ': (!selectedOption.driver_name || !selectedOption || driver_name), 'text-[#fff] bg-[#000]': (selectedOption.driver_name || selectedOption || driver_name) }"
            @click="isOptionsExpanded = !isOptionsExpanded" @blur="isOptionsExpanded = false" :disabled="loading">
            <!--BUTTON LOADER -->
            <div v-if="loading" class="mx-auto" role="status">
                <svg aria-hidden="true" class="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-black"
                    viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor" />
                    <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill" />
                </svg>
                <span class="sr-only">Loading...</span>
            </div>
            <span v-if="!loading && !$route.query.driver_id">{{ selectedOption.driver_name || selectedOption }}</span>
            <span v-if="!loading && $route.query.driver_id">{{ driver_name || selectedOption.driver_name }}</span>
            <svg v-if="!loading" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                class="h-4 w-4 transform transition-transform duration-200 ease-in-out"
                :class="isOptionsExpanded ? 'rotate-180' : 'rotate-0'">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
        </button>
        <transition enter-active-class="transform transition duration-500 ease-custom"
            enter-class="-translate-y-1/2 scale-y-0 opacity-0" enter-to-class="translate-y-0 scale-y-100 opacity-100"
            leave-active-class="transform transition duration-300 ease-custom"
            leave-class="translate-y-0 scale-y-100 opacity-100" leave-to-class="-translate-y-1/2 scale-y-0 opacity-0">
            <ul v-show="isOptionsExpanded"
                class=" absolute z-10 max-h-80 left-0 right-0 mb-4 bg-white divide-y-2 space-y-4  rounded-lg shadow-lg overflow-y-scroll overflow-x-hidden cursor-pointer"
                style="width:20rem;">
                <li v-for="(option, index) in options" :key="index"
                    class="px-3 py-2 pb-4 relative transition-colors duration-300 hover:bg-gray-100"
                    @mousedown.prevent="setOption(option)">
                    {{ option.driver_name }}
                    <p class="absolute text-gray-400 italic text-sm">{{ option.driver_id }}</p>
                </li>
            </ul>
        </transition>
    </div>
</template>
  
<script>
import { mapState } from 'vuex';
import axios from 'axios';
export default {
    name: "DropdownAnimated",
    props: {
        options: Array,
        placeholder: String,
        loading: Boolean,
    },
    data() {
        return {
            isOptionsExpanded: false,
            selectedOption: "Select one",
            driver: null,
            driver_name: ''
        };
    },
    methods: {
        setOption(val) {
            this.$emit("selectedItem", val);
            this.selectedOption = val;
            this.isOptionsExpanded = false;
        },
        async getOneDriver(id) {
            const config = {
                headers: {
                    driverID: id,
                    orgID: this.orgID,
                }
            }
            try {
                const res = await axios.get(this.$api_path + 'drivers/one', config);
                this.driver = res.data.result
                this.driver_name = this.driver.fname + ' ' + this.driver.lname;


            } catch (error) {
                console.log(error)
            }
        }
    },
    computed: {
        ...mapState(['orgID'])
    },
    created() {
        if (this.$route.query && this.$route.query.driver_id) {
            this.getOneDriver(this.$route.query.driver_id);
            this.selectedOption = this.driver_name
        } else {

            this.selectedOption = this.placeholder;
        }

    },
};
</script>
  
<style scoped>
.custom--bg {
    background: #1a1b25;
}
</style>
  