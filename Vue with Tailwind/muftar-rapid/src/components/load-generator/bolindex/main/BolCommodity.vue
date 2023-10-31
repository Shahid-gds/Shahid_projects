<template>
  <h2 class="font-bold text-xl">Commodity</h2>
  <div class="flex justify-between border-gray-400 border-2 p-2 my-4">
    <table class="w-full">
      <tr>
        <th>Commodity</th>
        <th>Description/Reference</th>
        <th>Pieces/Spaces</th>
        <th>Weight</th>
      </tr>
      <tr class="text-center" v-for="(com, idx) in load_data.commodity" :key="idx">
        <td class="text-blue-600">{{com.item}}</td>
        <td class="text-blue-600">{{com.description}}</td>
        <td class="text-blue-600 pl-10">
            <p>{{(com.pieces).toLocaleString()}}</p>
            <p>{{(com.spaces).toLocaleString()}}</p>
          </td>
        <td class="text-blue-600">{{(com.weight).toLocaleString()}}</td>
      </tr>
    </table>

  </div>
</template>
<script>
export default{
  name: 'BolCommodity',
  props:['load_data'],
}
</script>
