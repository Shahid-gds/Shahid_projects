<template>
  <h1 class="font-bold text-xl">Broker</h1>
  <div class="flex border-gray-400 border-2 p-2 my-4">

    <div class="flex w-2/3">
      <div class="w-1/5">
        <img :src="broker.logo" class="w-7/12 mx-auto"/>
      </div>
      <div>
        <p class="text-blue-600">{{broker.name}}</p>
        <p class="text-blue-600">{{broker.address.line1}} {{broker.address.line2}}</p>
        <p class="text-blue-600">{{broker.address.city}}, {{broker.address.state}}, {{broker.address.zip}}</p>
        <p>
          MC:<span class="text-blue-600">{{broker.mc_number}}</span>
           P:<span class="text-blue-600">{{broker.phone}}</span>
           F:<span class="text-blue-600">{{broker.fax}}</span>
           </p>
      </div>
    </div>

    <div class="w-1/3">
      <div class="p-2 border border-black rounded-lg">
        <p class="font-bold">Load Number</p>
        <p class="text-blue-600">{{load_data.confirmation_number}}</p>
        <p  class="text-blue-600">
          {{ load_data.created }}
        </p>
        <!-- <p  class="text-blue-600">
          {{mixins.methods.localDate(load_data.created)}}
        </p> -->
      </div>
    </div>
  </div>
</template>
<script>

import mixins from '@/mixins'
export default{
  name: 'BolBroker',
  props: ['broker', 'load_data'],
  data(){
    return{
      mixins:mixins,
    }
  }
}
</script>
