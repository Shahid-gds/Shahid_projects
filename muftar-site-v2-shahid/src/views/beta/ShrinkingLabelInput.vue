<template>
    <div class="relative">
   <img :src="`@/assets/icons/beta/${icon}`" class="centered-axis-y absolute w-5 h-4"/>
      <label
        :class="[
          'absolute left-3 text-gray-500 transition-all duration-200  pl-8 ',
          focused || value.length > 0 ? 'dynamic-label-active' : 'dynamic-label'
        ]"
        :for="id"
      >
        {{ label }}
      </label>
      <input
        :id="id"
        class="border border-gray-300 rounded w-full py-2 pt-3 pl-10 pr-10 focus:border-blue-500 focus:outline-none"
        type="text"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        @focus="focused = true"
        @blur="focused = false"
      />
    </div>
</template>
  
<script setup>
import { ref, onMounted, computed, defineProps, defineEmits} from 'vue'
  

const props = defineProps(['modelValue', 'id', 'label', 'icon'])
defineEmits(['update:modelValue'])  

  
// const value = ref('')
const focused = ref(false)

const value = computed(() => {
  return props.modelValue
})

// const iconSrc = computed(() => {
//   return `@/assets/icons/beta/${props.icon}.svg`
// })


</script>
  
<style scoped>

.dynamic-label-active{
    font-size: .5rem;
    top: .2rem;
}
.dynamic-label{
    font-size: 1rem;
    top: .5rem;
}
.centered-axis-y {
    position: absolute;
    left: 3%;
    top: 25%;
    transform: translate(-25%,0);
}
</style>