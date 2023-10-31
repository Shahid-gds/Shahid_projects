<template>
    <div>
        <PriceCalculatorHeader />
    </div>
    <div
        class="container mx-auto -mt-3 lg:flex space-y-10 2xl:space-y-0 xl:space-y-0  lg:space-x-10 px-4 2xl:px-0 xl:px-0 lg:px-0 md:px-0">
        <div class=" h-auto lg:w-1/2">
            <div>
                <h1 class="text-2xl uppercase font-bold">Drivers</h1>
            </div>
            <div class="flex 2xl:space-x-5 items-center">
                <div class="mt-5 text-[#828282] space-y-10 w-1/2 2xl:p-4">
                    <div>
                        <label for="">Company Driver</label>
                    </div>
                    <div>
                        <label for="">Owner Operator</label>
                    </div>

                </div>
                <div class="space-y-2 w-3/4 mt-5 bg-white border-2 p-4 rounded-lg">
                    <input class="w-full text-center" type="text">
                    <hr>
                    <input class="w-full text-center" type="text">
                </div>
            </div>
            <div class="flex items-center space-x-3 ml-10">
                <input type="checkbox" class="w-4 h-4 rounded">
                <label for="" class="text-[#828282]">Rollover Cost to Owner Operator</label>
            </div>
            <div class="ml-10 mt-2">
                <p class="text-[#D82A2A]">*The carrier will still cover this payment, however, our statement system will
                    recognize this option and
                    roll it over to deduct from your Owner Operator's statement.</p>
            </div>
            <div class="flex justify-between items-center">
                <div class="p-4">
                    <h1 class="text-xl font-bold">Total Drivers</h1>
                </div>
                <div class="bg-[#272727] p-2 h-10 rounded-lg px-20 w-44">
                    <h2 class="text-white">0</h2>
                </div>
            </div>


        </div>
        <div class="lg:w-4/5 h-auto">
            <div>
                <h1 class="text-2xl uppercase font-bold">PLAN BREAKDOWN</h1>
            </div>
            <div class="border-1 rounded-2xl w-full h-auto bg-[white] p-6">
               
                    <table class="mx-25 w-full">
                        <thead class="h-20">
                            <tr class="text-white text-center text-sm bg-[#3C58A8]">
                                <th class="rounded-tl-2xl"></th>
                                <th class="">Total Users</th>
                                <th class="">Paid Users</th>
                                <th class="rounded-tr-2xl">Promo Users</th>
                            </tr>
                        </thead>
                        <tbody class="bg-[#F5F5F5]">
                            <tr class="text-center">
                                <td class="h-20 bg-[#3C58A8] p-3 text-center text-white">Company Drivers</td>
                                <td class=" border-tl-2xl">30</td>
                                <td class="">30</td>
                                <td class="">8000</td>
                                
                            </tr>
                            <tr class="text-center">
                                <td class="w-32 h-20 bg-[#3C58A8] p-3 text-center text-white">Owner Operators</td>
                                <td class="">800</td>
                                <td class="">0</td>
                                <td class="">800</td>
                                
                            </tr>
                            <tr class="text-center">
                                <td class="h-20 bg-[#3C58A8] p-3 text-white rounded-bl-2xl">Portal Users</td>
                                <td class="">8000</td>
                                <td class="">800</td>
                                <td class="rounded-br-2xl">800</td>
                            </tr>
                            <tr class="bg-white text-center">
                                <td class="h-5"></td>
                                <td class=""></td>
                                <td class=""></td>
                                <td class=""></td>
                            </tr>
                            <tr class="text-white text-center font-bold bg-[#272727]">
                                <td class="h-10 rounded-l-xl">TOTAL USERS</td>
                                <td class="">8830</td>
                                <td class="">8030</td>
                                <td class="rounded-r-xl">803</td>
                            </tr>
                          
                        </tbody>
                    </table>
                
            </div>
            <div class="border-1 mt-6 rounded-xl w-full h-auto bg-[white] p-6">
                <table class="w-full">
                    <thead class="h-10">
                        <tr class="text-white bg-[#3C58A8] text-sm">
                            <th class="rounded-l-xl">Cost Without Discount</th>
                            <th class="">Cost Per User</th>
                            <th class="">Savings</th>
                            <th class="rounded-r-xl">Total Monthly Cost</th>
                        </tr>
                    </thead>
                    <tbody class="bg-[#F5F5F5]">
                        <tr class="text-center bg-[white]">
                            <td class="h-5"></td>
                            <td class=""></td>
                            <td class=""></td>
                            <td class=""></td>
                        </tr>
                        <tr class="text-[#272727] text-center text-sm font-bold bg-[#F5F5F5]">
                            <td class="h-10 rounded-l-xl">$220,750</td>
                            <td class="">$10.00</td>
                            <td class="">$140,450</td>
                            <td class="rounded-r-xl">$80,300</td>
                      
                        </tr>
                      
                    </tbody>
                </table>             
               
            </div>
            <div class="w-full text-center  rounded-xl bg-[#3C58A8] mt-5 h-10 p-2 uppercase  text-[white] font-bold">
               <span> Pre-Order beta plan</span>
            </div>
        </div>
    </div>
</template>

<script>
import PriceCalculatorHeader from '../pricing-calculator/PriceCalculatorHeader.vue'

export default {

    components: { PriceCalculatorHeader }
}
</script>

<style scoped>

</style>