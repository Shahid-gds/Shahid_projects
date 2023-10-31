<template>
  <h1 class="font-bold text-xl">Locations</h1>
  <div class="flex justify-between border-gray-400 border-2 p-2 my-4">
    <table class="w-full">
      <tr>
        <th>Stop</th>
        <th>From</th>
        <th>To</th>
        <th>Name/Address</th>
        <th>City/Phone</th>
        <th>State/Zip</th>
        <th>Ref Contact</th>
        <th>Appt Ref</th>
      </tr>
      <tr class="relative" v-for="(lo, idx) in load_data.locations" :key="idx">
        <td class="text-blue-600">{{ idx + 1 }}</td>
        <td class="text-blue-600">{{ lo.stop_kind }}</td>
        <td class="text-blue-600">{{ lo.start_date }}</td>
        <td class="text-blue-600">{{ lo.end_date }}</td>
        <td class="text-blue-600">
          <p class="text-blue-600">{{ lo.name }}</p>
          <p class="text-blue-600">{{ lo.address.line1 }}{{ lo.address.line2 }}</p>
        </td>
        <td>
          <p class="text-blue-600">{{ lo.address.city }}</p>
          <p class="text-blue-600">{{ lo.phone }}{{ lo.address.line2 }}</p>
        </td>
        <td class="text-blue-600">
          <p class="text-blue-600">{{ lo.address.state }}</p>
          <p class="text-blue-600">{{ lo.address.zip }}</p>
        </td>
        <td class="text-blue-600">{{ lo.ref_contact }}</td>
        <td class="text-blue-600">{{ lo.appt_ref }}</td>
        <!-- <div class="notes-area">
          {{lo.notes}}
        </div> -->
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  name: 'BolLocations',
  props: ['load_data'],
  data() {
    return {}
    // showNote: false
  }
}
</script>
<style scoped>
/* .notes-area{
  position: absolute;
  bottom: 0;
} */
</style>
