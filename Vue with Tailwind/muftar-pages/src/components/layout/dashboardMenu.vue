<template>
    <div class="items-center pb-6 bg-[#3A54B4] rounded-lg">
        <div class="flex items-center space-x-3 p-6">
            <div class="bg-[white] p-1.5 rounded-lg">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#3A54B4" class="w-6 h-6">
                 <path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
               </svg>
            </div>
         <div class="text-white">
             <h1>ITSM Service Desk</h1>
             <p class="text-xs">Service Project</p>
         </div>
         </div>
   
      <div class="p-5">
        <router-link class="flex items-center space-x-3 p-2"
          v-for="item in menu" :key="item" :to="item.route"
          :class="{ 'bg-gradient-to-r p-1.5 from-blue-400 rounded-lg text-[#8D8D8D] border-r-[#3C5AA8]': $route.path === item.route }">
          <div>
            <span>
              <img :src="item.icon" :alt="item.icon">
            </span>
          </div>
          <div class="text-white">
            {{ item.name }}
          </div>
        </router-link>
      </div>
      <div class=" text-white border-b-2"></div>
      <div class="p-5">
        <router-link class="flex items-center space-x-3 p-2"
          v-for="seconditem in secondmenu" :key="seconditem" :to="seconditem.route"
          :class="{ 'bg-gradient-to-r p-2 from-blue-400 rounded-lg text-[white] border-r-[#3C5AA8]': $route.path === seconditem.route }">
          <div>
            <span>
              <img :src="seconditem.icon" :alt="seconditem.icon">
            </span>
          </div>
          <div class="text-white">
            {{ seconditem.name }}
          </div>
        </router-link>
      </div>
      <div class=" text-white border-b-2"></div>
      <div class="p-5">
        <router-link class="flex items-center space-x-3 p-2"
          v-for="thirditem in thirdmenu" :key="thirditem" :to="thirditem.route"
          :class="{ 'bg-gradient-to-r p-2 from-blue-400 rounded-lg text-[white] border-r-[#3C5AA8]': $route.path === thirditem.route }">
          <div>
            <span>
              <img :src="thirditem.icon" :alt="thirditem.icon">
            </span>
          </div>
          <div class="text-white">
            {{ thirditem.name }}
          </div>
        </router-link>
      </div>
      <div class=" text-white border-b-2"></div>
      <div class="p-5">
        <router-link class="flex items-center space-x-3 p-2"
          v-for="fourthitem in fourthmenu" :key="fourthitem" :to="fourthitem.route"
          :class="{ 'bg-gradient-to-r p-2 from-blue-400 rounded-lg text-[white] border-r-[#3C5AA8]': $route.path === fourthitem.route }">
          <div>
            <span>
              <img :src="fourthitem.icon" :alt="fourthitem.icon">
            </span>
          </div>
          <div class="text-white">
            {{ fourthitem.name }}
          </div>
        </router-link>
      </div>
      <div class="px-6 uppercase text-white border-b-2"></div>
      <div class="px-6 p-2 text-white">
        <router-link class="flex space-x-3 p-2" v-for="settingitem in accountSetting" :key="settingitem" :to="settingitem.route"
        :class="{ 'bg-gradient-to-r p-2 from-blue-400 rounded-lg text-[white] border-r-[#3C5AA8]': $route.path === settingitem.route }">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>            
          </div>
          <div>Account Settings</div>
        </router-link>
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
            icon: import('@/assets/images/icons/queues.svg').then((module) => module.default),
            name: 'Queues',
            route: '/dashboard',
        },
        {
            icon: import('@/assets/images/icons/service-request.svg').then((module) => module.default),
            name: 'Service Request',
            route: '',
        },
        {
            icon: import('@/assets/images/icons/incidents.svg').then((module) => module.default),
            name: 'Incidents',
            route: '',
        },
        {
            icon: import('@/assets/images/icons/problem.svg').then((module) => module.default),
            name: 'Problems',
            route: '',
        },
        {
            icon: import('@/assets/images/icons/changes.svg').then((module) => module.default),
            name: 'Changes',
            route: '',
        },
    ]);
    const secondmenu = ref([
        {
            icon: import('@/assets/images/icons/services.svg').then((module) => module.default),
            name: 'Services',
            route: '',
        },
        {
            icon: import('@/assets/images/icons/id.svg').then((module) => module.default),
            name: 'Create Task',
            route: '/create-task',
        },
        {
            icon: import('@/assets/images/icons/bell.svg').then((module) => module.default),
            name: 'Alerts',
            route: '',
        },
        {
            icon: import('@/assets/images/icons/on-call.svg').then((module) => module.default),
            name: 'Help and Support',
            route: '/support',
        },
    ]);
    const thirdmenu = ref([
      {
            icon: import('@/assets/images/icons/knowledge.svg').then((module) => module.default),
            name: 'Knowledge Base',
            route: '',
        },
        {
            icon: import('@/assets/images/icons/reports.svg').then((module) => module.default),
            name: 'Reports',
            route: '',
        },
    ]);
    const fourthmenu = ref([
      {
            icon: import('@/assets/images/icons/ticket.svg').then((module) => module.default),
            name: 'Ticket Channels',
            route: '/tickets',
        },
        {
            icon: import('@/assets/images/icons/customers.svg').then((module) => module.default),
            name: 'Customers',
            route: '',
        },
        {
            icon: import('@/assets/images/icons/invite.svg').then((module) => module.default),
            name: 'Invite Team',
            route: '/invite',
        },
    ]);
    const accountSetting = ref([
      {
            icon: import('@/assets/images/icons/ticket.svg').then((module) => module.default),
            name: 'Account Settings',
            route: '/account',
        },
    ]);

    onMounted(async () => {
    
    menu.value = await Promise.all(menu.value.map(async (item) => ({
      ...item,
      icon: await item.icon
    })));
    secondmenu.value = await Promise.all(secondmenu.value.map(async (seconditem) => ({
      ...seconditem,
      icon: await seconditem.icon
    })));
    thirdmenu.value = await Promise.all(thirdmenu.value.map(async (thirditem) => ({
      ...thirditem,
      icon: await thirditem.icon
    })));
    fourthmenu.value = await Promise.all(fourthmenu.value.map(async (fourthitem) => ({
      ...fourthitem,
      icon: await fourthitem.icon
    })));
    accountSetting.value = await Promise.all(accountSetting.value.map(async (settingitem) => ({
      ...settingitem,
      icon: await settingitem.icon
    })));
  });
</script>


<style scoped>

</style>
