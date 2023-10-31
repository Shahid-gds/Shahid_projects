<template>
<div class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
    <div class="opacity-layer" @click="hideModal()"></div>
<div class="relative my-6">
<!--content-->
<div class="border-0 rounded-2xl shadow-lg relative flex flex-col w-full outline-none focus:outline-none bg-white" >
    <!--header-->
    <!--body-->
    <div class="text-black body modal-body rounded">
    <div class="cross-btn-holder">
        <button v-on:click="hideModal()">X</button>
    </div>
    <div class="modal-title">
        <div class="phone-icon">
        <img src="@/assets/Iconawesome-ph.svg" />
        </div>
        <div class="tit-heading">
        <h3>Get In touch</h3>
        <p>We are open for communication</p>
        </div>
    </div>
    <div class="modal-form">
        <p class="text-green-600 font-bold">{{feedback}}</p>
        <form v-if="!processing">
            <div class="form-control">
            <div class="form-data-block">
                <label for="fname">First Name</label>
                <input type="text" id="fname" name="fname" placeholder="Enter First Name" v-model="fname">          
            </div>
            <div class="form-data-block">
                <label for="lname">Last Name</label>
                <input type="text" id="lname" name="lname" placeholder="Enter Last Name" v-model="lname">           
            </div>
            </div>
            <div class="form-control">
            <div class="form-data-block">
                <label for="email">Email Address</label>
                <input type="text" id="email" name="email" placeholder="Enter Email Address" v-model="email">           
            </div>
            <div class="form-data-block">
                <label for="phone">Phone Number</label>
                <input type="text" id="phone" name="phone" placeholder="Enter Phone Number" v-model="phone">        
            </div>
            </div>
            <div class="form-control">
            <div class="form-data-block">
                <label for="message">Type Message</label><br>
                <textarea name="message" id="modal-msg" class=" resize-none" style="height: 15rem;" placeholder="Type Message Here..." v-model="message"></textarea>            
            </div>
            </div>
            <div class="flex items-center justify-center flex-wrap">
                <a class="submitColor w-40 mt-10 px-4 py-4 rounded md:flex items-center justify-center text-white md:px-5 py-1 glassmorph-nav text-center cursor-pointer" @click="sendContact()">Send</a>
            </div>
        </form> 
        <div v-else>
            <p class="italic">Please Wait...</p>
        </div>
    </div>
    </div>
    
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
            feedback: '',
            fname:'',
            lname:'',
            email:'',
            phone: '',
            topic:'',
            message: ''
        }
    },
    methods:{
        hideModal(){
            this.$emit('hideModal', '')
        },
        sendContact(){
            this.processing = true
            const payload = {
                name: `${this.fname} ${this.lname}`,
                email: this.email,
                phone: this.phone,
                topic: this.topic,
                message:this.message
            }
            axios.post('https://muftardigital.pythonanywhere.com/contact', payload
            ).then((res)=>{
                this.processing = false
                this.feedback = res.data.feedback
                this.fname = ''
                this.lname = ''
                this.email = ''
                this.phone = ''
                this.topic = ''
                this.message = ''
                console.log(res.data)
                this.processing = false
            }).catch((err)=>{
                console.log(err)
            })
        }
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
.modal-body {
    background-color: #fff;
    padding: 30px;
    width: clamp(420px, 70vw, 800px);
    zoom: 0.8;
}

.modal-body .cross-btn-holder {
    position: absolute;
    top: -12px;
    right: -12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
}

.modal-body .cross-btn-holder button {
    background-color: #4863ad;
    border-radius: 50px;
    width: 30px;
    height: 30px;
    font-size: 16px;
    transition: 0.5s;
}

.modal-body .modal-title {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 25px;
}

.modal-body .modal-title .tit-heading h3 {
    font-size: clamp(18px, 3.2vw, 25px);
    font-weight: 700;
    color: #4863ad;
}

.modal-body .modal-title .tit-heading h3 + p {
    font-size: 12px;
}

.modal-body .modal-title .phone-icon {
    width: 45px;
}

.modal-body .modal-form {
}

.modal-body .modal-form form {
    width: 100%;
}

.modal-body .modal-form form .form-control {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 10px;
}

.modal-body .modal-form form .form-control .form-data-block {
  flex: 1 1 150px;
  display: flex;
  flex-direction: column;
}

.modal-body .modal-form form .form-control .form-data-block input {
    background-color: #fff;
    padding: 5px 15px;
    box-sizing: border-box !important;
    border-radius: 10px;
    font-size: clamp(12px, 3.2vw, 15px);
    box-shadow: 1px 1px 9px -5px #000;
}

.modal-body .modal-form form .form-control .form-data-block label {
    font-size: clamp(12px, 3.2vw, 15px);
        margin-bottom: 3px;
    display: inline-block;
}

.modal-body .modal-form form .form-control .form-data-block{
    margin-top: 15px;
}
.modal-body .modal-form form .form-control .form-data-block textarea {
    width: 100%;
    background-color: #fff;
    padding: 15px;
    box-shadow: 1px 1px 9px -5px #000;
    font-size: clamp(12px, 3.2vw, 15px);
}
.submit-btn {
    text-align: center;
    margin-top: 15px;
    color: #fff;
}
.outline-none{
      outline: 2px solid transparent;
    outline-offset: 2px;
    background-color: #00000080;
}
</style>