<template>
    <div>
        <div class="flex w-full">
            <div class="bg-[#FAFBFC] w-96 p-3 py-4 px-8">
              <span class="text-[#1C1C1C] font-semibold text-xl">Fleet Manager</span>
            </div>
            <div class="bg-[#EDEDF3] flex w-4/5">
              <div class="p-3 border-b-4 border-[#C9CCE6] border-r-2 border-r-white">
                <span class="text-[#3C5AA8] font-bold text-sm uppercase px-2">Map</span>
              </div>
              <div class="p-3 border-b-4 border-[#C9CCE6] border-l-2 border-l-white border-r-2 border-r-white">
                <span class="text-[#3C5AA8] font-bold text-sm uppercase px-2">Details</span>
              </div>
              <div class="p-3 border-b-4 border-[#C9CCE6] border-l-2 border-l-white">
                <span class="text-[#3C5AA8] font-bold text-sm uppercase px-2">Feed</span>
              </div>
              <div class="p-3 bg-[#3C5AA8] border-b-4 border-[#091D54]">
                <span class="text-[white] font-bold text-sm uppercase px-2">Queued Loads</span>
              </div>
            </div>
          </div>
          <div class="flex">
            <div class="bg-[#FAFBFC]">
              <div class="bg-[#EFEFEF] p-3 px-7 w-96">
                <div class="relative">
                  <input type="text" class="w-80 p-1 text-sm px-4 rounded-full" placeholder="Search Here.......">
                <div class="absolute right-5 top-1/2 transform -translate-y-1/2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14.001" viewBox="0 0 14 14.001">
                    <path id="Path_13134" data-name="Path 13134" d="M13.68-.118,10.407-3.391a5.685,5.685,0,0,0,.915-3.957A5.719,5.719,0,0,0,6.431-12.2,5.692,5.692,0,0,0,.047-5.819,5.718,5.718,0,0,0,4.9-.927,5.685,5.685,0,0,0,8.86-1.842l3.273,3.273A1.095,1.095,0,0,0,13.68-.118ZM2.163-6.562a3.5,3.5,0,0,1,3.5-3.5,3.5,3.5,0,0,1,3.5,3.5,3.5,3.5,0,0,1-3.5,3.5A3.5,3.5,0,0,1,2.163-6.562Z" transform="translate(0 12.25)" fill="#3c5aa8"/>
                  </svg> 
                </div> 
                </div>                        
              </div>
              <div class="w-96 mt-8 overflow-y-auto scrollbar pb-32" style="height: 90vh;">
                <div class="px-4 py-1" v-for="profile in profiles">
                  <div class="mx-auto h-20 rounded-lg shadow-md cursor-pointer" :class="{ 'active': profile.isActive }"
                    @click="toggleActive(profile)">
                    <div class="flex items-center space-x-3 p-2">
                      <div
                        class="w-16 h-16 border-4 border-[white] bg-[white] shadow-md flex items-center rounded-bl-xl rounded-tr-xl">
                        <img class="w-full h-full object-contain rounded-bl-xl rounded-tr-xl" :src="profile.profileImg"
                          :alt="profile.profileImg">
                      </div>
                      <div class="">
                        <h1 class="text-[#3C5AA8] text-md font-bold">
                          {{ profile.name }}</h1>
                        <p class="text-[#ADAEB0] text-xs">
                          {{ profile.location }}
                        </p>
                      </div>
                    </div>
                    <div class="flex justify-between -mt-8">
                      <div class=""></div>
                      <div class="bg-[#DEF9ED] w-20 text-sm text-center p-1.5 rounded-br-lg rounded-tl-lg">
                        <span class="text-[#69BE88]">{{ profile.btn }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
  
            </div>
            <div class="flex-1 bg-[#FAFBFC] p-6">
              <!-- <Details /> -->
              <!-- <Map/> -->
              <!-- <Feed /> -->
              <QueuedLoads />
            </div>
          </div>
        </div>
</template>
<script>
// import Details from './Driver Details/Details.vue';
// import Map from './Map/Map.vue';
// import Feed from './Feed/Feed.vue'
import QueuedLoads from './Queued Loads/QueuedLoads.vue';
export default {
  components: { 
      // Details, 
      // Map
      // Feed
      QueuedLoads
  },
  data() {
    return {
      profiles: [
        {
          profileImg: '',
          name: 'y t',
          location: '33.5906872,-84.2290496',
          btn: 'Available',
          isActive: false
          //   route: '/',
        },
        {
          profileImg: '',
          name: 'Test 0',
          location: '34.0207683,-118.1800417',
          btn: 'Available'
          //   route: '/',
        },
        {
          profileImg: '',
          name: 'bb@bb.com',
          location: '41.8294183,-100.10246',
          btn: 'Available'
          //   route: '/',
        },
        {
          profileImg: '',
          name: 'Test 2',
          location: '34.0207683,-118.1800417',
          btn: 'Available'
          //   route: '/',
        },
        {
          profileImg: '',
          name: 'Info User',
          location: '34.0207683,-118.1800417',
          btn: 'Available'
          //   route: '/',
        },
        {
          profileImg: '',
          name: 'James Kang',
          location: '34.0207683,-118.1800417',
          btn: 'Available'
          //   route: '/',
        },
        {
          profileImg: '',
          name: 'y t',
          location: '33.5906872,-84.2290496',
          btn: 'Available'
          //   route: '/',
        },
        {
          profileImg: '',
          name: 'Test 0',
          location: '34.0207683,-118.1800417',
          btn: 'Available'
          //   route: '/',
        },
        {
          profileImg: '',
          name: 'bb@bb.com',
          location: '41.8294183,-100.10246',
          btn: 'Available'
          //   route: '/',
        },
        {
          profileImg: '',
          name: 'Test 2',
          location: '34.0207683,-118.1800417',
          btn: 'Available'
          //   route: '/',
        },
        {
          profileImg: '',
          name: 'Info User',
          location: '34.0207683,-118.1800417',
          btn: 'Available'
          //   route: '/',
        },
        {
          profileImg: '',
          name: 'James Kang',
          location: '34.0207683,-118.1800417',
          btn: 'Available'
          //   route: '/',
        },
      ]
    }
  },
  mounted() {
    this.loadProfile();
  },
  methods: {
    async loadProfile() {
      const profile1 = await import('../../../assets/images/divers/profile1.svg');
      const profile2 = await import('../../../assets/images/divers/profile2.svg');
      const profile3 = await import('../../../assets/images/divers/profile3.svg');
      const profile4 = await import('../../../assets/images/divers/profile4.svg');
      const profile5 = await import('../../../assets/images/divers/profile5.svg');
      const profile6 = await import('../../../assets/images/divers/profile6.svg');
      const profile7 = await import('../../../assets/images/divers/profile1.svg');
      const profile8 = await import('../../../assets/images/divers/profile2.svg');
      const profile9 = await import('../../../assets/images/divers/profile3.svg');
      const profile10 = await import('../../../assets/images/divers/profile4.svg');
      const profile11 = await import('../../../assets/images/divers/profile5.svg');
      const profile12 = await import('../../../assets/images/divers/profile6.svg');
  
    

      this.profiles[0].profileImg = profile1.default;
      this.profiles[1].profileImg = profile2.default;
      this.profiles[2].profileImg = profile3.default;
      this.profiles[3].profileImg = profile4.default;
      this.profiles[4].profileImg = profile5.default;
      this.profiles[5].profileImg = profile6.default;
      this.profiles[6].profileImg = profile7.default;
      this.profiles[7].profileImg = profile8.default;
      this.profiles[8].profileImg = profile9.default;
      this.profiles[9].profileImg = profile10.default;
      this.profiles[10].profileImg = profile11.default;
      this.profiles[11].profileImg = profile12.default;
    },
    toggleActive(profile) {
      // Set the clicked profile as active and deactivate others
      this.profiles.forEach(p => {
        p.isActive = p === profile;
      });
    }
  }
}
</script>
<style scoped>
.scrollbar {
  scrollbar-width: thin;
  scrollbar-color: #DEE1F8 #DEE1F8;
  position: relative;
}

.scrollbar::-webkit-scrollbar {
  width: 5px;
  height: 8px;
}

.scrollbar::-webkit-scrollbar-thumb {
  background-color: #DEE1F8;
  border-radius: 4px;
}

.scrollbar::-webkit-scrollbar-thumb:hover {
  background-color: #DEE1F8;
}

.active {
  background: #3C5AA8;
  position: relative;
  z-index: 2;
}

.active h1 {
  color: white;
}

.active p {
  color: white;
}

.active::before {
  content: "";
  position: absolute;
  top: 30%;
  left: 21rem;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  border-top: 18px solid transparent;
  border-left: 27px solid #3C5AA8;
  border-bottom: 20px solid transparent;
  z-index: 3;
}
</style>