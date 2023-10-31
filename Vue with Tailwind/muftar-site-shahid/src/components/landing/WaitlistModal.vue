<template>
<div class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
<div class="opacity-layer" @click="hideModal()"></div>
<div class="relative my-6 w-10/12">
<!--content-->
<div class="border-0 rounded-2xl shadow-lg relative flex flex-col w-full outline-none focus:outline-none" v-if="!processing && !successAlert">
  <div class="cross-btn-holder">
            <button v-on:click="hideModal()">X</button>
        </div>
    <div class="full-section2 pt-10 rounded-xl" >
        <h2 class="text-center text-3xl font-bold" style="color:#3F5CA4">JOIN OUR WAITLIST!</h2>
        <form class="mb-4 flex items-center">
            <div class=" p-12 w-11/12 md:w-8/12 lg:5/12 mx-auto rounded-3xl" v-if="!processing && !successAlert">
              <h2 class="text-xl font-bold">Company Information</h2>
              <p class="text-red-500 italic">required</p>
              <p class="text-lg">{{feedback}}</p>
              <div class="flex mx-auto rounded-3xl waitlistMob">
                  <div class="mb-4" v-for="(field,idx) in form_fields" :key="idx">
                    <label class="block text-sm font-bold mb-2"  for="username">
                      {{field.label}} <span class="text-red-200" ></span>
                    </label>
                    <input
                      class=" shadow appearance-none border border-gray-600 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" type="text"
                      :class="{'border-red-500': reminder}"
                      v-model="field.value" :placeholder="field.placeholder"
                    />
                  </div>
              </div>
              <!-- <hr class="w-8/12 mx-auto my-3"/>
              <h2 class="text-xl font-bold">Reprensentaive  Information</h2>
              <p class="text-gray-500 italic">optional</p>
              <div class="flex mx-auto rounded-3xl waitlistMob">
                  <div class="mb-4" v-for="(field,idx) in rep_fields" :key="idx">
                    <label class="block text-sm font-bold mb-2"  for="username">
                      {{field.label}}
                    </label>
                    <input
                      class=" shadow appearance-none border border-gray-600 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" type="text" v-model="field.value" :placeholder="field.placeholder"
                    />
                  </div>
              </div> -->
              <hr class="w-8/12 mx-auto my-3"/>
              <div class="relative">
                <h2 class="text-xl font-bold">Social Media</h2>
                <p class="text-gray-500 italic">optional</p>

                <button class="absolute right-0 top-0 text-blue-900 bg-blue-100 border  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 hover:bg-blue-200" @click.prevent="hasSocialMedia = !hasSocialMedia">
                  Add Social Media +
              </button>
              </div>
              <div class="flex mx-auto rounded-3xl waitlistMob" v-if="hasSocialMedia">
                  <div class="mb-4" v-for="(field,idx) in social_fields" :key="idx">
                    <label class="block text-sm font-bold mb-2"  for="username">
                      {{field.label}}
                    </label>
                    <input
                      class=" shadow appearance-none border border-gray-600 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" type="text" v-model="field.value" :placeholder="field.placeholder"
                    />
                  </div>
              </div>

              <hr class="w-8/12 mx-auto my-3"/>
              <div class="flex justify-center items-center mt-6">
                <button class="submitWait2 w-24" @click.prevent="validate()">Submit</button>
              </div>
            </div>
            <div class=" bg-white p-12 w-11/12 md:w-8/12 lg:5/12 mx-auto rounded-3xl box" v-else-if="processing">
              <p class="italic">Please Wait...</p>
            </div>
            
        </form>
  </div>
</div>
<div class=" bg-white p-12 w-11/12 md:w-8/12 lg:5/12 mx-auto rounded-3xl box text-center" v-else-if="!processing && successAlert">
    <h1 class="text-3xl lg:text-5xl my-10 font-bold mx-auto text-green-400">You are on the Waitlist!</h1>
    <p  class="text-lg lg:text-3xl my-5 text-gray-600">Be on the look out in your email when we launch! We will be in touch!</p>
    <p  class="text-lg lg:text-3xl text-gray-600" >In the meantime feel free to follow us on social media!</p>
</div>
</div>
</div>
</template>
<script>
import axios from 'axios'
export default{
    data(){
        return{
            processing: false,
            successAlert: false,
            reminder: false,
            hasSocialMedia: false,
            feedback: '',
            form_fields: [
                {label: 'Company Name', placeholder:'Acme Co.', value:'', input_type:'text', isRequired:false},
                // {label: 'DOT Number', placeholder:'US DOT #123456 GA', value:'', input_type:'text', isRequired:false},
                // {label: 'MC Number', placeholder:'1234567', value:'', input_type:'text', isRequired:false},
                {label: 'Company Website', placeholder:'https://example.com', value:'', input_type:'text', isRequired:false},
                {label: 'Company Phone Number', placeholder:'+1 (770) 555-5555', value:'', input_type:'text', isRequired:false},
                {label: 'Company Email', placeholder:'my@email.com', value:'', input_type:'text', isRequired:false},
            ],
            rep_fields: [
                {label: 'Represenative Name', placeholder:'John Doe', value:'', input_type:'text', isRequired:false},
                {label: 'Represenative Email', placeholder:'email.com', value:'', input_type:'text', isRequired:false},
                {label: 'Represenative Phone', placeholder:'+1 (770) 555-5555', value:'', input_type:'text', isRequired:false},
            ],
            social_fields:[
                {label: 'Facebook', placeholder:'facebook.com/', value:'', input_type:'text', isRequired:false},
                {label: 'Twitter', placeholder:'twitter.com or @twitter', value:'', input_type:'text', isRequired:false},
                // {label: 'Instagram', placeholder:'instagram.com or @instagram', value:'', input_type:'text', isRequired:false},
                {label: 'LinkedIn', placeholder:'linkedin.com/', value:'', input_type:'text', isRequired:false},
            ]
        }
    },
    methods:{
        hideModal(){
            this.$emit('hideModal', '')
        },
        validate(){
        if( this.form_fields[0].value == '' ||
            this.form_fields[1].value == '' ||
            this.form_fields[2].value == '' ||
            this.form_fields[3].value == ''){
            this.feedback = 'Please enter all fields in this section'
            this.reminder = true
        }else{
            this.sendWaitlistForm()
        }
        },
        sendWaitlistForm() {
        this.processing = true
        const config ={
            headers: {}
        }
        const payload = {
            company_name: this.form_fields[0].value,
            // mc_number: this.form_fields[2].value,
            // dot_number: this.form_fields[1].value,
            company_website: this.form_fields[1].value,
            company_phone: this.form_fields[2].value,
            company_email: this.form_fields[3].value,
            rep_name: this.rep_fields[0].value,
            rep_email: this.rep_fields[1].value,
            rep_phone: this.rep_fields[2].value,
            facebook: this.social_fields[0].value,
            twitter: this.social_fields[1].value,
            linkedin: this.social_fields[2].value,
            instagram: this.social_fields[3].value
        }
        axios.post('https://muftardigital.pythonanywhere.com/waitlist', payload, config
        ).then((res)=>{
            this.processing = false
            console.log(res.data)
            this.successAlert = true
        }).catch((err)=>{
            console.log(err)
        })
        },
    }
}
</script>
<style scoped>
.opacity-layer{
    /* background-color: #ee2399; */
    position: absolute;
    cursor:pointer;
    height: 100%;
    width: 100%;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
}

.waitlistMob{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 20px;
  justify-items: stretch;
  align-items: stretch;
}

.cross-btn-holder {
    position: absolute;
    top: -12px;
    right: -12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    z-index: 56;
}

.cross-btn-holder button {
    background-color: #4863ad;
    border-radius: 50px;
    width: 30px;
    height: 30px;
    font-size: 16px;
    transition: 0.5s;
}
.submitWait2 {
  padding: 10px;
  width: 20%;
  border-radius: 10px;
  margin: 0 20%;
  background-color: rgb(63,92,164);
  color: #fff;
  transition: 1s;
}
.submitWait:hover{
  opacity: .8;
}
.customeCard {
  width: 50%;
  display: block;
  margin: auto;
}
.waitListBtn {
  display: flex;
  margin: auto;
}
input{
  background-color: #fff;
  border: 2px soild #acacac;
}
.callnow {
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(3.5px);
  -webkit-backdrop-filter: blur(3.5px);
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}
.full-section2 {
  width: 100%;
  min-height: 60vh;
  padding-bottom: 1rem;
  overflow: hidden;
  position: relative;
  background-color: #f8f8f8;
}
.req-quote-group {
  width: 100%;
  height: 100%;
}
.quote-form {
  width: 50rem;
}
.box {
  box-shadow: 0 25px 50px -12px rgba(13, 139, 139, 0.25) !important;
}
@media screen and (max-width: 900px) {
  .full-section {
    min-height: 80vh;
  }
  .submitWait2 {
    padding: 15px;
    font-size: 1.2rem;
    width: 40%;
    border-radius: 10px;
    margin: 0 auto;
    background-color: rgb(63,92,164);
    color: #fff;
    transition: 1s;
  }
  form.quote-form.glassmorph.p-10.min-w-96.rounded-xl.shadow-lg.w-9\/12 {
    width: 100%;
  }
  .waitlistMob {
    display: block !important;
  }
  /* .shadow-2xl {
    --tw-shadow: 0 25px 50px -12px rgba(13, 139, 139, 0.25) !important;
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
      var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow) !important;
  } */
}
.outline-none{
      outline: 2px solid transparent;
    outline-offset: 2px;
    background-color: #00000080;
}
</style>