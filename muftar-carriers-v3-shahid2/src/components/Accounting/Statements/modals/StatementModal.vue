<template>
    <div>
        <div
            class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
            <div class=" my-6">
                <!--content-->
                <div
                    class="border-0 rounded-md  relative flex flex-col w-full outline-none focus:outline-none shadow-xl bg-white p-6">
                    <!--header-->
                    <!--body-->
                    <div class="m-3" style=" overflow-x: hidden;  ">
                        <div class="absolute right-0 top-0 z-10 flex gap-5 py-3 px-5 rounded-bl-md rounded-tr-md"
                            style="background:#1A2953">
                            <img class="w-5 h-5" src="@/assets/icons/accounting/print.svg" alt="">
                            <img class="w-5 h-5" src="@/assets/icons/accounting/pdf.svg" alt="">
                            <img class="w-5 h-5" src="@/assets/icons/accounting/share.svg" alt="">
                            <button class="text-white font-bold" v-on:click="hideModal">X</button>
                        </div>
                        <div class="flex justify-around p-3  relative">
                            <div class="w-50 text-right">
                                <h2 class="text-xl font-extrabold text-gray-600">Muftar Transport LLC | STATEMENT ID {{
                                        $route.query.statement_id
                                }}</h2>
                                <p class="text-gray-600">2133 Lawrenceville-Suwanee Rd. Suite 12-431, Suwanee GA 30024
                                </p>
                                <p class="text-black">Phone: <small class="text-gray-600">(770) 910-7310</small></p>
                                <p class="text-black">Email:<small class="text-gray-600"> Accounting@muftar.com </small>
                                </p>
                            </div>
                            <div class="flex flex-col justify-center items-center w-96">
                                <img class="w-12 h-12" src="@/assets/icons/accounting/settlement.svg" alt="">
                                <h1 class="heading_color font-extrabold text-xl uppercase">Settlement</h1>
                                <p class="text-black">Date Range: <small class="text-gray-600">8/2/2022 TO
                                        8/8/2022</small></p>
                                <p class="text-gray-600 font-extrabold">Settlement: 4</p>
                            </div>
                            <div class="w-50 text-left">
                                <h2 class="text-xl font-extrabold text-gray-600">Muftar Transport LLC</h2>
                                <p class="text-gray-600">2133 Lawrenceville-Suwanee Rd. Suite 12-431, Suwanee GA 30024
                                </p>
                                <p class="text-black">Phone: <small class="text-gray-600">(770) 910-7310</small></p>
                                <p class="text-black">Email:<small class="text-gray-600"> Accounting@muftar.com </small>
                                </p>
                            </div>
                        </div>
                        <div
                            class="button_gradient w-20 p-2 ml-2 text-center text-lg rounded-tr-md font-bold text-white">
                            LOADS
                        </div>
                        <div class="border-2 mr-2 ml-2">
                            <div class="grid gap-1 grid-cols-10 tables text-gray-500  p-4 text-center" v-for="dum in 6"
                                :key="dum">
                                <div>12/1/2021</div>
                                <div>12/1/2021</div>
                                <div>1639081797</div>
                                <div>Lorem Ipsum</div>
                                <div>Trevor Marcus</div>
                                <div>$1,000</div>
                                <div>$557.39</div>
                                <div>$22,300</div>
                                <div>12/1/2021</div>
                                <div>Pending</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div @click="hideModal" class="fixed bg-black/70 backdrop-blur-sm z-40 inset-0">

        </div>
    </div>
</template>

<script >

export default {
    data() {
        return {

        }
    },
    methods: {
        hideModal() {
            this.$emit('hideModal', false);
        }
    }
}

</script>

<style>

</style>