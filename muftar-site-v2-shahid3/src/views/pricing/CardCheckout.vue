<template>
    <div class="">
        <PaymentHeader />
    </div>
    <div class="container mx-auto h-screen mt-10 md:flex p-4" :class="{ main_container: 'main_container' }">
        <div class="left_div">
            <h1 class="text-4xl">Payment Detail</h1>
            <p class="font-[400]">Complete your purchase by providing your payment details</p>
            <div class="mt-10 md:ml-5 md:flex md:space-x-8">
                <div>
                    <div><label for="">Full Name</label></div>
                    <div><input class="border-2 p-2 px-3 rounded-lg md:w-80 w-full" type="text"></div>
                </div>
                <div class="">
                    <div class=""><label for="">Email Address</label></div>
                    <div><input class="border-2 p-2 px-3 rounded-lg md:w-80 w-full" type="email"></div>
                </div>
            </div>
            <div class="flex">
                <div
                    class="bg-[#FFFFFF] border-2 border-[#3C58A8] p-3.5 ml-5 mt-10 w-32 h-20 rounded-xl drop-shadow-xl	filter: drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08))">
                    <img src="../../assets/icons/card.svg" alt="">
                    <h1 class="text-[#3C58A8]">Card</h1>
                </div>
                <div
                    class="bg-[#FFFFFF] border-2 p-3.5 ml-5 mt-10 w-32 h-20 rounded-lg drop-shadow-xl	filter: drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08))">
                    <img src="../../assets/icons/bank.svg" alt="">
                    <h1 class="text-[#292D32] leading-4 mt-1">Bank Account</h1>
                </div>
            </div>
            <div class="ml-5 mt-10">
                <div>
                    <label for="">Card Number</label>

                    <div>
                        <input class="border-2 w-full rounded-lg p-3" type="text" placeholder="1234 1234 1234 1234"
                            v-model="numericInput" @input="filterNonNumeric" :maxlength="max">
                        <img class="-mt-11 md:ml-80 ml-56 px-28 absolute" src="../../assets/icons/cards.svg" alt=""
                            :class="{ pay_cards: 'pay_cards' }">
                    </div>
                    <div class="mt-10 md:flex md:space-x-8">
                        <div>
                            <div><label for="">Expiration</label></div>
                            <div><input class="border-2 p-2 px-3 rounded-lg md:w-80 w-full" v-model="expirationDate"
                                    @input="formatExpirationDate" type="text" placeholder="MM/YY" :maxlength="expMax">
                            </div>
                        </div>
                        <div class="">
                            <div><label for="">CVC</label></div>
                            <div><input class="border-2 p-2 px-3 rounded-lg md:w-80 w-full" type="text" v-model="cvcInput"
                                    @input="filterCvcNumeric" maxlength="3" placeholder="CVC">
                            </div>
                        </div>
                    </div>
                    <div class="mt-10 md:flex md:space-x-8">
                        <div>
                            <div><label for="">Cardholder name</label></div>
                            <div><input class="border-2 p-2 px-3 rounded-lg md:w-80 w-full" type="text"
                                    placeholder="Cardholder name">
                            </div>
                        </div>
                        <div class="">
                            <div><label for="">VAT Number (optional)</label></div>
                            <div><input class="border-2 p-2 px-3 rounded-lg md:w-80 w-full" type="text"
                                    placeholder="VAT Number">
                            </div>
                        </div>
                    </div>
                    <div class="mt-10 md:flex md:space-x-8">
                        <div>
                            <div><label for="">Billing address</label></div>
                            <div>
                                <Select class="border-2 p-2 px-3 rounded-lg md:w-80 w-full text-[#3C58A8]">
                                    <Option>USA</Option>
                                </Select>
                            </div>
                        </div>
                        <div class="">
                            <div><label for="">Postal Code</label></div>
                            <div><input class="border-2 p-2 px-3 rounded-lg md:w-80 w-full" type="text"
                                    placeholder="Postal Code">
                            </div>
                        </div>
                    </div>
                    <div class="mt-10 md:flex md:space-x-8">
                        <!-- <div>
                 <div><label for="">Billing address</label></div>
                 <div>
                    <Select class="border-2 p-2 px-3 rounded-lg w-72 text-[#3C58A8]">
                        <Option >USA</Option>
                    </Select>
                    </div>
                </div> -->
                        <div class="">
                            <div><label for="">Discount code</label></div>
                            <div><input class="border-2 p-2 px-3 rounded-lg md:w-80 w-full" type="text"
                                    placeholder="Discount code">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-16 ml-5">
                <button class="bg-[#4B64AF] w-full p-2 rounded-lg text-[white]">Pay $35</button>
            </div>
        </div>

        <div class="bg-[#4B64AF]" :class="{ right_div: 'right_div' }">
            <div class="package_card">
                <svg class="mx-auto mt-40" xmlns="http://www.w3.org/2000/svg" width="370.436" height="637.819"
                    viewBox="0 0 370.436 637.819">
                    <path id="Subtraction_3" data-name="Subtraction 3"
                        d="M-17608.5,660.821h-12.008a5.475,5.475,0,0,0-5.5-5.32,5.474,5.474,0,0,0-5.5,5.32h-6.008a5.477,5.477,0,0,0-5.5-5.32,5.472,5.472,0,0,0-5.494,5.32h-6.006a5.475,5.475,0,0,0-5.5-5.32,5.477,5.477,0,0,0-5.5,5.32h-6.006a5.477,5.477,0,0,0-5.5-5.32,5.476,5.476,0,0,0-5.5,5.32h-6.008a5.471,5.471,0,0,0-1.668-3.767A5.468,5.468,0,0,0-17694,655.5a5.474,5.474,0,0,0-5.5,5.32h-6.01a5.472,5.472,0,0,0-5.5-5.32,5.474,5.474,0,0,0-5.492,5.32h-6.008a5.471,5.471,0,0,0-1.668-3.767A5.468,5.468,0,0,0-17728,655.5a5.477,5.477,0,0,0-5.5,5.32h-6.008a5.464,5.464,0,0,0-1.666-3.767,5.479,5.479,0,0,0-3.83-1.552,5.472,5.472,0,0,0-3.83,1.552,5.479,5.479,0,0,0-1.666,3.767h-6.008a5.477,5.477,0,0,0-5.5-5.32,5.468,5.468,0,0,0-3.828,1.552,5.461,5.461,0,0,0-1.666,3.767h-6.006a5.472,5.472,0,0,0-1.666-3.767,5.472,5.472,0,0,0-3.83-1.552,5.474,5.474,0,0,0-5.5,5.32h-6.008a5.477,5.477,0,0,0-5.5-5.32,5.468,5.468,0,0,0-3.828,1.552,5.477,5.477,0,0,0-1.668,3.767h-6.008a5.471,5.471,0,0,0-1.668-3.767A5.468,5.468,0,0,0-17813,655.5a5.474,5.474,0,0,0-5.5,5.32h-6.01a5.472,5.472,0,0,0-5.5-5.32,5.479,5.479,0,0,0-3.83,1.552,5.462,5.462,0,0,0-1.664,3.767h-6.006a5.475,5.475,0,0,0-5.5-5.32,5.477,5.477,0,0,0-5.5,5.32h-6.008a5.464,5.464,0,0,0-1.666-3.767,5.479,5.479,0,0,0-3.83-1.552,5.476,5.476,0,0,0-5.5,5.32h-6.008a5.477,5.477,0,0,0-5.5-5.32,5.468,5.468,0,0,0-3.828,1.552,5.461,5.461,0,0,0-1.666,3.767h-6.01a5.473,5.473,0,0,0-5.492-5.32,5.474,5.474,0,0,0-5.5,5.32h-6.008a5.477,5.477,0,0,0-5.5-5.32,5.468,5.468,0,0,0-3.828,1.552,5.477,5.477,0,0,0-1.668,3.767h-13A22.558,22.558,0,0,0-17956,638.5l0-364.715c0-7.3,6-12.416,11.8-17.361l.006-.005c5.5-4.692,10.7-9.125,10.7-15.134,0-6.263-5.789-11.479-11.387-16.524a67.694,67.694,0,0,1-7.65-7.638,18.3,18.3,0,0,1-2.512-4.034,10.563,10.563,0,0,1-.951-4.3V45.5a22.351,22.351,0,0,0,15.9-6.6,22.337,22.337,0,0,0,6.6-15.9h14a4.465,4.465,0,0,0,1.32,3.18A4.472,4.472,0,0,0-17915,27.5a4.505,4.505,0,0,0,4.5-4.5h8a4.465,4.465,0,0,0,1.32,3.18A4.472,4.472,0,0,0-17898,27.5a4.5,4.5,0,0,0,4.5-4.5h8a4.471,4.471,0,0,0,1.318,3.18A4.471,4.471,0,0,0-17881,27.5a4.506,4.506,0,0,0,4.5-4.5h8a4.5,4.5,0,0,0,4.5,4.5,4.5,4.5,0,0,0,4.5-4.5h8a4.465,4.465,0,0,0,1.32,3.18A4.477,4.477,0,0,0-17847,27.5a4.5,4.5,0,0,0,4.5-4.5h8a4.471,4.471,0,0,0,1.318,3.18A4.471,4.471,0,0,0-17830,27.5a4.506,4.506,0,0,0,4.5-4.5h8a4.471,4.471,0,0,0,1.318,3.18A4.472,4.472,0,0,0-17813,27.5a4.5,4.5,0,0,0,4.5-4.5h8a4.5,4.5,0,0,0,4.5,4.5,4.505,4.505,0,0,0,4.5-4.5h8a4.465,4.465,0,0,0,1.32,3.18A4.477,4.477,0,0,0-17779,27.5a4.5,4.5,0,0,0,4.5-4.5h8a4.471,4.471,0,0,0,1.318,3.18A4.471,4.471,0,0,0-17762,27.5a4.506,4.506,0,0,0,4.5-4.5h8a4.5,4.5,0,0,0,4.5,4.5,4.5,4.5,0,0,0,4.5-4.5h8a4.465,4.465,0,0,0,1.32,3.18A4.477,4.477,0,0,0-17728,27.5a4.5,4.5,0,0,0,4.5-4.5h8a4.471,4.471,0,0,0,1.318,3.18A4.471,4.471,0,0,0-17711,27.5a4.507,4.507,0,0,0,4.5-4.5h8a4.471,4.471,0,0,0,1.318,3.18A4.472,4.472,0,0,0-17694,27.5a4.505,4.505,0,0,0,4.5-4.5h8a4.5,4.5,0,0,0,4.5,4.5,4.5,4.5,0,0,0,4.5-4.5h8a4.465,4.465,0,0,0,1.32,3.18A4.477,4.477,0,0,0-17660,27.5a4.5,4.5,0,0,0,4.5-4.5h8a4.471,4.471,0,0,0,1.318,3.18A4.471,4.471,0,0,0-17643,27.5a4.506,4.506,0,0,0,4.5-4.5h8a4.5,4.5,0,0,0,4.5,4.5,4.5,4.5,0,0,0,4.5-4.5h13a22.523,22.523,0,0,0,22.5,22.5c.131,0,.273,0,.438,0V206.943a5.813,5.813,0,0,0-.437,2.559c0,7.3-6,12.413-11.793,17.358-5.5,4.694-10.7,9.127-10.7,15.142,0,6.267,5.787,11.482,11.385,16.525a67.871,67.871,0,0,1,7.645,7.636,18.29,18.29,0,0,1,2.512,4.034,10.567,10.567,0,0,1,.953,4.3,3.949,3.949,0,0,0,.438,2.116V638.5c-.15,0-.293,0-.437,0a22.557,22.557,0,0,0-22.494,22.321Zm-21.719-417.005a1,1,0,0,0-1,1,1,1,0,0,0,1,1h7a1,1,0,0,0,1-1,1,1,0,0,0-1-1Zm-14,0a1,1,0,0,0-1,1,1,1,0,0,0,1,1h7a1,1,0,0,0,1-1,1,1,0,0,0-1-1Zm-14,0a1,1,0,0,0-1,1,1,1,0,0,0,1,1h7a1,1,0,0,0,1-1,1,1,0,0,0-1-1Zm-14,0a1,1,0,0,0-1,1,1,1,0,0,0,1,1h7a1,1,0,0,0,1-1,1,1,0,0,0-1-1Zm-14,0a1,1,0,0,0-1,1,1,1,0,0,0,1,1h7a1,1,0,0,0,1-1,1,1,0,0,0-1-1Zm-14,0a1,1,0,0,0-1,1,1,1,0,0,0,1,1h7a1,1,0,0,0,1-1,1,1,0,0,0-1-1Zm-14,0a1,1,0,0,0-1,1,1,1,0,0,0,1,1h7a1,1,0,0,0,1-1,1,1,0,0,0-1-1Zm-14,0a1,1,0,0,0-1,1,1,1,0,0,0,1,1h7a1,1,0,0,0,1-1,1,1,0,0,0-1-1Zm-14,0a1,1,0,0,0-1,1,1,1,0,0,0,1,1h7a1,1,0,0,0,1-1,1,1,0,0,0-1-1Zm-14,0a1,1,0,0,0-1,1,1,1,0,0,0,1,1h7a1,1,0,0,0,1-1,1,1,0,0,0-1-1Zm-14,0a1,1,0,0,0-1,1,1,1,0,0,0,1,1h7a1,1,0,0,0,1-1,1,1,0,0,0-1-1Zm-14,0a1,1,0,0,0-1,1,1,1,0,0,0,1,1h7a1,1,0,0,0,1-1,1,1,0,0,0-1-1Zm-14,0a1,1,0,0,0-1,1,1,1,0,0,0,1,1h7a1,1,0,0,0,1-1,1,1,0,0,0-1-1Zm-14,0a1,1,0,0,0-1,1,1,1,0,0,0,1,1h7a1,1,0,0,0,1-1,1,1,0,0,0-1-1Zm-14,0a1,1,0,0,0-1,1,1,1,0,0,0,1,1h7a1,1,0,0,0,1-1,1,1,0,0,0-1-1Zm-14,0a1,1,0,0,0-1,1,1,1,0,0,0,1,1h7a1,1,0,0,0,1-1,1,1,0,0,0-1-1Zm-14,0a1,1,0,0,0-1,1,1,1,0,0,0,1,1h7a1,1,0,0,0,1-1,1,1,0,0,0-1-1Zm-14,0a1,1,0,0,0-1,1,1,1,0,0,0,1,1h7a1,1,0,0,0,1-1,1,1,0,0,0-1-1Zm-14,0a1,1,0,0,0-1,1,1,1,0,0,0,1,1h7a1,1,0,0,0,1-1,1,1,0,0,0-1-1Zm-14,0a1,1,0,0,0-1,1,1,1,0,0,0,1,1h7a1,1,0,0,0,1-1,1,1,0,0,0-1-1Zm-14,0a1,1,0,0,0-1,1,1,1,0,0,0,1,1h7a1,1,0,0,0,1-1,1,1,0,0,0-1-1Zm-14,0a1,1,0,0,0-1,1,1,1,0,0,0,1,1h7a1,1,0,0,0,1-1,1,1,0,0,0-1-1Z"
                        transform="translate(17956 -23.002)" fill="#fff" />
                </svg>
                <div class="absolute top-48 w-full" :class="{ card_content: 'card_content' }">
                    <div class="bg-[#2A2A2A] w-40 mx-auto p-2 rounded-xl">
                        <h1 class="text-center text-[white]">Pro</h1>
                    </div>
                    <div class="mx-auto">
                        <h2 class="text-center mt-6 text-6xl">$35<sub class="text-4xl">/YR</sub></h2>
                    </div>
                    <div class="mx-auto w-56 mt-32">
                        <ul class="space-y-4 list-disc font-bold ml-10">
                            <li class="font-[400]">10,000</li>
                            <li class="font-[400]">Create unlimeted Wdiges</li>
                            <li class="font-[400]">All Widges Types</li>
                            <li class="font-[400]">3rd Wdiges Intigration</li>
                            <li class="font-[400]">Advanced Targeting</li>
                            <li class="font-[400]">Widges A/B Testing</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import PaymentHeader from '../../components/layout/PaymentHeader.vue';
export default {
    components: { PaymentHeader },
    data() {
        return {
            max: 19,
            numericInput: "",
            expMax: 5,
            expirationDate: '',
            cvcInput: "",
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
        filterCvcNumeric() {
            // Replace non-numeric characters with an empty string
            this.cvcInput = this.cvcInput.replace(/[^0-9]/g, "");
        }
    }

};
</script>

<style scoped>
.right_div {
    position: absolute;
    width: 40%;
    height: 100vh;
    margin-top: -10rem;
    margin-left: 62rem;
}

@media (max-width: 1366px) {
    body {
        overflow-y: hidden;
        overflow-x: hidden;
    }

    .right_div {
        margin-left: 50rem;
        height: 60rem;
    }

    .package_card {
        margin-left: 0rem;
        margin-top: -1rem;
    }

    .card_content {
        margin-top: 2rem;
        margin-left: 0rem;
    }
}

@media (max-width: 1280px) {
    .right_div {
        margin-left: 48rem;
    }
}

@media (max-width: 1024px) {
    .main_container {
        display: flex;
        flex-direction: column;
    }

    .left_div {
        margin-top: 50rem;
    }

    .right_div {
        margin-left: -7rem;
        width: 59rem;
    }
}

@media (max-width: 470px) {
    .package_card {
        margin-left: -18rem;
    }

    .card_content {
        margin-left: 8rem;
    }

    .pay_cards {
        margin-top: -6rem;
        margin-left: 4rem;
    }
}

@media (max-width: 414px) {
    .package_card {
        margin-left: -22rem;
    }

    .card_content {
        margin-left: 8rem;
    }

    .pay_cards {
        margin-top: -2.5rem;
        margin-left: 5.5rem;
        height: 21px;
    }
}

@media (max-width: 390px) {
    .package_card {
        margin-left: -25rem;
    }

    .card_content {
        margin-left: 8rem;
    }

    .pay_cards {
        margin-top: -2.3rem;
        margin-left: 5.5rem;
        height: 16px;
    }
}

@media (max-width: 375px) {
    .package_card {
        margin-left: -23.5rem;
        margin-top: -8rem;
    }

    .card_content {
        margin-top: -7rem;
        margin-left: 9rem;
    }

    .pay_cards {
        margin-top: -2.3rem;
        margin-left: 5.5rem;
        height: 16px;
    }
}
</style>