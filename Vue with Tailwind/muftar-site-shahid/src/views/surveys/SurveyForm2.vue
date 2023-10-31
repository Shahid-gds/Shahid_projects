<template>
    <div class="bg-custom h-screen space-y-2">
        <div class="container mx-auto flex items-center flex-col pt-10 space-y-4">
            <img class="w-40 md:w-96" src="@/assets/logo2-full-white.svg" alt="">
            <h2 class="font-light text-xl text-white surveyBorder pb-2">Trucking and Logistics Survey</h2>
        </div>

        <div v-if="isSubmitted" class="container mx-auto">
            <p class="text-center text-lg xl:text-2xl text-white p-6">Thank you for taking the time to complete our survey! Your
                feedback is
                invaluable in helping us understand
                and serve the trucking industry better. We appreciate your effort and input. If you have any further
                comments or suggestions, please don't hesitate to reach out to us. Stay tuned for updates and improvements
                based on the insights gathered from this survey. Have a great day!</p>
        </div>

        <div v-if="!isSubmitted" class="px-6">
            <div class="container mx-auto space-y-4" v-if="!isRoleSelected">
                <h1 class="text-white text-sm text-center md:text-xl lg:text-3xl">What best describes your role in the
                    trucking industry?</h1>
                <ul class="w-full space-y-3 flex flex-col items-center justify-center text-white">
                    <li v-for="(role, index) in roles" :key="index"
                        class="w-96 p-3 border-2 cursor-pointer hover:bg-600  border-white flex space-x-2  rounded-md"
                        :class="{ 'bg-600  font-bold': selectedRoleKey === role.key, 'bg-800': selectedRoleKey !== role.key }"
                        @click="setRole(role.key, role.value)">
                        <span class="my-auto">
                            {{ role.value }}
                        </span>
                    </li>
                </ul>
                <div class="flex justify-center">
                    <button @click="fetchQuestions"
                        class="border border-white bg-opacity-0 text-white rounded-md px-4 py-2 hover:text-black hover:bg-white">Continue</button>
                </div>
            </div>

            <div class="container mx-auto space-y-6"
                v-if="isRoleSelected && questions.length > 0 && questions[currentQuestion] !== questions[questions.length - 1]">
                <div class="text-white">
                    <div v-if="questions[currentQuestion].qType === 'text'" class="relative flex flex-col space-y-2">
                        <h2 class=" absolute transition-all duration-200" @click="focused = true"
                            :class="{ 'top-5 text-gray-50 text-opacity-30': !focused, '-top-6 left-2 text-sm text-white': focused }">
                            {{
                                questions[currentQuestion].question }} </h2>
                        <div class="w-[10rem] border-b bg-none">
                            <input class="border-none  focus:ring-0 p-3 w-full" v-model="textAnswer" @focus="focused = true"
                                @blur="focused = false" type="text">
                        </div>

                    </div>
                    <div v-if="questions[currentQuestion].qType === 'multichoice'">
                        <Multichoice :question="questions[currentQuestion]" :options="questions[currentQuestion].options"
                            @selectOption="selectOption" />
                    </div>
                </div>



            </div>
            <div class="container mx-auto flex justify-center mt-4" v-if="isRoleSelected">
                <button v-if="questions[currentQuestion] !== questions[questions.length - 1]"
                    class="border border-white bg-opacity-0 text-white rounded-md px-4 py-2 hover:text-black hover:bg-white"
                    @click="nextQuestion">
                    Next
                </button>
                <div class="flex flex-col justify-center space-y-4"
                    v-if="questions[currentQuestion] === questions[questions.length - 1]">
                    <p class="text-center text-white  text-3xl">Click on submit to Submit the Survey.</p>
                    <button
                        class="border border-white bg-opacity-0 w-36 mx-auto text-white rounded-md px-4 py-2 hover:text-black hover:bg-white"
                        @click="submit">
                        Submit
                    </button>
                </div>

            </div>
        </div>
    </div>
</template>


<script setup>
import { ref, reactive } from 'vue'
import Multichoice from '@/views/surveys/Multichoice.vue'
import axios from 'axios'



const focused = ref(false);


const currentQuestion = ref(0);

const isRoleSelected = ref(false);

const selectedRoleKey = ref(null)
const selectedRoleValue = ref(null);
const answer = ref(null)
const textAnswer = ref('')

const roles = ref([
    {
        key: 'carrier',
        value: 'Carrier'
    },
    {

        key: 'broker',
        value: 'Broker'
    },
    {

        key: 'fleet_manager',
        value: 'Fleet Manager'
    },
    {

        key: 'forwarder',
        value: 'Forwarder'
    },
    {

        key: 'driver',
        value: 'Driver'
    },
    {

        key: 'shipper',
        value: 'Shipper'
    },
    {

        key: 'dispatcher',
        value: 'Dispatcher'
    },
    {

        key: 'maintenance',
        value: 'Maintenance/Technician'
    },
    {
        key: 'other',
        value: 'Other (service/product for the trucking industry)'
    }
])



const questions = ref([])

const isSubmitted = ref(false);

const responses = reactive({
    role: "",
    user_responses: []
})

const setRole = (rKey, rValue) => {
    selectedRoleKey.value = rKey;
    selectedRoleValue.value = rValue;
}

const fetchQuestions = async () => {

    if (selectedRoleKey.value === null) {
        return;
    }

    responses.role = selectedRoleValue.value;

    console.log(responses)

    isRoleSelected.value = true;

    try {
        const res = await axios.get(`https://muftardigital.pythonanywhere.com/site/survey?role=${selectedRoleKey.value}`);
        questions.value = res.data.result;
        console.log(questions.value);

    } catch (error) {
        console.log(error);
    }
}

const selectOption = (option) => {
    answer.value = option;

}

const nextQuestion = () => {
    // console.log(questions.value[c])

    if (questions.value[currentQuestion.value].qType === 'text') {
        responses.user_responses.push({
            index: currentQuestion.value,
            value: textAnswer.value
        })

        textAnswer.value = '';
    }

    if (questions.value[currentQuestion.value].qType === 'multichoice') {
        responses.user_responses.push({
            index: currentQuestion.value,
            value: answer.value
        })
    }


    if (currentQuestion.value < questions.value.length) {
        currentQuestion.value = currentQuestion.value + 1;

    }


}

const submit = async () => {
    console.log('Submit')

    isSubmitted.value = true;
    console.log(responses);

    try {
        const res = await axios.post(`https://muftardigital.pythonanywhere.com/site/survey/send`, responses);
        console.log(res);
    } catch (error) {
        console.log(error)
    }
}
</script>

<style scoped>
.bg-custom {
    background-image: url('../../assets/backgrounds/survey/survey-bg-1.png');
    background-size: 100% 100%;
    background-repeat: repeat;
}

.surveyBorder {
    position: relative;
}

.surveyBorder::after {
    content: "";
    position: absolute;
    background-image: linear-gradient(120deg, transparent, #34487D, transparent);
    border-radius: 35px;
    width: 100%;
    height: 5px;
    bottom: 0;
    left: 0;
}

.transform {
    transform-origin: top left;
}

input {
    background: transparent;
    outline: none;
}

input:focus {
    outline: none;
}
</style>