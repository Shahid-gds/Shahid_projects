<template>
  <!-- <div class="py-10 who-we-are">
    <div class="app-grid " style="background-color:#F5F5F5">
        <div class="flex justify-start items-center">
        <img src="@/assets/media/home/wo-we-are-img.png" class="w-9/12"
      />
    </div>
    <div class="flex justify-start mb-32 ml-32 flex-col flex-wrap firstPara mr-5">
        <div class="ml-40 mob-we-are" style="width: 40rem;">
            <h1 class="text-4xl text-black font-bold block w-96 p-2 ">
            Who We Are?
          </h1>
          <p class="info-desc font-light text-xl p-2">
            Making lives easier in the supply chain
          </p>
          <p class="info-desc font-light text-xl p-2">
            We are Muftar Digital. We are a professional logistics management
            company, offering specialized solutions for the entire
            transportation industry.
          </p>

          <p class="info-desc font-light text-xl p-2">
            Our objective has always been to make the transportation easier,
            more cost-effective and overall efficient.
          </p>

          <p class="info-desc font-light text-xl p-2">
            By offering our clients a digital solution to all their
            transportation needs, we provide a holistic solution for every part
            throughout the supply chain process.
          </p>

          <p class="info-desc font-light text-xl p-2">
            With our superior software, Brokers, Carriers and Shippers can
            oversee each part of the transportation process in real-time,
            offering instant access through our website (desktop or mobile) to
            all drivers' activities to ensure timeous delivery while maintaining
            all rules to safety and compliance. – We provide the ultimate
            efficiency needed in the transportation industry today through our
            unique, superior software.
          </p>
          </div>
    </div>

    

  </div>
  </div> -->
  <div>
    <div class="absolute" style="background:#F5F5F5; padding: 16rem; left:18rem; right: 18rem;"></div>
    <div class="flex justify-around gap-72 pl-20 pr-20 items-center relative flex-row-reverse mb-32">
    <div class=" ml-52 mt-24">
      <h1 class="text-4xl mobHeading uppercase font-bold text-black w-full p-6">Who We Are?</h1>
      <p class="text-black pl-6" style="width:40rem">We are Muftar Corp. We are a professional logistics management company, 
        offering specialized solutions for the entire transportation industry. Our objective has always been to make the transportation easier, more cost- effective and overall efficient.
        By offering our clients a digital solution to all their transportation needs, we  provide a holistic solution for every part throughout the  supply chain process.
        With our superior software, Brokers, Carriers and Shippers can oversee each part of the transportation process in real-time, offering instant  access through our website (desktop or mobile) to all drivers' activities to ensure timeous delivery while maintaining all rules to safety and compliance. – We provide the ultimate efficiency needed in the transportation industry today through our unique, superior software.
      </p>
      <div class="flex gap-10 ml-24 mt-2">
        <button class="bg-white rounded-2xl p-2 text-blue-900 text-sm w-40">Read More</button>
        <button class="bg-transparent rounded-2xl p-2 border-blue-900 border-1 text-blue-900 text-sm w-40">JOIN WAITLIST</button>
      </div>
    </div>
    <img class="absolute left-0" src="@/assets/media/home/wo-we-are-img.png" alt="" style="width:35rem; height:35rem; object-fit: contain;">

  </div>
  </div>
  
</template>

<script>
export default {};
</script>

<style scoped>
    
.who-we-are {
  /* background-image: url("../../assets/media/home/who-we-are-bg.png");
  background-size: 90% !important;
  background-repeat: no-repeat !important;
  height: 190vh; */
}
.info-desc {
  /* max-width: 800px; */
}
@media screen and (max-width: 900px) {
  .mob {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #0e1012;
  }
  .whoWeArePara {
    margin-top: 0 !important;
  }
  .wo-we-are-img{
    width: 50% !important;
  }
  .mob-we-are{
    width: 20rem !important;
    margin-left: 2rem;
  }
}
</style>
