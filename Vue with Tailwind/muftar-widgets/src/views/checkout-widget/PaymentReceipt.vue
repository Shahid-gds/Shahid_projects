<template>
    <div class="container mx-auto p-2 xl:px-72" ref="receiptContent">
        <div class="bg-[#f5f7fb] my-10 w-full sm:p-20 p-4 rounded-xl">
            <div class="w-full bg-[#ffffff] p-10 rounded-xl shadow-lg">
                <div class="bg-[#e5f4ed] w-20 h-20 rounded-full p-5 mx-auto">
                    <div class="bg-[#25a26f] w-10 h-10 rounded-full text-2xl text-[white] p-1 px-2.5">
                        <span>&#10004;</span>
                    </div>
                </div>
                <div class="mx-auto text-center mt-5 text-xl text-[#383838]">
                    <p>Payment Success!</p>
                    <div class="mt-4 text-2xl text-black" v-for="receipt in receiptData" :key="receipt.id">
                        <strong> {{ receipt.amount }}</strong>
                    </div>
                </div>

            </div>
            <div class="w-full bg-[#ffffff] p-6 rounded-xl shadow-lg mt-2">
                <div class="flex items-center justify-between">
                    <div class="text-xl font-semibold">
                        <h1>Payment Details</h1>
                    </div>
                    <div @click="toggleDetail" class="cursor-pointer" :class="{ 'arrow-up': paymentDetail, 'arrow-down': !paymentDetail }">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </div>
                </div>
                <div v-if="paymentDetail">
                    <div class=" mt-10 sm:text-xl text-[#383838] flex justify-between w-full">
                        <div>
                            <p class="text-[#777777]">Ref Number </p>
                        </div>
                        <div>
                            <p class="text-black" v-for="receipt in receiptData" :key="receipt.id">{{ receipt.refNumber }}</p>
                        </div>
                    </div>
                    <div class=" mt-6 sm:text-xl text-[#383838] flex justify-between w-full">
                        <p class="w-full text-[#777777]">Payment Status </p>
                        <div class="text-black flex items-center space-x-1">
                            <div class="bg-[#25a26f] w-5 h-5 rounded-full text-sm px-1 p-0.5 text-[white]">
                                <span>&#10004;</span>
                            </div>
                            <span v-for="receipt in receiptData" :key="receipt.id">{{ receipt.status }}</span>
                        </div>
                    </div>
                    <div class=" mt-6 sm:text-xl text-[#383838] flex justify-between w-full border-b-2 pb-6 border-dashed">
                        <div>
                            <p class="text-[#777777]">Payment Time </p>
                        </div>
                        <div class="">
                            <p class="text-black" v-for="receipt in receiptData" :key="receipt.id">{{ receipt.date }}</p>
                        </div>
                    </div>
                </div>
                <div class=" mt-6 sm:text-xl text-[#383838] flex justify-between w-full border-b-2 pb-6">
                    <div>
                        <p class="text-[#777777]">Total Payment</p>
                    </div>
                    <div class="">
                        <p class="text-black font-semibold" v-for="receipt in receiptData" :key="receipt.id">
                            {{ receipt.amount }}</p>
                    </div>

                </div>
                <button class="w-full border-2 p-3 mt-6 rounded-lg flex" @click="downloadReceipt">
                    <div class="mx-auto flex space-x-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg>
                        <div class="mt-1 font-semibold">Get PDF Receipt</div>
                    </div>

                </button>
            </div>
            </div>
    </div>
</template>



<script>
import '@/assets/css/index.css'
import axios from 'axios';
import html2canvas from 'html2canvas';
import  jsPDF  from 'jspdf';
export default {
    data() {
        return {
            receiptData: [],
            paymentDetail: false
        };
    },
    mounted() {
        axios.get('http://localhost:3000/paymentReceipt')
            .then(response => {
                this.receiptData = response.data;
            })
            .catch(error => {
                console.error('Error retrieving receipt data:', error);
            });
    },
    methods: {
        downloadReceipt() {
      if (this.receiptData.length === 0) {
        console.error('No receipt data available.');
        return;
      }

      const receiptElement = this.$refs.receiptContent;

      // Adjust the scale factor and DPI based on your requirements
      const scale = 2; // Experiment with different values
      const dpi = 300; // Set a higher value for better resolution

      html2canvas(receiptElement, {
        useCORS: true,
        scale: scale,
        dpi: dpi,
        backgroundColor: '#ffffff', // Set a solid background color
      })
        .then((canvas) => {
          const imageData = canvas.toDataURL('image/jpeg');

          // Adjust the orientation if needed
          const doc = new jsPDF(canvas.width > canvas.height ? 'l' : 'p', 'mm', [
            canvas.width,
            canvas.height,
          ]);

          // Add the image of the receipt to the PDF
          doc.addImage(imageData, 'JPEG', 0, 0, canvas.width, canvas.height);
          doc.save('payment_receipt.pdf');
        })
        .catch((error) => {
          console.error('Error capturing receipt:', error);
        });
    },
toggleDetail(){
    this.paymentDetail = !this.paymentDetail
}

  }
}

</script>

<style scoped>
.arrow-up {
  transform: rotate(180deg);
}
.arrow-down {
  transform: rotate(0deg);
}
</style>