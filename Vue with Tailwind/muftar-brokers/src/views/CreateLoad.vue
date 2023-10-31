<template>
  <div class="container mx-auto bg-[white] shadow-xl p-6 rounded-xl 2xl:w-[60%] w-full mt-3">
    <div class="flex justify-between items-center">
      <div class="font-[600] text-2xl">
          <h1>Load Generator</h1>
      </div>
      <div class="font-[600] text-2xl text-[#BEBEBE]">
          <h1>v0.1.7</h1>
      </div>
    </div>
   <div class="mt-6 border-b-2 pb-3">
      <div class="text-xl font-[600]">
          <h1>Broker</h1>
      </div>
      <div class="flex space-x-1 items-center">
          <div class="mt-2">
              <input type="checkbox" class="w-5 h-5 custom-checkbox cursor-pointer" checked>
          </div>
          <div>
              <p>Use Test broker</p>
          </div>
      </div>
   </div>
   <div class="pt-2 pb-4">
      <div class="text-xl font-[600]">
          <h1>Carrier</h1>
      </div>
      <div class="flex space-x-1 items-center">
          <div class="mt-2">
              <input type="checkbox" class="w-5 h-5 custom-checkbox cursor-pointer" checked>
          </div>
          <div>
              <p>Use Test carrier (Muftar Demo)</p>
          </div>
      </div>
   </div>
   <div class="flex space-x-2 border-b-2 pb-2">
      <div class="p-2 px-6 rounded-lg cursor-pointer bg-[#B6CBEF] text-[#3A54B4] font-[600]">Use Muftar Demo</div>
      <div class="p-2 px-10 rounded-lg cursor-pointer bg-[#3A54B4] text-[white] font-[600]">Use Muftest</div>
   </div>
 <div class="space-y-2">
    <div class="flex w-full space-x-3 mt-3">
      <div class="w-full space-y-2">
          <label class="font-bold" for="">Rate Confirmation #</label>
          <input class="w-full rounded-lg p-2 border-[#E1E4EB] border-2" type="text" placeholder="Confirmation #" v-model="confirmationNumber">
          <input class="w-full rounded-lg p-2 border-[#E1E4EB] border-2" type="text" placeholder="Trailer" v-model="trailer">
      </div>
      <div class="w-full">
          <label class="font-bold" for="">Rates</label>
          <p class="italic">The number input should be entered as pennies</p>
          <input class="w-full rounded-lg p-2 border-[#E1E4EB] border-2 text-right" type="text" placeholder="" v-model="totalRateInPennies">
          <div class="">
            <span class="text-md font-[600]">Total Rate:</span> <span>${{ (totalRateInPennies / 100).toFixed(2) }}</span>
          </div>
      </div>
    </div>
 </div>
 <!-- Load Destinations -->
 <div class="space-y-2 mt-8">
    <div class="w-full mt-3">
      <div class="w-full flex justify-between">
          <div class="font-bold text-xl" for="">Load Destinations</div>
          <div class="rounded-lg text-[white] p-2 px-6 bg-[#3A54B4] cursor-pointer" @click="addmoredestination">Add</div>
      </div>
      <!-- form -->
      <div class="mt-10 border-2 rounded-lg pb-10">
          <div class="w-full">
              <div v-for="(destins, index) in destinations" :key="index" class="p-4">
                  <!-- <div class="w-[1rem]">
                      <div class="w-[1rem] -mt-10 text-[#3A54B4]">
                        {{index + 1}}
                      </div>
                  </div> -->
            <div class="w-full space-y-4">
              <div class="w-full flex space-x-3">
                  <div class="w-full">
                      <div>
                          <div class="text-[#444444] font-[600]">
                              <label for="">Departure Time</label>
                          </div>
                          <div class="space-y-1">
                              <div class="w-full">
                                  <input class="border-2 rounded-lg w-full p-2" type="date" id="issuedOnInput" v-model="destins.d_date">
                              </div>
                              <div class="w-full">
                                  <input class="border-2 rounded-lg p-2 w-full" type="time" id="timeInput" v-model="destins.d_time">
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="w-full">
                      <div>
                          <div class="text-[#444444] font-[600]">
                              <label for="">Arrival Time</label>
                          </div>
                          <div class="space-y-1">
                              <div class="w-full">
                                  <input class="border-2 rounded-lg w-full p-2" type="date" id="issuedOnInput" v-model="destins.a_date">
                              </div>
                              <div class="w-full">
                                  <input class="border-2 rounded-lg p-2 w-full" type="time" id="timeInput" v-model="destins.a_time">
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
            <div class="flex items-center space-x-2">
              <div class="border-b-2 w-full"></div>
              <div class="text-[#444444] font-[600]">
                  <label for="">{{ index === 0 ? 'Pickup' : 'Dropoff' }}</label>
                </div>                  
              <div class="border-b-2 w-full"></div>
            </div>
              <div class="w-full flex space-x-3">
               
                 <!-- Inside your template -->
            <div class="w-full">
              <label class="font-bold" for=""></label>
              <select class="w-full border-2 p-2 rounded-lg outline-none" v-model="destins.location_type">
                  <option value="pickup">Pickup</option>
                  <option value="dropoff">Dropoff</option>
              </select>
            </div>

              </div>
              <div class="w-full flex space-x-3">
                  <div class="w-full">
                      <div class="text-[#444444] font-[600]">
                          <label for="">Street Address/Unit #</label>
                      </div>
                      <div class="w-full">
                          <input type="text" name="" id="" class="border-2 p-2 w-full rounded-lg" placeholder="Street Address/Unit #" v-model="destins.street">
                      </div>
                  </div>
              </div>
              <div class="w-full flex space-x-3">
                  <div class="w-full">
                      <div class="text-[#444444] font-[600]">
                          <label for="">City</label>
                      </div>
                      <div class="w-full">
                          <input type="text" name="" id="" class="border-2 p-2 w-full rounded-lg" placeholder="City" v-model="destins.city">
                      </div>
                  </div>
                  <div class="w-full">
                      <div class="text-[#444444] font-[600]">
                          <label for="">State</label>
                      </div>
                      <div class="w-full">
                          <input type="text" name="" id="" class="border-2 p-2 w-full rounded-lg" placeholder="State" v-model="destins.state">
                      </div>
                  </div>
                  <div class="w-full">
                      <div class="text-[#444444] font-[600]">
                          <label for="">Zip</label>
                      </div>
                      <div class="w-full">
                          <input type="text" name="" id="" class="border-2 p-2 w-full rounded-lg" placeholder="Zip" v-model="destins.zip">
                      </div>
                  </div>
              </div>
              <div class="w-full flex space-x-3">
                  <div class="w-full">
                      <div class="text-[#444444] font-[600]">
                          <label for="">Contact</label>
                      </div>
                      <div class="w-full">
                          <select name="" id="" class="w-full border-2 p-2 rounded-lg outline-none">
                            <option value="">Name</option>
                            <option value="">Phone</option>
                          </select>
                      </div>
                  </div>
              </div>
            </div>
                <!-- <td class="text-5xl text-end">
                    <svg @click="deleteItem(index)" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 cursor-pointer">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                  </svg>
               </td> -->
              </div>
          </div>
        </div>
    </div>
 </div>
 <div class="space-y-2 mt-8">
    <div class="w-full mt-3">
      <div class="w-full flex justify-between">
          <div class="font-bold text-xl" for="">Commodity</div>
          <div class="rounded-lg text-[white] p-2 px-6 bg-[#3A54B4] cursor-pointer"  @click="addmoreItem">Add</div>
      </div>
          <div class="mt-10 border-2 p-6 rounded-lg">
            <table class="w-full">
              <thead class="text-left">
                <tr>
                  <th class="font-bold w-[2rem]"></th>
                  <th class="font-bold w-[25rem]">COMMODITY</th>
                  <th class="font-bold w-[15rem]">QUANTITY</th>
                  <th class="font-bold w-[15rem]">WEIGHT</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(field, index) in addItem" :key="index">
                  <td class="w-[2rem]">
                      <div class="w-[2rem]">
                        {{index + 1}}
                      </div>
                  </td>
                  <td class="w-[25rem]">
                    <div class="border-b-2 w-[12rem]">
                      <input class=" outline-none p-2 rounded-lg" type="text" placeholder="Feroze" v-model="commodity">
                    </div>
                  </td>
                  <td class="w-[15rem]">
                    <div class="border-b-2 w-[5rem]">
                      <input class="outline-none p-2 rounded-lg" type="text" placeholder="100" v-model="qty">
                  </div>
                  </td>
                  <td class="w-[15rem]">
                    <div class="border-b-2 w-[10rem]">
                      <input class="outline-none p-2 rounded-lg" type="text" placeholder="500" v-model="weight">
                    </div>
                  </td>
                  <td class="text-5xl text-end">
                      <svg @click="deleteItem(index)" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 cursor-pointer">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                    </td>
                </tr>
              </tbody>
            </table>
          </div>
    </div>
 </div>
 <div class="space-y-2 mt-8">
    <div class="w-full mt-3">
      <div class="w-full flex justify-between">
          <div>
              <h1 class="font-bold text-xl">Files</h1>
              <p class="italic">Upload rate confirmation here</p>
          </div>
      </div>
      <div v-if="uploadProgress === 100" class="text-[#3A54B4] mt-5 flex justify-between px-2">
          <div>
            <a :href="downloadLink" @click="downloadFile">
              {{ uploadedFileName }}
            </a> 
          </div>
          <div>{{ uploadedFileSize }}</div>
          <button @click="removeUploadedFile" class="text-[white] cursor-pointer ml-2 bg-[red] p-2 rounded-lg">Remove</button>
        </div>
          <div class="mt-2 border-2 p-6 rounded-lg flex justify-center">
              <input
              ref="fileInput"
              type="file"
              id="fileInput"
              accept=".pdf"
              style="display: none;"
              @change="handleFileUpload">
            <div v-if="!uploading" class="flex items-center cursor-pointer p-6 bg-[#3A54B4] justify-center space-x-3 w-[20rem] rounded-lg" @click="triggerFileInput">
              <div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-8 h-8">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12l-3-3m0 0l-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>                      
              </div>
              <div>
                  <h1 class="text-xl text-[white]">Click or Drop the file</h1>
              </div>
            </div>
            <div v-else>
              <!-- Progress bar -->
              <div class="relative pt-1">
                <div class="flex mb-2 items-center justify-between">
                  <div>
                    <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-[#E1E4EB]">
                      In progress
                    </span>
                  </div>
                  <div class="text-right">
                    <span class="text xs font-semibold inline-block text-[#3A5AB4]">
                      {{ uploadProgress }}%
                    </span>
                  </div>
                </div>
                <div class="flex h-2 mb-4 overflow-hidden text-[#3A54B4] bg-[#E1E4EB] rounded">
                  <div class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#3A54B4]" :style="'width:' + uploadProgress + '%'" ></div>
                </div>
              </div>
            </div>
          </div>
    </div>
 </div>
 <div class="space-y-2 mt-8">
    <div class="w-full mt-3">
      <div class="w-full flex justify-between">
          <div>
              <h1 class="font-bold text-xl">Other Details</h1>
              <p class="italic">Upload rate confirmation here</p>
          </div>
      </div>
          <div class="mt-10 rounded-lg">
            <textarea name="" id="" cols="30" rows="10" class="w-full outline-none p-4 border-dashed border-2 border-[#3A54B4] rounded-lg" placeholder="Write Additional details.." v-model="details"></textarea>
          </div>
    </div>
 </div>
<div class="flex mt-10">
  <div class="w-full"></div>
      <div class="bg-[#3C5AA8] w-40 px-7 text-[white] p-2 rounded-xl" @click.prevent="createLoad">
          <button>Create Load</button>
      </div>
</div>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue';
import axios from 'axios'
import { firebase } from '@/_firebase/init.js'


// Get the current date in the format "YYYY-MM-DD"
const currentDate = new Date().toISOString().split('T')[0];

// Set the value of the "Issued On" and "Due On" input fields to the current date
// onMounted(() => {
//   issuedOnInput.value = currentDate;
//   dueOnInput.value = currentDate;
// });
const confirmationNumber = ref('');
const trailer = ref('');
const rates = ref('$0.00');
const totalRate = ref('0.00');
const d_date = ref('');
const d_time = ref('');
const a_date = ref('')
const a_time = ref('');
const street = ref('');
const city = ref('');
const state = ref('');
const zip = ref('')
const commodity = ref('');
const qty = ref('');
const weight = ref('');
const details = ref('')
const distensCout = ref(0);
const destinations = ref([{}])
const orgID = ref('12345678')
const baseUrl = 'http://192.168.18.62:3000'
// const baseUrl = 'https://ecostructure-demo.muftar.com'
const handleFileUpload = async (event) => {
const fileInput = event.target;
const files = fileInput.files;

if (files.length > 0) {
  const selectedFile = files[0];
  if(selectedFile.type === "application/pdf"){
      simulateFileUpload(selectedFile);
     uploadPdfToFirebase(selectedFile)
     .then((downloadURL) => {
      // console.log('PDF uploaded to Firebese. Download URL:', downloadURL);
     })
     .catch((error) => {
      console.error('Error Uploading PDF to Firebase:', error)
     })
  } else{
      console.error("Invalid file Type. Please Select a PDF file.")
  }
}
};
let downloadURL = '';
const uploadPdfToFirebase = async (selectedFile) => {
try {
  const storageRef = firebase.storage().ref();
  const pdfRef = storageRef.child('BrokerCreateLoads/' + selectedFile.name);

  const snapshot = await pdfRef.put(selectedFile);

  downloadURL = await snapshot.ref.getDownloadURL();

  return downloadURL;
} catch (error) {
  console.error('Error uploading PDF to Firebase:', error);
  throw error;
}
};
const sendApiRequest = async () => {
try {
  const apiUrl = `${baseUrl}/load/new`;
  const requestData = {
    orgID: '2023',
    destinations: destinations.value.map((dest) => {
      return {
        address: {
          line1: dest.street,
          line2: '',
          city: dest.city,
          state: dest.state,
          zip: dest.zip,
          country: '',
        },
        contact: {
          email: '',
          name: '',
          phone: '',
        },
        coordinates: {
          latitude: 0,
          longitude: 0,
        },
        timing: {
          arrivalTime: dest.a_time, 
          arrivalDate: dest.a_date, 
          departureDate: dest.d_date,
          departureTime: dest.d_time,
        },
        location_type: dest.location_type,
        location_name: '',
        status: '',
      };
    }),
    loadPDF:downloadURL,
    notes: details.value,
  };
  const headers = {
    'Content-Type': 'application/json',
    brokerID: '51415221'
    // 'Authorization': `Bearer ${brokerID.value}`,
  };
  const response = await axios.post(apiUrl, requestData, { headers });
  console.log('API Response:', response.data);
} catch (error) {
  console.error('API Error:', error);
}
};

const createLoad = async () => {
await sendApiRequest();
}

const addmoredestination = () => {
if (destinations.value.length < 2) {
  const newLocationType = distensCout.value === 0 ? 'pickup' : 'dropoff';
  const newDestination = {
    selectedCurrency: newLocationType,
    d_date: '',
    d_time: '',
    a_date: '',
    a_time: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    location_type: newLocationType,
  };

  destinations.value.push(newDestination);

  distensCout.value++;
}
};


const currencies = ['Pickup', 'Dropoff'];
// const selectedCurrency = ref(null);
// const showDropdown = ref(false);

const addItem = ref([{}])
const commodityCout = ref(0);
const addmoreItem = () => {
  addItem.value.push({
   count: commodityCout.value,
  });
  commodityCout.value++;
}
const deleteItem = (index) =>{
  addItem.value.splice(index, 1)
}

const uploading = ref(false);
const uploadProgress = ref(0);
const fileInputRef = ref(null);

const uploadedFileName = ref("");
const uploadedFileSize = ref("");
const simulateFileUpload = (file) => {
uploading.value = true;
uploadProgress.value = 0;

const totalSize = file.size;
let uploadedSize = 0;
const uploadInterval = setInterval(() => {
  uploadedSize += Math.random() * 10000;

  uploadProgress.value = Math.min((uploadedSize / totalSize) * 100, 100);

  if (uploadProgress.value >= 100) {
    clearInterval(uploadInterval);
    uploading.value = false;
    uploadedFileName.value = file.name;
    uploadedFileSize.value = formatFileSize(totalSize);
    console.log('File Uploaded:', uploadedFileName)
  }
}, 10);
};
const formatFileSize = (size) => {
if (size === 0) return "0 Bytes";

const units = ["Bytes", "KB", "MB", "GB", "TB"];
const index = parseInt(Math.floor(Math.log(size) / Math.log(1024)));

return Math.round(size / Math.pow(1024, index), 2) + " " + units[index];
};
const fileRemoved = ref(false);

const removeUploadedFile = () => {
uploadedFileName.value = "";
uploadedFileSize.value = "";
if (fileInputRef.value) {
  fileInputRef.value.value = "";
}
fileRemoved.value = true;
};

const triggerFileInput = () => {
if (!uploading.value && fileInputRef.value) {
  fileInputRef.value.click();
}
};
const downloadFile = () => {
const link = document.createElement("a");
link.href = downloadLink.value;
link.download = uploadedFileName.value;
link.target = "_blank";
link.click();
};


onMounted(() => {
fileInputRef.value = document.getElementById('fileInput');
});
const downloadLink = computed(() => {
return `data:application/pdf,${uploadedFileName}`;
});
const totalRateInPennies = computed({
    get: () => {
      // Parse the input string and convert it to pennies
      const pennies = parseFloat(rates.value.replace(/\$|,/g, '')) * 100;
      return isNaN(pennies) ? 0 : pennies;
    },
    set: (value) => {
      // Convert the value from pennies to dollars and update the input
      rates.value = (value / 100).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    },
  });
</script>


<style scoped>
.custom-checkbox {
  /* Other styles */
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: 2px solid #3C5AA8;
  border-radius: 4px;
  outline: none;
  position: relative;
}

.custom-checkbox:checked {
  border-color: #3C5AA8;
}

.custom-checkbox:checked::before {
  content: "✓";
  position: absolute;
  width: 6px;
  height: 14px;
  left: 1px;
  top: -4px;
  color: #3C5AA8;
  font-weight: bold;
  transition: transform 0.2s ease;
}
/* Define the scrollbar styles */
/* Track */
::-webkit-scrollbar {
  height: 8px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #3C5AA8; 
  border-radius: 6px;
}

::-webkit-scrollbar-thumb:hover {
  background: #3A54B4; 
}

</style>