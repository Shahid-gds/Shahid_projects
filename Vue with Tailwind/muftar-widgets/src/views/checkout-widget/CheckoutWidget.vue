<template>
    <div class="container mx-auto xl:px-20 xl:py-10 p-2">
        <div class="bg-[white] w-full shadow-xl rounded-lg flex lg:flex-row flex-col-reverse ">
            <div class="sm:p-10 sm:px-16 p-4 lg:w-1/2 mt-5">
                <h1 class="font-bold text-2xl">Payment Details</h1>
                <div class="mt-10 space-y-1">
                    <div class="text-[#565d66] font-[600]">
                        <label for="">Email Address</label>
                    </div>
                    <div>
                        <input
                            class="border-2 w-full rounded-lg p-3 focus:outline-none focus:border-[#3C5AA8]  focus:ring-[#3C5AA8]"
                            type="email" placeholder="Email Address">
                    </div>
                </div>
                <div class="mt-5 space-y-1">
                    <div class="text-[#565d66] font-[600]">
                        <label for="">Credit Card Number</label>
                    </div>
                    <div>
                        <input
                            class="border-2 w-full rounded-lg p-3 focus:outline-none focus:border-[#3C5AA8]  focus:ring-[#3C5AA8]"
                            type="text" placeholder="XXXX XXXX XXXX XXXX XXXX" v-model="numericInput"
                            @input="filterNonNumeric" :maxlength="max">
                    </div>
                </div>
                <div class="mt-5 space-x-10 flex w-full">
                    <div class="w-1/2">
                        <div class="text-[#565d66] font-[600]">
                            <label for="">Expiry Date</label>
                        </div>
                        <div>
                            <input
                                class="border-2 w-full rounded-lg p-3 focus:outline-none focus:border-[#3C5AA8]  focus:ring-[#3C5AA8]"
                                v-model="expirationDate" @input="formatExpirationDate" type="text" placeholder="MM/YY"
                                :maxlength="expMax">
                        </div>
                    </div>
                    <div class="w-1/2">
                        <div class="text-[#565d66] font-[600]">
                            <label for="">CVV</label>
                        </div>
                        <div>
                            <input
                                class="border-2 w-full rounded-lg p-3 focus:outline-none focus:border-[#3C5AA8]  focus:ring-[#3C5AA8]"
                                v-model="cvvInput" @input="filterCvvNumeric" maxlength="4" placeholder="XXXX">
                        </div>
                    </div>
                </div>
                <div class="mt-16 flex space-x-4">
                    <div>
                        <input type="checkbox" class="w-5 h-5 custom-checkbox cursor-pointer" @click="checkBoxChecked">
                    </div>
                    <div>
                        <span class="font-bold">I've a promo code</span>
                    </div>
                </div>

                <div class="flex space-x-4" v-if="promoCode">
                    <div class="w-full">
                        <input
                            class="focus:outline-none focus:border-[#3C5AA8]  focus:ring-[#3C5AA8] rounded-lg border-2 p-3 w-full"
                            type="text" placeholder="Enter Promo Code" v-model="promoInput" @input="handleInput">
                    </div>
                    <div class="w-full">
                        <button class="p-3 bg-[#3C5AA8] rounded-lg text-white">Apply Now</button>
                    </div>
                </div>
                <div class="w-full flex justify-between mt-10">
                    <div class="text-[#565d66] font-[600]">
                        <label>Subtotal</label>
                    </div>
                    <div class="font-bold text-lg text-[#2a3b50]">
                        <span>$96</span>
                    </div>
                </div>
                <div class="w-full flex justify-between mt-4">
                    <div class="text-[#565d66] font-[600]">
                        <label>Platform Fee</label>
                    </div>
                    <div class="font-bold text-lg text-[#2a3b50]">
                        <span>$4</span>
                    </div>
                </div>
                <hr class="w-full mt-5">
                <div class="w-full flex justify-between mt-5">
                    <div class="text-[#565d66] font-[600]">
                        <label>Total Amount</label>
                    </div>
                    <div class="font-bold text-xl text-[#2a3b50]">
                        <span>$100</span>
                    </div>
                </div>
                <div class="w-full mt-10 bg-[#3C5AA8] text-center p-4 rounded-lg cursor-pointer">
                    <button class="text-[white] font-semibold">Make Payment</button>
                </div>
            </div>
            <div class="h-full lg:w-1/2 sm:p-6 p-2">
                <div
                    class="bg-gradient-to-tr from-[#18181a] via-[#4c5060] to-[#6e5a57] h-80 rounded-t-xl p-6 w-full text-[white]">
                    <div class="sm:mx-72 mx-28">
                        <div class="w-8 h-8 bg-[#3f5dff] rounded-full mt-10 mx-auto">
                        </div>
                        <div class="w-5 h-5 bg-[white] rounded-full mx-auto ml-6 border-4 border-[#4c5060] -m-3">
                        </div>
                    </div>
                    <div class="mt-16 text-center sm:text-2xl font-bold">
                        <h1>Subscribe and Start saving <br> your money today!</h1>
                    </div>
                </div>
                <div class="w-full bg-[#f3f5f9] rounded-b-xl">
                    <div
                        class="lg:w-1/4 sm:w-1/2 w-2/3 bg-[#ffffff] items-center absolute lg:mx-20 md:mx-28 sm:mx-24 mx-14 -mt-12 shadow-xl rounded-lg p-3 flex space-x-4">
                        <div class="bg-[#ed7f5b] w-16 h-16 rounded-xl"></div>
                        <div class="">
                            <div class="sm:text-xl text-[#737277]">Professional Plan</div>
                            <span class="text-2xl font-bold">$96 / month</span>
                        </div>
                    </div>
                    <div class="p-10">
                        <ul class="space-y-6 list-disc text-xl text-[#3C5AA8] sm:px-10 mt-16">
                            <li class="">
                                <span class="sm:text-lg text-sm text-[#6c6d71]">All features in </span>
                                <span class="sm:text-lg text-sm text-[black]">basic included</span>
                            </li>
                            <li>
                                <span class="sm:text-lg text-sm text-[#6c6d71]">Easy and flexible business with </span>
                                <span class="sm:text-lg text-sm text-[black]">invoice <br> management</span>
                            </li>
                            <li>
                                <span class="sm:text-lg text-sm text-[#6c6d71]">Full time</span>
                                <span>..</span>
                            </li>
                            <li>
                                <span class="sm:text-lg text-sm text-[#6c6d71]">20 TB </span>
                                <span class="sm:text-lg text-sm text-[black]">cloud storage</span>
                            </li>
                        </ul>
                        <div class="mt-16 px-6 font-bold text-lg text-center">
                            <h1 class="border-b-2 w-28 border-[#3C5AA8]">Modify Plan</h1>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </div>
</template>


<script>
import '@/assets/css/index.css'
export default {
    data() {
        return {
            max: 19,
            numericInput: "",
            expMax: 5,
            expirationDate: '',
            cvvInput: "",
            promoCode: false,
            promoInput: ''
        }
    },
    methods: {
        formatExpirationDate(event) {
            let input = event.target.value;

            // Remove any non-digit characters from the input
            let digitsOnly = input.replace(/\D/g, '');

            // Add a slash after the first two digits
            let formatted = digitsOnly.replace(/^(\d{2})/, '$1/');

            // Update the data property with the formatted value
            this.expirationDate = formatted;
        },
        filterNonNumeric() {
            // Replace non-numeric characters with an empty string
            this.numericInput = this.numericInput.replace(/[^0-9]/g, "");
        },
        filterCvvNumeric() {
            // Replace non-numeric characters with an empty string
            this.cvvInput = this.cvvInput.replace(/[^0-9]/g, "");
        },
        checkBoxChecked() {
            this.promoCode = !this.promoCode
        },
        handleInput() {
            this.promoInput = this.promoInput.toUpperCase();
        }
    },
    watch: {
        numericInput(value) {
            // Remove any existing spaces from the input
            const unformattedNumber = value.replace(/\s/g, "");
            // Add a space after every 4 digits
            const formattedValue = unformattedNumber.replace(/(\d{4})/g, "$1 ");

            // Update the model value with the formatted number
            this.numericInput = formattedValue.trim();
        }
    }
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
    content: "✔";
    position: absolute;
    width: 6px;
    height: 12px;
    left: 1px;
    top: -2px;
    color: #3C5AA8;
    transition: transform 0.2s ease;
}
</style>