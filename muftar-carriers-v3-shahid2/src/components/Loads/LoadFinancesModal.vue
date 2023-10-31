<template>
  <div id="LoadFinancesModal">
    <div class="modal-overlay" @click="toggleLoadFinancialModal(false)"></div>
    <div class="modal-body w-3/4 bg-white rounded-lg p-2">
      <header class="flex justify-between mb-2 items-center">
        <h1 class="text-gray-800 text-lg font-bold">Configure Finances</h1>
        <span
          class="bg-red-300 text-red-600 px-2 font-bold cursor-pointer"
          @click="toggleLoadFinancialModal(false)"
          >X</span
        >
      </header>

      <section id="image-and-input" class="finances-area">
        <div class="input-group" v-for="(x, x_id) in finances_nums" :key="x_id">
          <input class="text-input" v-modal="x.party" type="text" place />
          <input class="text-input" v-modal="x.amount" type="number" />
          <button class="btn" @click="changeTxnType">{{ x.txn_type }}</button>
          <button class="btn" @click="removeLoadFinances(x)">Remove</button>
        </div>

        <button class="btn" @click="addLoadFinances()">Add</button>
      </section>
      <hr />
      <div class="w-full flex justify-end mt-3" v-if="!processing">
        <button
          class="
            bg-red-500
            mr-1
            px-10
            py-0
            rounded-md
            text-white
            hover:bg-red-600
          "
        >
          Cancel
        </button>
        <button
          @click="uploadData()"
          class="
            bg-green-500
            ml-1
            px-10
            py-0
            rounded-md
            text-white
            hover:bg-green-600
          "
        >
          Confirm
        </button>
      </div>
      <div class="loading-box w-full flex justify-end mt-2" v-else>
        <!-- <img src="@/assets/gif/truck-loading-animation.gif" /> -->
      </div>
    </div>
  </div>
</template>

<script>
import { fb, db } from "@/_firebase/init";
import { mapState } from "vuex";

export default {
  name: "LoadFinancesModal",
  data() {
    return {
      processing: false,
      finances_nums: [{ party: "", amount: 0, txn_type: "in" }],
    };
  },
  methods: {
    removeLoadFinances(x) {
      var index = this.finances_nums.indexOf(x);
      if (index > -1) {
        this.finances_nums.splice(index, 1);
      }
    },
    addLoadFinances() {
      this.finances_nums.push({ party: "", amount: 0, txn_type: "in" });
    },
    setDefaultData() {},
    changeTxnType() {},
    async saveFinanceData() {
      const now = Date.now();
      var epoch_time = Math.floor(new Date().getTime() / 1000);
      this.processing = true;
      let all_weight = 0;
      for (let stock of this.load_data.stock_information) {
        all_weight = all_weight + stock.weight;
      }
      this.total_weight = all_weight;
      let formated_data = this.load_data;
      formated_data["created"] = epoch_time;
      formated_data["payment"] = Number(this.load_data.payment);
      const loadRef = db
        .collection("companies")
        .doc(this.userID)
        .collection("loads");
      const res = await loadRef.add(formated_data);
      this.processing = false;
      this.$emit("hideModal", false);
    },
    goToLoadsPage() {
      this.$router.push("/loads");
    },
    toggleLoadFinancialModal() {
      this.$emit("hideModal", false);
    },
  },
  computed: {
    ...mapState(["userID"]),
  },
};
</script>

<style scoped>
#LoadFinancesModal {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 15;
  width: 100%;
  min-height: 100vh;
}
.modal-overlay {
  position: absolute;
  width: 100%;
  min-height: 100vh;
  cursor: pointer;
  z-index: 16;
  opacity: 0.7;
  background-color: #000;
}
.modal-body {
  /* top: 30%;
  left: 30%; */
  width: 60%;
  z-index: 17;
  margin: auto;
  position: relative;
}
#upload-image {
  position: relative;
}
.pdf-file {
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
}
.loading-box img {
  width: 4rem;
}
.finances-area {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.input-group {
  display: flex;
  align-items: center;
  border-radius: 15px;
  border: 3px solid var(--primary);
  padding: 0.6rem 2rem;
  padding-left: 1rem;
  width: 60%;
  height: 1.5rem;
  font-size: 0.8rem;
  margin: 1rem auto;
  transition: 1s;
}
.input-icon {
  width: 2rem;
}

.text-input {
  padding: 1rem 2rem;
  padding-left: 0;
  font-size: 1rem;
  margin: 0.2rem 0;
  margin-left: 0.3rem;
  transition: 1s;
}
.text-input:focus {
  border: none;
  outline: none;
}
</style>
