<template>
    <div class="container flex flex-col items-center h-screen">
      <div class="">
        <div class="px-6 p-4">
          <img src="@/assets/images/logo.svg" alt="">
        </div>
      <div class="space-y-1">
        <router-link class="px-10 py-4 flex flex-col bg-gradient-to-l from-[white] via-[white] to-[#F5F5F5]"
          v-for="item in menu" :key="item" :to="item.route"
          :class="{ '': $route.path === item.route }">
          <div>
            <span>
              <img :src="item.icon" :alt="item.icon">
            </span>
          </div>
          <div>
            {{ item.name }}
          </div>
        </router-link>
      </div>
      </div>
      <div class="">
       <div class="space-y-1 mt-36 px-6">
        <div class="p-3 bg-[#3A54B4] px-6 rounded-xl ">
          <div class="flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="22.438" height="27.424" viewBox="0 0 22.438 27.424">
              <path id="Icon_material-headset-mic" data-name="Icon material-headset-mic" d="M15.719,1.5A11.22,11.22,0,0,0,4.5,12.719v8.726a3.735,3.735,0,0,0,3.74,3.74h3.74V15.212H6.993V12.719a8.726,8.726,0,1,1,17.452,0v2.493H19.459v9.973h4.986v1.247H15.719v2.493H23.2a3.735,3.735,0,0,0,3.74-3.74V12.719A11.22,11.22,0,0,0,15.719,1.5Z" transform="translate(-4.5 -1.5)" fill="#fff"/>
            </svg> 
          </div>         
        </div>
        <div class="p-3 bg-[#3A54B4] px-6 rounded-xl">
          <div class="flex justify-center">
            <img src="@/assets/images/icons/gpt.svg" alt="">
          </div> 
       </div>        
        </div>
        <div class="px-6 mt-5 text-center space-y-2">
          <div class="">
            <h2 class="text-[#C9CCE6] font-semibold">v0.3.0</h2>
          </div>
          <div class="text-xs text-center text-[#858585]">
            <p class="">Copyright © 2023</p>
            <p>Muftar Corp.</p>
          </div>  
        </div>
      </div>
      
    </div>
  </template>

<script setup>
    import { onMounted, ref } from 'vue';
    import { RouterLink } from 'vue-router';

    const components = {
        RouterLink
    };

    const menu = ref([
        {
            icon: import('../../assets/images/overviewIcon.svg').then((module) => module.default),
            // name: 'Overview',
            route: '/overview',
        },
        {
          icon: import('../../assets/images/dispatchIcon.svg').then((module) => module.default),
            // name: 'Dispatch',
            route: '/dispatch',
        },
        {
          icon: import('../../assets/images/complainceIcon.svg').then((module) => module.default),
            // name: 'Compliance',
            route: 'compliance',
        },
        {
          icon: import('../../assets/images/accountingIcon.svg').then((module) => module.default),
            // name: 'Accounting',
            route: 'accounting',
        },
        {
          icon: import('../../assets/images/relationshipIcon.svg').then((module) => module.default),
            // name: 'Relationships',
            route: 'relationship',
        },
        {
          icon: import('../../assets/images/teamIcon.svg').then((module) => module.default),
            // name: 'Team',
            route: 'team',
        },
        {
          icon: import('../../assets/images/widgetsIcon.svg').then((module) => module.default),
            // name: 'Widgets',
            route: 'widgets',
        },
        {
          icon: import('../../assets/images/integrationIcon.svg').then((module) => module.default),
            // name: 'Integration',
            route: 'integration',
        },
    ]);

    onMounted(async () => {
    
    menu.value = await Promise.all(menu.value.map(async (item) => ({
      ...item,
      icon: await item.icon
    })));
  });
</script>


<style scoped>
/*.toggleButton {
  margin-left: 40%;
}*/
#checkbox {
  visibility: hidden;
}

#checkbox:checked~.left {
  transform: translateY(-50%) scale(0);
}

#checkbox:checked~.right {
  transform: translateY(-50%) scale(1);
  z-index: 10;
}

.left,
.right {
  height: 1.3rem;
  width: 1.2rem;
  display: inline-block;
  position: absolute;
  border-radius: 50%;
  top: 50%;
}

.left {
  background: black;
  left: 0%;
  z-index: 10;
  transform: translateY(-50%) scale(1);
  transition: all 200ms cubic-bezier(0.8, 0.7, 0.72, 0.78);
}

.right {
  background: black;
  right: 0%;
  transform: translateY(-50%) scale(0);
  transition: all 200ms cubic-bezier(0.8, 0.7, 0.72, 0.78);
}

/*.help-button {
  width: 236px;
  height: 60px;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="236" height="60" viewBox="0 0 236 60"><defs><linearGradient id="linear-gradient" x1="0.5" x2="0.939" y2="1.45" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="%23c9cce6"/><stop offset="1" stop-color="%233c5aa8"/></linearGradient><clipPath id="clip-path"><path id="background" d="M30,0H206a30,30,0,0,1,0,60H30A30,30,0,0,1,30,0Z" fill="url(%23linear-gradient)"/></clipPath><linearGradient id="linear-gradient-3" x1="0.5" x2="0.939" y2="1.45" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="%23757cbb"/><stop offset="1" stop-color="%233c5aa8"/></linearGradient></defs><path id="background-3" data-name="background" d="M30,0H206a30,30,0,0,1,0,60H30A30,30,0,0,1,30,0Z" fill="url(%23linear-gradient)"/><g id="background-4" data-name="background" clip-path="url(%23clip-path)"><path id="Ellipse" d="M81.878,0c45.22,0,81.878,11.248,81.878,25.123S127.1,50.246,81.878,50.246,0,39,0,25.123,36.658,0,81.878,0Z" transform="translate(112.6 0)" opacity="0.21" fill="url(%23linear-gradient-3)"/></g></svg>');
  background-repeat: no-repeat;
  background-size: cover;
  border: none;
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
}
.gpt-button {
  width: 236px;
  height: 60px;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="236" height="60" viewBox="0 0 236 60"><defs><linearGradient id="linear-gradient" x1="0.5" x2="1.094" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="%23c9cce6"/><stop offset="1" stop-color="%233c5aa8"/></linearGradient><linearGradient id="linear-gradient-2" x1="0.5" x2="0.939" y2="1.45" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="%233c5aa8"/><stop offset="1" stop-color="%23131633"/></linearGradient><clipPath id="clip-path"><path id="background" d="M30,0H206a30,30,0,0,1,0,60H30A30,30,0,0,1,30,0Z" fill="url(%23linear-gradient)"/></clipPath><linearGradient id="linear-gradient-3" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="%23c9cce6"/><stop offset="1" stop-color="%23a0f9ff" stop-opacity="0"/></linearGradient></defs><path id="background-3" data-name="background" d="M30,0H206a30,30,0,0,1,0,60H30A30,30,0,0,1,30,0Z" fill="url(%23linear-gradient-2)"/><g id="background-4" data-name="background" clip-path="url(%23clip-path)"><path id="Ellipse" d="M81.878,0c45.22,0,81.878,11.248,81.878,25.123S127.1,50.246,81.878,50.246,0,39,0,25.123,36.658,0,81.878,0Z" transform="translate(112.6 0)" opacity="0.21" fill="url(%23linear-gradient-3)"/></g></svg>');
  background-repeat: no-repeat;
  background-size: cover;
  border: none;
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
}*/
</style>