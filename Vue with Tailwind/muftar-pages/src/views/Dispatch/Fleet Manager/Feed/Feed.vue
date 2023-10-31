<template>
  <Modal class="" v-if="showModal" @close="closeModal">
    <div>
      <img :src="accedintImgs" :alt="accedintImgs" class="container mx-auto mt-40 rounded-tr-2xl rounded-bl-3xl" />
    </div>
  </Modal>
  <div class="p-2 overflow-y-auto pb-20" style="height: 90vh;">
    <div class="mx-5 bg-white shadow-lg rounded-xl mt-12 flex" v-for="feed in feeds">
      <div class="-mt-10 -ml-3">
        <img :src="feed.profileImg" :alt="feed.profileImg">
      </div>
      <div class="ml-5 mt-5 w-4/5 p-5">
        <div class="flex space-x-1">
          <div class="text-[#3C5AA8] text-lg font-semibold">
            {{ feed.name }}
          </div>
          <div class="text-lg">
            ({{ feed.role }})
          </div>
        </div>
        <div class="text-[#C9CCE6] border-b-2 pb-3">
          {{ feed.timestamp }}
        </div>
        <div class="border-b-2 py-3">
          {{ feed.message }}
        </div>
        <div class="py-5 flex" v-if="feed.btn">
          <div class="w-44 px-10 rounded-bl-lg bg-[#EEEFF6] p-2 text-[#3C5AA8]">
            {{ feed.btn }}
          </div>
          <div class="rounded-full h-7 w-7 p-1 px-1.5 -ml-4 -mt-2 bg-[#3C5AA8]">
            <svg xmlns="http://www.w3.org/2000/svg" width="18.46" height="18.861" viewBox="0 0 18.46 18.861">
              <g id="truck" transform="matrix(0.788, 0.616, -0.616, 0.788, 7.337, -6.297)">
                <path id="Path_13605" data-name="Path 13605"
                  d="M9,14.911A1.047,1.047,0,0,1,7.89,13.856V13.61h.455A.661.661,0,0,1,9,14.268Zm8.259,0v-.643a.658.658,0,0,1,.658-.658h.455v.246a1.074,1.074,0,0,1-1.113,1.055ZM10.5,18.1a.361.361,0,0,1-.361.361H9.268a.361.361,0,0,1-.361-.361v-.723h1.569Zm7.247,0a.361.361,0,0,1-.361.361h-.867a.361.361,0,0,1-.361-.361v-.723h1.59Zm1.446-1.977a.466.466,0,0,1-.473.531H7.558a.47.47,0,0,1-.484-.528.488.488,0,0,1,.484-.484H18.716a.473.473,0,0,1,.484.492Zm-.86-3.253H17.92a1.381,1.381,0,0,0-1.381,1.381v.643H16.1v-4.9a.361.361,0,0,0-.361-.361H10.529a.361.361,0,0,0-.361.361v4.926H9.727v-.643a1.381,1.381,0,0,0-1.381-1.381H7.937c.127-.394.835-1.052.835-1.167L8.79,4.274A.275.275,0,0,1,9.065,4h.361a.275.275,0,0,1,.275.275v.593a.361.361,0,0,0,.477.343c.224-.058,5.722-.04,5.949,0,.412.072.477-.224.477-.34v-.6A.275.275,0,0,1,16.894,4h.361a.275.275,0,0,1,.275.275l.025,7.446c.014.112.643.683.784,1.167Zm-2.964.643H10.89v-.618h4.485Zm0-1.363H10.89v-.614h4.485ZM10.89,14.253h4.485v.589H10.89Zm4.485-3.445H10.89v-.463h4.485Zm1.24-5.161H9.774a.361.361,0,0,0-.361.361V9.034a.361.361,0,0,0,.361.361h6.842a.361.361,0,0,0,.361-.361V6.009A.361.361,0,0,0,16.616,5.648Zm-.361,3.025H10.135V6.37h6.119Z"
                  transform="translate(-1.96 0)" fill="#fff" />
                <path id="Path_13606" data-name="Path 13606"
                  d="M39.846,8.25H38.711a.361.361,0,0,0-.361.361v1.97c0,.448.567.361.567.361v.52c0,.571-.817.448-.817.448v.723s1.54.047,1.54-1.171v-.52s.567.061.567-.361V8.611a.361.361,0,0,0-.361-.361Z"
                  transform="translate(-21.775 -2.715)" fill="#fff" />
                <path id="Path_13607" data-name="Path 13607"
                  d="M5.29,11.463v-.52s.567.09.567-.361V8.611A.361.361,0,0,0,5.5,8.25H4.361A.361.361,0,0,0,4,8.611v1.97c0,.473.567.361.567.361v.52c0,1.316,1.525,1.171,1.525,1.171v-.723S5.29,12.042,5.29,11.463Z"
                  transform="translate(0 -2.715)" fill="#fff" />
              </g>
            </svg>
          </div>
        </div>
        <div class="py-5 flex" v-if="feed.rejectedbol_btn">
          <div class="w-44 px-6 rounded-bl-lg bg-[#EEEFF6] p-2 text-[#3C5AA8]">
            {{ feed.rejectedbol_btn }}
          </div>
          <div class="-ml-4 -mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="25.334" height="25.334" viewBox="0 0 25.334 25.334">
              <path id="Icon_ionic-md-close-circle" data-name="Icon ionic-md-close-circle"
                d="M16.042,3.375A12.667,12.667,0,1,0,28.709,16.042,12.623,12.623,0,0,0,16.042,3.375ZM22.376,20.6,20.6,22.375l-4.56-4.56-4.56,4.56L9.708,20.6l4.56-4.56-4.56-4.56,1.773-1.773,4.56,4.56,4.56-4.56,1.773,1.773-4.56,4.56Z"
                transform="translate(-3.375 -3.375)" fill="#3c5aa8" />
            </svg>
          </div>
        </div>
        <div class="py-5 flex" v-if="feed.acceptedbol_btn">
          <div class="w-44 px-6 rounded-bl-lg bg-[#EEEFF6] p-2 text-[#3C5AA8]">
            {{ feed.acceptedbol_btn }}
          </div>
          <div class="-ml-4 -mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="25.33" height="25.33" viewBox="0 0 25.33 25.33">
              <path id="Icon_awesome-check-circle" data-name="Icon awesome-check-circle"
                d="M25.892,13.227A12.665,12.665,0,1,1,13.227.563,12.665,12.665,0,0,1,25.892,13.227Zm-14.13,6.706,9.4-9.4a.817.817,0,0,0,0-1.156L20,8.226a.817.817,0,0,0-1.156,0l-7.663,7.663L7.607,12.311a.817.817,0,0,0-1.156,0L5.3,13.467a.817.817,0,0,0,0,1.156l5.311,5.311a.817.817,0,0,0,1.156,0Z"
                transform="translate(-0.563 -0.563)" fill="#3c5aa8" />
            </svg>
          </div>
        </div>
        <div class="py-5 flex" v-if="feed.driverRejected_btn">
          <div class="w-44 px-6 rounded-bl-lg bg-[#EEEFF6] p-2 text-[#3C5AA8]">
            {{ feed.driverRejected_btn }}
          </div>
          <div class="-ml-4 -mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="27.803" height="27" viewBox="0 0 27.803 27">
              <g id="Group_1805" data-name="Group 1805" transform="translate(-140.721 9.377)">
                <circle id="Ellipse_6" data-name="Ellipse 6" cx="13.5" cy="13.5" r="13.5"
                  transform="translate(140.721 -9.377)" fill="#3c5aa8" />
                <g id="driving" transform="translate(75.223 -3.906)">
                  <path id="Path_13622" data-name="Path 13622"
                    d="M236.816,387.981a.645.645,0,1,0,.645.645A.646.646,0,0,0,236.816,387.981Z"
                    transform="translate(-158.32 -375.284)" fill="#fff" />
                  <path id="Path_13623" data-name="Path 13623"
                    d="M185.53,302.55a3.429,3.429,0,0,0-2.381.959l.83.238-.571,1.754h.57a1.627,1.627,0,0,1,3.1,0h.57l-.571-1.754.831-.238A3.429,3.429,0,0,0,185.53,302.55Z"
                    transform="translate(-107.033 -292.649)" fill="#fff" />
                  <path id="Path_13624" data-name="Path 13624"
                    d="M158.869,422.7h-.89l-.255.783-.534-.087a3.451,3.451,0,0,0,2.739,2.22v-1.855A1.634,1.634,0,0,1,158.869,422.7Z"
                    transform="translate(-81.923 -408.871)" fill="#fff" />
                  <path id="Path_13625" data-name="Path 13625"
                    d="M84.418,199.042l-1.38-3.414a1.3,1.3,0,0,0-1.21-.816H75.166a1.3,1.3,0,0,0-1.21.816l-1.38,3.414a1.1,1.1,0,0,0,.31,1.252l1.892,1.6.35.057.57-1.749-.509-.146-.61.017-.027-.981.448-.012a4.417,4.417,0,0,1,7,0l.448.012-.027.981-.61-.017-.509.146.57,1.749.35-.057,1.892-1.6A1.1,1.1,0,0,0,84.418,199.042Z"
                    transform="translate(0 -188.437)" fill="#fff" />
                  <path id="Path_13626" data-name="Path 13626"
                    d="M272.846,422.7h-.89a1.634,1.634,0,0,1-1.061,1.06v1.855a3.451,3.451,0,0,0,2.739-2.22l-.534.087Z"
                    transform="translate(-191.907 -408.871)" fill="#fff" />
                  <circle id="Ellipse_7" data-name="Ellipse 7" cx="2.942" cy="2.942" r="2.942"
                    transform="translate(75.555 0)" fill="#fff" />
                </g>
                <rect id="Rectangle_2109" data-name="Rectangle 2109" width="2.418" height="30.223"
                  transform="matrix(0.485, -0.875, 0.875, 0.485, 140.918, -1.146)" fill="#fff" />
              </g>
            </svg>
          </div>
        </div>
        <div class="py-5 flex" v-if="feed.newDriver_btn">
          <div class="w-44 px-8 rounded-bl-lg bg-[#EEEFF6] p-2 text-[#3C5AA8]">
            {{ feed.newDriver_btn }}
          </div>
          <div class="-ml-4 -mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27">
              <g id="Group_1804" data-name="Group 1804" transform="translate(-140.721 9.377)">
                <circle id="Ellipse_6" data-name="Ellipse 6" cx="13.5" cy="13.5" r="13.5"
                  transform="translate(140.721 -9.377)" fill="#3c5aa8" />
                <g id="driving" transform="translate(75.223 -3.906)">
                  <path id="Path_13622" data-name="Path 13622"
                    d="M236.816,387.981a.645.645,0,1,0,.645.645A.646.646,0,0,0,236.816,387.981Z"
                    transform="translate(-158.32 -375.284)" fill="#fff" />
                  <path id="Path_13623" data-name="Path 13623"
                    d="M185.53,302.55a3.429,3.429,0,0,0-2.381.959l.83.238-.571,1.754h.57a1.627,1.627,0,0,1,3.1,0h.57l-.571-1.754.831-.238A3.429,3.429,0,0,0,185.53,302.55Z"
                    transform="translate(-107.033 -292.649)" fill="#fff" />
                  <path id="Path_13624" data-name="Path 13624"
                    d="M158.869,422.7h-.89l-.255.783-.534-.087a3.451,3.451,0,0,0,2.739,2.22v-1.855A1.634,1.634,0,0,1,158.869,422.7Z"
                    transform="translate(-81.923 -408.871)" fill="#fff" />
                  <path id="Path_13625" data-name="Path 13625"
                    d="M84.418,199.042l-1.38-3.414a1.3,1.3,0,0,0-1.21-.816H75.166a1.3,1.3,0,0,0-1.21.816l-1.38,3.414a1.1,1.1,0,0,0,.31,1.252l1.892,1.6.35.057.57-1.749-.509-.146-.61.017-.027-.981.448-.012a4.417,4.417,0,0,1,7,0l.448.012-.027.981-.61-.017-.509.146.57,1.749.35-.057,1.892-1.6A1.1,1.1,0,0,0,84.418,199.042Z"
                    transform="translate(0 -188.437)" fill="#fff" />
                  <path id="Path_13626" data-name="Path 13626"
                    d="M272.846,422.7h-.89a1.634,1.634,0,0,1-1.061,1.06v1.855a3.451,3.451,0,0,0,2.739-2.22l-.534.087Z"
                    transform="translate(-191.907 -408.871)" fill="#fff" />
                  <circle id="Ellipse_7" data-name="Ellipse 7" cx="2.942" cy="2.942" r="2.942"
                    transform="translate(75.555 0)" fill="#fff" />
                </g>
              </g>
            </svg>

          </div>
        </div>
      </div>
      <div class="p-3">
        <div class="w-80 h-40 rounded-tr-xl rounded-bl-xl p-4 text-center bg-[#EEEFF6]">
          <div class="text-[#B4B9D8]" v-if="feed.des">
            <p class="uppercase py-16">{{ feed.des }}</p>
          </div>
          <div class="cursor-pointer" v-if="feed.accedintImg">
            <div>
              <img :src="feed.accedintImg" :alt="feed.accedintImg" @click="openModal(feed.accedintImg)"
                class="rounded-tr-2xl rounded-bl-2xl">
            </div>
          </div>

          <template v-if="feed.accedintImgs && feed.accedintImgs.length">
            <Carousel class="flex" :per-page="2" :per-move="1" :start-index="0">
              <template v-for="(img, index) in Math.ceil(feed.accedintImgs.length / 2)" :key="index">
                <Slide class="flex cursor-pointer">
                  <div class="flex space-x-3">
                    <template v-for="i in 2">
                      <img v-if="feed.accedintImgs[(index * 2) + (i - 1)]" :src="feed.accedintImgs[(index * 2) + (i - 1)]"
                        :alt="feed.accedintImgs[(index * 2) + (i - 1)]"
                        @click="openModal(feed.accedintImgs[(index * 2) + (i - 1)])"
                        class="rounded-tr-2xl rounded-bl-2xl">
                    </template>
                  </div>
                </Slide>
              </template>
            </Carousel>
          </template>
        </div>
        <div class="p-2 text-center text-[#C9CCE6]" v-if="feed.attachementDes">
          <div>{{ feed.attachementDes }}</div>
          <div class="flex items-center space-x-2 justify-center uppercase" v-if="feed.viewImg">
            <span class="text-[#C9CCE6] font-semibold">{{ feed.viewImg }}</span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="14.571" height="14.571" viewBox="0 0 14.571 14.571">
                <path id="Icon_metro-enlarge" data-name="Icon metro-enlarge"
                  d="M17.141,1.928H11.222L13.5,4.2,10.767,6.937,12.133,8.3l2.732-2.732,2.277,2.277Zm0,14.571V10.579l-2.277,2.277-2.732-2.732L10.767,11.49,13.5,14.222,11.222,16.5Zm-14.571,0H8.49L6.213,14.222,8.945,11.49,7.579,10.124,4.847,12.856,2.571,10.579Zm0-14.571V7.847L4.847,5.571,7.579,8.3,8.945,6.937,6.213,4.2,8.49,1.928Z"
                  transform="translate(-2.571 -1.928)" fill="#c9cce6" />
              </svg>
            </span>
          </div>
        </div>
        <div class="p-2 text-center text-[#C9CCE6]" v-if="feed.noAttachment">
          <div>{{ feed.noAttachment }}</div>
        </div>
      </div>

    </div>
  </div>
</template>
<script setup>
import Modal from '../Feed/Model.vue';
import 'vue3-carousel/dist/carousel.css';
import { ref } from 'vue';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { onMounted, reactive } from 'vue';
const components = { Carousel, Slide, Pagination, Navigation };
const accedintImgs = ref('');
const showModal = ref(false);

// ...

// Method to open the modal and set the selected image
function openModal(image) {
  accedintImgs.value = image;
  showModal.value = true;
}

// Method to close the modal
function closeModal() {
  showModal.value = false;
}
const feeds = reactive([
  {
    id: 1,
    profileImg: '',
    name: 'John Doe',
    role: 'Driver',
    timestamp: "6 days ago",
    message: 'Driver has reported an accident',
    des: "No Attachmen",
    accedintImg: '',
    btn: '',
    rejectedbol_btn: '',
    acceptedbol_btn: '',
    driverRejected_btn: '',
    newDriver_btn: '',
    attachementDes: "",
    noAttachment: "No Attachment Here ...",
    viewImg: '',
    accedintImgs: []
  },
  {
    id: 2,
    profileImg: '',
    name: 'Jacob Endrison',
    role: 'Driver',
    timestamp: "6 days ago",
    message: 'Driver has reported an accident',
    des: "",
    accedintImg: '',
    btn: '#Accident',
    attachementDes: "1 Attachment Here ...",
    viewImg: 'Click Image to view Large'
  },
  {
    id: 3,
    profileImg: '',
    name: 'Mark Robin',
    role: 'Driver',
    timestamp: "6 days ago",
    message: 'Driver has reported an accident',
    des: "",
    accedintImg: '',
    btn: '#Accident',
    attachementDes: "4 Attachment Here ...",
    noAttachment: "",
    viewImg: 'Click Image to view Large',
    accedintImgs: []
  },
  {
    id: 4,
    profileImg: '',
    name: 'James Kang',
    role: 'Driver',
    timestamp: "6 days ago",
    message: 'BoL - Load Load #06289409 Rejected Reason: Image is not clear enough',
    des: "No Attachmen",

    accedintImg: '',
    btn: '',
    rejectedbol_btn: '#BOL Rejected',
    acceptedbol_btn: '',
    driverRejected_btn: '',
    newDriver_btn: '',
    attachementDes: "",
    noAttachment: "No Attachment Here ...",
    viewImg: '',
    accedintImgs: []
  },
  {
    id: 5,
    profileImg: '',
    name: 'Lens Crusner',
    role: 'Driver',
    timestamp: "6 days ago",
    message: 'BoL has been confirmed. Load Load #46215901 is now complete.',
    des: "No Attachmen",
    accedintImg: '',
    btn: '',
    rejectedbol_btn: '',
    acceptedbol_btn: '#BOL Confirmed',
    driverRejected_btn: '',
    newDriver_btn: '',
    attachementDes: "",
    noAttachment: "No Attachment Here ...",
    viewImg: '',
    accedintImgs: []
  },
  {
    id: 6,
    profileImg: '',
    name: 'Keorn Pollard',
    role: 'Driver',
    timestamp: "6 days ago",
    message: 'Muftest rejected DonT Delete request',
    des: "No Attachmen",
    accedintImg: '',
    btn: '',
    rejectedbol_btn: '',
    acceptedbol_btn: '',
    driverRejected_btn: '#Driver Rejected',
    newDriver_btn: '',
    attachementDes: "",
    noAttachment: "No Attachment Here ...",
    viewImg: '',
    accedintImgs: []
  },
  {
    id: 7,
    profileImg: '',
    name: 'Jeck Kalis',
    role: 'Driver',
    timestamp: "6 days ago",
    message: 'DonT Delete has joined Muftest',
    des: "No Attachmen",
    accedintImg: '',
    btn: '',
    rejectedbol_btn: '',
    acceptedbol_btn: '',
    driverRejected_btn: '',
    newDriver_btn: '#New Driver',
    attachementDes: "",
    noAttachment: "No Attachment Here ...",
    viewImg: '',
    accedintImgs: []
  },
  {
    id: 8,
    profileImg: '',
    name: 'Doe Haly',
    role: 'Driver',
    timestamp: "6 days ago",
    message: 'Driver has reported an accident',
    des: "",
    accedintImg: '',
    btn: '#Accident',
    rejectedbol_btn: '',
    acceptedbol_btn: '',
    driverRejected_btn: '',
    newDriver_btn: '',
    attachementDes: "",
    noAttachment: "4 Attachment Here ...",
    viewImg: '',
    accedintImgs: []
  },
]);

onMounted(() => {
  loadProfile();
});

async function loadProfile() {

  const profile1 = await import('../../../../assets/images/feed/driverImg1.svg')
  const profile2 = await import('../../../../assets/images/feed/driverImg2.svg')
  const profile3 = await import('../../../../assets/images/feed/driverImg3.svg')
  const profile4 = await import('../../../../assets/images/feed/driverImg4.svg')
  const profile5 = await import('../../../../assets/images/feed/driverImg5.svg')
  const profile6 = await import('../../../../assets/images/feed/driverImg6.svg')
  const profile7 = await import('../../../../assets/images/feed/driverImg7.svg')
  const profile8 = await import('../../../../assets/images/feed/driverImg8.svg')

  feeds[0].profileImg = profile1.default;
  feeds[1].profileImg = profile2.default
  feeds[2].profileImg = profile3.default
  feeds[3].profileImg = profile4.default
  feeds[4].profileImg = profile5.default
  feeds[5].profileImg = profile6.default
  feeds[6].profileImg = profile7.default
  feeds[7].profileImg = profile8.default

  const accedintImg1 = await import('../../../../assets/images/feed/accedintImg1.svg')
  const accedintImg2 = await import('../../../../assets/images/feed/accedintImg2.svg')
  const accedintImg3 = await import('../../../../assets/images/feed/accedintImg3.svg')
  const accedintImg4 = await import('../../../../assets/images/feed/accedintImg4.svg')
  const accedintImg5 = await import('../../../../assets/images/feed/accedintImg5.svg')
  const accedintImg6 = await import('../../../../assets/images/feed/accedintImg6.svg')
  const accedintImg7 = await import('../../../../assets/images/feed/accedintImg7.svg')
  const accedintImg8 = await import('../../../../assets/images/feed/accedintImg8.svg')

  feeds[1].accedintImg = accedintImg1.default;
  feeds[2].accedintImgs = [accedintImg2.default, accedintImg3.default, accedintImg4.default, accedintImg5.default];
  feeds[7].accedintImgs = [accedintImg6.default, accedintImg7.default, accedintImg8.default, accedintImg5.default];
}
</script>
<style scoped>::-webkit-scrollbar {
  width: 5px;
  height: 8px;
}

::-webkit-scrollbar-thumb {
  background-color: #DEE1F8;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #DEE1F8;
}</style>

