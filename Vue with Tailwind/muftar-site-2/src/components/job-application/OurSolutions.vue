<template>
  <div class="bg-white">
    <!-- grid -->
    <div class="relative z-10 bg-white">
      <div class="grid grid-cols-4 gap-1 w-screen cutomersMob p-12">
        <div><img src="@/assets/icons/customer/customer1.png" alt="" /></div>
        <div><img src="@/assets/icons/customer/customer2.png" alt="" /></div>
        <div><img src="@/assets/icons/customer/customer3.png" alt="" /></div>
        <div><img src="@/assets/icons/customer/customer4.png" alt="" /></div>
        <div><img src="@/assets/icons/customer/customer5.png" alt="" /></div>
        <div><img src="@/assets/icons/customer/customer6.png" alt="" /></div>
        <div><img src="@/assets/icons/customer/customer7.png" alt="" /></div>
        <div><img src="@/assets/icons/customer/customer8.png" alt="" /></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      services: [
        {
          title: "COMPANY HISTORY",
          description:
            "Muftar Digital was born on 2012 with just a handful of trucks. Since then, we have undergone many obstacles, learned important lessons, and pivoted along the way to keep the scope of our focus on those who work with us and those we work for.",
          icon: require("@/assets/icons/about/aboutIcon1.png"),
        },
        {
          title: "OUR MISSION",
          description:
            "Our mission is to offer the world’s finest transportation system that is safe, dependable, efficient, environmentally friendly, and gratifying to both users and operators, as well as to make people feel at ease when they come to us for transportation services.",
          icon: require("@/assets/icons/about/aboutIcon2.png"),
        },
        {
          title: "COMPANY VISION",
          description:
            "Our vision is to become a well-known brand in the industry providing drivers with a path to success, owner operators with a hub for great loads, brokers with the best services possible, and end consumers with the deliver of goods indirectly.",
          icon: require("@/assets/icons/about/aboutIcon3.png"),
        },
        {
          title: "EXPANSION",
          description:
            "Through expansion, our goal is for Muftar Digital to become a tech-based giant in the transportation industry.",
          icon: require("@/assets/icons/about/aboutIcon4.png"),
        },
      ],
    };
  },
};
</script>
<style scroped>
@media screen and (max-width: 900px) {
  .cutomersMob {
    display: flex !important;
    flex-direction: column;
    align-items: center;
  }
}
</style>
