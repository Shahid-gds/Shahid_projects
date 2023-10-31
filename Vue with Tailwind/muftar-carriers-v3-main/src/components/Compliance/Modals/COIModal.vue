<template>
    <!-- ADD AND DELTETE CERTIFICATE OF INSURANCE MODAL START -->
    <div
        class="overflow-x-hidden w-full overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
        <div
            class="relative w-11/12 md:w-3/4 lg:w-3/6 xl:w-3/6 2xl:w-2/6 my-6 bg-white rounded-md shadow-md mx-auto max-w-6xl">
            <div class="border-0  relative  w-full  outline-none focus:outline-none">
                <!-- HEADER -->
                <div class="flex justify-between p-5">
                    <h1 class="text-3xl">Insurance Claim</h1>
                    <mdicon @click="$emit('hideModal')"
                        class="my-auto cursor-pointer hover:bg-gray-200 transition-all rounded-md" size="30"
                        name="close" />
                </div>

                <!-- generatl heading -->
                <div class="flex justify-between p-5 px-6 text-lg text-white bg-primary">
                    <h1 v-if="current_step === 1">Claim Details</h1>
                    <h1 v-if="current_step === 2">Witnesses and Other Parties</h1>
                    <h1 v-if="current_step === 3">Contact Details</h1>
                    <h1>Step {{ current_step }} of {{ max_steps }}</h1>
                </div>

                <!-- BODY AND ITS CONTENT -->
                <div class="flex flex-col">
                    <!-- STEP 1 -->
                    <div v-if="current_step === 1" class=" p-5 space-y-5">
                        <div class="grid grid-cols-12  ">
                            <label class="col-span-12 text-lg text-gray-400" for="">When did the incident occur?</label>
                            <div class="col-span-12 rounded-md border">
                                <input class="w-full text-gray-400 rounded-md border-none focus:ring-0"
                                    type="datetime-local">
                            </div>
                        </div>

                        <div class="grid grid-cols-12 ">
                            <label class="col-span-12 text-lg text-gray-400" for="">Which vehicle was involved?</label>
                            <div class="col-span-12 rounded-md border">
                                <input class="w-full text-gray-400 rounded-md border-none focus:ring-0" type="text">
                            </div>
                        </div>

                        <div class="grid grid-cols-12 ">
                            <label class="col-span-12 text-lg text-gray-400" for="">Type of incident?</label>
                            <div class="col-span-12 rounded-md border">
                                <input class="w-full text-gray-400 rounded-md border-none focus:ring-0" type="text">
                            </div>
                        </div>

                        <div class="grid grid-cols-12  gap-2">
                            <label class="col-span-12 text-lg text-gray-400" for="">Describe what happened?</label>
                            <p class="col-span-12 text-sm text-gray-400">Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Nisi modi sequi consequuntur
                                reiciendis deserunt magni iste cumque excepturi corporis hic impedit laborum fuga saepe
                                velit officiis facilis porro, odio placeat?</p>
                            <div class="col-span-12 rounded-md border">
                                <textarea style="resize: none;"
                                    class="w-full text-gray-400 rounded-md border-none focus:ring-0 h-24"
                                    type="text"></textarea>
                            </div>


                        </div>
                    </div>

                    <!-- STEP 2 -->
                    <div v-if="current_step === 2" class=" p-5 space-y-5">
                        <div class="grid gap-1">
                            <label class="col-span-12 text-lg text-gray-400" for="">Name</label>
                            <div class="col-span-6 rounded-md border">
                                <input
                                    class="w-full text-gray-400 rounded-md border-none focus:ring-0 placeholder:text-gray-400"
                                    placeholder="First Name" type="text">
                            </div>
                            <div class="col-span-6 rounded-md border">
                                <input
                                    class="w-full text-gray-400 rounded-md border-none focus:ring-0 placeholder:text-gray-400"
                                    placeholder="Last Name" type="text">
                            </div>
                        </div>

                        <div class="grid gap-1">
                            <label class="col-span-12 text-lg text-gray-400" for="">Involvement?</label>
                            <div class="col-span-12 rounded-md border">
                                <input
                                    class="w-full text-gray-400 rounded-md border-none focus:ring-0 placeholder:text-gray-400"
                                    placeholder="Involvement?" type="text">
                            </div>
                        </div>

                        <div class="grid gap-1">
                            <label class="col-span-12 text-lg text-gray-400" for="">Phone Number</label>
                            <div class="col-span-12 flex rounded-md border">
                                <mdicon class="my-auto ml-2 text-primary" name="phone" />
                                <input
                                    class="w-full text-gray-400 rounded-md border-none focus:ring-0 placeholder:text-gray-400 "
                                    placeholder="Phone Number" type="text">
                            </div>
                        </div>

                        <div class="grid space-y-2">
                            <label class="col-span-12 text-lg text-gray-400" for="">Injured?</label>
                            <div @click="injured = true"
                                :class="{ 'text-primary bg-primary/25': !injured, 'bg-primary text-white': injured }"
                                class="col-span-6 cursor-pointer text-center transition-all rounded-r-none rounded-md py-3 ">
                                Yes
                            </div>
                            <div @click="injured = false"
                                class="col-span-6 transition-all cursor-pointer text-center rounded-l-none rounded-md py-3 "
                                :class="{ 'text-primary bg-primary/25': injured, 'bg-primary text-white': !injured }">
                                No
                            </div>

                        </div>
                    </div>

                    <!-- STEP 3 -->
                    <div v-if="current_step === 3" class="p-5 space-y-5">
                        <div class="grid space-y-2">
                            <label class="col-span-12 text-lg text-gray-400" for="">Primary Contact</label>
                            <div class="col-span-12  rounded-md border">
                                <input
                                    class="w-full text-gray-400 rounded-md border-none focus:ring-0 placeholder:text-gray-400"
                                    placeholder="Primary Contact" type="text">
                            </div>
                        </div>

                        <div class="grid space-y-2">
                            <label class="col-span-12 text-lg text-gray-400" for="">Phone Number</label>
                            <div class="col-span-12 flex rounded-md border">
                                <mdicon class="my-auto ml-2 text-primary" name="phone" />
                                <input
                                    class="w-full text-gray-400 rounded-md border-none focus:ring-0 placeholder:text-gray-400"
                                    placeholder="Phone Number" type="text">
                            </div>
                        </div>


                        <div class="grid space-y-2">
                            <label class="col-span-12 text-lg text-gray-400" for="">Email Address</label>
                            <div class="col-span-12 rounded-md border">
                                <input
                                    class="w-full text-gray-400 rounded-md border-none focus:ring-0 placeholder:text-gray-400"
                                    placeholder="Email Address" type="text">
                            </div>
                        </div>
                    </div>
                </div>

                <!-- FOOTER -->
                <div class="flex flex-row justify-between p-5">
                    <button @click="current_step > 1 ? goBack() : $emit('hideModal')"
                        class="py-4 px-7 text-black bg-gray-100 rounded-md">
                        {{ current_step > 1 ? 'Back' : 'Cancel' }}
                    </button>
                    <button class="py-4 px-7 bg-primary text-white rounded-md" @click="goToStep">Next</button>
                </div>
            </div>
        </div>
    </div>
    <div class="fixed bg-black/70 backdrop-blur-sm z-40 inset-0">
    </div>
    <!--ADD AND DELETE CERTIFICATE OF INSURANCE MODAL END -->
</template>

<script setup>
import { ref } from 'vue'

const current_step = ref(1);
const max_steps = ref(3);
const injured = ref(false);

const goToStep = () => {
    if (current_step.value === 1) {
        current_step.value = 2;
    } else if (current_step.value === 2 && current_step.value !== 1) {
        current_step.value = 3;
    }
}

const goBack = () => {
    if (current_step.value === 3) {
        current_step.value = 2;
    } else if (current_step.value === 2 && current_step.value !== 1) {
        current_step.value = 1;
    }
}

</script>