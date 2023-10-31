<template>
    <section>
   
      <div class="container mx-auto mt-40 pb-10" :class="{ main_box : 'main_box'}">
        <div class="text-center">
          <h1 class="text-3xl text-[#3C58A8]">Choose your Plan</h1>
          <p class="font-[400] mt-2">14 days unlimited free trial. No contract or credit card required</p>
        </div>
        <div class="flex mt-8 items-center" >
       
            <label class="border-2 border-[#E1E1E1] h-12 w-52 rounded-3xl relative cursor-pointer overflow-hidden" :class="{toggleButton : 'toggleButton'}">
            <input type="checkbox" id="checkbox" v-model="showPricing">
            <span class="left">
              <p class="p-2.5 px-6 text-[white]">Monthly</p>
            </span>
            <span class="right">
              <p class="p-2.5 px-8 text-[white]">Yearly</p>
            </span>
          </label>
          <div class="ml-5 uppercase text-xl text-[#3C58A8]">20% off</div>
          </div>
          <!-- Pricing Cards -->
       <div class="mt-20 h-full xl:mx-64 md:flex" :class="{price_boxes : 'price_boxes'}">
        
        <!-- Starter Monthly Card -->
        <div class="bg-[#FFFFFF] drop-shadow-xl	filter: drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08)) rounded-3xl w-80 h-1/2 p-10 mt-10" v-for="plan in plans" v-if="!showPricing">
          <div class="flex space-x-3 border-b-2 py-6">
            <div class="space-x-1 flex ml-12">
              <span class="text-[#3C58A8] text-3xl font-[400]">{{ plan.pricing[currenFrequency].sign }} </span>
            <span class="text-5xl font-[400]">{{ plan.pricing[currenFrequency].price }} </span>
            </div>
            <div class="flex flex-col">
            <span class="text-2xl uppercase text-[#3C58A8]">{{plan.name}}</span>
            <span class="font-[400] text-sm">{{ plan.pricing[currenFrequency].label }} </span>
            </div>
            
          </div>
          <ul class="mt-8 space-y-4">
            <li v-for="list in plan.listing[currenFrequency]">
              <span class="p-6 font-[400]">
              {{ list }}
            </span>
            </li>
          </ul>
          <router-link :to="{ name: 'PricingDetail'}">
          <button class="bg-[#3C58A8] text-[white] p-3 rounded-full ml-11 mt-16 px-10" :class="{button : 'button'}">Get Started</button>
        </router-link>
        </div>
        <!-- Starter Yearly Card -->
        <div class="bg-[#FFFFFF] drop-shadow-xl	filter: drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08)) rounded-3xl w-80 h-1/2 p-10 mt-10" v-for="plan in yearlyplans" v-if="showPricing">
          <div class="flex space-x-3 border-b-2 py-6">
            <div class="space-x-1 flex ml-12">
            <span class="text-[#3C58A8] text-3xl font-[400]">{{ plan.yearlypricing[yearlyFrequency].sign }} </span>
            <span class="text-5xl font-[400]">{{ plan.yearlypricing[yearlyFrequency].price }} </span>
            </div>
            <div class="flex flex-col">
            <span class="text-2xl uppercase text-[#3C58A8]">{{plan.name}}</span>
            <span class="font-[400] text-sm">{{ plan.yearlypricing[yearlyFrequency].label }} </span>
            </div>
            
          </div>
          <ul class="mt-8 space-y-4">
            <li v-for="list in plan.listing[yearlyFrequency]">
              <span class="p-6 font-[400]">
              {{ list }}
            </span>
            </li>
          </ul>
          <router-link :to="{ name: 'PricingDetail'}">
          <button class="bg-[#3C58A8] text-[white] p-3 rounded-full ml-11 mt-16 px-10" :class="{button : 'button'}">Get Started</button>
        </router-link>
        </div>
        <!-- Pro Monthly Card -->
        <div class="bg-[#4B64AF] drop-shadow-xl	filter: drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08)) rounded-3xl w-96 h-3/5 p-10" v-for="plan in proplans" v-if="showPricing" :class="{most_papular : 'most_papular'}">
          <div class=" bg-[#293E7B] p-3 px-10 -mt-10 -ml-10 rounded-tl-3xl rounded-br-3xl w-32">
            <h1 class="text-[white]">Papolar</h1>
          </div>
          <div class="flex space-x-3 border-b-2 py-6">
            <div class="space-x-1 flex ml-20">
              <span class="text-[#BECDF9] text-3xl font-[400]">{{ plan.pricing[currenFrequency].sign }} </span>
            <span class="text-5xl font-[400] text-[white]">{{ plan.pricing[currenFrequency].price }} </span>
            </div>
            <div class="flex flex-col">
            <span class="text-2xl uppercase text-[white]">{{plan.name}}</span>
            <span class="text-sm text-[#BECDF9]">{{ plan.pricing[currenFrequency].label }} </span>
            </div>
            
          </div>
          <div class="list">
          <ul class="mt-8 space-y-4">
            <li v-for="list in plan.listing[currenFrequency]">
              <span class="p-6 font-[400] text-[white]">
              {{ list }}
            </span>
            </li>
          </ul>
        </div>
        <router-link :to="{ name: 'PricingDetail'}">
          <button class="bg-[white] text-[#4B64AF] p-4 rounded-full ml-16 mt-40 px-12" :class="{pro_button : 'pro_button'}">Get Started</button>
        </router-link>
        </div>
        <!-- Pro Yearly Card -->
        <div class="bg-[#4B64AF] drop-shadow-xl	filter: drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08)) rounded-3xl w-96 h-3/5 p-10" v-for="plan in yearlyproplans" v-if="!showPricing" :class="{most_papular : 'most_papular'}">
          <div class=" bg-[#293E7B] p-3 px-10 -mt-10 -ml-10 rounded-tl-3xl rounded-br-3xl w-32">
            <h1 class="text-[white]">Papolar</h1>
          </div>
          <div class="flex space-x-3 border-b-2 py-6">
            <div class="space-x-1 flex ml-20">
              <span class="text-[#BECDF9] text-3xl font-[400]">{{ plan.pricing[yearlyFrequency].sign }} </span>
            <span class="text-5xl font-[400] text-[white]">{{ plan.pricing[yearlyFrequency].price }} </span>
            </div>
            <div class="flex flex-col">
            <span class="text-2xl uppercase text-[white]">{{plan.name}}</span>
            <span class="text-sm text-[#BECDF9]">{{ plan.pricing[yearlyFrequency].label }} </span>
            </div>
            
          </div>
          <div class="list">
          <ul class="mt-8 space-y-4">
            <li v-for="list in plan.listing[yearlyFrequency]">
              <span class="p-6 font-[400] text-[white]">
              {{ list }}
            </span>
            </li>
          </ul>
        </div>
        <router-link :to="{ name: 'PricingDetail'}">
          <button class="bg-[white] text-[#4B64AF] p-4 rounded-full ml-16 mt-40 px-12 " :class="{pro_button : 'pro_button'}">Get Started</button>
        </router-link>
        </div>
           <!-- Enterprise Card -->
           <div class="bg-[#FFFFFF] drop-shadow-xl	filter: drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08)) rounded-3xl w-80 h-1/2 p-10 mt-10" v-for="plan in enterpriseplans">
            <div class="flex space-x-3 border-b-2 py-6">
              <div class="flex flex-col">
              <span class="text-2xl uppercase text-[#3C58A8] absolute ml-10 -mt-4">{{plan.name}}</span>
              <span class="font-[400] text-6xl">{{ plan.pricing[currenFrequency].heading }} </span>
              </div>
              
            </div>
            <ul class="mt-8 space-y-4">
              <li v-for="list in plan.listing[currenFrequency]">
                <span class="p-6 font-[400]">
                {{ list }}
              </span>
              </li>
            </ul>
            <router-link :to="{ name: 'PricingDetail'}">
              <button class="bg-[#3C58A8] text-[white] p-3 rounded-full ml-11 mt-16 px-10" :class="{button : 'button'}">Get Started</button>
            </router-link>
          </div>
       </div>
      </div>
    </section>
  </template>
  <script>
  
  export default {
    data: function () {
      return {
        showPricing: false,
        currenFrequency: 'monthly',
        plans: [
          {
            name: 'Starter',
            pricing: {
              monthly: { sign: '$', price: '54', label: '/ MO' },
            },
            listing: {
              monthly: [
                '10,000 Visitors',
                'Create unlimeted Wdiges',
                'All Widges Types',
                '3rd Wdiges Intigration',
                'Advanced Targeting',
                'Widges A/B Testing'
              ],
            }
          },
        ],
        yearlyFrequency: 'yearly',
        yearlyplans: [
          {
            name: 'Starter',
            yearlypricing: {
              yearly: { sign: '$', price: '46', label: '/ YR' },
            },
            listing: {
              yearly: [
                '10,000',
                'Create unlimeted Wdiges',
                'All Widges Types',
                '3rd Wdiges Intigration',
                'Advanced Targeting',
                'Widges A/B Testing'
              ],
            }
  
          },
        ],
        yearlyFrequency: 'yearly',
        yearlyproplans: [
          {
            name: 'Pro',
            pricing: {
              yearly: { sign: '$', price: '46', label: '/ YR' },
              secondyearly: { price: '$39', label: '/ YR' },
              thirdyearly: { price: '$49', label: '/ YR' },
              fourthyearly: { price: '$59', label: '/ YR' },
              fifthyearly: { price: '$69', label: '/ YR' },
            },
            listing: {
              yearly: [
                '10,000 ',
                'Create unlimeted Wdiges',
                'All Widges Types',
                '3rd Wdiges Intigration',
                'Advanced Targeting',
                'Widges A/B Testing'
              ],
  
  
            }
  
          },
        ],
        proplans: [
          {
            name: 'Pro',
            pricing: {
              monthly: { sign: '$', price: '35', label: '/ MO' },
              secondmonthly: { price: '$30', label: '/ MO' },
              thirdmonthly: { price: '$40', label: '/ MO' },
              fourthmonthly: { price: '$60', label: '/ MO' },
              fifthmonthly: { price: '$70', label: '/ MO' },
              yearly: { price: '$50', label: '/ YR' },
            },
            listing: {
              monthly: [
                '20,000 Visitors',
                'Create unlimeted Wdiges',
                'All Widges Types',
                '3rd Wdiges Intigration',
                'Advanced Targeting',
                'Widges A/B Testing'
              ],
            }
  
          },
        ],
        enterpriseplans: [
          {
            name: 'Enterprise',
            pricing: {
              monthly: { heading: 'Custom' },
              yearly: { price: '$50', label: '/ YR' },
            },
            listing: {
              monthly: [
                '30,000 Vistors',
                'Create unlimeted Wdiges',
                'All Widges Types',
                '3rd Wdiges Intigration',
                'Advanced Targeting',
                'Widges A/B Testing'
              ],
            }
  
          },
        ],
      };
    },
  }
  </script>
  
  <style scoped>
  .toggleButton {
    margin-left: 40%;
  }
  #checkbox {
    visibility: hidden;
  }
  
  #checkbox:checked~.left {
    transform: translateY(-50%) scale(0);
  }
  
  #checkbox:checked~.right {
    transform: translateY(-50%) scale(1);
    z-index: 10;
  }
  
  .left,
  .right {
    height: 2.8rem;
    width: 7rem;
    display: inline-block;
    position: absolute;
    border-radius: 3rem;
    top: 50%;
  }
  
  .left {
    background: #4B64AF;
    left: 0%;
    z-index: 10;
    transform: translateY(-50%) scale(1);
    transition: all 200ms cubic-bezier(0.8, 0.7, 0.72, 0.78);
  }
  
  .right {
    background: #4B64AF;
    right: 0%;
    transform: translateY(-50%) scale(0);
    transition: all 200ms cubic-bezier(0.8, 0.7, 0.72, 0.78);
  }
  ul {
    list-style: none;
  }
  
  ul li:before {
    content: '✓';
    color: #3C58A8;
  }
  .list ul li:before {
    content: '✓';
    color:#BECDF9;
  }
  @media (max-width: 1600px) {
    .main_box{
        height: 10vh;
    }
    .button{
        margin-top: 1rem;
    }
    .pro_button{
        margin-top: 6rem;
    }
  }
  
  @media (max-width: 1366px) {
    .main_box{
        height: 15vh;
    }
    .price_boxes{
        height: 105vh;
        width: 100rem;
        margin-left: 8rem;
    }
    .button{
        margin-top: 3rem;
    }
    .pro_button{
        margin-top: 8rem;
    }
  }
  
  @media (max-width: 1280px) {  .main_box{
    height: 15vh;
}
.price_boxes{
    height: 118vh;
    width: 100rem;
    margin-left: 8rem;
}
.button{
    margin-top: 2.8rem;
}
.pro_button{
    margin-top: 8rem;
}
}
  
  @media (max-width: 1146px) {
    .price_boxes{
        height: 105vh;
        width: 100rem;
        margin-left: 0rem;
    }
    .button{
        margin-top: 3rem;
    }
    .pro_button{
        margin-top: 8rem;
    }
    }
  
  @media (max-width: 1024px) {
    .price_boxes{
        height: 105vh;
        width: 100rem;
        margin-left: 0rem;
    }
    .button{
        margin-top: 3rem;
    }
    .pro_button{
        margin-top: 8rem;
    }
    }
  
  @media (max-width: 990px) {
    .main_box{
        height: 15vh;
    }
    .price_boxes{
        height: 105vh;
        width: 100rem;
        margin-left: -8rem;
    }
    .button{
        margin-top: 3rem;
    }
    .pro_button{
        margin-top: 8rem;
    }
    }
  
  @media (max-width: 770px) {
    .main_box{
        height: 15vh;
    }
    .price_boxes{
        height: 105vh;
        width: 100rem;
        margin-left: -8rem;
    }
    .button{
        margin-top: 3rem;
    }
    .pro_button{
        margin-top: 8rem;
    }
  
    .most_papular {
      margin-top: 0rem;
      margin-left: 2rem;
    }
  
    .enter_price {
      margin-top: 2rem;
      margin-left: 26rem;
    }
  }
  
  @media (max-width: 450px) {
    .main_box {
      height: 135vh;
    }
  
    .heading p {
      width: 22rem;
      margin-left: 3rem;
    }
  
    .button {
      margin-left: 4rem;
    }
  
    .progress {
      margin-left: 2rem;
    }
  
    .progress_bar {
      width: 24rem;
    }
  
    .price_boxes {
      margin-left: 5rem;
      display: flex;
      flex-direction: column;
      margin-top: 4rem;
    }
  
    .stater {
      margin-top: -38rem;
    }
  
    .most_papular {
      margin-top: 2rem;
      margin-left: 0rem;
    }
  
    .enter_price {
      margin-top: 2rem;
      margin-left: 0rem;
    }
  }
  
  @media (max-width:414px) {
  
    .main_box {
      height: 160vh;
    }
  
    .heading p {
      margin-left: 2rem;
    }
  
    .button {
      margin-left: 3rem;
    }
  
    .progress_bar {
      width: 22rem;
    }
    .first_dot {
      margin: -0.8rem 3rem;
  }
  .first_bar, .firstyear_bar{
    width: 3rem;
  }
  .hide {
    margin-left: 2rem;
  }
  .second_dot {
    margin: -0.8rem 7rem;
  }
  .second_bar, .secondyear_bar {
    width: 3rem;
    margin-left: 4rem;
  }
  .second_hide {
    margin-left: 6rem;
  }
  .third_dot {
    margin: -0.8rem 11rem;
  }
  .third_bar, .thirdyear_bar {
    width: 3rem;
    margin-left: 8rem;
  }
  .third_hide {
    margin-left: 10rem;
  }
  .fourth_dot {
    margin: -0.8rem 15rem;
  }
  .fourth_bar, .fourthyear_bar {
    width: 3rem;
    margin-left: 12rem;
  }
  .fourth_hide {
  
    margin-left: 14rem;
  
  }
  .fifth_dot {
    margin: -0.8rem 19rem;
  }
  .fifth_bar, .fifthyear_bar {
    width: 3rem;
    margin-left: 16rem;
  }
  .fifth_hide {
    margin-left: 18rem;
  }
    .price_boxes {
      margin-left: 4rem;
    }
  
  }
  
  @media only screen and (device-width : 412px) and (device-height : 915px) {
    .main_box {
      height: 140vh;
    }
  }
  
  @media only screen and (device-width : 412px) and (device-height : 914px) {
    .main_box {
      height: 140vh;
    }
  }
  @media only screen and (device-width : 414px) and (device-height : 736px) {
    .main_box {
      height: 165vh;
    }
  }
  
  @media only screen and (device-width : 390px) and (device-height : 844px) {
    .main_box {
      height: 145vh;
    }
  }
  
  @media (max-width:390px) {
    .heading p {
      width: 22rem;
      margin-left: 1rem;
    }
  
    .button {
      margin-left: 2rem;
    }
  
    .progress {
      margin-left: 1rem;
    }
  
    .progress_bar {
      width: 22rem;
    }
  
    .price_boxes {
      margin-left: 3rem;
    }
  }
  
  @media only screen and (device-width : 375px) and (device-height : 812px) {
    .main_box {
      height: 160vh;
    }
  
    .heading p {
      width: 22rem;
      margin-left: 0.5rem;
    }
  
    .button {
  
      margin-left: 1rem;
    }
  
    .progress {
      margin-left: 1rem;
    }
  
    .progress_bar {
      width: 22rem;
    }
  
    .price_boxes {
      margin-left: 3rem;
    }
  }
  </style>