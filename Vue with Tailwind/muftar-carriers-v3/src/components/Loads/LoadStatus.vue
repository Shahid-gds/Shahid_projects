<template>
  <div id="LoadStatus">
    <div class="main">
      <div class="load-tabs">
        <div class="load-tab" :class="{ selected: current_tab == idx }" v-for="(l, idx) in load_tabs" :key="idx"
          @click="setTab(idx)">
          <span class="count-num">{{ l.count }}</span>
          {{ l.label }}
        </div>
      </div>
      <div class="panel-area">
        <UnassignedLoadsTab :count="this.load_tabs[0].count" v-if="current_tab == 0" />
        <AssignedLoadsTab :count="this.load_tabs[1].count"
          v-if="current_tab == 1 || current_tab == 2 || current_tab == 3" />
        <CompletedLoadsTab :count="this.load_tabs[4].count" v-if="current_tab == 4" />
      </div>
    </div>
  </div>
</template>

<script>
import { fb, db } from "@/_firebase/init";
import { mapState, mapGetters } from "vuex";

import UnassignedLoadsTab from "@/components/Loads/load-status-tabs/UnassignedLoadsTab.vue";
import AssignedLoadsTab from "@/components/Loads/load-status-tabs/AssignedLoadsTab.vue";
import CompletedLoadsTab from "@/components/Loads/load-status-tabs/CompletedLoadsTab.vue";

export default {
  name: "LoadStatus",
  components: {
    UnassignedLoadsTab,
    AssignedLoadsTab,
    CompletedLoadsTab,
  },
  data() {
    return {
      current_tab: 0,
      loads: [],
      load_set: "",
      load_tabs: [
        { label: "Unassigned Loads", count: 0, tab_num: 0 },
        { label: "At Pickup", count: 0, tab_num: 1 },
        { label: "In Transit", count: 0, tab_num: 2 },
        { label: "At Destination", count: 0, tab_num: 3 },
        { label: "Complete Delivery", count: 0, tab_num: 4 },
      ],
    };
  },
  methods: {
    setTab(tab) {
      this.current_tab = tab;
    },
    async getAllLoads() {
      this.loads = [];
      const loadstRef = db
        .collection("companies")
        .doc(this.userID)
        .collection("loads");
      const snapshot = await loadstRef.get();
      snapshot.forEach((doc) => {
        let loads_data = doc.data();
        loads_data["id"] = doc.id;
        this.loads.push(loads_data);
        console.log(loads_data.assignment.assigned);
        if (loads_data.assignment.assigned == true && loads_data.bol == "") {
          this.load_tabs[1].count = 1 + this.load_tabs[1].count;
        } else if (
          loads_data.assignment.assigned == false &&
          loads_data.bol == ""
        ) {
          this.load_tabs[0].count = 1 + this.load_tabs[0].count;
        }
        if (loads_data.bol != "") {
          this.load_tabs[4].count = 1 + this.load_tabs[4].count;
        }
      });
    },
  },
  computed: {
    ...mapGetters([]),
    ...mapState(["userID"]),
  },
  created() {
    this.getAllLoads();
  },
};
</script>

<style scoped>
#LoadStatus {
  width: 100%;
  background-color: #fff;
  z-index: 3;
  position: relative;
}

.load-tabs {
  display: flex;
  width: 100%;
  justify-content: stretch;
  align-items: center;
}

.load-tab {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #000;
  transition: 1s;
  width: 90%;
  padding: 1rem 0;
  cursor: pointer;
}

.count-num {
  font-size: 1.7rem;
}

.selected {
  border: none;
  background: rgb(236, 236, 236);
  background: linear-gradient(180deg,
      rgba(236, 236, 236, 1) 0%,
      rgba(255, 255, 255, 1) 100%);
}

.panel-area {
  padding: 1rem;
  background-color: #fff;
  width: 100%;
}

@media (max-width: 988px) {
  .load-tabs {
    display: block;
    width: 80%;
    /* height: 20%; */
    margin: auto;
  }
}
</style>
