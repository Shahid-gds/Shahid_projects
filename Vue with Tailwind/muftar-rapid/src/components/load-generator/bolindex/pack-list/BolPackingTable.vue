<template>
  <table class="w-full mx-auto">
    <tr class="border border-grey-600">
      <th>Marks</th>
      <th>Quantities and Description</th>
      <th>Quantity</th>
      <th>Net Weight</th>
      <th>G. Weight</th>
      <th>Measurement</th>
    </tr>
    <tr class="border border-grey-700" v-for="(pt, idx) in packing_table" :key="idx">
      <td class="border border-grey-700 text-blue-600 p-2 text-center">{{pt.mark}}</td>
      <td class="border border-grey-700 text-blue-600 p-2">{{pt.description}}</td>
      <td class="border border-grey-700 text-blue-600 p-2 text-center">{{pt.quantity}} CTNS</td>
      <td class="border border-grey-700 text-blue-600 p-2 text-center">{{pt.net_weight}} LBs</td>
      <td class="border border-grey-700 text-blue-600 p-2 text-center">{{pt.g_weight}} KGS</td>
      <td class="border border-grey-700 text-blue-600 p-2 text-center">{{pt.measurement}} CBM</td>
    </tr>
    <tr class="border border-grey-700">
      <td class="text-right font-bold text-lg">Total</td>
      <td class="text-right font-bold text-lg"></td>
      <td class="text-right font-bold text-lg">1863 CTNS</td>
      <td class="text-right font-bold text-lg">33,534 LBs</td>
      <td class="text-right font-bold text-lg">16,767.00 KGS</td>
      <td class="text-right font-bold text-lg">56CBM</td>
    </tr>
  </table>
</template>
<script>
export default{
  name: 'BolPackingHeader',
  data(){
    return{
      packing_table:[{
        mark: 'N/M',
        description: `Frozen Tilapia fillets.\n Size 3-5oz\n Packing: 18*1LB/CTN\n Production Date: 03/13/2022\n SI#:T3162\n Item# C57642 \n Plant Name And Address: Hainan Jiadezin Foodsstuff oc., LTD\n No. 10 Qiongshan Avenue meilan area \n haikou city, hainan, china, plant no.: 4600/02027\n FDA No.: 12659021204`,
        quantity: 1863,
        net_weight: 33543,
        g_weight: 16767,
        measurement: 56
      }]
    }
  }
}
</script>
<style scoped>
</style>
