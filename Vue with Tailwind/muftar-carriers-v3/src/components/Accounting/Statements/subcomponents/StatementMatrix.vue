<template>
    <div class="flex flex-col p-6">
        <!-- {{ matrix }} -->
        <div class=" flex w-full justify-center mt-5 mb-24" v-for="(tbl, idx) in matrix" :key="idx">
            <div class="w-full space-y-2">
                <div class="flex flex-row space-x-2">
                    <h2 class="text-2xl uppercase font-bold">{{ tbl[0][0].v }}</h2>
                    <button @click="addRow(idx, tbl[1].length)"
                        class="bg-green-400 flex justify-center items-center h-8 my-auto w-8 text-lg  text-white rounded">
                        <mdicon name="plus" />
                    </button>
                </div>
                <div class="border-b rounded-md shadow">
                    <table class="w-full ">
                        <thead class="bg-gray-50">
                            <tr class="bg-primary text-white uppercase">
                                <th class="px-6 py-2 text-lg" v-for="(tbl_h, hidx) in tbl[1]" :key="hidx">
                                    {{ tbl_h.v }}
                                </th>
                            </tr>
                        </thead>
                        <!-- {{ tables[idx] }} -->
                        <tbody class="bg-white divide-y divide-gray-300">
                            <tr class="cell-row whitespace-nowrap text-center text-gray-500 relative"
                                v-for="(row, r_idx) in tbl.slice(2)" :key="r_idx">
                                <td class="px-6 py-4 " v-for="(cell, c_idx) in row" :key="c_idx">
                                    <div class="flex">
                                        <input type="text" :disabled="!editable" class="w-36 border-none focus:ring-0"
                                            v-model="cell.v">
                                        <div v-if="editable" class="my-auto relative">
                                            <span @click="openMenu(c_idx, r_idx, idx)" class="cursor-pointer">
                                                <mdicon class="text-gray-300" name="dots-vertical" />
                                            </span>
                                            <div v-if="menuIndex == c_idx && tableIndex == idx && rowIndex == r_idx"
                                                class="absolute -right-16 top-10 w-40 z-40 bg-white text-black space-y-2 p-2   rounded-xl shadow-lg">
                                                <p
                                                    class="text-lg cursor-pointer rounded-lg px-4 py-1  hover:bg-gray-200 transition-all">
                                                    str</p>
                                                <p
                                                    class="text-lg cursor-pointer rounded-lg px-4 py-1 hover:bg-gray-200 transition-all">
                                                    int</p>
                                                <p
                                                    class="text-lg cursor-pointer rounded-lg px-4 py-1 hover:bg-gray-200 transition-all">
                                                    per</p>
                                                <p
                                                    class="text-lg cursor-pointer rounded-lg px-4 py-1 hover:bg-gray-200 transition-all">
                                                    eph</p>
                                                <p
                                                    class="text-lg cursor-pointer rounded-lg px-4 py-1 hover:bg-gray-400 transition-all">
                                                    ret</p>
                                                <p
                                                    class="text-lg cursor-pointer rounded-lg px-4 py-1 hover:bg-gray-400 transition-all">
                                                    dtt</p>
                                                <p
                                                    class="text-lg cursor-pointer rounded-lg px-4 py-1 hover:bg-gray-400 transition-all">
                                                    dec</p>
                                                <p
                                                    class="text-lg cursor-pointer rounded-lg px-4 py-1 hover:bg-gray-400 transition-all">
                                                    arr</p>
                                                <p
                                                    class="text-lg cursor-pointer rounded-lg px-4 py-1 hover:bg-gray-400 transition-all">
                                                    uid</p>
                                            </div>

                                        </div>
                                    </div>

                                    <!-- <span>{{ cell.fmt }}</span> -->
                                </td>
                                <div class="delete-btn flex space-x-2">
                                    <button @click="deleteRow(idx, r_idx)"
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
  
<script setup>
import { defineProps, toRefs, ref } from 'vue';
import axios from "axios";
import { mapState } from "vuex";
import account_data from "@/assets/json/account_data.json";
// import matrix from "@/assets/json/statements/matrix.json";

const props = defineProps({
    current_statement: Object,
    editable: Boolean
})
const { current_statement, editable } = toRefs(props);

const matrix = ref([])

const menuIndex = ref(null);
const tableIndex = ref(null);
const rowIndex = ref(null);
// const showMenu = ref(false);


const openMenu = (cell_index, row_index, table_index) => {

    if (menuIndex.value == null && rowIndex.value == null && tableIndex.value == null) {
        menuIndex.value = cell_index;
        tableIndex.value = table_index;
        rowIndex.value = row_index;
    } else {
        menuIndex.value = null;
        tableIndex.value = null;
        rowIndex.value = null;
    }
}

matrix.value = current_statement.value.tables

const addRow = (table_idx, columns) => {
    let temp_stmt = matrix.value
    let row_data = []
    for (let i = 0; i < columns; i++) {
        row_data.push({ 'v': '' })
    }
    temp_stmt[table_idx].push(row_data)
    matrix.value = temp_stmt
    // this.$emit('updateStatement', temp_stmt)
}

const deleteRow = (idx, row_idx) => {
    let temp_stmt = matrix.value
    if (row_idx > -1) { // only splice array when item is found
        temp_stmt[idx].splice(row_idx, 1); // 2nd parameter means remove one item only
    }
    matrix.value = temp_stmt
    // this.$emit('updateStatement', temp_stmt)
}

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
  