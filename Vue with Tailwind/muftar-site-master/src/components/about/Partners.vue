<template>
  <section class="text-center pt-5 pb-5" style="background:#34487D">
    <h2 class="text-xl py-4 text-white mb-10 trusted centerCustome">TRUSTED BY THE INDUSTRY LEADERS</h2>
    <div class="flex partners justify-evenly items-center">
      <div
        v-for="(p, idx) in partners"
        :key="idx"
        class="text-center flex justify-between items-center partnersImg mb-10"
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
        { img: require("@/assets/media/about/customerlogoWhite.png") },
        // { img: require("@/assets/logos/trukin.png") },
      ],
    };
  },
};
</script>
<style scroped>
.centerCustome{
  display: block;
  margin: auto;
  width: 30%;
}
.trusted{
  position: relative;
}
.trusted::after{
  content: "";
  position: absolute;
  background-image: linear-gradient(120deg, #34487D, #5D8AC7,#34487D);
  border-radius: 35px;
  width: 100%;
  height: 5px;
  bottom: 0;
  left: 0;
}
@media screen and (max-width: 900px) {
  .partners {
    display: flex;
    flex-direction: column;
  }
  .partnersImg img{
    margin-top: 20px;
    width: 17rem !important;
  }
  .centerCustome{
    width: 100%;
    font-size: inherit;
  }
}
</style>
