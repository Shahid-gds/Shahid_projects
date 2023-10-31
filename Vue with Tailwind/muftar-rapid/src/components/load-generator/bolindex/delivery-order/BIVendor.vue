<template>
  <h1 class="font-bold text-xl">Vendor</h1>
  <div class="border-gray-400 border-2 p-2 my-4">
    <p class="text-blue-600"> {{vendor.name}}</p>
    <p class="text-blue-600"> {{vendor.email}}</p>
    <p class="text-blue-600"> {{vendor.address.line1}} {{vendor.address.line2}}</p>
    <p class="text-blue-600"> {{vendor.address.city}} {{vendor.address.state}}</p>
    <p class="text-blue-600"> {{vendor.address.zip}} {{vendor.address.country}}</p>
  </div>

</template>
<script>
export default{
  name: 'BIVendor',
  props:['vendor'],
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
