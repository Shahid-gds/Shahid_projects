<template>
    <div class="index mt-40 w-full flex items-center justify-between 2xl:px-56 md:px-24 px-10">
        <div></div>
        <div  class="flex bg-[white] p-2 items-center justify-center space-x-2 cursor-pointer rounded-tr-xl rounded-bl-xl view-btn" @click="toggleEditMode">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#3C5AA8" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                </svg>                  
              </div>
              <div class="uppercase">
                <p>Edit Profile</p>
            </div>
        </div>
    </div>
      <div class="container mx-auto pb-10 px-6">
       <div class="flex items-end space-x-4">
       <div>
        <div class="profile-div border-2 sm:w-40 sm:h-40 rounded-full -mt-20">
            <div class="relative w-full h-full rounded-full">
                <img class="w-full h-full rounded-full object-cover" :src="profileImage || generateProfileInitial(fname, lname)" alt="">
                <div v-if="loading" class="absolute inset-0 flex items-center justify-center z-50">
                    <div class="animate-spin rounded-full h-16 w-16 object-cover border-t-2 border-b-2 border-[blue]"></div>
                </div>
            </div>
            <input  ref="fileInput" type="file" style="display:none;" @change="handleFileUpload">          
        </div>
        <div v-if="editMode" @click="openFileInput" class="upload-profile absolute w-10 h-10 -mt-10 sm:ml-28 ml-20 rounded-full p-2 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="22.33" height="18.379" viewBox="0 0 22.33 18.379">
                <path id="Icon_awesome-camera" data-name="Icon awesome-camera" d="M22.33,6.845V18.66a2.035,2.035,0,0,1-2.093,1.969H2.093A2.035,2.035,0,0,1,0,18.66V6.845A2.035,2.035,0,0,1,2.093,4.876H5.931l.536-1.35A2.09,2.09,0,0,1,8.426,2.25H13.9a2.09,2.09,0,0,1,1.958,1.276l.541,1.35h3.838A2.035,2.035,0,0,1,22.33,6.845ZM16.4,12.752a5.089,5.089,0,0,0-5.233-4.923,5.089,5.089,0,0,0-5.233,4.923,5.089,5.089,0,0,0,5.233,4.923A5.089,5.089,0,0,0,16.4,12.752Zm-1.4,0a3.735,3.735,0,0,1-3.838,3.61,3.735,3.735,0,0,1-3.838-3.61,3.735,3.735,0,0,1,3.838-3.61A3.735,3.735,0,0,1,15,12.752Z" transform="translate(0 -2.25)" fill="#3c5aa8"/>
            </svg>              
        </div>
       </div>
       <div>
        <h1 class="sm:text-3xl text-lg"> {{ fname }} {{lname}}</h1>
        <h5 class="text-sm">{{ uid }}</h5>
    </div>
    
       </div>
       <!-- editMode -->
       <div class="public-profile mt-8 border-t-2 border-b-2 py-6 md:flex items-start">
            <div class="sm:w-96">
                <h2 class="text-xl">Personal Details</h2>
                <h3 class="text-sm">This will bs displayed on your profile.</h3>
            </div>
           <div class="sm:flex items-center sm:space-x-10 xl:ml-36 mx-auto w-full">
            <!-- <div class="profile-div w-28 h-28 rounded-full p-6">
                <img src="@/assets/img/profileImg.svg" alt="">             
             </div> -->
             <div class="xl:w-3/5 w-full space-y-2">
               <div class="lg:flex w-full lg:space-x-3">
                <div class="relative text-gray-600 w-full pb-2">
                    <input class="w-full rounded-md p-2 px-12 outline-none" :class="{ 'text-black border-2 border-[#3C5AA8]': editMode }" type="Text" placeholder="User Name" v-model="fname"
                    :readonly="!editMode">
                    <div class="absolute left-4 top-0 mt-2">
                       <svg xmlns="http://www.w3.org/2000/svg" width="19.335" height="19.335" viewBox="0 0 19.335 19.335">
                           <path id="Icon_awesome-user-alt" data-name="Icon awesome-user-alt" d="M9.667,10.876A5.438,5.438,0,1,0,4.229,5.438,5.439,5.439,0,0,0,9.667,10.876ZM14.5,12.084H12.42a6.574,6.574,0,0,1-5.506,0H4.834A4.833,4.833,0,0,0,0,16.918v.6a1.813,1.813,0,0,0,1.813,1.813H17.522a1.813,1.813,0,0,0,1.813-1.813v-.6A4.833,4.833,0,0,0,14.5,12.084Z" fill="#dbdbdb"/>
                        </svg>                                       
                    </div>
                </div>
                <div class="relative text-gray-600 w-full ">
                    <input class="w-full rounded-md p-2 px-12 outline-none" :class="{ 'text-black border-2 border-[#3C5AA8]': editMode }" type="Text" placeholder="Last Name" v-model="lname"
                    :readonly="!editMode">
                    <div class="absolute left-4 top-0 mt-2">
                       <svg xmlns="http://www.w3.org/2000/svg" width="19.335" height="19.335" viewBox="0 0 19.335 19.335">
                           <path id="Icon_awesome-user-alt" data-name="Icon awesome-user-alt" d="M9.667,10.876A5.438,5.438,0,1,0,4.229,5.438,5.439,5.439,0,0,0,9.667,10.876ZM14.5,12.084H12.42a6.574,6.574,0,0,1-5.506,0H4.834A4.833,4.833,0,0,0,0,16.918v.6a1.813,1.813,0,0,0,1.813,1.813H17.522a1.813,1.813,0,0,0,1.813-1.813v-.6A4.833,4.833,0,0,0,14.5,12.084Z" fill="#dbdbdb"/>
                        </svg>                                       
                    </div>
                </div>
               </div>
                <div class="lg:flex w-full lg:space-x-3">
                    <div class="relative text-gray-600 w-full pb-5">
                        <input class="w-full rounded-md p-2 px-12 outline-none" :class="{ 'text-black border-2 border-[#3C5AA8]': editMode }" type="Text" placeholder="123-45678910" v-model="phone"
                        :readonly="!editMode">
                        <div class="absolute left-4 top-0 mt-2.5">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#dbdbdb" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                              </svg>                                                                                                
                        </div>
                    </div>
                    <div class="relative text-gray-600 w-full">
                        <input class="w-full rounded-md p-2 px-12 outline-none" :class="{ 'text-black border-2 border-[#3C5AA8]': editMode }" type="Text" placeholder="website123example.com" v-model="website"
                        :readonly="!editMode">
                        <div class="absolute left-4 top-0 mt-2.5">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#dbdbdb" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                              </svg>
                                                                                                 
                        </div>
                    </div>
                </div>
             </div>
           </div>
       </div>
       <div class="w-full flex justify-center mt-10 border-b-2 pb-10">
        <div class="w-full space-y-4">
            <div class="flex space-x-4">
                <div class="w-full">
                    <div>
                        <label class="text-[#333333]" for="">Organization Name:</label>
                    </div>
                    <input type="text" class="py-4 w-full rounded-xl outline-none" :class="{ 'text-black px-6 border-2 border-[#3C5AA8]': editMode }" v-model="organization.org_name" :readonly="!editMode" placeholder="Organization Name">
                </div>
                <div class="w-full">
                    <div>
                        <label class="text-[#333333]" for="">Email:</label>
                    </div>
                    <input type="text" class="py-4 w-full rounded-xl outline-none"  :class="{ 'text-black px-6 border-2 border-[#3C5AA8]': editMode }" v-model="email" :readonly="!editMode" placeholder="Email">
                </div>
            </div>
            <div class="flex space-x-4">
                <div class="w-full">
                    <div>
                        <label class="text-[#333333]" for="">MC/DOT Number:</label>
                    </div>
                    <input class="py-4 w-full rounded-xl outline-none" :class="{ 'text-black px-6 border-2 border-[#3C5AA8]': editMode }" v-model="organization.mc_number" :readonly="!editMode" placeholder="MC/DOT Number">
                </div>
                <div class="w-full">
                    <div>
                        <label class="text-[#333333]" for="">Organization Type:</label>
                    </div>
                    <input type="text" class="py-4 w-full rounded-xl outline-none" :class="{ 'text-black px-6 border-2 border-[#3C5AA8]': editMode }" v-model="organization.org_type" :readonly="!editMode" placeholder="Organization Type">
                </div>
            </div>
            <div class="flex space-x-4">
                <div class="w-full">
                    <div>
                        <label class="text-[#333333]" for="">Street</label>
                    </div>
                    <input type="text" class="py-4 w-full rounded-xl outline-none" :class="{ 'text-black px-6 border-2 border-[#3C5AA8]': editMode }" v-model="organization.street" :readonly="!editMode" placeholder="Street">
                </div>
            </div>
            <div class="flex space-x-4">
                <div class="w-full">
                    <div>
                        <label class="text-[#333333]" for="">Country:</label>
                    </div>
                    <input type="text" class="py-4 w-full rounded-xl outline-none" :class="{ 'text-black px-6 border-2 border-[#3C5AA8]': editMode }" v-model="organization.country" :readonly="!editMode" placeholder="Country">
                </div>
                <div class="w-full">
                    <div>
                        <label class="text-[#333333]" for="">State:</label>
                    </div>
                    <input type="text" class="py-4 w-full rounded-xl outline-none" :class="{ 'text-black px-6 border-2 border-[#3C5AA8]': editMode }" v-model="organization.state" :readonly="!editMode" placeholder="State">
                </div>
            </div>
            <div class="flex space-x-4">
                <div class="w-full">
                    <div>
                        <label class="text-[#333333]" for="">City:</label>
                    </div>
                    <input type="text" class="py-4 w-full rounded-xl outline-none" :class="{ 'text-black px-6 border-2 border-[#3C5AA8]': editMode }" v-model="organization.city" :readonly="!editMode" placeholder="City">
                </div>
                <div class="w-full">
                    <div>
                        <label class="text-[#333333]" for="">Zip:</label>
                    </div>
                    <input type="text" class="py-4 w-full rounded-xl outline-none" :class="{ 'text-black border-2 px-6 border-[#3C5AA8]': editMode }" v-model="organization.postal_code" :readonly="!editMode" placeholder="Zip">
                </div>
            </div>
        </div>
    </div>
       <div class="public-profile mt-2 border-b-2 py-6 lg:flex items-start">
        <div class="lg:w-96">
            <h2 class="text-xl">Affiliate Link</h2>
        </div>
       <div class="sm:flex items-center sm:space-x-10 xl:ml-36 mx-auto w-full">
        <!-- <div class="profile-div w-28 h-28 rounded-full p-6">
            <img src="@/assets/img/profileImg.svg" alt="">             
         </div> -->
         <div class="xl:w-3/5 w-full">
            <div class="relative text-gray-600">
                <div class="">
                 <div class="pb-4">
                    <input
                    class="border-2 border-gray-50 w-full rounded-md p-4 outline-none"
                    type="text"
                    :value="affiliateLink"
                    readonly
                  />
                 </div>
                  <div class="md:absolute xl:left-[25rem] lg:left-[28.5rem] left-[29.5rem] top-0 mt-0">
                    <button
                    class="rounded-md"
                    @click="copyLink"
                  >
                    {{ buttonText }} <span v-if="copied" class="text-white">&#10004;</span>
                  </button>
                </div>
                 </div>
                
            </div>
         </div>
       </div>
   </div>
       <div class="mt-5 flex w-[full]">
        <div class="text-xl w-[20%]"></div>
        <div class="flex w-3/5 items-center space-x-2 mt-2">
        </div>
        <!-- <p class="mt-2">Number of people referred: {{ referredCount }}</p> -->
      </div>
       <!-- For Edit profile -->
       <div class="sm:flex justify-center mt-3">
       <div></div>
       <div @click="saveUserData" v-if="editMode"> <button class="rounded-md">Save</button> </div>
       </div>
      </div>
    </template>
    <script setup>
import { ref, onMounted, computed } from 'vue';
import { firebase } from '@/_firebase/init.js'
import { useUserStore } from '@/_store/userStore'

// import getUser from '@/composables/getUser'
import axios from 'axios'; 
const affiliateLink = ref('');
const referredCount = ref(0);
const copied = ref(false);
const loading = ref(false);

const buttonText = ref('Copy');

const copyLink = async () => {
  try {
    await navigator.clipboard.writeText(affiliateLink.value);
    console.log('Link copied to clipboard');
    copied.value = true;
    buttonText.value = 'Copied'; // Update button text
    setTimeout(() => {
      copied.value = false;
      buttonText.value = 'Copy';
    }, 2000);
  } catch (error) {
    console.error('Failed to copy link:', error);
  }
};
const generateProfileInitial = (fname, lname) => {
  if (fname && lname) {
    const firstNameInitial = fname[0].toUpperCase();
    const lastNameInitial = lname[0].toUpperCase();
    return `https://via.placeholder.com/150/3C5AA8/FFFFFF?text=${firstNameInitial}${lastNameInitial}`;
  } else {
    return '';
  }
};
const editMode = ref(false);
// This is for Public Profile
const userName = ref(""); 
const phoneNumber = ref(""); 
// const website = ref("");
const userStore = useUserStore();
const toggleEditMode = () => {
  editMode.value = !editMode.value;
};

// const {user} = getUser()
// const baseUrl = 'http://192.168.18.62:3000'
const baseUrl = 'https://ecostructure-demo.muftar.com'
const userId = localStorage.getItem('user_id:')
const fname = ref('');
const lname = ref('');
const phone = ref('');
const website = ref('');
const uid = ref('');

console.log('userId:', userId)
const getUserData = async () => {
    const headers = {
    userID: userId,
    'Content-Type': 'application/json',
  };

  try {
    const response = await axios.get(`${baseUrl}/user`, 
    { headers });
    const userData = response.data.data;
    fname.value = userData.fname;
    lname.value = userData.lname;
    phone.value = userData.phone,
    website.value = userData.website,
    profileImage.value = userData.photo,
    uid.value = userData.uid
    affiliateLink.value = response.data.referralLink??""
  } catch (error) {
    console.error(error);
  }
}

const saveUserData = async (imageUrl) => {
    const userData = {
        fname: fname.value,
        lname: lname.value,
        phone: phone.value,
        website: website.value,
        photo: imageUrl
    }

    const headers = {
        userId: userId,
        'Content-Type' : 'application/json',
    }
    try {
        userStore.saveUserData(userData);
        await axios.post(`${baseUrl}/user/update`, 
        userData, { headers }).then(res => console.log('response:', res))
        console.log('user data:', userData)
        toggleEditMode();
    } catch (error) {
        console.error('Failed to save user data:', error);
    }
}
//This is for profile image update
const profileImage = ref('');
const openFileInput = () => {
  fileInput.value.click();
};
let imageUrl = '';
const handleFileUpload = async (event) => {
  const file = event.target.files[0];
  if (file) {
    console.log('Uploading file:', file);
    const uid = userId;
    const fileName = `${uid}`
    const formData = new FormData();
    formData.append('profileImage', file);

    try{
        loading.value = true;
        const storageRef = firebase.storage().ref();
        const imageRef = storageRef.child(`website/${fileName}`);
        const snapshot= await imageRef.put(file);

        const imageUrl = await snapshot.ref.getDownloadURL();
        profileImage.value = imageUrl;
        saveUserData(imageUrl)
        loading.value = false;
    } catch (error) {
        console.error('Failed to Upoad Iamge:', error);
        loading.value = false;
    }
    profileImage.value = URL.createObjectURL(file);
    console.log('Image Url:',imageUrl);
  }
};
const email = ref('')
const organization = ref({
      org_name: '',
      email: '',
      mc_number: '',

    });
    const getOrganizationData = async () => {
        const orgId = localStorage.getItem('organizationId');
        const storedEmail = localStorage.getItem('userEmail:');
        email.value = storedEmail
        try {
            const headers = {
                organizationID: orgId,
            };
    
            const response = await axios.get(`${baseUrl}/organization`, { headers });
            if (response && response.data) {
                const data = response.data.data;
                organization.value.org_name = data.org_name;
                userEmail: email.value
                organization.value.mc_number = data.mc_number;
                organization.value.org_type = data.org_type;
                organization.value.country = data.addresses.country;
                organization.value.state = data.addresses.state;
                organization.value.street = data.addresses.street;
                organization.value.city = data.addresses.city;
                organization.value.postal_code = data.addresses.postal_code;
            } else {
                console.error('API response does not contain valid data:', response);
            }
        } catch (error) {
            console.error('Error fetching organization data:', error);
        }
    };
onMounted(() => {
    const storedData = localStorage.getItem('userProfile');
    if (storedData) {
        userStore.$state = JSON.parse(storedData)
    }
    getUserData();
    getOrganizationData()
})
const fileInput = ref(null)
</script>
    
    <style scoped>

    .index{
        background-image: url('@/assets/images/cover.jpg');
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        height: 127px;
    }
    p{
        color: #3C5AA8;
        font-size: 13px;
        font-weight: 600;
    }
    h1{
        color: #3C5AA8;
        font-weight: 600;
    }
    h5{
        color: #ADAEB0;
    }
    h3{
        color : #666668;
    }
    /*.profile-div{
        background: #254694;
    }*/
    .upload-profile{
        background: #ffff;
    }
    .button {
        background: #3C5AA8;
        color: white;
    }
    button{
        background: #254694;
        width: 250px;
        height: 60px;
        color: white;
    }
    @media only screen and (max-width: 768px) {
        button{
            width: 100%;
        }
       }
    </style>
        