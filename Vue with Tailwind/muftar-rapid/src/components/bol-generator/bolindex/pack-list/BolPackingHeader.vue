<template>

  <div class=" mx-auto text-center">
    <h2 class="font-bold text-2xl">{{facility.name}}</h2>
    <p>{{facility.address.location_name}} {{facility.address.line1}} {{facility.address.city}} {{facility.address.state}} {{facility.address.country}}</p>
  </div>

  <div>
    <p>To: {{reciever.name}}</p>
    <p>{{reciever.address.location_name}} {{reciever.address.line1}} {{reciever.address.city}} {{reciever.address.state}} {{reciever.address.country}}</p>
  </div>

  <div class="border-gray-400 border-2 p-2 my-4">
    <p>Invoice No.: {{invoice.number}}</p>
    <p>Date: {{invoice.date_fmt}}</p>
    <p>From: {{invoice.shipfrom.address.city}}, {{invoice.shipfrom.address.country}}</p>
    <p>To: {{invoice.number}}</p>
  </div>

</template>
<script>
export default{
  name: 'BolPackingHeader',
  data(){
    return{
      facility:{
        name: 'SUPREME STAR FOODS CO., LIMTED',
        address:{
          location_name: 'Fiat 9, New Tech Plaza',
          line1: '34 Tai Yau Street',
          line2: '',
          city:'San Po Kong',
          state: 'Kowloon',
          country: 'Hong Kong',
          zip:'30005'
        },
      },
      reciever:{
        name: 'TIDEWAVE SEAFOODS INC.',
        address:{
          location_name: '',
          line1: '101 rue peel',
          line2: 'UNIT #802',
          city:'Montreal',
          state: '',
          country: 'QC',
          zip:'H3C 0Y1'
        },
      },
      invoice:{
        number: 'SS22046',
        date_fmt: '03/28/2022',
        shipfrom:{
          address:{
            city: 'Yangpu',
            state: '',
            country: 'China'
          }
        },
        shipto:{
          address:{
            city: 'Savannah',
            state: 'GA',
            country: 'USA'
          }
        }
      }
    }
  }
}
</script>
<style scoped>
</style>
