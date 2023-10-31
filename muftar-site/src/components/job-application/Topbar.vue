<template>
  <div class="topbar relative">
    <div class="overlay career-overlay"></div>
  </div>
</template>
<script>
export default {
  props: ["nonMobile"],
  components: {
  },
  data() {
    return {};
  },
};
</script>
<style scroped>
.topbar {
  width: 100%;
  min-height: 10vh;
  overflow: hidden;
}
.career-overlay {
  background: rgb(0, 0, 0);
  background: -moz-linear-gradient(
    93deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(76, 170, 199, 1) 100%
  );
  background: -webkit-linear-gradient(
    93deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(76, 170, 199, 1) 100%
  );
  background: linear-gradient(
    93deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(76, 170, 199, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#000000",endColorstr="#4caac7",GradientType=1);
}
@media (min-width: 900px) {
  .topbar {
    min-height: 10vh;
  }
}
</style>
