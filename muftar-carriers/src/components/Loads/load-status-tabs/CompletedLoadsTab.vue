<template>
  <div id="CompletedLoadsTab">
    <ToolBarList @changeTimeFrame="changeTimeFrame" />
    <div class="load-list mt-3" v-if="count > 0">
      <LoadsList load_set="completed" :loads="loads" :timeframe="timeframe" />
    </div>
    <div class="w-full py-3 space-y-6 mx-auto flex flex-col items-center justify-center bg-[#1d1e29]" v-else>
      <img class="w-60  py-4 " src="@/assets/icons/loads/completed-paper.svg" />
      <h2 class="text-2x w-11/12 text-center mx-auto">No Completed Loads</h2>
      <p class="text-white text-center w-10/12 mx-auto">
        You do not have any unassigned loads. You can add a new load in the Loads Page.
      </p>

      <!-- <:to="{ name: 'Fleet', query: { tab: 'complete' } }" -->
      <RouterLink to="/">
        <button class="bg-primary text-white p-4 rounded-lg hover:outline-double">
          Take Me To My Loads
        </button>
      </RouterLink>
    </div>
  </div>
</template>

<script>
// import { mapGetters } from "vuex";
import LoadsList from "../LoadsList.vue";
import ToolBarList from "@/components/Loads/load-info-cards/ToolbarList.vue";


export default {
  name: "CompletedLoadsTab",
  props: ["count", "loads"],
  components: {
    LoadsList,
    ToolBarList,

  },
  data() {
    return {
      timeframe: 'recent',
      currentLoads: this.loads,
    };
  },
  methods: {
    changeTimeFrame() {
      if (this.timeframe == 'recent') {
        this.timeframe = 'full'
      } else {
        this.timeframe = 'recent'
      }
      console.log(this.timeframe)
    }
  }
};
</script>

<style scoped>
#CompletedLoadsTab {
  width: 100%;
  height: 100%;
  min-height: 50vh;
  background-color: #1d1e29;
  z-index: 3;
  position: relative;
}

.load-list {
  width: 100%;
}
</style>
