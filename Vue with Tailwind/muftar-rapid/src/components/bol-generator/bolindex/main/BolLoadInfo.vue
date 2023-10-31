<template>
  <h1 class="font-bold text-xl">Load Info</h1>
  <div class=" justify-between border-gray-400 border-2 p-2 my-4">
    <div class="flex justify-between w-full">
      <div>
        <p><span class="font-bold">Carrier:</span> <span class="text-blue-600">{{ carrier.name }}</span> </p>
        <p>
          <span class="font-bold">Ph/Fax:</span>
          <span class="text-blue-600"> {{ carrier.phone }}/{{ carrier.fax }}</span>
        </p>
        <p><span class="font-bold">Attn:</span> <span class="text-blue-600">{{ carrier.attn }}</span> </p>
      </div>
      <div>
        <p><span class="font-bold">MCID:</span> <span class="text-blue-600">{{ carrier.mc_number }}</span> </p>
        <p><span class="font-bold">Reference:</span> <span class="text-blue-600">{{ carrier.reference }}</span> </p>
        <p><span class="font-bold">Trailer:</span> <span class="text-blue-600">{{ carrier.trailer }}</span> </p>
      </div>
      <div>
        <p><span class="font-bold">Driver:</span> <span class="text-blue-600">{{ carrier.driver.name }}</span> </p>
        <p><span class="font-bold">Cell:</span> <span class="text-blue-600">{{ carrier.driver.phone }}</span> </p>
        <p><span class="font-bold">Truck:</span> <span class="text-blue-600">{{ carrier.driver.truck }}</span> </p>
      </div>
    </div>
    <div class="flex jusitfy-between w-full mt-5 border-b-2 border-t-2 pb-3 border-gray-500 ">
      <div class="w-1/2 font-bold text-center">
        Load Info
      </div>
      <div class="w-1/2 font-bold text-center">
        The Following Pay Is authorized For The Load 
      </div>
    </div>
    <div class="flex">
      <table class="w-1/2">
        <tr>
          <td class="font-bold">Pieces</td>
          <td class="">{{ load_data.stats.pieces }}</td>
          <td class="font-bold">Miles</td>
          <td class="text-blue-600">{{ load_data.stats.miles }}</td>
        </tr>
        <tr>
          <td class="font-bold">Spaces</td>
          <td class="text-blue-600">{{ load_data.stats.spaces }}</td>
          <td class="font-bold">Pallet</td>
          <td class="text-blue-600">{{ load_data.stats.pallets }}</td>
        </tr>
        <tr>
          <td class="font-bold">Act Wgt</td>
          <td class="text-blue-600">{{ load_data.stats.act_wgt }}</td>
          <td class="font-bold">Type</td>
          <td class="text-blue-600">{{ load_data.stats.load_type }}</td>
        </tr>
        <tr>
          <td class="font-bold">As Wgt</td>
          <td class="text-blue-600">{{ load_data.stats.as_wgt }}</td>
          <td class="font-bold">Trailer</td>
          <td class="text-blue-600">{{ load_data.stats.trailer }}</td>
        </tr>
        <tr>
          <td class="font-bold">Value</td>
        </tr>
      </table>

      <table class="w-1/2">
        <tr>
          <th>Pay Code</th>
          <th> Pay Type</th>
          <th>Rate</th>
          <th>Total</th>
        </tr>
        <tr v-for="(tx, idx) in load_data.stats.table" :key="idx">
          <td class="text-blue-600">{{ tx.pay_code }}</td>
          <td class="text-blue-600">{{ tx.pay_type }}</td>
          <td class="text-blue-600">{{(tx.rate).toLocaleString()}}</td>
          <td class="text-blue-600">{{(tx.total).toLocaleString()}}</td>
        </tr>
        <tr>
          <td class="text-blue-600"></td>
          <td class="text-blue-600"></td>
          <td class="font-bold">Total</td>
          <td class="text-blue-600">${{(totalAmount).toLocaleString() }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BolLoadInfo',
  props: ['carrier', 'load_data'],
  computed: {
    totalAmount() {
      let val = 0
      const table_stats = this.load_data.stats.table
      for (let i in table_stats) {
        val = table_stats[i].total + val
      }
      return val
    }
  }
}
</script>
