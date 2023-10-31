<template>
    <h3 class="text-xl mt-5 font-bold">Other Details</h3>
    <p class="text-sm italic text-gray-400">Upload rate confirmation here</p>

    <div  class="dropzone relative border-2 border-blue-400 border-dashed bg-gray-100 sm:rounded-lg mt-5 w-11/12 mx-auto">
      <textarea class="w-full h-full resize-none p-2 bg-gray-100" style="min-height: 10rem;" placeholder="Write additional details..." 
            @input="updateDetails($event.target.value)" v-model="load_details"></textarea>
    </div>
</template>
<script setup>
import { ref, defineEmits} from 'vue'

const emit = defineEmits(['updateDetails'])
const load_details = ref('')

const updateDetails = (value) => {
    // console.log(value)
    // console.log('new value', vendor.value)

    emit('updateDetails', load_details.value)
}

</script>
<style scoped>
.active-dropzone{
  color: #fff;
  background-color: #ddd;
  border-color: #94c4ff;
}
.dropzone{
  transition: .5s;
}
</style>