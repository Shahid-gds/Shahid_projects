<template>
  <div class="bg-white rounded px-8 py-8 mb-4 flex flex-col space-y-5 justify-center item-center">
    <h1 class="font-bold text-2xl">Delivery Order</h1>
    <BEVendorInfo :bol_gen="bol_gen" @updateVendor="updateVendor" />
    <hr />
    <!-- <BEShipTo :bol_gen="bol_gen" /> -->
    <!-- <BECargoInformation :bol_gen="bol_gen" /> -->


    <BECargoInformation :bol_gen="bol_gen" @updateCargo="updateCargo" />
    <hr />

    <h1 class="font-bold text-2xl"> Rate Confirmation</h1>
    <BECarrier :bol_gen="bol_gen" @updateCarrier="updateCarrier" />
    <hr />
    <BELoadInfo :bol_gen="bol_gen" @updateLoadInfo="updateLoadInfo" />


    <!-- <div class="flex">
        <div class="mb-4 m-5">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        email
      </label>
      <input class="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="email">
    </div>
    <div class="mb-4 m-5">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        address
      </label>
      <input class="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="address">
    </div>
    </div> -->

  </div>
  <BELoadDestinations :bol_gen="bol_gen" @updateLoadDestination="updateLoadDestination" />
  <BECommodity :bol_gen="bol_gen" @updateCommodity="updateCommodity" />

  <div class=" flex justify-center item-center">
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded w-1/3 mx-auto mt-4"
      @click.prevent="saveBol()">
      Save
    </button>
  </div>
</template>

<script setup>
import { ref, defineEmits, defineProps, watch, toRefs } from 'vue'
import { fb } from '@/_firebase/init.js'
import BEVendorInfo from './bolentry/BEVendorInfo.vue'
import BELoadInfo from './bolentry/BELoadInfo.vue'
// import BEShipTo from './bolentry/BEShipTo.vue'
import BECargoInformation from './bolentry/BECargoInformation.vue'
import BECarrier from './bolentry/BECarrier.vue'
import BELoadDestinations from './bolentry/BELoadDestinations.vue'
import BECommodity from './bolentry/BECommodity.vue'

const emit = defineEmits(['saveBol'])


const props = defineProps({
  bol_gen: Object,
})
const { bol_gen } = toRefs(props)

// import { mapState, mapMutations } from 'vuex'


// const newImg = ref('')
// const processing = ref(false)
// const rowData = ref([])

// ...mapState(['boldata'])


const updateLoadInfo = (value) => {
  bol_gen.value.load.stats = value;
  saveBol()
}

const updateCargo = (value) => {
  bol_gen.value.order.stock_info = value;
  saveBol();

}


const updateCommodity = (value) => {
  bol_gen.value.load.commodity = value;
  saveBol();
}

const updateCarrier = (value) => {
  bol_gen.value.carrier = value;
  saveBol();
}

const updateLoadDestination = (value) => {
  bol_gen.value.load.locations = value;
  saveBol()
}

const updateVendor = (value) => {
  console.log('tiggered', value)
  bol_gen.value.vendor = value
  saveBol()
}

const saveBol = () => {
  emit('saveBol', bol_gen.value)
}

const addItem = (table) => {
  if (table == 'stock_info') {
    const cell_data = {
      pkg: 0,
      description: "",
      weight: 0,
    }
    this.bol_gen.order.stock_info.push(cell_data);
    console.log(this.bol_gen.order.stock_info)
  }

  if (table == 'location') {
    const cell_data = {
      stop_idx: 1,
      stop_kind: 'pickup',
      start_date: '6/12/2022',
      end_date: '6/12/2022',
      name: '',
      address: {
        line1: '123 Main Street',
        line2: '',
        city: 'Anytown',
        state: 'ST',
        country: 'USA',
        zip: '30005'
      },
      ref_contact: '',
      appt_ref: 'no',
      notes: ''
    }
    this.bol_gen.load.location.push(cell_data);
  }

  if (table == 'commodity') {
    const cell_data = { item: 'Frozen Foods', description: 'Frozen Tilapia', pieces: 1863, spaces: 40, weight: 42000 }
    this.bol_gen.load.commodity.push(cell_data);
  }
}

const deleteRow = (table, index) => {
  if (table == 'stock_info') {
    this.bol_gen.order.stock_info.splice(index, 1);
  }
  if (table == 'location') {
    this.bol_gen.load.location.splice(index, 1);
  }
  if (table == 'commodity') {
    this.bol_gen.load.commodity.splice(index, 1);
  }
}

const uploadLogo = (evt) => {
  for (let file of evt.target.files) {
    console.log(file)
    var storeRef = fb.storage().ref('/bol_generator/logos/' + file.name);
    let uploadTask = storeRef.put(file);
    uploadTask.on('state_changed', () => {
    }, (err) => {
      console.log(err);
    }, () => {
      uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
        this.newImg = downloadURL;
        this.bol_gen.broker.logo = downloadURL
      });
    })

  }
  this.processing = false
}



watch(() => bol_gen, newValue => bol_gen.value = newValue)
</script>

<style scoped>
.inputTable input {
  width: 113px;
}

.inputTable2 input {
  width: 140px;
}
</style>
