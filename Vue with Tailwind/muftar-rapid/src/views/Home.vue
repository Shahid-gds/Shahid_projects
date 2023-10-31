<template>
  <div id="QRCode">
    <router-link class="logo-brand flex mx-auto items-center justify-center text-white text-2xl py-3"
      :to="{ name: 'About' }">
      <img src="@/assets/logo-qr.svg" />
    </router-link>

    <div class="bol-paper" v-if="!loading">
      <div class="flex justify-between items-center">
        <h1 class="my-4 font-bold text-3xl">Load Confirmation</h1>
        <div class="flex items-center text-blue-500 px-4 py-2 rounded text-xl border-2 bg-blue-100 border-blue-400">
          {{ load_data.confirmationNumber }}
        </div>
        <div class="flex">
          <div class="border-4 bg-gray-300 border-gray-600 py-2 px-4 rounded-xl"
            v-if="userdata.verification_code == ''">Guest</div>
          <div class="border-2 bg-blue-200 text-blue-500 font-bold border-blue-600 py-2 px-4 rounded-xl" v-else>
            <p class="text-sm">{{ userdata.email }}</p>
            <p class="text-xs italic">{{ userdata.role }}</p>
          </div>
        </div>
      </div>
      <!-- main section -->
      <section>
        <div v-if="current_tab == 'map'">
          <h2 class="w-10/12 font-bold ">Load Map</h2>
          <RouteMap :new_center="[-83.988994283, 33.9567159]" :destinations="load_data.destinations" />
        </div>
        <div v-else>
          <h2 class="w-10/12 font-bold  mx-auto">Load Feed</h2>
          <QRFeed :load_id="load_id" />
        </div>
        <div class=" w-2/3 mx-auto flex justify-evenly items-center mt-10">
          <button
            class="flex items-center text-center text-xl border-2 bg-blue-100 border-blue-400 px-8 py-2 rounded-lg mt-3 pr-12"
            @click="changeTab('map')">
            <img class="w-8 mr-4" src="@/assets/icons/qr-code/map.svg" />
            <span class="text-blue-600">Map</span>
          </button>
          <button class="flex items-center text-xl border-2 bg-blue-100 border-blue-400 px-8 py-2 rounded-lg mt-3 pr-12"
            @click="changeTab('feed')">
            <img class="w-8 mr-4" src="@/assets/icons/qr-code/feed.svg" />
            <span class="text-blue-600">Feed</span>
          </button>
        </div>
      </section>
      <hr class="w-7/12 mx-auto my-10" />
      <section class=" w-11/12 md:w-10/12 mx-auto">
        <h3 class="text-xl font-bold">Details</h3>
        <div class="ml-4">
          <p><span class="font-bold">Confirmation number:</span> {{ load_data.confirmationNumber }}</p>
          <p><span class="font-bold">Payment:</span> ${{ (load_data.quote.price / 100).toLocaleString() }}</p>
          <p><span class="font-bold">Load PDF:</span> {{ load_data.load_pdf }}</p>
          <p><span class="font-bold">Dispatcher:</span> {{ load_data.dispatcher_id }}</p>
        </div>

        <div class="point_locations w-11/12 md:w-10/12 mx-auto mt-5">
          <div class="text-left" v-for="(dest, idx) in load_data.destinations" :key="idx">
            <h3 class="font-bold text-lg">{{ (dest.locationType).toUpperCase() }}</h3>
            <div>
              <div>
                <p>
                  {{ $fmtDate(dest.timing.expected) }} |
                  <span class="text-gray-400 italic">
                    {{$relativeDate(dest.timing.expected) }}
                  </span>
                </p>
              </div>
              <p>{{ dest.locationName }}</p>

              <p class="text-gray-500 italic">({{ dest.coordinates.latitude }},
                {{ dest.coordinates.longitude }})</p>
              <p class="font-bold mt-4">Address:</p>
              <div class="my-1">
                <p>{{ dest.address.line1 }}, {{ dest.address.line2 }}</p>
                <p>{{ dest.address.city }}, {{ dest.address.state }}</p>
                <p>{{ dest.address.country }} {{ dest.address.zip }}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="mt-3">
          <h3 class="font-bold text-lg">Commodity</h3>
          <div v-for="(stock, idx) in load_data.cargo" :key="idx">
            <p>{{ stock.weight }} | {{ stock.item }} | {{ stock.count }}</p>
          </div>
        </div>
      </section>
      <hr class="w-7/12 mx-auto my-10" />
      <!-- The section to show the parties -->
      <section class="w-full md:w-10/12 mx-auto">
        <h3 class="font-bold text-lg">Parties</h3>
        <div class="party-grid">
          <div v-for="(pty, idx) in load_data.party" :key="idx">
            <span class="font-bold" v-if="pty.verification_code == userdata.verification_code">⭐️ </span>
            <span class="font-bold"> {{ pty.role }}:</span>
            {{ pty.id }}
          </div>
        </div>

        <!-- verification status of the load -->
        <h3>Progression</h3>
        <div v-if="loadCompleted" class="status-badge flex flex-col items-center justify-center mx-auto my-6">
          <img class="mx-auto w-1/12" src="@/assets/icons/check.svg" />
          <p class="text-2xl">This load has been completed</p>
          <p>The BOL has been confirmed</p>
          <a :href="load_data.bol" target="_blank">View BOL here</a>
        </div>
        <div class="py-3" v-else>
          <p class="font-bold">Load Completion Progress ({{ ((stepNumber / 3) * 100).toFixed(2) }}%)</p>
          <Timeline :stepNumber="stepNumber" :max="3" />
        </div>
        <p class="text-red-600 mb-4">{{ feedback }}</p>
        <div class="signatures" v-if="!loadCompleted">
          <div v-for="(sig, idx) in signaturesNeeded" :key="idx"
            class="flex items-center justify-center bg-blue-500 rounded-xl border-blue-500 border-2 w-full md:w-10/12 cursor-pointer"
            @click="testSig(idx)">
            <img v-if="sig.hasSigned" class="check-img" src="@/assets/icons/check.svg" />
            <img v-else class="check-img" src="@/assets/icons/remove.svg" />
            <div class="signer-text w-full bg-white border-blue-500 p-3 text-xs">
              <p v-if="this.userdata.verification_code != sig.verification_code && feedback1 != ''"
                class="text-red-500">{{ feedback1 }}</p>
              <p class="font-bold text-xs">{{ sig.email }} <span style="font-size:7px">({{ sig.role }})</span></p>
              <p v-if="sig.hasSigned">Has Signed</p>
              <p v-else>Has NOT Signed</p>
            </div>
          </div>

        </div>

        <div class=" w-10/12 mx-auto flex justify-evenly items-center mt-10">
          <button class="flex items-center text-xl border-2 border-black px-6 py-2 rounded-lg mt-3 mx-4"
            @click="setSignatureModal(true)" v-if="!loadCompleted">
            <span v-if="stepNumber == 3" class="text-black font-bold">Finish</span>
            <span v-else class="text-black font-bold">Signature</span>
          </button>

          <button class="flex items-center text-xl border-2 bg-blue-400 border-blue-400 px-6 py-2 rounded-lg mt-3 mx-4"
            @click="toggleShareModal(true)">
            <span class="text-white">Invite</span>
          </button>
        </div>

      </section>
    </div>
    <div v-else>
      please wait
    </div>
    <div class="flex flex-col mx-auto py-2 w-10/12 items-center justify-center">
      <p class="text-white">Get full access today with our software with Muftar</p>
      <a href="https://muftar.com" class="logo-brand flex items-center justify-center mx-auto text-white text-2xl py-3">
        <img src="@/assets/logo-qr.svg" />
      </a>
    </div>
    <SignatureModal v-if="displaySignatureModal" @hideModal="setSignatureModal" />
    <ShareModal v-if="displayShareModal" @hideModal="toggleShareModal" :load_id="load_id" />
  </div>
</template>
<script>
import axios from 'axios'
import { mapState } from 'vuex'
import mixins from '@/mixins'
import RouteMap from '@/components/qr_links/RouteMap.vue'
import QRFeed from '@/components/qr_links/QRFeed.vue'
// import load_json from '@/assets/json/dummies/load.json'
import Timeline from '@/components/snippets/Timeline.vue'
import SignatureModal from '@/components/qr_links/SignatureModal.vue'
import ShareModal from '@/components/qr_links/ShareModal.vue'

export default {
  name: 'QRCode',
  components: {
    RouteMap,
    QRFeed,
    Timeline,
    SignatureModal,
    ShareModal
  },
  data() {
    return {
      current_tab: 'map',
      loading: false,
      load_data: {
        quote:{price: 0, currency: 'USD'}, 
        destinations: [{
          address:{
            line1: "1600 Pennsylvania Avenue NW",
            line2: '',
            city: "Washington",
            state: "DC",
            zip: "20500",
            country: 'US'
          },
          locationType: '', 
          coordinates: {latitude: 39.10631973451639, longitude: -94.58200061871365},
          timing:{expected: 0, actual: 0, elapsed: 0}
        },
      ]},
      role: '',
      mixins: mixins,
      load_id: '',//this.$route.params.load_id,
      hashcode:  this.$route.params.hashcode,
      displaySignatureModal: false,
      displayShareModal: false,
      loadCompleted: false,
      feedback: '',
      feedback1: '',
      fake_load_id: "9c7ae125be0f47c1b9bb48466603bf24",
    }
  },
  methods: {
    testSig(idx) {
      if (this.userdata.verification_code != this.signaturesNeeded[idx].verification_code) {
        this.feedback1 = `You are not ${this.signaturesNeeded[idx].email}`
      } else if (this.userdata.verification_code == '') {
        this.feedback = "You must be logged in to sign; Please access this load by following link in your email"
      } else {
        this.signaturesNeeded[idx].hasSigned = !this.signaturesNeeded[idx].hasSigned
      }
    },
    renderAddress({ data, idx, key }) {
      console.log(data.destinations, 'test')
      return data && data.destinations && data.destinations[idx] && data.destinations[idx].address && data.destinations[idx].address[key]
    },
    changeTab(val) {
      this.current_tab = val
    },
    setSignatureModal(val) {
      this.displaySignatureModal = val
      // this.loadCompleted = val
    },
    toggleShareModal(val) {
      this.displayShareModal = val
    },

    getLoadData() {
      this.loading = true
      console.log(this.load_id)
      const config = {
        headers: {
          // loadID: this.fake_load_id
          hashcode: this.hashcode
        }
      }
      axios.get('https://muftardigital.pythonanywhere.com/rapid/loads/one', config).then((res)=>{
        this.load_data = res.data.result
        this.load_id = this.load_data._id
        this.loading = false
        console.log(res.data.result)
      }).catch((error) =>{
        this.loading = false
        console.log(error)
      })
    },


  },
  computed: {
    ...mapState(['userdata']),
    stepNumber() {
      let completed_sigs = 0
      for (let cs in this.signaturesNeeded) {
        if (this.signaturesNeeded[cs].hasSigned == true) {
          completed_sigs = completed_sigs + 1
        }
      }
      return completed_sigs
    },
    signaturesNeeded() {
      const party = this.load_data.party
      let signatures = []
      for (let pty in party) {
        if (party[pty].role == 'shipper_facility' || party[pty].role == 'shipper_receiver' || party[pty].role == 'driver') {
          signatures.push(party[pty])
        }
      }
      return signatures
    }
  },
  mounted() {
    this.getLoadData()
  }
}
</script>
<style scoped>
#QRCode {
  background-color: var(--primary);
  min-height: 100vh;
  /* max-width: 900px;
    margin: 0 auto ; */
}

.logo-brand {
  text-decoration: none;
}

.logo-brand img {
  width: 35%;
  max-width: 320px;
}

.bol-paper {
  width: 96%;
  min-height: 80vh;
  padding: 2rem;
  padding-top: 1rem;
  margin: auto;
  background-color: #fff;
  border-radius: 15px 15px 0 0;
}

.point_locations {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 0px;
  justify-items: stretch;
  align-items: stretch;
}

.party-grid {
  width: 80%;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 0px;
  justify-items: stretch;
  align-items: stretch;
}

.signatures {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-column-gap: 2px;
  grid-row-gap: 5px;
  justify-items: stretch;
  align-items: stretch;
}

.status-badge {
  border-radius: 10px;
  background-color: #ececec;
  /* border: 6px dashed #60A5FA; */
}

.check-img {
  width: 1.4rem;
  margin: 0 .5rem;
}

.signer-text {
  border-radius: 30px 5px 5px 30px;
}

@media only screen and (min-width: 600px) {
  .party-grid {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
  }

  .status-badge {
    border: 6px dashed #60A5FA;
  }
}
</style>
