<template>
  <table class="w-full mx-auto">
    <tr class="border border-grey-600">
      <th>NO. of PKGS</th>
      <th>Description Of Articles, Special Marks &#38; Exceprtions</th>
      <th>Weight</th>
    </tr>
    <tr class="border border-grey-700" v-for="(pt, idx) in stock_information" :key="idx">
      <td class="border border-grey-700 text-blue-600 p-2 text-center">{{pt.pkgs}}</td>
      <td class="border border-grey-700 text-blue-600 p-2">
        <p>{{pt.description}}</p>
          <p>{{pt.quantity}}cs</p>
      </td>
      <td class="border border-grey-700 text-blue-600 p-2 text-center">{{pt.weight}} LB</td>
    </tr>
  </table>
</template>
<script>
export default{
  name: 'BolDescribedStock',
  data(){
    return{
      stock_information:[{
        pkgs: 0,
        description: `Frozen Tilapia fillets.\n Size 3-5oz\n Packing: 18*1LB/CTN\n Production Date: 03/13/2022\n SI#:T3162\n Item# C57642 \n Plant Name And Address: Hainan Jiadezin Foodsstuff oc., LTD\n No. 10 Qiongshan Avenue meilan area \n haikou city, hainan, china, plant no.: 4600/02027\n FDA No.: 12659021204`,
        quantity: 1863,
        weight: 45000,
      }]
    }
  }
}
</script>
<style scoped>
</style>
