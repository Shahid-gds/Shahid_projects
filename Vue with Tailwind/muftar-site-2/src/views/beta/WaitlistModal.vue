<template>
 <div class="fixed z-10 w-full h-screen top-0 left-0 flex justify-center px-8 ">
    <div class="absolute z-10  w-full h-screen tranparent bg-opacity-30 bg-black h-xl top-0 left-0 backdrop-contrast-50" @click="toggleModal(false)"></div>
    
    <XyzTransition appear xyz="fade short-100% ease">
    <div class=" centered-axis-xy bg-white self-start min-w-8/12 shadow-2xl md:max-w-screen-md  rounded-xl mx-auto p-5 md:p-10 z-50"> 

        <div class="text-lg absolute cursor-pointer mt-0 hover:bg-slate-500 px-2 hover:text-white rounded-sm top-2 right-6 text-gray-500" @click="toggleModal(false)">&times;</div>

        <h1 class="uppercase text-xl md:text-2xl text-center font-bold mb-5 my-2 border-b-2 w-8/12 mx-auto">Join the waitlist!</h1>

        <div class="update-grid mx-auto ">

            <ShrinkingLabelInput v-for="(field, index) in fields" :key="index" :id="field.id" :label="field.label" :icon="field.icon" v-model="field.val"/>
        </div>
        
        <p> {{ feedback.text }}</p>
        <div class="w-10/12 mx-auto text-center" v-if="!processing">
            <!-- <button class="  text-gray-800 border-2 p-2 px-6 rounded mt-9" @click="toggleModal(false)">Cancel</button> -->
            <button v-if="feedback.status != 'success'" class="text-white bg-theme p-2 px-6 rounded mt-9 ml-8" @click="sendToWaitlist()">Submit</button>
        </div> 
        <div class="text-center w-full mx-auto" v-else>
            <p class="italic text-gray-400">Please wait...</p>
        </div>  
        
    </div>
    </XyzTransition>
</div>
</template>

<script setup>
import { defineEmits, ref} from 'vue'
import axios from 'axios'
import ShrinkingLabelInput from './ShrinkingLabelInput.vue'

const emit = defineEmits(['toggleModal'])

const value = ref('')
const focused = ref(false)


const fields = ref([
        { id: 'company-name',  icon:'building', label: 'Company Name', val:'' },
        { id: 'company-website',  icon:'globe', label: 'Company Website' , val:'' },
        { id: 'name',   icon:'user', label: 'Name' , val:'' },
        { id: 'email',  icon:'envelope', label: 'Email' , val:'' },
        { id: 'phone',  icon:'phone', label: 'Phone' , val:'' },
        { id: 'social-media',  icon:'hashtag', label: 'Social Media Link' , val:'' },
      ])

const updateFieldValue = (index, value) => {
    fields.value[index].val = value
}

const social_medias = ref(['Facebook', 'Instagram', 'Twitter', 'LinkedIn', 'Other'])
const processing = ref(false)
const feedback = ref({'status': '', 'text':''})

const sendToWaitlist = async () => {
    try {
        processing.value  = true
        const payload = {
            company_name: fields.value[0].val,
            company_website: fields.value[1].val,
            name: fields.value[2].val,
            email: fields.value[3].val,
            phone: fields.value[4].val,
            social_media: fields.value[5].val,
            social_link: fields.value[5].val,
        }

        const response = await axios.post('https://muftardigital.pythonanywhere.com/site/waitlist', payload);
        feedback.value = {'status':response.data.status, 'text': response.data.feedback}
        if(feedback.value.status == 'status'){
            setTimeout(() => {
                window.reload()
            }, 2000);
        }
        console.log(response.data);
        processing.value  = false
    } catch (error) {
        processing.value  = false
        console.error('Error sending data:', error);
    }
};

// const props =  defineProps({
//     modalOpen: Boolean,
//    })

const toggleModal = (bool) =>{
    emit('toggleModal', bool)
}
</script>
<style scoped>

.centered-axis-xy {
    position: absolute;
    width: 80%;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}
.update-grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    justify-items: stretch;
    align-items: stretch;
}

@media only screen and (min-width: 768px) {
    .update-grid {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
    }
}
</style>