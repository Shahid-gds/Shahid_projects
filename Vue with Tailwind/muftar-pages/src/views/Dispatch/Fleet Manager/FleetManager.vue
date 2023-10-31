<template>
    <div>
        <div class="flex justify-between items-center w-full">
            <div class=" w-96 p-3 py-4 px-8">
              <span class="text-[#333333] font-[900] text-xl">Fleet Manager</span>
            </div>
             <div class="flex space-x-2 px-5">
                        <div
                          v-for="(status, index) in statuses"
                          :key="index"
                          :class="{
                            'bg-[#EDEDF3]': true,
                            'bg-[#AFC7F1] text-[#3C5AA8] font-[900]': activeIndex === index,
                            'p-4': true,
                            'px-10': true,
                            'rounded-xl': true,
                            'text-center': true,
                            'cursor-pointer': true,
                          }"
                          @click="setActive(index)"
                        >
                          <p class="text-xs leading-tight">{{ status.label }}</p>
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
            <div class="flex-1 bg-[#FAFBFC] px-4 w-full">
              <!-- <Details /> -->
              <Map/>
              <!-- <Feed /> -->
              <!-- <QueuedLoads /> -->
            </div>
          </div>
        </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';

// import Details from './Driver Details/Details.vue';
import Map from './Map/Map.vue';
// import Feed from './Feed/Feed.vue'
// import QueuedLoads from './Queued Loads/QueuedLoads.vue';

const activeIndex = ref(null);

const statuses = [
  { label: 'Map' },
  { label: 'Feed' },
  { label: 'Queued Loads' },
];
onMounted(() => {

const mapIndex = statuses.findIndex(status => status.label === 'Map');
if (mapIndex !== -1) {
  setActive(mapIndex);
}
});
const profiles = ref([
  {
    profileImg: '',
    name: 'Keanu Evans',
    location: '33.5906872,-84.2290496',
    btn: 'Available',
    isActive: false,
  },
  {
    profileImg: '',
    name: 'Johnny Valdez',
    location: '34.0207683,-118.1800417',
    btn: 'Unavailable',
    isActive: false,
  },
  {
    profileImg: '',
    name: 'Randy Miller',
    location: '34.0207683,-118.1800417',
    btn: 'Available',
    isActive: false,
  },
  {
    profileImg: '',
    name: 'Ronnie Wallace',
    location: '34.0207683,-118.1800417',
    btn: 'Unavailable',
    isActive: false,
  },
  {
    profileImg: '',
    name: 'Craig Woodkin',
    location: '34.0207683,-118.1800417',
    btn: 'Available',
    isActive: false,
  },
  {
    profileImg: '',
    name: 'George Nelson',
    location: '34.0207683,-118.1800417',
    btn: 'Unavailable',
    isActive: false,
  },
  {
    profileImg: '',
    name: 'Benjamin Hayes',
    location: '34.0207683,-118.1800417',
    btn: 'Available',
    isActive: false,
  },
  {
    profileImg: '',
    name: 'Frank Alvarado',
    location: '34.0207683,-118.1800417',
    btn: 'Unavailable',
    isActive: false,
  },
  {
    profileImg: '',
    name: 'Nick Barnett',
    location: '34.0207683,-118.1800417',
    btn: 'Available',
    isActive: false,
  },
  {
    profileImg: '',
    name: 'Keanu Evans',
    location: '33.5906872,-84.2290496',
    btn: 'Available',
    isActive: false,
  },
  {
    profileImg: '',
    name: 'Johnny Valdez',
    location: '34.0207683,-118.1800417',
    btn: 'Unavailable',
    isActive: false,
  },
  {
    profileImg: '',
    name: 'Randy Miller',
    location: '34.0207683,-118.1800417',
    btn: 'Available',
    isActive: false,
  },
  {
    profileImg: '',
    name: 'Ronnie Wallace',
    location: '34.0207683,-118.1800417',
    btn: 'Unavailable',
    isActive: false,
  },
  {
    profileImg: '',
    name: 'Craig Woodkin',
    location: '34.0207683,-118.1800417',
    btn: 'Available',
    isActive: false,
  },
  {
    profileImg: '',
    name: 'George Nelson',
    location: '34.0207683,-118.1800417',
    btn: 'Unavailable',
    isActive: false,
  },
  {
    profileImg: '',
    name: 'Benjamin Hayes',
    location: '34.0207683,-118.1800417',
    btn: 'Available',
    isActive: false,
  },
  {
    profileImg: '',
    name: 'Frank Alvarado',
    location: '34.0207683,-118.1800417',
    btn: 'Unavailable',
    isActive: false,
  },
  {
    profileImg: '',
    name: 'Nick Barnett',
    location: '34.0207683,-118.1800417',
    btn: 'Available',
    isActive: false,
  },
  
]);

// Load profile images
async function loadProfile() {
  const profileImages = await Promise.all([
    import('@/assets/images/divers/profile1.svg'),
    import('@/assets/images/divers/profile2.svg'),
    import('@/assets/images/divers/profile3.svg'),
    import('@/assets/images/divers/profile4.svg'),
    import('@/assets/images/divers/profile5.svg'),
    import('@/assets/images/divers/profile6.svg'),
    import('@/assets/images/divers/profile7.svg'),
    import('@/assets/images/divers/profile8.svg'),
    import('@/assets/images/divers/profile9.svg'),
    import('@/assets/images/divers/profile1.svg'),
    import('@/assets/images/divers/profile2.svg'),
    import('@/assets/images/divers/profile3.svg'),
    import('@/assets/images/divers/profile4.svg'),
    import('@/assets/images/divers/profile5.svg'),
    import('@/assets/images/divers/profile6.svg'),
    import('@/assets/images/divers/profile7.svg'),
    import('@/assets/images/divers/profile8.svg'),
    import('@/assets/images/divers/profile9.svg'),
  ]);

  profiles.value.forEach((profile, index) => {
    profile.profileImg = profileImages[index].default;
  });
}

// Toggle active profile
function toggleActive(profile) {
  profiles.value.forEach(p => {
    p.isActive = p === profile;
  });
}

// Set active index
function setActive(index) {
  activeIndex.value = index;
}

onMounted(() => {
  loadProfile();
});
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

/*.active::before {
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
}*/
</style>