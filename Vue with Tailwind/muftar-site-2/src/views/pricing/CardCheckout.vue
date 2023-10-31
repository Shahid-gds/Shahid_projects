<template>
    <div class="h-screen flex flex-col md:flex-row">
      <div class="w-full md:hidden bg-blue-800 p-8 block">
        <div class="bg-white p-8 rounded-lg shadow-lg">
            <div class="bg-[#2A2A2A] w-40 mx-auto p-2 rounded-xl">
                        <h1 class="text-center text-[white]">Pro</h1>
                    </div>
                    <div class="mx-auto">
                        <h2 class="text-center mt-6 text-6xl">{{ $displayPrice(package_plan.total) }} <sub class="text-4xl">/ {{package_plan.pay_period }}</sub></h2>
                        <h2 class="text-center mt-6 text-3xl">{{ user_count }} users</h2>
                    </div>
                    <div class="mx-auto w-56 mt-32">
                        <ul class="space-y-4 list-disc font-bold ml-10">
                            <li class="font-[400]">Digitalized Rate Conf and BOLS</li>
                            <li class="font-[400]">Create unlimited widgets</li>
                            <li class="font-[400]">Dispatch Loads</li>
                            <li class="font-[400]">Mobile Driver App</li>
                            <li class="font-[400]">Advanced Load tracking</li>
                            <li class="font-[400]">and More!</li>
                        </ul>
                    </div>
        </div>
      </div>
        <!-- Left side (Card input) -->
        <div class="w-full md:w-1/2 p-8">
          <div class="pt-2">
              <img src="@/assets/logo2.svg" class="w-5/12 md:w-1/5" alt="">
          </div>

            <h1 class="text-2xl my-2">Payment Detail</h1>
            <p class="font-[400]">Complete your purchase by providing your payment details</p>

            <form >
                <!-- <button class="bg-gray-200 w-full p-2 rounded-lg text-black" 
                @click.prevent="setDefault()">SET DEFAULT</button> -->
            <div class="mt-10 md:ml-5 md:flex md:space-x-8">
                <div>
                    <div><label for="">First Name</label></div>
                    <div><input class="border-2 p-2 px-3 rounded-lg md:w-80 w-full" type="text" placeholder="First Name" v-model="fname"></div>
                </div>
                <div>
                    <div><label for="">Last Name</label></div>
                    <div><input class="border-2 p-2 px-3 rounded-lg md:w-80 w-full" type="text" placeholder="Last Name" v-model="lname"></div>
                </div>
            </div>
            <div class="mt-10 md:ml-5 md:flex md:space-x-8">
                <div class="">
                    <div class=""><label for="">Email Address (max char. 20)</label></div>
                    <div><input class="border-2 p-2 px-3 rounded-lg md:w-80 w-full" type="email"  placeholder="Email" maxlength="20" v-model="email"></div>
                </div>
                <div class="">
                    <div class=""><label for="">Phone</label></div>
                    <div><input class="border-2 p-2 px-3 rounded-lg md:w-80 w-full" type="phone"  placeholder="Phone" v-model="phone"></div>
                </div>
            </div>
            <div class="flex">
                <div
                    class="bg-[#FFFFFF] border-2 border-[#3C58A8] p-3.5 ml-5 mt-10 w-32 h-20 rounded-xl drop-shadow-xl	filter: drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08))">
                    <img src="../../assets/icons/pricing/card.svg" alt="">
                    <h1 class="text-[#3C58A8]">Card</h1>
                </div>
                <div
                    class="bg-[#FFFFFF] border-2 p-3.5 ml-5 mt-10 w-32 h-20 rounded-lg drop-shadow-xl	filter: drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08))">
                    <img src="../../assets/icons/pricing/bank.svg" alt="">
                    <h1 class="text-[#292D32] leading-4 mt-1">Bank Account</h1>
                </div>
            </div>
            <div class="ml-5 mt-10">
                <div>
                    <!-- <div>
                        
                        <label for="">Card Number</label>

                        <div class="relative">
                            <input class="border-2 w-full rounded-lg p-3 relative" type="text" placeholder="1234 1234 1234 1234">
                            <img class="absolute right-3 bottom-5 w-32" src="../../assets/icons/pricing/cards.svg" alt=""
                                :class="{ pay_cards: 'pay_cards' }">
                        </div>

                    </div> -->
                    <!-- <div class="mt-10 md:flex md:space-x-8">
                        <div>
                            <div><label for="">Expiration</label></div>
                            <div><input class="border-2 p-2 px-3 rounded-lg md:w-80 w-full"  type="text" placeholder="MM/YY" :maxlength="expMax">
                            </div>
                        </div>
                        <div class="">
                            <div><label for="">CVC</label></div>
                            <div><input class="border-2 p-2 px-3 rounded-lg md:w-80 w-full" type="text" maxlength="3" placeholder="CVC">
                            </div>
                        </div>
                    </div> -->

                    <div class="relative input-group flex w-full border-transparent border-b-2">
                        <label for="card_number"> Card Details </label>
                        <div id="card-number"
                            class="flex-1 h-14 bg-white rounded-t-lg rounded-b-none shadow-sm outline-none border-0 p-4 w-full pt-7 px-4 pb-2"
                            maxlength="19"
                            >
                        </div>
                    </div>
                    
                    <div class="input-group flex relative w-1/2">
                        <label for="card_expiry" >
                        MM/YY
                        </label>
                        <div id="card-exp" class="h-14 flex-1 bg-white rounded-t-none rounded-bl-lg rounded-br-none shadow-sm outline-none border-0 w-full pt-7 px-4 pb-2" maxlength="5" ></div>
                    </div>
                    <div class="input-group flex relative w-1/2">
                        <label for="card-cvc"> CVC  </label>
                        <div id="card-cvc" class="h-14 flex-1 bg-white rounded-t-none rounded-br-lg rounded-bl-none shadow-sm outline-none border-0 w-full pt-7 px-4 pb-2" maxlength="5" >
                    </div>
                    </div>
                    
                    <!-- <h3 class="bg-yellow-200 rounded p-3 text-yellow-700">EVERYTHING BELOW DOESN'T MATTER FOR TESTING</h3> -->
                    <hr />
                    <div class="mt-10 md:flex md:space-x-8">
                        <div>
                            <div><label for="">Cardholder name</label></div>
                            <div><input class="border-2 p-2 px-3 rounded-lg md:w-80 w-full" type="text"
                                    placeholder="Cardholder name">
                            </div>
                        </div>
                        
                    </div>
                    <div class="mt-10 md:flex md:space-x-8">
                        <!-- <div>
                            <div><label for="">Billing address</label></div>
                            <div>
                                <Select class="border-2 p-2 px-3 rounded-lg md:w-80 w-full text-[#3C58A8]">
                                    <Option>USA</Option>
                                </Select>
                            </div>
                        </div> -->
                        <div class="">
                            <div><label for="">Postal Code</label></div>
                            <div><input class="border-2 p-2 px-3 rounded-lg md:w-80 w-full" type="text"
                                    placeholder="Postal Code">
                            </div>
                        </div>
                    </div>
                    <div class="mt-10 md:flex md:space-x-8">
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
                <button v-if="processing == false" class="bg-blue-800 w-full p-2 rounded-lg text-white" @click.prevent="subscribe()">Pay {{ $displayPrice(package_plan.total) }} / month</button>
                <div v-else-if="processing == true" class="text-gray-400 italic">Please wait...</div>
            </div>
            </form>
        </div>

        <!-- Right side (Plan details) -->
        <div class="w-full md:w-1/2 hidden bg-blue-800 p-8 md:block md:fixed right-0 h-screen">
        <div class="bg-white p-8 rounded-lg shadow-lg">
            <div class="bg-[#2A2A2A] w-40 mx-auto p-2 rounded-xl">
                        <h1 class="text-center text-[white]">Pro</h1>
                    </div>
                    <div class="mx-auto">
                        <h2 class="text-center mt-6 text-6xl">{{ $displayPrice(package_plan.total) }}<sub class="text-4xl">/ {{package_plan.pay_period }}</sub></h2>
                        <h2 class="text-center mt-6 text-3xl">{{ user_count }} users</h2>
                    </div>
                    <div class="mx-auto w-56 mt-32">
                      <ul class="space-y-4 list-disc font-bold ml-10">
                            <li class="font-[400]">Digitalized Rate Conf and BOLS</li>
                            <li class="font-[400]">Create unlimited widgets</li>
                            <li class="font-[400]">Dispatch Loads</li>
                            <li class="font-[400]">Mobile Driver App</li>
                            <li class="font-[400]">Advanced Load tracking</li>
                            <li class="font-[400]">and More!</li>
                        </ul>
                    </div>
        </div>
        </div>
    </div>
</template>


<script setup>
import { ref, watch, onMounted, computed} from 'vue';
import axios from 'axios'
import { loadStripe } from '@stripe/stripe-js';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const router = useRouter();
const store = useStore();

const max = 19;
const expMax = 5;
const package_plan = computed(() => store.state.package_plan)
const stripePubKey = 'pk_test_51JtGRHA6aDal6NGwWG9GjcNbge5CsZmvZBxzX6owPf022nfbQ0iXRwZnIwDx2AALbtfHYl8DwAgvTCA6rmGI32vV005rNpnc4e'//store.state.checkout.stripePubKey
let stripe = loadStripe(stripePubKey);

const processing = ref(false);

const cardNumber = ref();
const cardExpiry = ref();
const cardCvc = ref();
const cardElement = ref()

//person data
const fname = ref('');
const lname = ref('');
const address = ref('');
const email = ref('');
const phone = ref('');
const user_count = ref(10);

const setDefault = async () => {
  try {
    const response = await axios.get('https://muftardigital.pythonanywhere.com/fake/person');
    const person = response.data.person;

    fname.value = person.fname;
    lname.value = person.lname;
    address.value = person.address;
    email.value = person.email;
    phone.value = person.phone;

    // cardNumber.value = '4242424242424242'
    // cardExpiry.value = '0224'
    // cardCvc.value = '424'
  } catch (error) {
    console.error('Error:', error);
  }
}

const subscribe = async () => {
    processing.value = true
    console.log(cardNumber.value)
    const { token, error } = await stripe.createToken(cardNumber.value, cardExpiry.value, cardCvc.value)
    if (error) {
    //   cardError.value = error.message
      console.log(error)
    }
    else {
        const config = { headers: { } }
        let payload = {
            email: email.value,
            name: `${fname.value} ${lname.value}`,
            phone: phone.value,
            token:token.id,
            user_count: package_plan.value.paid_users,
            package_plan: package_plan.value
        }
        console.log(payload)
      try {
        const res = await axios.post('https://muftardigital.pythonanywhere.com/site/payments/subscribe', payload, config);

        if(res.data.status == 'success'){
            router.push({ name: 'PaymentConfirmation', params:{conf_code:res.data.conf_code}});
        }
        console.log('Response:', res.data);
      } catch (error) {
        console.error('Error:', error);
      }
      finally{
        processing.value = false
      }
        }
    }

  // for card pay CUSTOM INPUTS
  const createCardElement = async () => {
    console.log(stripe)
    cardElement.value = stripe.elements({ locale: window.__exampleLocale });

      const inputs = document.querySelectorAll('.input');
      Array.prototype.forEach.call(inputs, function(input) {
        input.addEventListener('focus', function() {
          input.classList.add('focused');
        });
        input.addEventListener('blur', function() {
          input.classList.remove('focused');
        });
        input.addEventListener('keyup', function() {
          if (input.value.length === 0) {
            input.classList.add('empty');
          } else {
            input.classList.remove('empty');
          }
        });
      });

      const elementStyles = {
        base: {
          color: '#090909',
          fontWeight: 600,
          fontSize: '16px',
          paddingLeft:'0px',
          fontFamily:'revert',
          fontSmoothing: 'antialiased',
          '::placeholder': {
            color: '#CFD7DF',
          },
          ':-webkit-autofill': {
            color: '#e39f48',
          },
        },
        invalid: {
          color: '#E25950',
          '::placeholder': {
            color: '#FFCCA5',
          },
        },
      };

      const elementClasses = {
        focus: 'focused',
        empty: 'empty',
        invalid: 'invalid',
        allBlue: 'allBlue',
      };

      cardNumber.value = cardElement.value.create('cardNumber', {
        style: elementStyles,
        classes: elementClasses,
      });
      cardNumber.value.mount('#card-number');

      cardExpiry.value = cardElement.value.create('cardExpiry', {
        style: elementStyles,
        classes: elementClasses,
      });
      cardExpiry.value.mount('#card-exp');

      cardCvc.value = cardElement.value.create('cardCvc', {
        style: elementStyles,
        classes: elementClasses,
      });
      cardCvc.value.mount('#card-cvc');
  }

  onMounted(async () => {
  stripe = await loadStripe(stripePubKey);
  if (stripe) {
    createCardElement();
  } else {
    console.error('Failed to initialize Stripe');
  }
});

</script>

<style scoped>
body {
    overflow-y: hidden;
    overflow-x: hidden;
}

@media (min-width: 1024px) {

    .pay_cards {
        margin-top: -6rem;
        margin-left: 4rem;
    }
}


</style>
