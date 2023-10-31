<template>
    <div class="container mx-auto -mt-3 lg:flex space-y-10 2xl:space-y-0 xl:space-y-0  lg:space-x-10 px-4 2xl:px-0 xl:px-0 lg:px-0 md:px-0">
        <!-- Left Side -->
        <div class=" h-auto lg:w-1/2 mx-5">
            <div>
                <div>
                    <h1 class="text-2xl uppercase font-bold">Users</h1>
                </div>
                <div class="flex 2xl:space-x-5 items-center">
                    <div class="mt-5 text-theme space-y-10 w-1/2 2xl:p-4">
                        <div>
                            <label for="">Drivers</label>
                        </div>
                        <div v-if="rollover_cost">
                            <label for="">Owner Operators</label>
                        </div>

                    </div>
                    <div class="space-y-2 w-3/4 mt-5 bg-white border-2 p-4 rounded-lg">
                        <input class="w-full text-right font-lg" type="text" placeholder="0" v-model="company_drivers">
                        <hr v-if="rollover_cost">
                        <input  v-if="rollover_cost" class="w-full text-right font-lg" type="text" placeholder="0" v-model="owneroperator_drivers">
                    </div>
                </div>
                <div class="flex items-center space-x-3 ml-10 cursor-pointer" @click="setRoll()">
                    <input type="checkbox" class="w-4 h-4 rounded cursor-pointer" v-model="rollover_cost" >
                    <label for="" class="text-theme cursor-pointer">Rollover Cost to Owner Operator</label>
                </div>
                <div class="ml-10 mt-2">
                    <p class="text-gray-500 text-sm">*The carrier will still cover this payment, however, our statement system will
                        recognize this option and
                        roll it over to deduct from your Owner Operator's statement.</p>
                </div>
                <!-- <div class="flex justify-between items-center">
                    <div class="p-4">
                        <h1 class="text-xl font-bold">Total Drivers</h1>
                    </div>
                    <div class="bg-gray-700 p-2 h-10 rounded-lg px-20 w-44">
                        <h2 class="text-white">0</h2>
                    </div>
                </div> -->
            </div>
            <div>
                <div class="flex 2xl:space-x-5 items-center">
                    <div class="mt-5 text-theme space-y-10 w-1/2 2xl:p-4">
                        <div>
                            <label for="">Portal Users</label>
                        </div>

                    </div>
                    <div class="space-y-2 w-3/4 mt-5 bg-white border-2 p-4 rounded-lg">
                        <input class="w-full text-right font-lg" type="text" placeholder="0" v-model="portal_users" @input="preventNonNumericalInput">
                    </div>
                </div>
                <div class="ml-10 mt-2">
                    <p class="text-gray-500 text-sm">These are the users who will use the Portal back office software. (Dispatchers, Admins, Safety, Accounting etc...)</p>
                </div>
                <div class="flex justify-between items-center">
                    <div class="p-4">
                        <h1 class="text-xl font-bold">Total Users</h1>
                    </div>
                    <div class="bg-gray-700 p-2 h-10 rounded-lg px-20 w-44 text-white">
                        {{total_users}}
                    </div>
                </div>
            </div>
            <!-- dropdown -->
            <div class="relative w-full  text-left">
                <div>
                <button @click="toggleDropdown" class="inline-flex justify-between w-full rounded-md px-4 py-2 font-bold text-sm border-2 border-gray-300 mt-4 text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="options-menu" aria-haspopup="true" aria-expanded="true">
                    Review Savings
                   
                </button>
                </div>

                <div v-show="isOpen" class="origin-top-right absolute right-0 mt-2 rounded-md  bg-white ring-1 ring-black ring-opacity-5 w-full">
                <div class="py-1 " role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <div class="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                    Every 10 Drivers
                    <span class="float-right">+1 PORTAL USER FREE</span>
                    </div>
                    <div v-if="total_users < 10" class="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                        Less than 10 users
                        <span class="float-right">$25.00 a user</span>
                    </div>
                    <div v-else-if="total_users < 50" class="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                        11 to 50 users
                        <span class="float-right">$22.50 a user</span>
                    </div>
                    <div v-else-if="total_users < 200" class="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                        51 to 200 users
                        <span class="float-right">$20.00 a user</span>
                    </div>
                    <div v-else-if="total_users < 500" class="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                        201 to 500 users
                        <span class="float-right">$18.00 a user</span>
                    </div>
                    <div v-else-if="total_users < 1000" class="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                        501 to 1000 users
                        <span class="float-right">$15.00 a user</span>
                    </div>
                    <div v-else-if="total_users < 3000" class="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                        1001 to 3000 users
                        <span class="float-right">$12.00 a user</span>
                    </div>
                    <div v-else-if="total_users >= 3000" class="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                        More than 3000 users
                        <span class="float-right">$10.00 a user</span>
                    </div>
                </div>
                </div>
            </div>

        </div>
        <div class="lg:w-4/5 h-auto mx-5">
            <div>
                <h1 class="text-2xl uppercase font-bold">PLAN BREAKDOWN</h1>
            </div>
            <div class="border-1 rounded-2xl w-full h-auto bg-white p-6">
               
                    <table class="mx-25 w-full">
                        <thead class="h-20">
                            <tr class="text-white text-center text-sm bg-gray-700">
                                <th class="rounded-tl-2xl"></th>
                                <th class=""> Users</th>
                                <th class="rounded-tr-2xl">Amount</th>
                                <!-- <th class="rounded-tr-2xl">Promo Users</th> -->
                            </tr>
                        </thead>
                        <tbody class="border border-gray-100">
                            <tr class="text-center">
                                <td class="w-1/4 text-sm bg-gray-700 p-3 text-center text-white">Company Drivers</td>
                                <td class=" border-tl-2xl">
                                    <span v-if="!company_drivers" class="text-gray-500">0</span>
                                    <span>{{company_drivers}}</span>
                                </td>
                                <td class=" ">{{$displayPrice(costPerUser(company_drivers) * company_drivers)}}</td>
                            </tr>
                            <tr class="text-center" v-if="rollover_cost">
                                <td class="w-1/4 text-sm bg-gray-700 p-3 text-center text-white">
                                    Owner Operators
                                    <p>included</p>
                                </td>
                                <td class="">
                                    <span v-if="!owneroperator_drivers" class="text-gray-500">0</span>
                                    <span>{{owneroperator_drivers}}</span>
                                </td>
                                <td class=""><strike>{{$displayPrice(costPerUser(owneroperator_drivers) * owneroperator_drivers)}}</strike> 
                                    <span class="italic text-gray-500">*rolled over</span></td>
                                
                            </tr>
                            <tr class="text-center">
                                <td class="w-1/4 text-sm bg-gray-700 p-3 text-white rounded-bl-2xl">Portal Users</td>
                                <td class="relative">
                                    <span v-if="!portal_users" class="text-gray-500">0</span>
                                    <span>{{portal_users}}</span>
                                </td>
                                <td class="rounded-br-2xl">{{
                                    $displayPrice(userCost)
                                    }} 
                                    <span v-if="bonus_users > 0" class="absolute ml-1 text-sm font-bold text-green-500">({{ $displayPrice(costPerUser(bonus_users) * bonus_users  )}} off)</span>
                                </td>
                            </tr>
                            <tr class="bg-white text-center">
                                <td class="h-5"></td>
                                <td class=""></td>
                                <td class=""></td>
                                <!-- <td class=""></td> -->
                            </tr>
                            <tr class="bg-white text-center" >
                                <td class="h-5 " colspan="3">You can always update and change this the portal.</td>
                            </tr>
                            <tr class="text-white text-center font-bold bg-gray-700">
                                <td class="h-10 rounded-l-xl">TOTAL</td>
                                <td class="">{{total_users}}</td>
                                <td class="rounded-r-xl">{{$displayPrice(total)}}</td>
                                <!-- <td class="rounded-r-xl">803</td> -->
                            </tr>
                          
                        </tbody>
                    </table>
                
            </div>

            <div class="flex items-center justify-center">
                <button
                class="toggle-btn"
                :class="{ 'toggle-btn-active': selectedOption === 'monthly' }"
                @click="selectOption('monthly')"
                >
                Pay Monthly
                </button>
                <button
                class="toggle-btn"
                :class="{ 'toggle-btn-active': selectedOption === 'annually' }"
                @click="selectOption('annually')"
                >
                Pay Annually
                </button>
            </div>
            <div class="w-full mx-auto mt-10">
                <div class="bg-white rounded px-8 pt-6 pb-8 mb-4">
                    <!-- <h1 class="text-xl font-bold mb-6">Receipt</h1> -->
                    <table class="min-w-full">
                        <tbody class="bg-white">
                            <tr>
                                <td class="px-4 py-2 text-sm font-medium">Cost Without Discount</td>
                                <td class="px-4 py-2 text-sm font-medium text-right">{{$displayPrice(total_users  * 2500)}}</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 text-sm font-medium">Cost Per User</td>
                                <td class="px-4 py-2 text-sm font-medium text-right">{{ $displayPrice(costPerUser(total_users-bonus_users) ) }} / {{ total_users}} users</td>
                            </tr>
                            <tr v-if="rollover_cost">
                                <td class="px-4 py-2 text-sm font-medium flex relative roll-text text-yellow-500">
                                    Rolled over onto Owner Operators
                                    <img src="@/assets/icons/pricing/info.svg" class="w-4 mx-2 cursor-pointer hover:opacity-75"/>

                                    <p class="absolute -bottom-10 show-pop bg-white text-black rounded text-sm ">
                                        This cost will be charged to the carrier, but will be automatically deducted from the owner operator's statement.
                                    </p>
                                </td>
                                <td class="px-4 py-2 text-sm font-medium text-right  text-yellow-500" >
                                    {{ $displayPrice(costPerUser(owneroperator_drivers) * owneroperator_drivers) }} {{time_unit}}
                                   <!-- <span>{{ $displayPrice(costPerUser(owneroperator_drivers)) }} / {{ owneroperator_drivers }} users</span> -->
                                </td>
                            </tr>
                            <tr class="text-green-500">
                                <td class="px-4 py-2 text-sm font-medium">Savings</td>
                                <td class="px-4 py-2 text-sm font-medium text-right">-{{$displayPrice((total_users  * 2500) - total)}} {{ time_unit }}</td>
                            </tr>
                            <tr class="border-t border-gray-200 font-bold">
                                <td class="px-4 py-2 text-xl font-bold">Total 
                                    <span v-if="selectedOption == 'annually'">Annual</span> 
                                    <span v-else>Month</span> 
                                    Cost</td>
                                <td class="px-4 py-2 text-xl font-bold text-right">
                                    {{$displayPrice(total)}} {{time_unit}}
                                    <p v-if="selectedOption == 'annually'" class="font-medium text-gray-500 text-xs">  or {{$displayPrice(total/12)}} / mo</p>
                                
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <button  class="w-full text-center rounded-xl mt-5 h-10 p-2 uppercase text-white font-bold" 
            :class="{ 'bg-gray-500': total === 0, 'bg-blue-500': total > 0 }" 
            @click="navigateToRoute('CardCheckout')"
            >
            <span> Pre-Order beta plan ({{$displayPrice(total)}})</span>
            </button>
        </div>
    </div>
</template>
<script setup>
import { ref, computed} from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const router = useRouter();
const store = useStore();

const portal_users = ref('');
const company_drivers = ref('');
const owneroperator_drivers = ref('');
const time_unit = ref('/ mo')


const selectedOption = ref('monthly');
const rollover_cost = ref(false);

const isOpen = ref(false);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};
const selectOption = (option) => {
  selectedOption.value = option;
  if(selectedOption.value == 'annually'){
    time_unit.value = '/ yr'
  }else{
    time_unit.value = '/ mo'
  }
};
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
const setRoll = () =>{
    rollover_cost.value = !rollover_cost.value
    if( rollover_cost.value == false){
        owneroperator_drivers.value = 0
    }

}

// Cost per user computation
const costPerUser = (users) => {
    if(selectedOption.value == 'annually'){
        if(users == 0) return 0;
        if (users < 11) return 27000;
        if (users < 51) return 24300;
        if (users < 201) return 21600;
        if (users < 501) return 19440;
        if (users < 1001) return 16200;
        if (users < 3001) return 12960;
        return 10800;
    }else{
        if(users == 0) return 0;
        if (users < 11) return 2500;
        if (users < 51) return 2250;
        if (users < 201) return 2000;
        if (users < 501) return 1800;
        if (users < 1001) return 1500;
        if (users < 3001) return 1200;
        return 1000;
    }
};
const preventNonNumericalInput = () => {
  portal_users.value = portal_users.value.replace(/[^0-9]/g, '');
};

const total_users = computed(() => {
    let t_users = Number(portal_users.value) + Number(company_drivers.value) + Number(owneroperator_drivers.value)
    return t_users
});
const bonus_users = computed(() => {
    let t_drivers = Number(company_drivers.value) + Number(owneroperator_drivers.value);
    return Math.floor(t_drivers / 10);
});
const true_users = computed(() => {
    console.log(Number(total_users.value))
    console.log(Number(total_users.value) - Number(bonus_users.value))
    return (Number(total_users.value) - Number(bonus_users.value))
});
const userCost = computed(() => {
  const result = (costPerUser(portal_users.value) * portal_users.value) - (costPerUser(bonus_users.value) * bonus_users.value);
  return result < 0 ? 0 : result;
});
const total = computed(() => {
    let ft_users =  Number(portal_users.value) + Number(company_drivers.value) + Number(owneroperator_drivers.value)
    console.log('ft_users', ft_users)
    let p_user =  Number(portal_users.value) - Number(bonus_users.value)
    if(p_user < 0){
        p_user = 0
    }
    let t_user = p_user + Number(company_drivers.value) + Number(owneroperator_drivers.value);
    console.log('t_uesr', t_user)
    return (costPerUser(t_user) * t_user)
});

const navigateToRoute = (x) => {
  store.commit('updatePackage',{
    users_portal: Number(portal_users.value),
    users_driver: Number(company_drivers.value),
    users_oo_driver: Number(owneroperator_drivers.value),
    subtotal: total.value,
    bonus_users: bonus_users.value,
    discounts: (total_users.value  * 2500) - total.value,
    total: total.value,
    paid_users: Number(true_users.value),
    total_true_users: true_users.value,
    pay_period: selectedOption.value
  });
  router.push({ name: x });
};
</script>

<style scoped>
.toggle-btn {
  @apply px-4 py-2 bg-gray-400 border-gray-400;
}
.toggle-btn:hover {
  @apply bg-gray-300;
}
.toggle-btn-active {
  @apply  text-white font-bold text-sm border-2 border-blue-900 rounded;
  @apply bg-blue-900 cursor-pointer transition-colors;
}
.toggle-btn-active:hover {
  @apply bg-blue-800;
}
.roll-text:hover .show-pop{
    display: flex;
}
.show-pop{
    display: none
}
</style>