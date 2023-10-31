<template>
  <div class="w-1/4 px-4 pt-4 px-" id="LoadInformation">
    <section id="top-button" class="flex justify-end items-center">
      <button class="border-2 border-solid border-gray-400 text-gray-400 px-1">
        DISPATCHERS
      </button>
    </section>
    <section
      id="load-information"
      class="flex flex-col justify-center items-center mt-2"
    >
      <h1 class="text-gray-500 text-xl font-semibold">LOAD INFORMATION</h1>
      <!-- FIRST CARD -->
      <div
        id="first-card"
        class="w-full p-1 border-2 border-solid border-primary rounded-md mb-2"
      >
        <div class="flex justify-between items-center">
          <i class="fas fa-truck-moving fa-3x"></i>
          <h1 class="text-lg text-blue-700 font-semibold">
            {{ load_info.confirmation_number }}
          </h1>

          <p
            class="text-yellow-700 bg-yellow-200 px-2 text-sm"
            v-if="!load_info.assignment.assigned"
          >
            Waiting Fullfilment
          </p>
          <p
            class="text-green-700 bg-green-200 px-2 text-sm"
            v-else-if="load_info.assignment.assigned"
          >
            Load En Route
          </p>
        </div>
        <hr />
        <br />
        <div id="details">
          <h3 class="text-blue-700">PICKUPS</h3>
          <section
            class="flex items-center text-sm"
            v-for="(pick, p_idx) in load_info.pickups"
            :key="p_idx + '-pick'"
          >
            <i class="fas fa-map-marker-alt text-gray-600"></i>
            <div class="ml-2">
              <p>{{ p_idx }} | {{ pick.location_name }}</p>
              <p>
                {{ pick.address.line1 }}{{ pick.address.line2 }},
                {{ pick.address.city }} {{ pick.address.state }}
                {{ pick.address.zip }}
              </p>
            </div>
          </section>
          |

          <h3 class="text-blue-700">DELIVERIES</h3>
          <section
            class="flex items-center text-sm"
            v-for="(drop, d_idx) in load_info.dropoffs"
            :key="d_idx + '-drop'"
          >
            <i class="fas fa-map-pin text-gray-600"></i>
            <div class="ml-2">
              <p>{{ d_idx }} | {{ drop.location_name }}</p>
              <p>
                {{ drop.address.line1 }}{{ drop.address.line2 }},
                {{ drop.address.city }} {{ drop.address.state }}
                {{ drop.address.zip }}
              </p>
            </div>
          </section>
        </div>

        <div class="assigned-driver">
          <i class="fas fa-truck-moving" v-if="load_info.assignment.assigned">
            {{ load_info.assignment.driver }}</i
          >
        </div>
        <div class="flex justify-between">
          <button class="edit-load-btn disabled">
            <strike>Edit Load</strike>
          </button>
          <a
            :href="load_info.load_pdf"
            class="edit-load-btn view-load-btn"
            target="_blank"
            v-if="load_info.load_pdf != '' && load_info.load_pdf != null"
            >View Load</a
          >

          <h2
            class="edit-load-btn bg-red-400 cursor-pointer"
            @click="deleteLoad()"
          >
            Delete Load
          </h2>
        </div>
      </div>
      <!-- !FIRST CARD -->
      <!-- SECOND CARD -->
      <div
        id="second-card"
        class="
          w-full
          p-1
          border-2 border-solid border-gray-400
          rounded-md
          mb-2
          text-xl
          bg-gray-100
        "
      >
        <h1 class="text-base">STOCK OF INFORMATION</h1>
        <div class="text-center text-blue-700 text-sm">
          <p
            class="text-sm"
            v-for="(stock, s_idx) in load_info.stock_information"
            :key="s_idx"
          >
            {{ stock.count }}x {{ stock.item }}
          </p>
        </div>

        <p class="subtext">Total Weight: {{ load_info.total_weight }}</p>
      </div>
      <!-- !SECOND CARD -->
      <!-- THIRD CARD -->
      <div
        id="forth-card"
        class="
          w-full
          p-1
          border-2 border-solid border-primary
          rounded-md
          mb-2
          text-sm
        "
      >
        <h1 class="font-semibold">FINANCIALS</h1>
        <div class="flex justify-around pl-12">
          <!-- <p>DRIVER PAYOUT</p>
                    <p class="text-red-600">-$3,952</p> -->
          <button
            class="tab-btn has-icon"
            @click="toggleLoadFinancialModal(true)"
          >
            <!-- <img src="@/assets/icons/loads/dollar.svg" /> -->
            Configure Finances
          </button>
        </div>

        <ConfigFinances
          v-if="showConfigFinances"
          @toggleLoadFinancialModal="toggleLoadFinancialModal"
        />

        <div class="flex items-center justify-between px-4">
          <p class="text-blue-700">TOTAL</p>
          <h2 class="text-lg">
            +${{ (load_info.payment / 100).toLocaleString() }}
          </h2>
        </div>
      </div>
      <!-- !THIRD CARD -->
      <!-- FORTH CARD -->
      <div
        id="third-card"
        class="
          w-full
          p-1
          border-2 border-solid border-primary
          rounded-md
          mb-2
          text-sm
        "
      >
        <h1 class="font-semibold">ASSIGN DRIVER</h1>

        <div class="drop-wrap">
          <DefaultDropdown
            :item_list="avaliableDrivers"
            @selectedItem="selectDriver"
            :placeholder="dynamicPlaceholder"
          />
        </div>

        <div class="w-full text-center mt-2" v-if="selected_driver != ''">
          <button
            @click.prevent="assignDriverToLoad()"
            class="
              bg-green-500
              text-white
              py-1
              px-3
              rounded-md
              outline-none
              hover:bg-green-600
            "
          >
            ASSIGN
          </button>
        </div>
      </div>
    </section>

    <!-- <LoadFinancesModal v-if="showLoadFinances" @toggleLoadFinancialModal="toggleLoadFinancialModal"/> -->
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { fb, db } from "@/_firebase/init";
import LoadFinancesModal from "./LoadFinancesModal.vue";
// import DefaultDropdown from '@/components/layout/DefaultDropdown.vue'
// import ConfigFinances from '@/components/loads/load-info-cards/ConfigFinances.vue'
export default {
  components: {
    LoadFinancesModal,
    // DefaultDropdown,
    // ConfigFinances
  },
  name: "LoadInfo",
  data() {
    return {
      showLoadFinances: false,
      drivers: [
        {
          fname: "Mak",
          truck: { image: "/images/slide-1.png" },
          settings: { isAvailable: false },
        },
      ],
      selected_driver: "",
      showConfigFinances: false,
    };
  },
  methods: {
    ...mapMutations(["SET_LOAD_INFO", "SET_LOAD_EDITING", "REMOVE_LOAD_INFO"]),
    editLoad() {
      this.SET_LOAD_EDITING(true);
      this.$emit("editLoadModal", true);
      console.log("Edit Loads");
    },
    async deleteLoad() {
      const res = await db
        .collection("companies")
        .doc(this.userID)
        .collection("loads")
        .doc(this.load_info.id)
        .delete();
      this.REMOVE_LOAD_INFO();
    },
    toggleLoadFinancialModal(val) {
      this.showConfigFinances = val;
    },
    async getDrivers() {
      this.drivers = [];
      const driversRef = db
        .collection("companies")
        .doc(this.userID)
        .collection("drivers");
      const snapshot = await driversRef.get();
      snapshot.forEach((doc) => {
        let driver_data = doc.data();
        driver_data["id"] = doc.id;
        this.drivers.push(driver_data);
      });
    },
    selectDriver(val) {
      this.selected_driver = val.id;
    },
    async assignDriverToLoad() {
      let new_data = this.load_info;
      new_data["assignment"]["assigned"] = true;
      new_data["assignment"]["driver"] = this.selected_driver;
      this.SET_LOAD_INFO(new_data);
      const loadsRef = db
        .collection("companies")
        .doc(this.userID)
        .collection("loads")
        .doc(this.load_info.id);
      const res = await loadsRef.set(new_data);

      this.getDriverData();
    },
    async getDriverData() {
      const driverRef = db
        .collection("companies")
        .doc(this.companyID)
        .collection("drivers")
        .doc(this.selected_driver);
      const doc = await driverRef.get();
      if (!doc.exists) {
        console.log("No such document!");
      } else {
        let driver = doc.data();
        this.assignLoadToDriver(driver);
      }
    },
    async assignLoadToDriver(driver) {
      driver["settings"]["current_load"] = this.load_info.id;
      const driverRef = db
        .collection("companies")
        .doc(this.companyID)
        .collection("drivers")
        .doc(this.selected_driver);
      const res = await driverRef.update(driver);
    },
  },
  computed: {
    ...mapState(["load_info", "userID"]),
    avaliableDrivers() {
      let names_only = [];
      let openDrivers = this.drivers.filter((x) => {
        // if( x.settings.isAvailable == true){
        //   names_only.push(`${x.fname} ${x.lname}`)
        // }
        return x.settings.isAvailable == true;
      });
      return openDrivers;
    },
    dynamicPlaceholder() {
      let driver_assigned = "";
      if (this.load_info.assignment.assigned) {
        return `(ASSIGNED) - ${this.load_info.assignment.driver}`;
      } else {
        return "ASSGIN DRIVER";
      }
    },
  },
  created() {
    this.getDrivers();
    // console.log(this.load_info)
  },
};
</script>

<style scoped>
#LoadInformation {
  width: 100%;
  min-height: 90vh;
}
.subtext {
  font-size: 0.8rem;
}
.assigned-driver {
  margin-top: 1rem;
}
.edit-load-btn {
  width: 6rem;
  text-align: center;
  font-size: 0.8rem;
  color: #fff;
  padding: 0.3rem;
  border-radius: 5px;
}
.view-load-btn {
  background-color: #ebd51d;
}
.drop-wrap {
  border: 2px solid var(--primary);
  padding: 0.3rem 2rem;
  border-radius: 10px;
  height: 3rem;
  margin: 1rem;
  min-width: 10rem;
}
.disabled {
  outline: none;
  cursor: not-allowed;
  background-color: #bbb;
  color: #444;
}
</style>
