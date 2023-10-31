<template>
    <!-- CARD 1 -->
    <!-- bg-[#1c1c24] -->
    <div class=" bg-white  text-gray-500 lg:space-y-16 md:space-y-1  py-4 px-6 rounded-md shadow shadow-primary">
        <!-- CARD HEADER -->
        <div class="flex flex-row justify-between">
            <p class="lg:text-lg xs:text-xs md:text-base">{{ card.header_text }}</p>
            <mdicon :name="card.header_icon" />
        </div>
        <!-- CARD CONTENT -->
        <div class="flex  flex-col space-y-10">
            <div class="flex flex-row space-x-3">
                <h1 class="text-2xl 2xl:text-5xl xl:text-4xl lg:text-4xl md:text-3xl text-gray-700 sm:text-2xl font-bold">
                    {{ card.header_text === 'Loads Delivered' ? card.content_value : $displayPrice(card.content_value) }}
                </h1>
                <p class="text-green-500 mt-7 text-sm my-auto ">{{ card.content_percentage }}%</p>
            </div>


            <!-- DESCRIPTION -->
            <p class="md:text-sm lg:text-lg">
                {{ card.content_fotter_text }}
            </p>
        </div>
    </div>
</template>

<script>

export default {
    props: ['card']
}

</script>