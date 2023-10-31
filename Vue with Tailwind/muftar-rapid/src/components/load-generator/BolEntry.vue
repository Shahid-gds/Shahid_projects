<template>
  <!-- <div class="flex justify-center item-center">
    <button v-if="!loading"
      class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-4 rounded w-1/3 mx-auto mt-4"
      @click.prevent="setDefaultLoadInfo()">
      Set Default Data
    </button>
    <p v-else>Please Wait...</p>
  </div> -->

  <div class="bg-white rounded px-8 py-8 mb-4 flex flex-col justify-center item-center">
    <h2 class="font-bold text-xl">Broker</h2>
    <div class="inline-block mb-4">
      <input type="checkbox" class="form-checkbox" v-model="useTestBroker" @click="onUseTestBrokerClicked" />
      <label class="ml-2">Use Test Broker</label>
    </div>
    <!-- <BEVendorInfo :vendor_data="vendor_data" @updateVendor="updateVendor" /> -->
    <BEBroker v-if="!useTestBroker" :broker_data="broker_data" @updateVendor="updateVendor" />
    <hr width="50%" />
    <!-- <BEShipTo :load_data="load_data" /> -->
    <!-- <BECargoInformation :load_data="load_data" /> -->
    <hr />
    <h2 class="font-bold text-xl">Carrier</h2>
    <div class="inline-block mb-4">
      <input type="checkbox" class="form-checkbox" v-model="useTestCarrier" @click="onUseTestCarrierClicked" />
      <label class="ml-2">Use Test Carrier (Muftar Transport)</label>
    </div>
    <div v-if="useTestCarrier" class="flex space-x-2 my-2">
      <div @click="selectCarrier('muftar_transport')"
        :class="{ 'bg-gray-500 ': selected_carrier === 'muftar_transport', 'bg-blue-400 hover:bg-blue-500': selected_carrier === 'muftest' }"
        class="px-4 py-2 w-48 text-center cursor-pointer  rounded-md text-white">Use Muftar
        Transport</div>
      <div @click="selectCarrier('muftest')"
        :class="{ 'bg-gray-500 ': selected_carrier === 'muftest', 'bg-blue-400 hover:bg-blue-500': selected_carrier === 'muftar_transport' }"
        class="px-4 py-2 w-36 text-center cursor-pointer  rounded-md text-white">Use
        Muftest</div>
    </div>
    <BECarrier v-if="!useTestCarrier" :carrier_data="carrier_data" @updateCarrier="updateCarrier" />
    <hr />
    <!-- {{ load_info }} -->
    <BELoadInfo :load_info="load_info" @updateLoadInfo="updateLoadInfo" />
    <BELoadDestinations :destinations="destinations" @updateDestinations="updateDestinations" />
    <!-- {{ cargo }} -->
    <BECommodity :cargo="cargo" @updateCargo="updateCargo" />
    <BERateFile :load_pdf="load_pdf" @updateLoadPDF="updateLoadPDF" />
    <BENotes :load_details="load_details" @updateDetails="updateDetails" />
  </div>

  <div>

  </div>

  <!-- <div class=" flex justify-center item-center">
  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded w-1/3 mx-auto mt-4" 
  @click.prevent="saveBol()">
          Save
  </button>
</div> -->
  <p class="text-red-600 text-center">{{ feedback.text }}</p>
  <div class=" flex justify-center item-center" v-if="loadID == ''">
    <button v-if="!loading" class=" text-white font-bold py-3 px-4 rounded w-1/3 mx-auto mt-4" @click.prevent="validate()"
      :class="{
        'bg-gray-500 not-allowed': load_info.quote.ask == 0,
        'bg-blue-500 hover:bg-blue-700': load_info.quote.ask != 0
      }">
      Create Load
    </button>
    <p v-else>Please Wait...</p>
  </div>
  <div v-if="loadID" class="text-center"><a href="/explorer" class="font-bold text-blue-500 underline">View Load in
      Explorer: {{
        loadID
      }}</a>
  </div>
  <!-- <p>{{ p }}</p> -->
</template>

<script setup>
import axios from 'axios'
import { ref, defineEmits, defineProps, watch, toRefs } from 'vue'
import { fb } from '@/_firebase/init.js'
import BEBroker from './bolentry/BEBroker.vue'
// import BEShipTo from './bolentry/BEShipTo.vue'
// import BECargoInformation from './bolentry/BECargoInformation.vue'
import BELoadInfo from './bolentry/BELoadInfo.vue'
import BECarrier from './bolentry/BECarrier.vue'
import BELoadDestinations from './bolentry/BELoadDestinations.vue'
import BECommodity from './bolentry/BECommodity.vue'
import BERateFile from './bolentry/BERateFile.vue'
import BENotes from './bolentry/BENotes.vue'

const emit = defineEmits(['saveBol'])
const useTestBroker = ref(true);
const useTestCarrier = ref(true);

const selected_carrier = ref('muftar_transport');

const carrier_id = ref('6408e4fb600cfc60dbda1a6d');

// vendor id for muftar transport
// VVnFjHK2PbHFD7uEI3PG


// vendor id for muftest
// XMThd77dS0oiwhKhAO7t


const loading = ref(false)
const feedback = ref({ 'text': '', 'status': '' })

const loadID = ref('')

const vendor_data = ref({
  "name": "Camerican International Inc.",
  "email": "test@email.com",
  "phone": "00000000",
  "fax": "23224242",
  "address": {
    "locationName": "",
    "line1": "45 Eisenhower Dr",
    "line2": "13",
    "city": "Atlant Paramus",
    "state": "NJ",
    "country": "USA",
    "zip": "07652-1416",
  }
})

const broker_data = ref({
  "name": "Camerican International Inc.",
  "email": "test@email.com",
  "phone": "00000000",
  "fax": "23224242",
  "address": {
    "locationName": "",
    "line1": "45 Eisenhower Dr",
    "line2": "13",
    "city": "Atlant Paramus",
    "state": "NJ",
    "country": "USA",
    "zip": "07652-1416",
  }
})

const carrier_data = ref({
  name: "Acme Trucking Co.",
  phone: "555-555-1212",
  email: 'test@email.com',
  fax: "555-555-1213",
  mc_number: "1234567",
  reference: "Invoice #123456",
  address: {
    city: 'Brentwood',
    country: 'United States',
    country_code: 'US',
    line1: '9027 Meadowlawn Drive',
    line2: '',
    state: 'Tennessee',
    state_code: 'TN',
    zip: '37027'
  },
})

const load_info = ref({
  confirmation_number: 'mobile-test1',
  quote: { ask: 0 },
  trailer: ''
})
const load_details = ref('')
const load_pdf = ref('')

const destinations = ref([
  {
    id: "0",
    locationType: 'pickup',
    address: {
      locationName: 'Best Deal Brokers',
      line1: "20 W 34th St.",
      line2: '',
      city: "New York",
      state: "NY",
      zip: "10001",
      country: 'US',

    },
    contact: { name: '', phone: '' },
    metadata: {},
    notes: '',
    timing: {
      actual: 0,
      expected: 0,
      elapsed: 0
    }
  },
  {
    id: "1",
    locationType: 'dropoff',
    address: {
      locationName: 'Best Deal Brokers',
      line1: "1600 Pennsylvania Avenue NW",
      line2: '',
      city: "Washington",
      state: "DC",
      zip: "20500",
      country: 'US',

    },
    contact: { name: '', phone: '' },
    metadata: {},
    notes: '',
    timing: {
      actual: 0,
      expected: 0,
      elapsed: 0
    }
  }
])
const cargo = ref([])

const selectCarrier = (carrier) => {
  selected_carrier.value = carrier;
  if (selected_carrier.value === 'muftest') {
    carrier_id.value = '6408e67d600cfc60dbda1a6e'
  } else if (selected_carrier.value === 'muftar_transport') {
    carrier_id.value = '6408e4fb600cfc60dbda1a6d'
  }

}


// const newImg = ref('')
// const loading = ref(false)
// const rowData = ref([])

// ...mapState(['boldata'])

const updateVendor = (value) => {
  broker_data.value = value
  // saveBol()
}

const updateCarrier = (value) => {
  carrier_data.value = value
  // saveBol()
}

const updateDestinations = (value) => {
  destinations.value = value
  // saveBol()
}

const updateCargo = (value) => {
  cargo.value = value
  // saveBol()
}

const p = ref([])
const updateLoadInfo = (value) => { load_info.value = value }
const updateLoadPDF = (value) => { load_pdf.value = value }
const updateDetails = (value) => { load_details.value = value }
// const saveBol = () => {
//   emit('saveBol', load_data.value)
// }

const setDefaultLoadInfo = (dest_count = 2) => {
  let query = `?destinations=${dest_count}`

  axios.get(`https://muftardigital.pythonanywhere.com/faker/rapid/create_load${query}`,
  ).then((res) => {
    const result = res.data.result
    load_info.value = {
      confirmation_number: result.confirmation_number,
      load_type: 'Drayage',
      quote: result.quote,
      trailer: result.trailer
    }
    destinations.value = result.destinations
    cargo.value = result.cargo
    console.log("SET DEFAULT LOAD", res.data.result)
  }).catch((err) => {
    console.log(err)
  })
}
const validate = () => {
  console.log(destinations.value[0]);
  if (load_info.value.quote.ask == 0) {
    feedback.value.text = 'Rate ($) can not be zero.'
  } else if (destinations.value[0].timing.expected === 0) {
    feedback.value.text = 'Please Select Pickup Location Timing.'
  } else if (destinations.value[1].timing.expected === 0) {
    feedback.value.text = 'Please Select Dropoff Location Timing.'
  }
  else {
    feedback.value.text = '';
    createLoad()
  }
}
const createLoad = () => {

  // console.log(broker_data.value);
  // console.log(carrier_data.value);
  // console.log(load_info.value);
  console.log(destinations.value);
  // console.log(cargo.value);



  loading.value = true
  const config = {
    headers: {
      vendorID: '63f61debdd328acfd088c15c'
    }
  }
  console.log(payload);
  axios.post('https://muftardigital.pythonanywhere.com/rapid/loads/create', config
  ).then((res) => {
    const result = res.data.result
    // loading.value = false
    console.log(res.data)

    loadID.value = result.loadID
  }).catch((err) => {
    // loading.value = false
    console.log(err)
  })
}


</script>

<style scoped>
.inputTable input {
  width: 113px;
}

.inputTable2 input {
  width: 140px;
}
</style>
