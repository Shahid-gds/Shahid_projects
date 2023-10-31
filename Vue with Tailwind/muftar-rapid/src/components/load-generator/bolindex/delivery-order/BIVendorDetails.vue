<template>
  <div class="border-gray-400 border-2 p-2 my-4">
    <p class="text-blue-600"> {{vendor.name}}</p>
    <p class="text-blue-600"> {{vendor.email}}</p>
    <p class="text-blue-600"> {{vendor.address.line1}} {{vendor.address.line2}}</p>
    <p class="text-blue-600"> {{vendor.address.city}} {{vendor.address.state}}</p>
    <p class="text-blue-600"> {{vendor.address.zip}} {{vendor.address.country}}</p>
  </div>

  <h1 class="font-bold text-xl">Merchant</h1>
  <div class="w-full border-gray-400 border-2 p-2 my-4">
    <div class="flex justify-between">
      <div>
        <p class="font-bold text-sm">Carrier</p>
        <p class="text-blue-600">{{order.carrier.name}}</p>
      </div>
      <div>
        <p class="font-bold text-sm">Location</p>
        <p class="text-blue-600">{{order.location}}</p>
      </div>
      <div>
        <p class="font-bold text-sm">Origin/Destination Port</p>
        <p class="text-blue-600">{{order.port}}</p>
      </div>
    </div>

    <div class="flex justify-between">
      <div>
        <p class="font-bold text-sm">B/L or AWB No.</p>
        <p class="text-blue-600">{{order.awb_no}}</p>
      </div>
      <div>
        <p class="font-bold text-sm">Arrive Date</p>
        <p class="text-blue-600">{{order.arrive_date}}</p>
      </div>
      <div>
        <p class="font-bold text-sm">Free Time EXP.</p>
      </div>
      <div>
        <p class="font-bold text-sm">Local Delivery or Transfer (Deliver Order Issued To.)</p>
        <p class="text-blue-600">{{order.issued_by}}</p>
      </div>
    </div>

    <div class="flex justify-between">
      <div>
      </div>
      <div>
        <p class="font-bold text-sm">House No.</p>
        <p class="text-blue-600"></p>
      </div>
      <div>
        <p class="font-bold text-sm">Entry-B/L No.</p>
        <p class="text-blue-600">{{order.entry_no}}</p>
      </div>
      <div>
        <p class="font-bold text-sm">Customer Ref No.</p>
        <p class="text-blue-600">{{order.customer_ref}}</p>
      </div>
    </div>

    <div class="flex justify-between">
      <div class="w-1/2">
        <p class="font-bold text-sm">For Delivery To</p>
        <p class="text-blue-600">{{order.shipto.location_name}}</p>
        <p class="text-blue-600"> {{order.shipto.address.line1}} {{order.shipto.address.line2}}</p>
        <p class="text-blue-600"> {{order.shipto.address.city}} {{order.shipto.address.state}}</p>
        <p class="text-blue-600"> {{order.shipto.address.zip}} {{order.shipto.address.country}}</p>
      </div>
      <div class="w-1/2 text-left">
        <p class="font-bold text-sm">Route</p>
        <p class="text-blue-600"></p>
      </div>
    </div>
  </div>
</template>
<script>
export default{
  name: 'BolDescribedMerchant',
  props:['vendor','order'],
  data(){
    return{
      // vendor:{
      //   name: 'Camerican International Inc.',
      //   address:{
      //     location_name: '',
      //     line1: '45 Eisenhower Dr',
      //     line2: '',
      //     city:'Atlant Paramus',
      //     state: 'NJ',
      //     country: 'USA',
      //     zip:'07652-1416'
      //   },
      // },
      // order:{
      //   carrier:{name: 'CMDU TRION OTSBNE1MA'},
      //   location: 'L737 Garden City Tier 50-53 61-62',
      //   port: 'Savannah, GA',
      //   awb_no: 'CMDUHKU0117475',
      //   arrive_date: '05/11/2022',
      //   issued_by: 'Everest Transportation Systems',
      //   entry_no: '9F9-0001553-6',
      //   customer_ref: 'T3162',
      //   shipto:{
      //     location_name:'Americold Atlanta Westgate',
      //     address:{
      //       line1: '1740 Westgate Parkway SW',
      //       line2: '',
      //       city:'Atlanta',
      //       state: 'GA',
      //       country: 'USA',
      //       zip:'30336'
      //     },
      //   }
      // }
    }
  }
}
</script>
