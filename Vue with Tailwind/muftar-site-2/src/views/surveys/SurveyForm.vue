<template>
  <div class="surveyBg">

    <div class="relative top-32 w-2/3 mx-auto mainHeading">
      <div class="flex justify-center flex-col items-center">
        <img class="w-1/2 md:w-96" src="@/assets/logo2-full-white.svg" alt="">
        <h2 class="font-light text-3xl text-white surveyBorder pb-2">Trucking and Logistics Survey</h2>
      </div>
    </div>


    <div class="container pt-64">
      <!-- <div id="progress" :style="{ width: progress }"></div> -->
      <h1 class="text-black" :class="{ 'show-final': showFinal }">
        Thank you for your Survey!!
      </h1>

      <div id="register">
        <div v-if="surveyStarted == false">
          <h1 class="text-2xl font-bold mb-4">Welcome to Muftar Survey!</h1>
          <p class="mb-4">
            As we are building our software, we want our app to help the trucking industry.
          </p>
          <p class="text-gray-500 italic mb-4">Estimated time: 2-5 minutes</p>
          <p class="mb-6">If you have any questions, please contact support!</p>
          <button @click="surveyStarted = true" class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
            START
          </button>
        </div>
        <div v-else-if="surveyStarted == true" id="inputContainer" :class="{ showContainer: showContainer }">
          <form @submit.prevent="checkStep">
            <input :type="inputType" v-model="inputValue" ref="registerinput" required />
            <label id="inputLabel">{{ inputLabel }}</label>

            <div>
              <Multichoice :question="surveyStep" :options="surveyStep" @selectOption="selectOption" />
            </div>
          </form>

          <div id="inputProgress"></div>
          <!-- <i v-if="position === 0" class="previousButton fas fa-user"></i> -->
          <div class="flex justify-between">
            <p v-if="position === 0"></p>
            <button class="p-1 m-2 w-20" v-else @click="previousStep">Back</button>
            <!-- <i class=" fas fa-arrow-right" @click="checkStep"></i> -->
            <button class="p-1 m-2 w-20" @click="checkStep">Next</button>
          </div>
        </div>

      </div>
    </div>
  </div>
  <div class="absolute flex bottom justify-center items-center centered-axis-x bottom-4">
    <img class="w-24" src="@/assets/logo2-w.svg" alt="">
  </div>
</template>

<script>
import axios from 'axios'
import { setTimeout } from "timers";
import Multichoice from '@/views/surveys/Multichoice.vue'

export default {
  components: {
    Multichoice
  },
  data: () => {
    return {
      surveyStarted: true,
      position: 0,
      inputLabel: "",
      inputType: "text",
      inputValue: "",
      showContainer: false,
      showFinal: false,
      progress: "0%",
      questions: [
        {
          id: 0,
          label: "How many trucks are in your fleet?",
          type: "text",
          value: "",
          options: [],
          category: "",
          metadata: ""

        },
        {
          id: 1,
          label: "How many trucks are in your fleet?",
          type: "multichoice",
          value: "",
          options: [],
          category: "",
          metadata: ""
        },
      ],
      surveyStep: {
        label: "How many trucks are in your fleet?",
        type: "multichoice",
        value: [],
        pattern: /.+/,
        id: 0,
      },
    };
  },
  methods: {
    startSurvey() {
      console.log('show')
      this.surveyStarted = true
    },
    getSurveyQuestions(role, idx) {
      let query = ''
      if (role != '') {
        query = `?role=${role}&idx=${idx}`
      }
      axios.get(`https://muftardigital.pythonanywhere.com/site/survey${query}`).then((res) => {
        this.surveyStep = res.data.result[0]
        console.log(res.data)
      }).catch((err) => {
        console.log(err)
      })
    },
    setStep() {
      this.inputLabel = this.surveyStep.label;
      this.inputType = this.surveyStep.type;
      this.inputValue = this.surveyStep.value;
      this.$refs.registerinput.focus();
      this.showStep();
    },
    showStep() {
      setTimeout(() => {
        this.showContainer = true;
      }, 100);
    },
    hideStep(callback) {
      this.showContainer = false;
      setTimeout(callback, 100);
    },
    previousStep() {
      let register = document.getElementById("register");
      this.position -= 1;
      register.className = "";
      this.hideStep(this.setStep);
      this.setProgress();
    },
    checkStep() {
      let register = document.getElementById("register");
      if (!this.registerSteps[this.position].value == '') {
        register.classList.add("wrong");
        register.classList.add("wronganimation");
        setTimeout(() => {
          register.classList.remove("wronganimation");
        }, 500);
        this.$refs.registerinput.focus();
      } else {
        let register = document.getElementById("register");
        register.className = "";
        register.classList.add("okanimation");
        setTimeout(() => {
          register.classList.remove("okanimation");
        }, 200);

        this.registerSteps[this.position].value = this.inputValue;

        this.position += 1;
        if (this.registerSteps[this.position]) {
          this.hideStep(this.setStep);
        } else {
          let register = document.getElementById("register");
          this.hideStep(() => {
            register.className = "close";
            this.sendSurveyResponse()
            setTimeout(() => {
              this.showFinal = true;
            }, 1000);
          });
        }
      }
      console.log(this.position)
      this.setProgress();
    },
    setProgress() {
      this.progress = (this.position / this.registerSteps.length) * 100 + "%";
    },

  },
  mounted() {
    // let register = document.getElementById('register');

    this.setStep();
  },
  created() {
    this.getSurveyQuestions()
  }
};
</script>


<style scoped>
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

.surveyBg {
  background-image: url("../../assets/backgrounds/survey/survey-bg.png");
  /* background-size: cover; */
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
}

.centered-axis-x {
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
}

.container {
  position: relative;
  color: rgb(255, 255, 255);
  font-size: 1rem;
  color: rgb(255, 255, 255);
  font-family: "Open Sans", sans-serif;
  width: 100%;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  /* background: radial-gradient(#009345, #1064be); */
}

.container #progress {
  position: absolute;
  top: 0;
  left: 0;
  height: 4px;
  width: 0;
  background: #fff;
  transition: width 0.5s ease-in-out;
}

.container h1 {
  position: absolute;
  width: max-content;
  font-size: 2rem;
  color: rgb(255, 255, 255) !important;
  opacity: 0;
  transition: 0.5s ease-in-out;
}

h1.show-final {
  opacity: 1;
}

.container #register {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: 0.8s ease-in-out;
}

.container #register .close {
  width: 0%;
  padding: 10px 0;
  overflow: hidden;
  transition: 0.8s ease-in-out;
  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.2);
}

.container #register .previousButton {
  font-size: 2rem;
  color: #ffffff;
  cursor: pointer;
  z-index: 20;
}

.container #register .previousButton:hover {
  color: #009345;
}

.forwardButton {
  position: absolute;
  top: 30px;
  right: 20px;
  font-size: 3rem;
  color: #106b4e;
  cursor: pointer;
  z-index: 20;
}

.forwardButton:hover {
  color: #009345;
}

.wrong .forwardButton {
  color: #d93f38;
}

.close .forwardButton,
.close .previousButton {
  color: #fff;
}

#inputContainer {
  width: 80%;
  position: relative;
  padding: 30px 20px 20px 20px;
  margin-right: 60px;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

#inputContainer input {
  position: relative;
  width: 100%;
  font-size: 1.35rem;
  font-weight: bold;
  outline: 0;
  background: transparent;
  box-shadow: none;
  border: none;
  padding: 15px;
}

#inputContainer input:valid+#inputLabel {
  top: 3px;
  left: 42px;
  font-size: 0.7rem;
  font-weight: normal;
  color: rgb(255, 255, 255);
}

#inputLabel {
  position: absolute;
  top: 50px;
  left: 35px;
  font-size: 1.1rem;
  /* font-weight: bold; */
  pointer-events: none;
  transition: 0.2s ease-in-out;
}

#inputProgress {
  width: 0%;
  border-bottom: 6px solid #ffffff;
  border-radius: 5px;
  transition: width 0.6s ease-in-out;
}

button {
  color: #ffffff;
  border: 1px solid #ffffff;
}

button:hover {
  color: rgb(0, 0, 0);
  background: #ffffff;
}

.wrong #inputProgress {
  border-color: #d93f38;
}

.showContainer {
  opacity: 1 !important;
}

.showContainer #inputProgress {
  width: 100%;
}

.wronganimation {
  animation: 0.5s linear 0s 1 wrong-animation;
}

.okanimation {
  animation: 0.2s linear 0s 1 ok-animation;
}

@keyframes wrong-animation {
  0% {
    transform: translateX(0);
  }

  20% {
    transform: translateX(-20px);
  }

  40% {
    transform: translateX(20px);
  }

  60% {
    transform: translateX(-20px);
  }

  80% {
    transform: translateX(20px);
  }

  100% {
    transform: translateX(0);
  }
}

@keyframes ok-animation {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(10px);
  }

  100% {
    transform: translateY(0);
  }
}

.mainHeading {
  width: 85%;
}

@media (min-width: 1536px) {
  .container {
    max-width: 100%;
  }
}

@media screen and (max-width: 900px) {
  #inputContainer {
    width: 90% !important;
    margin-right: 0%;
  }

  #inputLabel {
    font-size: 1.1rem;
    top: -25px;
  }

  .container h1 {
    font-size: 1.25rem;
  }

  #inputContainer input {
    font-size: 1rem;
  }

  .mainHeading h2 {
    font-size: 1.20rem !important;
  }

  .mianHeading {
    left: 0 !important;
    padding-left: 27px;
    width: 95%;
  }
}</style>
