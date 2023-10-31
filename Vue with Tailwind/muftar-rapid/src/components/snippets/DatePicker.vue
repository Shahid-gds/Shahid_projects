<template>
    <div class="flex relative text-left">
      <div class="">
        <input v-model="date" type="date" id="date" class="form-input py-2 px-3 block w-full leading-5  transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-300 focus:ring-indigo-200" @change="setDateTime()"/>
        <input v-model="time" type="time" id="time" class="form-input py-2 px-3 block w-full leading-5  transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-300 focus:ring-indigo-200" @change="setDateTime()"/>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props:['idx'],
    data() {
      return {
        date: new Date(),
        time: new Date(),
        isOpen: true,
      }
    },
    methods:{
        setDateTime(){
            console.log(this.date)
            console.log(this.time)
            if(this.time instanceof Date){
                this.time = '00:00'
            }
            const dateTime = new Date(this.date + " " + this.time)
            const timestamp = Number(dateTime.getTime()/1000)
            this.$emit('setDateTime', timestamp, this.idx)
        }
    },
    computed: {
      dateFormatted() {
        return this.date.toLocaleDateString()
      },
      timeFormatted() {
        return this.time.toLocaleTimeString()
      },
    },
  }
</script>
  