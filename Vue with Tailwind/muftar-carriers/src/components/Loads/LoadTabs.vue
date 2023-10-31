<template>
  <div id="LoadTabs">
    <div class="main">
      <div class="load-tabs">
        <div v-for="(tab, index) in load_tabs" :key="index" @click="setTab(index)"
          :class="current_tab == index ? 'selected load-tab' : 'load-tab'">
          <span class="count-num">{{ tab.count }}</span>
          {{ tab.label }}
        </div>
      </div>
      <!-- <div class="text-black" v-if="loading">
        loading...
      </div>
      <div v-if="!loading" class="text-black">
        {{ allLoads }}
      </div> -->
      <div class="panel-area ">
        <LoadList :current_tab="current_tab" :loads="loads" :closed_loads="closed_loads" :loading="loading" />
      </div>

    </div>
  </div>
</template>


<script setup>
import LoadList from '@/components/Loads/LoadsList.vue'
import axios from 'axios';
import { useApi } from '@/composables/useApi'
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

// import gql from 'graphql-tag'
// import { useQuery, useLazyQuery } from '@vue/apollo-composable'

// import { GET_ALL_LOADS } from '@/_graphql/queries'

// const { result, loading, load } = useLazyQuery(GET_ALL_LOADS);
// const allLoads = computed(() => result.value?.allLoads ?? [])

// load();


const { api_path } = useApi()

const store = useStore();
const current_tab = ref(0);
const count = ref(0);
const loading = ref(false);
const loads = ref([]);
const closed_loads = ref([])

const load_tabs = ref([
  { tab_id: 1, count: 0, label: "Unassigned", isActive: true },
  { tab_id: 2, count: 0, label: "En Route", isActive: false },
  { tab_id: 3, count: 0, label: "At Destination", isActive: false },
  { tab_id: 4, count: 0, label: "Pending Approval", isActive: false },
  { tab_id: 5, count: 0, label: "Complete Delivery", isActive: false },
])

const setTab = (idx) => {
  current_tab.value = idx;
}

const orgID = computed(() => store.state.orgID)


const getAllLoads = async () => {
  loading.value = true;
  const config = {
    headers: {
      orgID: orgID.value
    }
  }

  try {
    const res = await axios.get(api_path.value + '/loads/all', config);
    loads.value = res.data.result;
    console.log(loads.value)
    loads.value.forEach((load) => {
      if (load.destinations === undefined) {
        console.log(load.id)
      }
    })

    loads.value.forEach((load) => {
      // console.log(load.destinations)
      if (load.destinations != undefined) {
        if (load.status === 'unassigned') {
          load_tabs.value[0].count = load_tabs.value[0].count + 1;
          count.value = load_tabs.value[0].count;

        }
        if (load.status === 'assigned' || load.status === 'en_route') {
          load_tabs.value[1].count = load_tabs.value[1].count + 1;
          count.value = load_tabs.value[1].count;

        }
        if (load.status === 'awaiting_bol' || load.status === 'rejected_bol') {
          load_tabs.value[2].count = load_tabs.value[2].count + 1;
          count.value = load_tabs.value[2].count;

        }
        if (load.status === 'pending_confirmation') {
          load_tabs.value[3].count = load_tabs.value[3].count + 1;
          count.value = load_tabs.value[3].count;

        }
      }
    })


    loading.value = false;
  } catch (error) {
    console.log(error)
  }


}




const getAllClosedLoads = async () => {
  const config = {
    headers: {
      orgID: orgID.value
    }
  }

  try {

    const res = await axios.get(api_path.value + "/loads/all?status=completed", config);
    closed_loads.value = res.data.result;
    closed_loads.value.forEach((load) => {
      if (load.status === 'completed') {
        load_tabs.value[4].count = load_tabs.value[4].count + 1;
        count.value = load_tabs.value[4].count;
      }
    })

  } catch (error) {
    console.log(error)
  }

}

getAllClosedLoads();
getAllLoads();

</script>


<style scoped>
#LoadTabs {
  width: 100%;
  /* background-color: #fff; */
  z-index: 3;
  position: relative;
  color: #fff;
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
  text-align: center;
  border: 1px solid #000;
  transition: 1s;
  width: 90%;
  padding: 1rem 0;
  cursor: pointer;
  background-color: #2a3142;
}

.count-num {
  font-size: 1.7rem;
}

.selected {
  border: none;
  background: rgb(236, 236, 236);
  background: linear-gradient(180deg, rgb(42 49 66) 0%, rgb(29 30 41) 100%);
}

.panel-area {
  padding: 1rem;
  background-color: #1d1e29;
  width: 100%;
  height: 100vh;
}

@media (max-width: 600px) {
  .load-tabs {
    /* display: block; */
    width: 100%;
    /* height: 20%; */
    margin: auto;
  }
}
</style>
