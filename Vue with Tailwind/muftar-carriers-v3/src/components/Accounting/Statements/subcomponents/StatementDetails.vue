<template>
    <div class="flex p-6">
        <div class="my-10 space-y-8">
            <h2 class="text-4xl uppercase font-bold">Company Information</h2>
            <div class="flex justify-center space-x-36 text-xl">
                <div>
                    <p class="">{{ current_statement.carrier.name }} </p>
                    <p class="">Address: 
                        {{ current_statement.carrier.address.line1 }}
                        {{ current_statement.carrier.address.city }},
                        {{ current_statement.carrier.address.state }}
                        {{ current_statement.carrier.address.zip }}
                    </p>
                    <p>Phone: {{ current_statement.carrier.phone }}</p>
                    <p>Email: {{ current_statement.carrier.email }}</p>
                    <p>Authority Commission: {{ current_statement.carrier.email }}</p>
                </div>


                <div>
                    <div class="flex items-center">Driver: {{ current_statement.driver.fname }} {{
                            current_statement.driver.lname
                    }}</div>
                    <p>
                        Address: {{ current_statement.driver.address.line1 }},
                        {{ current_statement.driver.address.city }},{{ current_statement.driver.address.state }}
                        {{ current_statement.driver.address.zip }}
                    </p>
                    <div>
                        <p>Pay Period:</p>
                        <div class="flex">
                            <button class="rounded-lg py-2 px-2 border-2 border-grey-500">
                                <span class="font-bold">From:</span>
                                {{ $fmtDate(current_statement.details.pay_period.start_time) }}
                            </button>
                            <button class="rounded-lg py-2 px-2 border-2 border-grey-500">
                                <span class="font-bold">To:</span>
                                {{ $fmtDate(current_statement.details.pay_period.end_time) }}
                            </button>
                        </div>
                    </div>
                    <p>Pay Date: {{ $fmtDate(current_statement.details.pay_date) }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { defineProps, toRefs } from 'vue';
// import axios from "axios";
// import { mapState } from "vuex";

const props = defineProps({
    current_statement: Object,
})
const { current_statement } = toRefs(props);

// export default {

//     props: ["current_statement", "editable"],
//     data() {
//         return {
//             driver_data: driver_json,
//             account_data: account_data,
//             selectedRow: null,
//             // state,
//             dummy_load: load_json,
//             // current_loads: [],
//             current_driver: null,
//             drivers_board: [],
//             loading: false,
//         };
//     },
//     methods: {
//         setStatement(val) {
//             console.log(val);
//             this.current_statement = val;
//         },

//     },
//     computed: {
//         ...mapState(["userID"]),
//         edit() {
//             return this.editable;
//         }
//     },
//     mounted() {
//         console.log(this.current_statement)
//     },
// };
</script>
  
<style scoped>
</style>
  