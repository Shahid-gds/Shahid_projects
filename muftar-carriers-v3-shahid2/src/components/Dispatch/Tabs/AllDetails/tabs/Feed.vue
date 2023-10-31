<template>
    <section class="h-screen pb-72 overflow-y-auto">
        <div v-if="loading" class="text-center mt-10">
            loading
        </div>
        <div v-if="!loading && feed.length > 0">
            <div class="flex flex-col p-8 border  bg-gray-50/20 rounded-md mx-4 space-y-2 my-3" v-for="(df, idx) in feed"
                :key="idx">

                <section class="flex space-x-2">
                    <img class="w-10 h-10" src="@/assets/img/accountPerson.svg" alt="PERSON">
                    <div class=" my-auto space-y-4">
                        <div>
                            <div class="flex space-x-2">
                                <h1 class="font-bold">John Doe</h1>
                                <p>({{ df.by.role }})</p>
                            </div>
                            <p class="text-xs text-gray-400"> {{ $relativeDate(df.created) }}</p>
                        </div>
                        <section>
                            <div>
                                {{ df.body }}
                            </div>
                        </section>

                        <div class=" flex flex-col" v-if="df.media.length > 0">
                            <div class="flex  space-x-2 cursor-pointer w-max" @click="toggleContent(idx)">
                                <h3 class="text-lg font-semibold my-auto select-none">View Media ({{ df.media.length }})
                                </h3>
                                <svg :class="{ 'transform rotate-180': showContent && feedIdx === idx, 'rotate-90': !showContent && feedIdx === null }"
                                    class="w-6 h-6 my-auto transition-all  text-gray-600" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M18 15l-6-6-6 6" />
                                </svg>
                            </div>
                            <!-- <p class="cursor-pointer w-min select-none" @click="showContent = !showContent">Media</p> -->
                            <div class="flex space-x-2">
                                <div v-show="showContent && feedIdx === idx" class="my-4 flex flex-row"
                                    v-for="(media, index) in df.media" :key="index">
                                    <img class="w-40 h-40 flex flex-row rounded-lg cursor-pointer"
                                        @click="openImageModal(media.uri)" :src="media.uri" alt="MEDIA">
                                </div>
                            </div>
                        </div>

                        <section class="flex space-x-3">
                            <div v-if="df.tags.length > 0">
                                <div class="flex  px-2 py-1 rounded-md space-x-1 text-sm text-blue-700 bg-blue-100"
                                    v-for="(tag, index) in df.tags" :key="index"><span class="text-blue-500">#
                                    </span><span class="font-bold">{{ tag }} </span></div>
                            </div>
                        </section>
                    </div>

                </section>




                <!-- IMAGE SECTION -->




                <!-- IMAGE MODAL -->

            </div>
        </div>
        <!-- component -->
        <Teleport to="body">
            <ImageModal @hideModal="hideModal" v-if="showImageModal" :image_uri="image_uri" />
        </Teleport>
    </section>
</template>


<script setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import axios from 'axios';
import ImageModal from './modal/ImageModal.vue'


import { useApi } from '@/composables/useApi'

const { api_path } = useApi();
const store = useStore();

const showImageModal = ref(false);
const showContent = ref(false);

const feedIdx = ref(null);


const toggleContent = (idx) => {
    feedIdx.value = idx
    showContent.value = !showContent.value;
}

const hideModal = () => {
    showImageModal.value = false;
}

const image_uri = ref(null);

const orgID = computed(() => store.state.orgID);

const loading = ref(false);
const feed = ref([]);

const getAllFeed = async () => {
    loading.value = true;
    const config = {
        headers: {
            orgID: orgID.value
        }
    }

    try {
        const res = await axios.get(api_path.value + 'driver/load/feed/all', config);
        feed.value = res.data.result
        console.log(feed.value);
        loading.value = false;

    } catch (error) {
        loading.value = false;
        console.log(error)
    }
}


const openImageModal = (uri) => {
    image_uri.value = uri;
    showImageModal.value = true;

}





getAllFeed();

</script>