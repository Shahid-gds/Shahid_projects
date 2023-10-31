<template>
    <div class="w-full">
        <NavBar/>
    </div>
    <div class="container mx-auto bg-[white] shadow-xl p-6 rounded-xl 2xl:w-2/5 w-full mt-3">
      <div class="flex justify-between items-center">
        <div class="font-[600] text-xl">
            <h1>Create New Invoice</h1>
        </div>
        <!-- <div class="cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>              
        </div> -->
      </div>
      <div class="flex justify-between mt-1">
        <div>
            <span class="text-[black] font-[600] text-2xl">Invoice</span> <span class="text-[#3C5AA8] text-2xl font-[600]">#NR 0001/08/2023</span>
        </div>
        <div class="flex items-center space-x-1 cursor-pointer">
            <div class="w-6 h-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#ADAEB0" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
              </svg>
            </div>
            <div class="text-[#ADAEB0] font-[600]">Copy Link</div>
        </div>
      </div>
   <div class="space-y-2">
    <div class="font-[600] text-lg mt-1">
        <h1>Details</h1>
      </div>
      <div class="flex w-full space-x-3 mt-3">
        <div class="w-full">
            <label class="font-bold" for="">Bill From</label>
            <input class="w-full rounded-lg p-2 border-[#E1E4EB] border-2" type="text" placeholder="Bill From">
        </div>
        <div class="w-full">
            <label class="font-bold" for="">Bill To</label>
            <input class="w-full rounded-lg p-2 border-[#E1E4EB] border-2" type="text" placeholder="Bill To">
        </div>
      </div>
      <div class="w-full">
        <label class="font-bold" for="">Recipient Email</label>
        <input class="w-full rounded-lg p-2 border-[#E1E4EB] border-2" type="text" placeholder="example@gmail.com">
    </div>
      <div class="w-full">
        <label class="font-bold" for="">Bill Title/Project Descriptions</label>
        <input class="w-full rounded-lg p-2 border-[#E1E4EB] border-2" type="text" placeholder="Project Name">
    </div>
    <div class="flex space-x-3">
        <div class="w-full">
            <label class="font-bold" for="">Issued On</label><br>
            <input class="border-2 rounded-lg w-full p-2" type="date" id="issuedOnInput">
        </div>
        <div class="w-full">
            <label class="font-bold" for="">Due On</label><br>
            <input class="border-2 rounded-lg p-2 w-full" type="date" id="dueOnInput">
        </div>
    </div>
    <div class="flex space-x-4 items-center">
        <div class="mt-2">
            <input type="checkbox" class="w-5 h-5 custom-checkbox cursor-pointer">
        </div>
        <div>
            <span class="">This is a recurring invoice (Monthly)</span>
        </div>
    </div>
   </div>
   <div class="space-y-2">
    <div class="font-[600] text-lg mt-1">
        <h1>Invoice Item</h1>
    </div>
    <div class="w-full">
        <label class="font-bold" for="">Currency</label><br>
        <select class="w-full p-2 border-2 rounded-lg" name="" id="">
            <option value="">Project Name</option>
            <option value="">Project Name</option>
            <option value="">Project Name</option>
            <option value="">Project Name</option>
        </select>
    </div>
    <div class="">
        <div v-for="(field, index) in addItem" :key="index" class="">
            <div class="flex space-x-3 items-center">
                <div>
                    <label class="font-bold" for="">Item</label><br>
                    <input class="lg:w-80 border-2 p-2 rounded-lg" type="text" placeholder="Company Name">
                </div>
                <div>
                    <label class="font-bold" for="">Price</label><br>
                    <input class="w-28 border-2 p-2 rounded-lg" type="text" placeholder="$500">
                </div>
                <div>
                    <label class="font-bold" for="">Qty</label><br>
                    <input class="w-24 border-2 p-2 rounded-lg" type="text" placeholder="1">
                </div>
                <div>
                    <label class="font-bold" for="">Total Price</label><br>
                    <input class="w-24 border-2 p-2 rounded-lg" type="text" placeholder="$500">
                </div>
                <div class="text-5xl">...</div>
            </div>
            <div class="flex space-x-3 border-b-2 p-2">
                <div class="w-80"></div>
                <div class="flex justify-between w-80">
                    <div class="font-bold">
                        <h1>Total Amount</h1>
                    </div>
                    <div class="font-bold">
                        <h1>$500</h1>
                    </div>
                </div>
            </div>
        </div>
   </div>
 
   <div class="flex space-x-3 items-center">
    <div class="flex w-80 cursor-pointer" @click="addmoreItem">
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#3C5AA8" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
          </svg>
        </div>
        <div class="font-semibold text-[#3C5AA8]">Add Item</div>
    </div>
       
   </div>
   </div>
<div class="font-[600] text-lg mt-1">
    <h1>Notes</h1>
    <textarea class="border-2 w-full rounded-lg p-2" placeholder="Write Your Note Here..."></textarea>
</div>
<div class="flex">
    <div class="w-full"></div>
    <router-link to="/generated">
        <div class="bg-[#3C5AA8] w-40 px-7 text-[white] p-2 rounded-xl">
            <button>Create Invoice</button>
        </div>
    </router-link>
</div>
    </div>
</template>

<script setup>
import NavBar from '../components/Layout/NavBar.vue';
import { onMounted, ref } from 'vue';

// Get the current date in the format "YYYY-MM-DD"
const currentDate = new Date().toISOString().split('T')[0];

// Set the value of the "Issued On" and "Due On" input fields to the current date
onMounted(() => {
  issuedOnInput.value = currentDate;
  dueOnInput.value = currentDate;
});
const addItem = ref([
      {  
        
    }
])

const addmoreItem = () => {
    addItem.value.push({
     
    })
}
</script>


<style scoped>
.custom-checkbox {
    /* Other styles */
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: 2px solid #3C5AA8;
    border-radius: 4px;
    outline: none;
    position: relative;
}

.custom-checkbox:checked {
    border-color: #3C5AA8;
}

.custom-checkbox:checked::before {
    content: "✓";
    position: absolute;
    width: 6px;
    height: 14px;
    left: 1px;
    top: -4px;
    color: #3C5AA8;
    font-weight: bold;
    transition: transform 0.2s ease;
}

</style>