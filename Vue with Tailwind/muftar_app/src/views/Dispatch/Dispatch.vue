<template>
  <div class="w-full">
    <div class="flex w-full">
      <div class="w-64">
        <SideMenu />
      </div>
      <div class="flex-1">
        <Header />
        <!-- <FleetManager /> -->
        <!-- <LoadBoard /> -->
       <ActiveOrders/>
       <!-- <OrderHistory /> -->
      </div>
    </div>
    </div>
</template>

<script setup>
  import Header from '../Dispatch/Header.vue';
  import SideMenu from '../SideMenu/SideMenu.vue';
  // import FleetManager from './Fleet Manager/FleetManager.vue';
  // import LoadBoard from './Load Board/LoadBoard.vue';
  import ActiveOrders from './Active Orders/ActiveOrders.vue';
  // import OrderHistory from './Order History/OrderHistory.vue';
  
  const components = {
    Header,
    SideMenu,
    // FleetManager,
    // LoadBoard,
    ActiveOrders,
    // OrderHistory,
  };
</script>
