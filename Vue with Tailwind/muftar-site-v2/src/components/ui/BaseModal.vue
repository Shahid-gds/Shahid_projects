<template>
    <!-- modal form -->
    <transition name="modal-outer">
        <div v-show="modalActive"
            class=" fixed  z-50 w-full h-screen tranparent shadow-lg rounded bg-opicity-30 h-xl top-0 left-0 flex justify-center px-8 backdrop-blur-sm">
            <transition name="modal-inner">
                <div v-if="modalActive"
                    class="container fixed bg-[#ffff] self-start max-w-screen-md shadow-2xl rounded-xl p-10 md:mt-32 mt-0">
                    <div class="text-black font-bold float-right text-lg relative cursor-pointer mt-0 hover:bg-slate-500 px-2 hover:text-white rounded-sm"
                        @click="$emit('close-modal')">X</div>
                    <slot />
                    <div class="md:ml-60 ml-14">
                        <button class="text-[#3C58A8] border-[#6668] border-2 p-2 px-6 rounded mt-9"
                            @click="$emit('close-modal')">Cancel</button>
                        <button class="text-white bg-[#3C58A8] p-2 px-6 rounded mt-9 ml-8">Submit</button>
                    </div>

                </div>
            </transition>
        </div>
    </transition>
</template>

<script setup>
defineEmits(['close-modal'])
defineProps({
    modalActive: {
        type: Boolean,
        default: false
    }
})
</script>
<style scoped>
.modal-outer-enter-active,
.modal-outer-leave-active {
    transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-outer-enter-from,
.modal-outer-leave-to {
    opacity: 0;
}

.modal-inner-enter-active {
    transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}

.modal-inner-leave-active {
    transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-inner-enter-from{
    opacity: 0;
    transition: 0.3s all ease;
}
.modal-inner-enter-to{
    transition: 0.3s all ease;
}
</style>