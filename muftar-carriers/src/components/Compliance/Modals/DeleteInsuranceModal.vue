<template>
    <!-- DELETE INSURANCE MODAL START-->
    <div
        class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
        <div class="relative w-auto my-6 mx-auto max-w-6xl">
            <!--content-->
            <div class="border-0 rounded-2xl shadow-lg relative flex flex-col w-full outline-none focus:outline-none"
                style="background-color: #FFFFFF; width:400px; height: 300px; overflow-x: hidden;">
                <!--body-->
                <div class="flex flex-col justify-center items-center mt-10">
                    <img src="@/assets/bg/widget/trash-bin.svg" alt="">
                    <h1 class="text-lg text-center font-bold">ARE YOU SURE YOU WISH TO <br>REMOVE WIDGET?</h1>
                    <div>

                        <button @click="$emit('hideModal', 'DeleteModal')"
                            class="bg-green-400 text-white p-2 rounded-2xl ml-3 mr-3 w-24">Remove</button>

                        <button @click="$emit('hideModal', 'DeleteModal')"
                            class="bg-red-700 text-white p-2 rounded-2xl ml-3 mr-3 w-24">Cancle</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class=" fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"></div>
    <!-- DELETE INSURANCE MODAL END -->
</template>