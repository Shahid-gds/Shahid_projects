<template>
  <div class="config-finances">
    <p class="primary-alert">JUST FOR SHOW</p>
    <div
      class="config-group"
      v-for="(config, idx) in financial_configurations"
      :key="idx"
    >
      <input
        type="text"
        class="label-config"
        v-model="config.label"
        placeholder="Enter label"
      />

      <input type="number" class="amount-config" v-model="config.amount" />

      <button
        class="btn-config"
        :class="{ 'is-expense': !config.isExpense }"
        @click="alterIntegerState(idx)"
      >
        <span v-if="config.isExpense">INCOME</span>
        <span v-else>EXPENSE</span>
      </button>
    </div>
    <button class="tab-btn add-btn" @click="apppendEmptyConfig">ADD ONE</button>

    <div class="btn-group">
      <button
        class="tab-btn tab-btn-active"
        @click="saveFinancialBreakdown(true)"
      >
        Save
      </button>

      <button class="tab-btn" @click="toggleLoadFinancialModal(false)">
        Cancel
      </button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { fb, db } from "@/_firebase/init";

export default {
  components: {},
  name: "ConfigFinances",
  data() {
    return {
      financial_configurations: [{ label: "", amount: 0, isExpense: false }],
    };
  },
  methods: {
    apppendEmptyConfig() {
      this.financial_configurations.push({
        label: "",
        amount: 0,
        isExpense: false,
      });
    },
    alterIntegerState(idx) {
      this.financial_configurations[idx].isExpense =
        !this.financial_configurations[idx].isExpense;
    },
    saveFinancialBreakdown() {
      // INSERT SAVING FUNCTION HERE
      this.toggleLoadFinancialModal(false);
    },
    toggleLoadFinancialModal(val) {
      this.$emit("toggleLoadFinancialModal", val);
    },
  },
  computed: {},
  created() {},
};
</script>

<style scoped>
.config-group {
  margin: 1rem auto;
  display: grid;
  grid-template-columns: 4fr 2fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 5px;
  grid-row-gap: 0px;
  justify-items: stretch;
  align-items: stretch;
}
.config-group input {
  border: 2px solid #666;
  border-radius: 5px;
  padding: 0.2rem;
  text-align: left;
}
.config-group .amount-config {
  text-align: right;
}
.add-btn {
  color: #d5f6d6;
  background-color: #4b8d4e;
  border: none;
  margin: 1rem auto;
}
.btn-config {
  color: #4b8d4e;
  background-color: #d5f6d6;
  font-weight: bold;
  border-radius: 10px;
  transition: 1s;
}
.is-expense {
  color: #a62d22;
  background-color: #eabcb8;
}
/* BOTTOM BTN GROUP */
.btn-group {
  width: 80%;
  margin: 1rem auto;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
}
.btn-group .tab-btn {
  width: 40%;
  margin: 1rem auto;
}
</style>
