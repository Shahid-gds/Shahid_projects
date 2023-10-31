<template>
    <div class="flex flex-col p-6">
        <div class="my-10 space-y-8">
            <h2 class="text-2xl uppercase ml-80">Company Information</h2>
            <div class="flex justify-center space-x-36">

                <div>
                    <p class="">{{ current_statement.carrier.name }} </p>
                    <p class="">{{ current_statement.carrier.address.line1 }}</p>
                    <p>
                        {{ current_statement.carrier.address.city }},{{ current_statement.carrier.address.state }}
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
                                {{ $fmtDate(current_statement.details.pay_period.from) }}
                            </button>
                            <button class="rounded-lg py-2 px-2 border-2 border-grey-500">
                                <span class="font-bold">To:</span>
                                {{ $fmtDate(current_statement.details.pay_period.to) }}
                            </button>
                        </div>
                    </div>
                    <p>Pay Date: {{ $fmtDate(current_statement.details.pay_date) }}</p>
                </div>
            </div>
        </div>
        <!-- {{current_statement}} -->
        <div class=" flex w-full justify-center mt-5 mb-24" v-for="(tables, idx) in current_statement.tables "
            :key="idx">
            <div class="w-full space-y-2">
                <div class="flex flex-row space-x-2">
                    <h2 class="text-2xl uppercase font-bold">{{ tables.title }}</h2>
                    <button @click="addRow(idx, tables.headers.length)"
                        class="bg-green-400 flex justify-center items-center h-8 my-auto w-8 text-lg  text-white rounded">
                        <mdicon name="plus" />
                    </button>
                </div>
                <div class="border-b  shadow">
                    <table class="w-full ">
                        <thead class="bg-gray-50">
                            <tr class="bg-primary text-white uppercase">
                                <th class="px-6 py-2 text-lg " v-for="table_header in tables.headers"
                                    :key="table_header">{{ table_header.text }}</th>
                                <th class="px-6 py-2 text-lg "></th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-300">
                            <tr class="cell-row whitespace-nowrap text-center text-gray-500 relative"
                                v-for="(row, rindex) in tables.rows" :key="rindex">
                                <td class="px-6 py-4 " v-for="(col, c_index) in row" :key="c_index">
                                    <input type="text" :disabled="!edit" class="w-36 border-none focus:ring-0"
                                        v-model="col.value">
                                </td>
                                <div class="delete-btn flex space-x-2">
                                    <button @click="deleteRow(idx, rindex)"
                                        class="bg-red-500 flex justify-center items-center h-8 my-auto w-8 text-lg text-center mx-auto text-white rounded">
                                        <mdicon name="delete" />
                                    </button>
                                </div>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>






    </div>
</template>
  
<script>
import axios from "axios";
import { mapState } from "vuex";
import account_data from "@/assets/json/account_data.json";
import DropdownAnimated from "@/components/utils/DropdownAnimated.vue";
import load_json from "@/assets/json/dummies/dummy_load.json";
// import state from '@/assets/json/dummies/state.json'
import driver_json from "@/assets/json/dummies/dummy_driver.json";
import VueHtml2pdf from "vue-html2pdf";

export default {
    name: "Statements",
    components: {
        VueHtml2pdf,
        DropdownAnimated,
    },

    props: ["current_statement", "editable"],
    data() {
        return {
            driver_data: driver_json,
            account_data: account_data,
            selectedRow: null,
            // state,
            dummy_load: load_json,
            // current_loads: [],
            current_driver: null,
            drivers_board: [],
            loading: false,
        };
    },
    methods: {
        addRow(idx, tab_len) {
            let temp_stmt = this.current_statement
            let row_data = []
            for (let i = 0; i < tab_len; i++) {
                row_data.push({ 'label': this.current_statement.tables[idx].headers[i].text, 'value': '' })
            }
            temp_stmt.tables[idx].rows.push(row_data)
            this.$emit('updateStatement', temp_stmt)
        },
        deleteRow(idx, row_idx) {
            let temp_stmt = this.current_statement
            if (row_idx > -1) { // only splice array when item is found
                temp_stmt.tables[idx].rows.splice(row_idx, 1); // 2nd parameter means remove one item only
            }
            console.log(temp_stmt.tables[idx].rows)
            this.$emit('updateStatement', temp_stmt)
        },
        getSelectedDriver(val) {
            this.current_driver = val;
        },
        setStatement(val) {
            console.log(val);
            this.current_statement = val;
        },
        generatePDF() {
            this.$refs.html2Pdf.generatePdf();
        },
        async getLoadInformation(lid) {
            this.loading = true;
            const config = {
                headers: {
                    userID: this.userID
                }
            }

            try {
                const res = axios.get(this.$api_path + "loads/" + lid, config);
                this.loading = false;
                return res.data.result;
            } catch (error) {
                console.log(error);
                this.loading = false;
            }
        }
    },
    computed: {
        ...mapState(["userID"]),
        edit() {
            return this.editable;
        }
    },
    mounted() {
        console.log(this.current_statement)
    },
};
</script>
  
<style scoped>
.delete-btn {
    opacity: 0%;
    position: absolute;
    right: 2rem;
    top: 50%;
    transform: translate(100%, -50%);
    transition: .25s ease-in;
}

.cell-row:hover,
cell-row:hover input {
    background-color: #fafafa;
}

.cell-row:hover .delete-btn {
    opacity: 100%;
    transform: translate(0, -50%);
}
</style>
  