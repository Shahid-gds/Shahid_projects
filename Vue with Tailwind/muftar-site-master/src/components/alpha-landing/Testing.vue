<template>
  <div>
    <div class="flex justify-center items-center mb-10 flex-col gap-4 mt-10">
        <h1 class="sm:text-xl lg:text-5xl text-center  text-black font-bold">Alpha Testing Active</h1>
        <p class="text-xl text-gray-500">Stay Updated On Our Progress</p>
        <img class="w-20" src="../../assets/icons/alpha-landing/logo.svg" alt="">
    </div>
    <div class="timeline">
      <div class="container one rightFirst">
        <div class="content r_one">
          <h2>Driver Mobile</h2>
        </div>
      </div>
      <div class="container two left">
        <div class="content l_one">
          <h2>Carrier Portal</h2>
        </div>
      </div>
      <div class="container three right">
        <div class="content r_two">
          <h2>Broker Portal</h2>
        </div>
      </div>
      <div class="container four left">
        <div class="content l_two">
          <h2>Client Portal</h2>
        </div>
      </div>
      <div class="container five right">
        <div class="content r_three">
          <h2>Rapid System</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
/* The actual timeline (the vertical ruler) */
.timeline {
  /* background-color: #474e5d !important; */
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}

.content.r_three,
.r_two,
.r_one{
    border-top-left-radius: 0 !important;
    border-bottom-left-radius: 0 !important;
    border-left: white !important;
}
.content.l_one,
.l_two{
    border-top-right-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
    border-right: white !important;
}
h2 {
  color: #bcbdbd;
}

/* The actual timeline (the vertical ruler) */
.timeline::after {
  content: "";
  position: absolute;
  width: 2px;
  background-color: #bcbdbd;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -3px;
}

/* Container around content */
.container {
  /* padding: 10px 40px; */
  position: relative;
  background-color: inherit;
  width: 20%;
  height: 60px !important;
  min-height: 20vh;
}

/* The circles on the timeline */
.one::after {
  content: url("../../assets/icons/alpha-landing/dm.svg");
  position: absolute;
  width: 25px;
  height: 25px;
  right: -75px;
  /* background-color: white;
  border: 4px solid #FF9F55; */
  top: 75px;
  border-radius: 50%;
  z-index: 1;
}
.two::after {
  content: url("../../assets/icons/alpha-landing/cp.svg");
  position: absolute;
  width: 25px;
  height: 25px;
  right: -155px;
  top: 75px;
  border-radius: 50%;
  z-index: 1;
}
.three::after {
  content: url("../../assets/icons/alpha-landing/bp.svg");
  position: absolute;
  width: 25px;
  height: 25px;
  right: -155px;
  top: 75px;
  border-radius: 50%;
  z-index: 1;
}
.four::after {
  content: url("../../assets/icons/alpha-landing/cp-2.svg");
  position: absolute;
  width: 25px;
  height: 25px;
  right: -155px;
  top: 75px;
  border-radius: 50%;
  z-index: 1;
}
.five::after {
  content: url("../../assets/icons/alpha-landing/rs.svg");
  position: absolute;
  width: 25px;
  height: 25px;
  right: -155px;
  top: 75px;
  border-radius: 50%;
  z-index: 1;
}

/* Place the container to the left */
.left {
  left: 30%;
}

/* Place the container to the right */
.right {
  left: 50%;
}
.rightFirst {
  left: 50%;
}

/* Add arrows to the left container (pointing right) */
.left::before {
  content: url("../../assets/icons/alpha-landing/check-gray.svg");
  height: 0;
  position: absolute;
  top: 0px;
  width: 40px;
  z-index: 1;
  right: -17px;
  top: 75px;
  /* border: medium solid white;
  border-width: 10px 0 10px 10px;
  border-color: transparent transparent transparent white; */
}

/* Add arrows to the right container (pointing left) */
.rightFirst::before {
  content: url("../../assets/icons/alpha-landing/check.svg");
  height: 0;
  position: absolute;
  /* top: 22px; */
  /* width: 40px; */
  z-index: 1;
  left: -23px;
  /* border: medium solid white;
  border-width: 10px 10px 10px 0;
  border-color: transparent white transparent transparent; */
}
.right::before {
  content: url("../../assets/icons/alpha-landing/check-gray.svg");
  height: 0;
  position: absolute;
  top: 75px;
  /* width: 40px; */
  z-index: 1;
  left: -23px;
  top: 75px;
  /* border: medium solid white;
  border-width: 10px 10px 10px 0;
  border-color: transparent white transparent transparent; */
}

/* Fix the circle for containers on the right side */
.right::after {
  left: -155px;
}
.rightFirst::after {
  left: -155px;
}

/* The actual content */
.content {
  /* padding: 20px 30px; */
  border: 1px solid #bcbdbd;
  position: relative;
  border-radius: 20px;
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 67px;
}

/* Media queries - Responsive timeline on screens less than 600px wide */
@media screen and (max-width: 600px) {
    .content{
        width: 210%;
    }
    .two .content{
        left:-6rem
    }
    .four .content{
        left:-6rem
    }

}
</style>