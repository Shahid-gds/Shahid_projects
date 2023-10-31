<template>
    <div>
        <div class="flex flex-col mt-24 ">


            <div class="relative mx-auto border max-w-2xl bg-white p-8 rounded-md shadow-md">
                <!-- cards checkbox -->
                <div class="flex flex-row justify-center space-x-3 mx-auto mt-4 ">
                    <div @click="selectedCard('paypal')"
                        :class="{ 'border-primary': card === 'paypal', 'border-gray-200': card != 'paypal' }"
                        class="rounded-md border relative p-2 my-auto  w-28 hover:cursor-pointer">
                        <img class="grayscale  mx-auto w-10 h-10 "
                            :class="{ 'grayscale-0 ': card === 'paypal', 'opacity-50': card != 'paypal' }"
                            src="@/assets/icons/account/paypal.svg" alt="PayPal">
                        <mdicon v-if="card === 'paypal'" :class="{ 'text-primary': card === 'paypal' }"
                            class="absolute -top-2 -right-2" name="check-circle" />
                    </div>
                    <div @click="selectedCard('visa')"
                        :class="{ 'border-primary': card === 'visa', 'border-gray-200': card != 'visa' }"
                        class="rounded-md border relative p-2 my-auto  w-28  hover:cursor-pointer">
                        <img class="grayscale w-10 h-10 mx-auto "
                            :class="{ 'grayscale-0': card === 'visa', 'opacity-50': card != 'visa' }"
                            src="@/assets/icons/account/visa.svg" alt="visa">
                        <mdicon v-if="card === 'visa'" :class="{ 'text-primary': card === 'visa' }"
                            class="absolute -top-2 -right-2" name="check-circle" />
                    </div>
                    <div @click="selectedCard('mastercard')"
                        :class="{ 'border-primary': card === 'mastercard', 'border-gray-200': card != 'mastercard' }"
                        class="rounded-md relative border my-auto p-2  w-28  hover:cursor-pointer">
                        <img class="grayscale mx-auto  w-10 h-10"
                            :class="{ 'grayscale-0': card === 'mastercard', 'opacity-50': card != 'mastercard' }"
                            src="@/assets/icons/account/mastercard.svg" alt="mastercard">
                        <mdicon v-if="card === 'mastercard'" :class="{ 'text-primary': card === 'mastercard' }"
                            class="absolute -top-2 -right-2" name="check-circle" />
                    </div>
                </div>
                <!-- cards form -->
                <div class="flex flex-col mt-4 space-y-7">

                    <div class="flex flex-row w-full space-x-3">
                        <div class="flex flex-col w-[50%]">
                            <label class="text-gray-500 text-sm" for="">Name on Card *</label>
                            <input type="text"
                                class="border-none bg-gray-50 text-sm rounded-md focus:ring-0 placeholder:text-gray-300"
                                placeholder="Enter Your Card">
                        </div>

                        <div class="flex flex-col w-[50%]">
                            <label class="text-gray-500 text-sm" for="">Email Address * <span
                                    class="text-xs text-gray-400">(Optional)</span> </label>
                            <input type="text"
                                class="border-none bg-gray-50 rounded-md text-sm focus:ring-0 placeholder:text-gray-300"
                                placeholder="Your Email Address">
                        </div>

                    </div>
                    <div class="flex flex-col w-full ">
                        <label class="text-gray-500 text-sm" for="">Card Number *</label>
                        <input class="border-none bg-gray-50 rounded-md text-sm focus:ring-0 placeholder:text-gray-300"
                            type="text" name="" id="" placeholder="0000-0000-0000-0000">
                    </div>
                    <div class="flex flex-row w-full space-x-3">
                        <div class="flex flex-col ">
                            <label class="text-gray-500 text-sm" for="">CVV Number *</label>
                            <input type="text"
                                class="border-none w-full bg-gray-50 text-sm rounded-md focus:ring-0 placeholder:text-gray-300"
                                placeholder="CVV Number">
                        </div>

                        <div class="flex flex-col ">
                            <label class="text-gray-500 text-sm" for="">Expiry Month </label>
                            <input type="text"
                                class="border-none w-full bg-gray-50 rounded-md text-sm focus:ring-0 placeholder:text-gray-300"
                                placeholder="Select Month">
                        </div>

                        <div class="flex flex-col ">
                            <label class="text-gray-500 text-sm" for="">Expiry Year </label>
                            <input type="text"
                                class="border-none w-full bg-gray-50 rounded-md text-sm focus:ring-0 placeholder:text-gray-300"
                                placeholder="Select Year">
                        </div>

                    </div>
                    <div class="flex flex-row justify-end space-x-2 text-white">
                        <button @click="hideModal" class="py-2 px-4 border text-black rounded-md flex space-x-2">
                            <span>Cancel Payment</span>
                        </button>
                        <button @click="selectPayment" class=" py-2 px-4 bg-primary rounded-md flex space-x-2">

                            <span>
                                Confirm Payment
                            </span>
                        </button>


                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue'

const card = ref('visa');

const emit = defineEmits(['selectPayment'])



const selectPayment = () => {
    emit('selectPayment');
}

const selectedCard = (c) => {
    if (c === 'visa') {
        card.value = c;
    }
    if (c === 'paypal') {
        card.value = c
    }

    if (c === 'mastercard') {
        card.value = c;
    }
}

</script>
