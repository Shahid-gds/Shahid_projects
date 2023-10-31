<template>
  <section class="bg-white text-center">
    <h2 class="text-4xl py-4">Integrated solution</h2>
    <div class="flex partners justify-evenly items-center">
      <div
        v-for="(p, idx) in partners"
        :key="idx"
        class="w-96 text-center flex justify-between items-center partnersImg"
      >
        <img class="w-32 mx-auto md:w-full" :src="p.img" />
      </div>
    </div>
  </section>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      partners: [
        { img: require("@/assets/logos/home-partners/apex.png") },
        { img: require("@/assets/logos/home-partners/trukin.png") },
      ],
    };
  },
};
</script>
<style scroped>
@media screen and (max-width: 900px) {
  .partners {
    display: flex;
    flex-direction: column;
  }
  .partnersImg {
    margin: 20px;
  }
}
</style>
