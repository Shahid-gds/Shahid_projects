<template>
    <div class="container w-64 h-screen">
      <div class="flex items-center space-x-10 p-6">
        <div>
          <img src="../../assets/images/logo.svg" alt="">
        </div>
        <div class="flex items-center">
          <label
            class="bg-gradient-to-t from-[#D8C8C8]  via-[#FAFAFA] to-[#D8C8C8] h-6 w-12 rounded-3xl relative cursor-pointer overflow-hidden"
            :class="{ toggleButton: 'toggleButton' }">
            <input type="checkbox" id="checkbox">
            <span class="left"></span>
            <span class="right"></span>
          </label>
        </div>
      </div>
      <div class="space-y-1">
        <router-link
          class="flex items-center h-14 w-64 px-6 p-4 space-x-2 text-[#8D8D8D] bg-gradient-to-l from-[white] via-[white] to-[#F5F5F5]"
          v-for="item in menu" :key="item" :to="item.route"
          :class="{ 'bg-gradient-to-l from-blue-100 p-4 text-[#8D8D8D] border-r-4 border-r-[#3C5AA8]': $route.path === item.route }">
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
      <div class="mt-16 px-2 space-y-3">
        <div class="help-button flex items-center px-9 space-x-1">
          <span>
            <img src="../../assets/images/help&supportIcon.svg" alt="">
          </span>
          <p class="uppercase">Help & Support</p>
        </div>
        <div class="gpt-button flex items-center px-9 space-x-1">
          <span>
            <img src="../../assets/images/logoIcon.svg" alt="">
          </span>
          <p class="uppercase">Muftar GPT</p>
        </div>
      </div>
      <div class="px-6 mt-5">
        <div class="">
          <h2 class="text-[#C9CCE6] font-semibold">v0.3.0</h2>
        </div>
        <div class="text-sm mt-1 text-[#858585]">
          <p>Copyright ©  2023 Muftar Corp.
            <br>
            All Rights Reserved.
          </p>
        </div>
        <div class="flex space-x-4 mt-5 items-center">
          <div>
            <img src="../../assets/images/fbIcon.svg" alt="">
          </div>
          <div>
            <img src="../../assets/images/twitterIcon.svg" alt="">
          </div>
          <div>
            <img src="../../assets/images/linkedInIcon.svg" alt="">
          </div>
          <div>
            <img src="../../assets/images/youtubeIcon.svg" alt="">
          </div>
          <div>
            <img src="../../assets/images/instaIcon.svg" alt="">
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
            name: 'Overview',
            route: '/',
        },
        {
          icon: import('../../assets/images/dispatchIcon.svg').then((module) => module.default),
            name: 'Dispatch',
            route: '/dispatch',
        },
        {
          icon: import('../../assets/images/complainceIcon.svg').then((module) => module.default),
            name: 'Compliance',
            route: 'compliance',
        },
        {
          icon: import('../../assets/images/accountingIcon.svg').then((module) => module.default),
            name: 'Accounting',
            route: 'accounting',
        },
        {
          icon: import('../../assets/images/relationshipIcon.svg').then((module) => module.default),
            name: 'Relationships',
            route: 'relationship',
        },
        {
          icon: import('../../assets/images/teamIcon.svg').then((module) => module.default),
            name: 'Team',
            route: 'team',
        },
        {
          icon: import('../../assets/images/widgetsIcon.svg').then((module) => module.default),
            name: 'Widgets',
            route: 'widgets',
        },
        {
          icon: import('../../assets/images/integrationIcon.svg').then((module) => module.default),
            name: 'Integration',
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

.help-button {
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
}
</style>