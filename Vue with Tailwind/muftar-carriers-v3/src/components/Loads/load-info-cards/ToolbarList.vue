<template>
  <div id="ToolbarList" style="background-color: #1d1e29 !important;">
    <div class="flex items-center" style="background-color: #1d1e29 !important;">
      Time period:<button @click="changeTimeFrame()" class="bg-primary text-white font-semibold p-2 w-24 mx-4 uppercase rounded-lg shadow-md hover:shadow-white">
        {{ timeframe }}
      </button>
    </div>
  </div>
</template>

<script>
// import { mapGetters } from "vuex";
// import LoadsList from "@/components/Loads/LoadsList.vue";

export default {
  name: "CompletedLoadsTab",
  props: ["count", "loads", "mode"],
  components: {
    // LoadsList,
  },
  data() {
    return {
      timeframe: 'recent', //gets the bols within the past week
    };
  },
  methods: {
    changeTimeFrame() {
      if (this.timeframe == 'recent') {
        this.timeframe = 'full'
      } else {
        this.timeframe = 'recent'
      }
      this.$emit('changeTimeFrame', '')
    }
  }
};
</script>

<style scoped>
#ToolbarList {
  width: 100%;
  /* height: 100%; */
  min-height: 3vh;
  /* background-color: #fff; */
  position: relative;
  /* margin: .5rem 0; */
}

.load-list {
  width: 100%;
}
</style>
