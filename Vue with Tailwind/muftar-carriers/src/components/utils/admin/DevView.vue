<template>
    <div class="flex cursor-pointer items-center justify-between dev-view-btn bg-yellow-100 text-yellow-700 py-2 px-3 rounded hover:bg-yellow-200" :class="_class"
     @click="setDevView()">
         DEV VIEW 
         
         <svg id="info" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512">
         <g id="Group_487" data-name="Group 487">
             <g id="Group_486" data-name="Group 486">
             <path id="Path_767" data-name="Path 767" d="M256,0C114.509,0,0,114.5,0,256S114.5,512,256,512,512,397.5,512,256,397.5,0,256,0Zm0,476.279C134.538,476.279,35.721,377.463,35.721,256S134.538,35.721,256,35.721,476.279,134.537,476.279,256,377.462,476.279,256,476.279Z" fill="#b4530a"/>
             </g>
         </g>
         <g id="Group_489" data-name="Group 489">
             <g id="Group_488" data-name="Group 488">
             <path id="Path_768" data-name="Path 768" d="M256.006,213.4c-15.164,0-25.947,6.4-25.947,15.839V357.622c0,8.088,10.783,16.174,25.947,16.174,14.49,0,26.283-8.086,26.283-16.174V229.234C282.289,219.8,270.5,213.4,256.006,213.4Z" fill="#b4530a"/>
             </g>
         </g>
         <g id="Group_491" data-name="Group 491">
             <g id="Group_490" data-name="Group 490">
             <path id="Path_769" data-name="Path 769" d="M256.006,134.208c-15.5,0-27.631,11.12-27.631,23.925S240.506,182.4,256.006,182.4c15.164,0,27.3-11.457,27.3-24.263S271.169,134.208,256.006,134.208Z" fill="#b4530a"/>
             </g>
         </g>
         </svg>
 
     </div>
 </template>
 <script>
 import {mapState, mapMutations} from 'vuex'
 export default{
     data(){
         return{}
     },
     props:['_class'],
     computed:{
         ...mapState(['testmode'])
     },
     methods:{
         ...mapMutations(['SET_TEST_MODE']),
         setDevView(){
             if(this.testmode == false){
                 this.SET_TEST_MODE(true)
             }else{
                 this.SET_TEST_MODE(false)
             }
         }
     }
 }
 </script>
 <style scoped>
 /* .dev-view-btn img{} */
 </style>