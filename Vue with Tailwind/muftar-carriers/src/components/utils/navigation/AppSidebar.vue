<template>
    <div id="Sidebar" class="flex flex-col leading-3 overflow-y-auto justify-between bg-gray-100 w-64 ">
        <div class="bg-[url('@/assets/side-bar/sidebar-bg.png')] h-screen bg-no-repeat">

            <!-- LOGO -->
            <div class="logo my-10 relative ml-5">
                <a href="/" class="simple-text flex text-light">
                    <img src="@/assets/logo-2.svg" alt="">
                    <span class="text-gray-500 flex items-center">MUFTAR PORTALS</span>
                </a>

                <div class="absolute right-0 text-center py-2 px-1 text-xs rounded w-4/12 " style="color:#2189ed; ">
                    v{{ version }}
                </div>
            </div>


            <!-- USER INFO -->
            <RouterLink :to="{ name: 'Account' }">
                <div class="flex justify-start mt-8 ml-5">
                    <!-- <img :src="org_data.photo" alt="org-photo" class="h-11 w-11 rounded-full" /> -->
                    <div class="font-extrabold flex flex-col mx-3  text-sm">
                        <span class="text-primary">
                            {{ userdata.fname }} {{ userdata.lname }}
                        </span>
                        <p class="text-black">role: <span class=" text-primary">{{ userdata.role }}</span></p>
                    </div>
                </div>

                <div class="flex justify-start mt-8 ml-5">
                    <img :src="org_data.photo" alt="org-photo" class="h-11 w-11 rounded-full" />
                    <div class="font-extrabold flex flex-col mx-3">
                        <span class="text-sm my-auto text-primary">
                            {{ org_data.name }}
                        </span>
                        <p class="text-xs  font-thin text-secondry"> {{ org_data.role }} </p>

                    </div>
                    <!-- <img class="mx-3" src="@/assets/side-bar/arrow-down.svg" alt="Arrow-image"> -->
                </div>
            </RouterLink>

            <!-- <DevView _class="my-2 w-3/4 ml-5" /> -->

            <!-- NAVIGATION LINKS -->
            <!-- xyz="fade-100% left stagger-1" -->
            <div class="flex flex-col mt-4  ">
                <router-link v-for="(mu, idx) in menu" :key="idx" active-class="active"
                    class="flex py-4 text-[#A09F9F] cursor-pointer " :to="mu.route">
                    <!-- <div class="w-2 h-9 my-auto bg-primary border-4 rounded-r-3xl border-primary">
xyz-in
                                                  </div> -->

                    <img :src="mu.icon" class="w-6 h-6 mr-2 ml-3" />
                    <span class="text-center">{{ mu.text }} </span>
                </router-link>
            </div>

            <!-- CONTACT CARDS -->
            <div class="space-y-2 mt-5">
                <Support @openModal="openModal" />
                <MuftarGPT @openModal="openModal" />

            </div>
            <Teleport to="body">
                <GPTModal @closeModal="closeModal" v-if="showModal" />
            </Teleport>

        </div>
        <div class="flex flex-col space-y-6 m-5 mt-16">
            <div class="text-secondry">
                <p class="text-xs">Copyright © 2022-2023 Muftar Corp.</p>
                <p class=" text-xs">All Rights Reserved.</p>
            </div>
            <div class="flex space-x-3">
                <a href="https://www.facebook.com/muftardigital" target="_blank" class="hover:scale-125 transition-all">
                    <mdicon size="23" class="text-[#c5c5c5] hover:text-gray-700" name="facebook" />
                </a>
                <a href="https://twitter.com/muftarcorp" target="_blank" class="hover:scale-125 transition-all">
                    <mdicon size="23" class="text-[#c5c5c5] hover:text-gray-700" name="twitter" />
                </a>
                <a href="https://www.linkedin.com/company/muftar-digital/" target="_blank"
                    class="hover:scale-125 transition-all">
                    <mdicon size="23" class="text-[#c5c5c5] hover:text-gray-700" name="linkedin" />
                </a>
                <a href="https://www.youtube.com/@muftarcorp" class="hover:scale-125 transition-all" target="_blank">
                    <mdicon size="23" class="text-[#c5c5c5] hover:text-gray-700" name="youtube" />
                </a>
                <a href="https://www.instagram.com/muftarcorp/" class="hover:scale-125 transition-all" target="_blank">
                    <mdicon size="23" class="text-[#c5c5c5] hover:text-gray-700" name="instagram" />
                </a>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import { mapState } from 'vuex'
import Support from './contact/Support.vue';
import MuftarGPT from './contact/MuftarGPT.vue';
import GPTModal from './contact/GPTModal.vue';


export default {
    props: {
        menu: {
            type: Array,
            default: () => [],
        },
    },
    data() {
        return {
            showModal: false
        }
    },
    components: {
        Support,
        GPTModal,
        MuftarGPT
    },
    computed: {
        ...mapState(['org_data', 'version', 'userID', 'userdata'])
    },
    methods: {
        openModal() {
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
        }
    }

};
</script>
<style scoped>
.active {
    color: #3C59A8 !important;
    font-weight: bold;
    background: linear-gradient(90deg, #E8E9EA 0%, #FAFAFA 100%);
    transition: .2s;
    border-left: #3c59a8 8px solid;
}
</style>
