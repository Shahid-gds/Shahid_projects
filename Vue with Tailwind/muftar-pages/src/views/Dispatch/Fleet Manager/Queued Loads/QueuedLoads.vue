<template>
    <div class="absolute queued-header right-0 px-6 flex items-center space-x-3">
        <div class="relative">
            <input type="text" class="w-80 p-2 text-sm px-4 rounded-full" placeholder="Search Queued Loads ...">
          <div class="absolute right-5 top-1/2 transform -translate-y-1/2">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14.001" viewBox="0 0 14 14.001">
              <path id="Path_13134" data-name="Path 13134" d="M13.68-.118,10.407-3.391a5.685,5.685,0,0,0,.915-3.957A5.719,5.719,0,0,0,6.431-12.2,5.692,5.692,0,0,0,.047-5.819,5.718,5.718,0,0,0,4.9-.927,5.685,5.685,0,0,0,8.86-1.842l3.273,3.273A1.095,1.095,0,0,0,13.68-.118ZM2.163-6.562a3.5,3.5,0,0,1,3.5-3.5,3.5,3.5,0,0,1,3.5,3.5,3.5,3.5,0,0,1-3.5,3.5A3.5,3.5,0,0,1,2.163-6.562Z" transform="translate(0 12.25)" fill="#3c5aa8"/>
            </svg> 
          </div> 
          </div>
          <div class="cursor-pointer active">
            <svg xmlns="http://www.w3.org/2000/svg" width="15.131" height="18" viewBox="0 0 15.131 18">
                <path id="Icon_open-grid-three-up" data-name="Icon open-grid-three-up" d="M0,0V4.5H3.783V0ZM5.674,0V4.5H9.457V0Zm5.674,0V4.5h3.783V0ZM0,6.75v4.5H3.783V6.75Zm5.674,0v4.5H9.457V6.75Zm5.674,0v4.5h3.783V6.75ZM0,13.5V18H3.783V13.5Zm5.674,0V18H9.457V13.5Zm5.674,0V18h3.783V13.5Z" fill="#3c5aa8"/>
              </svg>              
          </div>
          <!-- <div class="cursor-pointer">
            <svg id="GridView" xmlns="http://www.w3.org/2000/svg" width="15.131" height="18" viewBox="0 0 15.131 18">
                <g id="Component_27_12" data-name="Component 27 – 12">
                  <path id="Icon_open-grid-three-up" data-name="Icon open-grid-three-up" d="M0,0V4.5H3.783V0ZM5.674,0V4.5H9.457V0Zm5.674,0V4.5h3.783V0ZM0,6.75v4.5H3.783V6.75Zm5.674,0v4.5H9.457V6.75Zm5.674,0v4.5h3.783V6.75ZM0,13.5V18H3.783V13.5Zm5.674,0V18H9.457V13.5Zm5.674,0V18h3.783V13.5Z" fill="#a5abdb"/>
                </g>
              </svg>                            
          </div> -->
          <div class="cursor-pointer">
            <svg id="ListView" xmlns="http://www.w3.org/2000/svg" width="18.623" height="18" viewBox="0 0 18.623 18">
                <g id="Component_26_11" data-name="Component 26 – 11">
                  <path id="Icon_awesome-list" data-name="Icon awesome-list" d="M2.91,17.221H.582A.644.644,0,0,0,0,17.913v2.769a.644.644,0,0,0,.582.692H2.91a.644.644,0,0,0,.582-.692V17.913A.644.644,0,0,0,2.91,17.221Zm0-13.846H.582A.644.644,0,0,0,0,4.067V6.837a.644.644,0,0,0,.582.692H2.91a.644.644,0,0,0,.582-.692V4.067A.644.644,0,0,0,2.91,3.375Zm0,6.923H.582A.644.644,0,0,0,0,10.99V13.76a.644.644,0,0,0,.582.692H2.91a.644.644,0,0,0,.582-.692V10.99A.644.644,0,0,0,2.91,10.3Zm15.131,7.615H6.4a.644.644,0,0,0-.582.692V19.99a.644.644,0,0,0,.582.692h11.64a.644.644,0,0,0,.582-.692V18.606A.644.644,0,0,0,18.041,17.913Zm0-13.846H6.4a.644.644,0,0,0-.582.692V6.144a.644.644,0,0,0,.582.692h11.64a.644.644,0,0,0,.582-.692V4.76A.644.644,0,0,0,18.041,4.067Zm0,6.923H6.4a.644.644,0,0,0-.582.692v1.385a.644.644,0,0,0,.582.692h11.64a.644.644,0,0,0,.582-.692V11.683A.644.644,0,0,0,18.041,10.99Z" transform="translate(0 -3.375)" fill="#a5abdb"/>
                </g>
              </svg>              
          </div> 
          <!-- <div class="cursor-pointer active">
            <svg id="ListView" xmlns="http://www.w3.org/2000/svg" width="18.623" height="18" viewBox="0 0 18.623 18">
                <path id="Icon_awesome-list" data-name="Icon awesome-list" d="M2.91,17.221H.582A.644.644,0,0,0,0,17.913v2.769a.644.644,0,0,0,.582.692H2.91a.644.644,0,0,0,.582-.692V17.913A.644.644,0,0,0,2.91,17.221Zm0-13.846H.582A.644.644,0,0,0,0,4.067V6.837a.644.644,0,0,0,.582.692H2.91a.644.644,0,0,0,.582-.692V4.067A.644.644,0,0,0,2.91,3.375Zm0,6.923H.582A.644.644,0,0,0,0,10.99V13.76a.644.644,0,0,0,.582.692H2.91a.644.644,0,0,0,.582-.692V10.99A.644.644,0,0,0,2.91,10.3Zm15.131,7.615H6.4a.644.644,0,0,0-.582.692V19.99a.644.644,0,0,0,.582.692h11.64a.644.644,0,0,0,.582-.692V18.606A.644.644,0,0,0,18.041,17.913Zm0-13.846H6.4a.644.644,0,0,0-.582.692V6.144a.644.644,0,0,0,.582.692h11.64a.644.644,0,0,0,.582-.692V4.76A.644.644,0,0,0,18.041,4.067Zm0,6.923H6.4a.644.644,0,0,0-.582.692v1.385a.644.644,0,0,0,.582.692h11.64a.644.644,0,0,0,.582-.692V11.683A.644.644,0,0,0,18.041,10.99Z" transform="translate(0 -3.375)" fill="#3c5aa8"/>
              </svg>                          
          </div>  -->
    </div>
    <div class="overflow-y-auto px-3 pb-20" style="height: 90vh;">
        <div>
            <CardView />
            <!-- <TabView /> -->
        </div>
    </div>
</template>

<script setup>
import CardView from './CardView.vue';
import TabView from './TabView.vue';
</script>

<style scoped>
::-webkit-scrollbar {
    width: 5px;
    height: 8px;
  }
  
::-webkit-scrollbar-thumb {
    background-color: #DEE1F8;
    border-radius: 4px;
  }
  
 ::-webkit-scrollbar-thumb:hover {
    background-color: #DEE1F8;
  }
  .queued-header {
    margin-top: -4.5rem;
  }
</style>