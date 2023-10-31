<template>
    <div class="overflow-x-auto  overflow-y-auto fixed  shadow-lg inset-0 z-50 flex justify-center items-center">
        <!-- <div class=" shadow-lg bg-white rounded-xl space-y-5 h-3/4 w-3/4" ref="target"> -->
        <img class="mx-auto rounded-md max-w-7xl max-h-[50rem] " ref="target" :src="image_uri" alt="">

        <!-- </div> -->
    </div>
    <div class="fixed bg-black/70 backdrop-blur-sm z-40 inset-0" >
    </div>
</template>

<script setup>
import { ref, defineEmits, defineProps, toRefs } from 'vue'
import { onClickOutside } from '@vueuse/core'
const emit = defineEmits(['hideModal'])


const props = defineProps(['image_uri'])

const { image_uri } = toRefs(props)

const target = ref(null)


onClickOutside(target, () => {
    hideModal();
})

const hideModal = () => {
    emit('hideModal', false);
}

</script>