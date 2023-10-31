<template>
  <div class="w-full bg-[#F9F9F9]">
    <div class="flex w-full">
      <div class="flex-1">
        <Header />
        <FleetManager />
        <!-- <LoadBoard /> -->
       <!-- <ActiveOrders/> -->
       <!-- <OrderHistory /> -->
      </div>
    </div>
    </div>
</template>

<script setup>
  import Header from '../Dispatch/Header.vue';
  import FleetManager from './Fleet Manager/FleetManager.vue';
  // import LoadBoard from './Load Board/LoadBoard.vue';
  // import ActiveOrders from './Active Orders/ActiveOrders.vue';
  // import OrderHistory from './Order History/OrderHistory.vue';
  
  const components = {
    Header,
    FleetManager,
    // LoadBoard,
    // ActiveOrders,
    // OrderHistory,
  };
</script>
