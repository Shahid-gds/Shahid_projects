<template>
    <section>
   
      <div class="container mx-auto mt-40 pb-10">
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
       <div class="mt-20 flex 2x:ml-64 2xl:mr-64 w-full mx-64 xl:mx-44 lg:mx-4 md:mx-0" :class="{cards : 'cards'}">
        
        <!-- Starter Monthly Card -->
        <div class="bg-[#FFFFFF] drop-shadow-xl	filter: drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08)) rounded-3xl w-80 h-1/2 p-10 mt-10" v-for="plan in plans" v-if="!showPricing" :class="{starter : 'starter'}">
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
          <router-link :to="{ name: 'CardCheckout'}">
          <button class="bg-[#3C58A8] text-[white] p-3 rounded-full ml-11 mt-16 px-10" :class="{starter_button : 'starter_button'}">Get Started</button>
        </router-link>
        </div>
        <!-- Starter Yearly Card -->
        <div class="bg-[#FFFFFF] drop-shadow-xl	filter: drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08)) rounded-3xl w-80 h-1/2 p-10 mt-10" v-for="plan in yearlyplans" v-if="showPricing" :class="{starter : 'starter'}">
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
          <router-link :to="{ name: 'CardCheckout'}">
          <button class="bg-[#3C58A8] text-[white] p-3 rounded-full ml-11 mt-16 px-10" :class="{starter_button : 'starter_button'}">Get Started</button>
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
        <router-link :to="{ name: 'CardCheckout'}">
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
        <router-link :to="{ name: 'CardCheckout'}">
          <button class="bg-[white] text-[#4B64AF] p-4 rounded-full ml-16 mt-40 px-12 " :class="{pro_button : 'pro_button'}">Get Started</button>
        </router-link>
        </div>
           <!-- Enterprise Card -->
           <div class="bg-[#FFFFFF] drop-shadow-xl	filter: drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08)) rounded-3xl w-80 h-1/2 p-10 mt-10" v-for="plan in enterpriseplans" :class="{enterprise : 'enterprice'}">
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
            <router-link :to="{ name: 'CardCheckout'}">
              <button class="bg-[#3C58A8] text-[white] p-3 rounded-full ml-11 mt-16 px-10" :class="{enterprise_button : 'enterprise_button'}">Get Started</button>
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
  @media (max-width: 1366px) {
    
    }
@media (max-width: 990px) {
.starter{
  margin-top: 0rem;
  height: 35rem;
}
  .most_papular{
  margin-left: 5rem;
  height: 35rem;
}
  .enterprise{
  position: absolute;
  height: 35rem;
  margin-top: 40rem;
  margin-left: 12rem;
}
.starter_button {
 margin-top: 7rem;
}
.pro_button{
  margin-top: 8rem;
}
.enterprise_button{
  margin-top: 7rem;
}
}
@media (max-width: 770px) {
  .starter{
    margin-top: 0rem;
    margin-left: -17rem;
    height: 35rem;
  }
 li {
  font-size: 14px;
 }
    .most_papular{
    margin-left: 4rem;
    height: 35rem;
  }
    .enterprise{
    position: absolute;
    height: 35rem;
    margin-top: 40rem;
    margin-left: -7rem;
  }
  .starter_button {
   margin-top: 10rem;
  }
  .pro_button{
    margin-top: 8rem;
    margin-left: 1.5rem;
  }
  .enterprise_button{
    margin-top: 9rem;

}
}
@media (max-width: 470px) {
  .toggleButton {
    margin-left: 5rem;
  }
  .cards{
    display: flex;
    flex-direction: column;
  }
 li {
  font-size: 14px;
 }
 .starter {
  margin-left: -11rem;
 }
 .most_papular {
  margin-left: -13rem;
  margin-top: 3rem;
 }
 .enterprise{
  margin-left: -11rem;
  margin-top: 75rem;
 }
 .pro_button{
  margin-left: 4rem;
 }
}
@media (max-width: 414px) {
  .toggleButton {
    margin-left: 3rem;
  }
  .cards{
    display: flex;
    flex-direction: column;
  }
 li {
  font-size: 14px;
 }
 .starter {
  margin-left: -13rem;
 }
 .most_papular {
  margin-left: -15rem;
  margin-top: 3rem;
 }
 .enterprise{
  margin-left: -13rem;
  margin-top: 75rem;
 }
 .pro_button{
  margin-left: 4rem;
 }
}
@media (max-width: 390px) {
 li {
  font-size: 14px;
 }
 .starter {
  margin-left: -14rem;
 }
 .most_papular {
  width: 22rem;
  margin-left: -15rem;
  margin-top: 3rem;
 }
 .enterprise{
  margin-left: -14rem;
  margin-top: 75rem;
 }
 .pro_button{
  margin-left: 4rem;
 }
}
  </style>