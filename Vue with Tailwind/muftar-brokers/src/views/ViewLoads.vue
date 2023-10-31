<template>
    <div class="container mx-auto bg-[white] shadow-xl p-6 rounded-xl 2xl:w-2/5 my-20 w-full">
      <div class="pb-4">
        <div>
            <span class="text-[black] font-[600] text-2xl">Load</span> <span class="text-[#3C5AA8] text-2xl font-[600]">#NR 0001/08/2023</span>
        </div>       
      </div>
      <div class="text-xl text-[#ADAEB0] border-b-2 pb-3 font-bold">
        <h1>Norch Studio</h1>
      </div>
      <div class="flex mt-5">
        <div class="w-full">
            <div class="font-bold">Bill From:</div>
            <div class="text-xl pb-1">Raza Raharjo</div>
            <div class="leading-4 pb-4">
                <span>4517 Washington Ave</span><br>
                <span>Manchester, Kentucky 39495</span>
            </div>
            <div class="">
                <h2>Issue On:</h2>
                <h1 class="text-xl">11 March, 2023</h1>
            </div>
        </div>
        <div class="w-full">
            <div class="font-bold">Bill To:</div>
            <div class="text-xl pb-1">Ghyan Gundono</div>
            <div class="leading-4 pb-4">
                <span>1901 Washington Ave</span><br>
                <span>Manchester, Kentucky 39495</span>
            </div>
            <div class="">
                <h2>Due On:</h2>
                <h1 class="text-xl">16 March, 2023</h1>
            </div>
        </div>
      </div>
      <div class="mt-5">
        <h1>Load Detail</h1>
        <div class="flex border-t-2 border-b-2 py-2">
            <div class="w-80">Description</div>
            <div class="w-36">Price</div>
            <div class="w-36">Qty</div>
            <div class="w-36">Total Amount</div>
        </div>
        <div class="flex mt-5">
            <div class="w-80 font-medium">Insurance Leading Page</div>
            <div class="w-36 font-medium">$1000</div>
            <div class="w-36 font-medium">2</div>
            <div class="w-36 font-medium">$1000</div>
        </div>
        <div class="flex mt-5 border-b-2 pb-4">
            <div class="w-80 font-medium">Insurance Illustration</div>
            <div class="w-36 font-medium">$500</div>
            <div class="w-36 font-medium">1</div>
            <div class="w-36 font-medium">$500</div>
        </div>
        <div class="flex border-b-2 py-4">
            <div class="w-80 font-bold">Grand Total</div>
            <div class="w-36 font-medium"></div>
            <div class="w-36 font-medium"></div>
            <div class="w-36 font-bold">$1500</div>
        </div>
      </div>
      <div class="mt-5 p-4 border-2 rounded-lg border-[red] flex space-x-2">
        <div class="w-6 h-6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
          </svg>
        </div>
        <div class="text-[#666668]">
            <p>Client will get notify to make payment with any credit card debit card or bank transfer</p>
        </div>
      </div>
      <div class="mt-5 flex justify-center">
       <div class="flex space-x-5">
       <router-link to="/create-load" class="border-2 text-[#666668] p-2 px-10 rounded-lg">
        <div class="">
            <button>Edit</button>
        </div>
       </router-link>
        <router-link to="/confirm-load" class="p-2 px-10 bg-[#3C5AA8] text-[white] rounded-lg">
            <div class="">
                <button>Confirm Load</button>
            </div>
        </router-link>
       </div>
      </div>
    </div>
</template>

<script setup>

</script>