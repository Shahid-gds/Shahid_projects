<template>
    <div class="main-container sm:p-6">
        <!-- view mode -->
        <div class="w-full flex justify-center sm:bg-[#F3F3F3] rounded-lg" v-if="!editMode">
            <div class="w-full sm:p-10 sm:px-16">
                <div class="sm:block hidden">
                    <div class="text-[#00008E] text-[32px] font-[700]">
                        <h1>Profile</h1>
                    </div>
                </div>
              <div class="sm:block hidden">
                <div class="w-full bg-[#FFFFFF] p-6 rounded-lg">
                    <div class="flex items-center space-x-4 w-full">
                        <div class="border-2 rounded-full">
                            <div class="relative h-16 w-16 rounded-full">
                                <img class="w-full h-full rounded-full object-cover"
                                    :src="profileImage || generateProfileInitial(fname, lname)" alt="">
                                <!-- <div v-if="loading" class="absolute inset-0 flex items-center justify-center z-50">
                                <div class="animate-spin rounded-full h-16 w-16 object-cover border-t-2 border-b-2 border-[blue]"></div>
                            </div> -->
                            </div>
                        </div>
                        <div class="flex w-full items-start space-x-16">
                            <div class="">
                                <h1 class="text-[#202020] font-[700]">{{ fname }} {{ lname }}</h1>
                                <p class="text-[#898989]">{{}}</p>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
              <div class="sm:hidden">
                <div class="w-full bg-[#00008E] p-6">
                    <div class="text-[white] text-[32px] font-[700] py-4">
                        <h1>Profile</h1>
                    </div>
                    <div class="flex items-center space-x-4 w-full">
                        <div class="border-2 rounded-full">
                            <div class="relative h-16 w-16 rounded-full">
                                <img class="w-full h-full rounded-full object-cover"
                                    :src="profileImage || generateProfileInitial(fname, lname)" alt="">
                                <!-- <div v-if="loading" class="absolute inset-0 flex items-center justify-center z-50">
                                <div class="animate-spin rounded-full h-16 w-16 object-cover border-t-2 border-b-2 border-[blue]"></div>
                            </div> -->
                            </div>
                        </div>
                        <div class="flex w-full items-start space-x-16">
                            <div class="">
                                <h1 class="sm:text-[#202020] text-[white] font-[700]">{{ fname }} {{ lname }}</h1>
                                <p class="text-[#898989]">{{}}</p>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
                <form action="" class="mt-16 px-6">
                    <div class="flex space-x-4">
                        <div class="">
                        </div>
                        <div class="w-full">
                           <div class="flex w-full">
                            <div class="py-2 w-[20%]">
                                <label class="sm:font-[700]" for="">Company Logo</label>
                            </div>
                            <div class="w-full">
                                <input type="text" class="p-2 w-full sm:bg-[#F3F3F3] rounded-xl sm:px-6 outline-none"
                                    v-model="apiData.data.photo">
                            </div>
                           </div>
                         <div class="flex w-full">
                            <div class="py-2 w-[20%]">
                                <label class="sm:font-[700]" for="">Company Name</label>
                            </div>
                                <div class="w-full">
                                    <input type="text" class="p-2 w-full sm:bg-[#F3F3F3] rounded-xl sm:px-6 outline-none"
                                        v-model="apiData.data.org_name" readonly>
                                </div>
                         </div>
                        <div class="flex w-full">
                            <div class="py-2 w-[20%]">
                                <label class="sm:font-[700]" for="">Company Email</label>
                            </div>
                                <div class="w-full">
                                    <input type="text" class="p-2 w-full  sm:bg-[#F3F3F3] sm:px-6 rounded-xl outline-none"
                                        v-model="apiData.data.email" readonly>
                                </div>
                        </div>
                        <div class="flex w-full">
                            <div class="py-2 w-[20%]">
                                <label class="sm:font-[700]" for="">Company Phone</label>
                            </div>
                                <div class="w-full">
                                    <input type="text" class="p-2 w-full  sm:bg-[#F3F3F3] sm:px-6 rounded-xl outline-none"
                                        v-model="apiData.data.phone" readonly>
                                </div>
                        </div>
                          <div class="flex w-full">
                            <div class="py-2 w-[20%]">
                                <label class="sm:font-[700] w-36" for="">Company Address</label>
                            </div>
                            <div class="w-full">
                                <input type="text" class="p-2 w-full  sm:bg-[#F3F3F3] sm:px-6 rounded-xl outline-none"
                                    v-model="formattedAddress" readonly>
                            </div>
                          </div>
                        </div>
                    </div>
                    <div class="2xl:mt-64 mt-16 pb-6 flex justify-end">
                        <div class="flex space-x-4">
                            <div>
                                <button class="p-3 border-2 border-[#0F0FB1] px-16 text-[#0F0FB1]"
                                    @click="toggleEditMode">Edit</button>
                            </div>
                            <div>
                                <button class="p-3 border-2 px-16 bg-[#0F0FB1] text-[white]"
                                    @click.prevent="updateOrganization"
                                    :class="{ 'bg-[#ccc] border-[#ccc]': !isContinueButtonEnabled }"
                                    :disabled="!isContinueButtonEnabled">Continue</button>

                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <!-- edit mode -->
      <div class="px-4">
        <div class="w-full 2xl:flex justify-center bg-[#F3F3F3] rounded-lg" v-if="editMode">
            <div class="w-full 2xl:p-10 sm:p-6 2xl:px-28" v-if="apiData.data">
                <div class="md:mt-10 flex justify-center w-full">
                    <div class="2xl:w-[80%] w-full px-8">
                        <div class="">
                            <h1 class="text-[#00008E] text-[32px] font-[700]">Basic information</h1>
                            <p class="text-[#13131380]">Shipper information</p>
                        </div>
                        <div class="md:space-y-8 mt-8">
                         <div class="md:block hidden">
                            <div class="flex items-center space-x-4">
                                <div class="lg:w-36">
                                    <label class="" for="">Business Logo</label>
                                </div>
                                <div class="flex items-center space-x-4 w-full">
                                    <div class="border-2 rounded-full">
                                        <div class="relative h-16 w-16 rounded-full">
                                            <img class="w-full h-full rounded-full object-cover"
                                                :src="profileImage || generateProfileInitial(fname, lname)" alt="">
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button
                                        class="text-[white] border-[#00008E] border-2 rounded-md p-1.5 bg-[#00008E]">Change
                                        avatar</button>
                                </div>
                                <div class="">
                                    <button class="text-[#202020] border-[#775DA6] border-2 rounded-md p-1.5">Remove
                                        avatar</button>
                                </div>
                            </div>
                         </div>
                         <div class="md:hidden">
                                <div class="">
                                    <label class="font-[600]" for="">Company Logo</label>
                                </div>
                              <div class="flex items-center px-6 py-6 space-x-6">
                                <div class="flex items-center space-x-4">
                                    <div class="border-2 rounded-full">
                                        <div class="relative h-16 w-16 rounded-full">
                                            <img class="w-full h-full rounded-full object-cover"
                                                :src="profileImage || generateProfileInitial(fname, lname)" alt="">
                                        </div>
                                    </div>
                                </div>
                                <div class="w-full">
                                    <button
                                        class="text-[white] border-[#00008E] border-2 rounded-md p-1.5 bg-[#00008E]">Change avatar</button>
                                </div>
                              </div>
                         </div>
                            <div class="md:flex items-center md:space-x-4 w-full">
                                <div class="w-40 py-3">
                                    <label class="" for="">Company Name</label>
                                </div>
                                <div class="w-full">
                                    <input type="text" class="p-3 w-full rounded-lg outline-none"
                                        :class="{ 'border-2': editMode }" v-model="apiData.data.org_name">
                                </div>
                                <!-- <div class="w-[50%]">
                                <input type="text" class="p-3 w-full rounded-lg outline-none"
                                    v-model="apiData.data.org_name">
                            </div> -->
                            </div>
                            <div class="md:flex items-center md:space-x-4">
                                <div class="w-40 py-3">
                                    <label class="" for="">Company Email</label>
                                </div>
                                <div class="w-full">
                                    <input type="text" class="p-3 w-full border-2 rounded-lg outline-none" 
                                        v-model="apiData.data.email">
                                </div>
                            </div>
                            <div class="md:flex items-center md:space-x-4">
                                <div class="w-40 py-3">
                                    <label class="" for="">Company Phone</label>
                                </div>
                                <div class="w-full relative">
                                    <input type="text" class="p-3 w-full px-20 rounded-lg outline-none"
                                        v-model="apiData.data.phone" :class="{ 'border-2': editMode }">
                                    <div class="absolute left-3 top-0 mt-3 mr-2 cursor-pointer flex space-x-2">
                                        <img src="@/assets/images/flag.svg" alt="">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="#898989" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="none" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="md:flex items-center md:space-x-4">
                                <div class="w-40 py-3">
                                    <label class="w-40" for="">Company Address</label>
                                </div>
                                <div class="w-full">
                                    <input type="text" class="p-3 w-full rounded-lg outline-none"
                                        :class="{ 'border-2': editMode }" v-model="formattedAddress">
                                </div>
                            </div>
                        </div>
                        <div class="flex">
                            <div class="sm:w-36"></div>
                            <div v-if="validationMessage" class="text-red-500 py-2 text-xl text-left">{{ validationMessage }}</div>
                        </div>
                       <div class="md:block hidden">
                        <div class="mt-16 flex justify-end">
                            <div class="">
                                <div>
                                    <button class="p-3 border-2 px-16 bg-[#0F0FB1] text-[white]"
                                        @click.prevent="updateOrganization()">Save</button>
                                    <div v-if="isLoading"
                                        class="absolute inset-0 flex items-center justify-center bg-white opacity-80 z-50">
                                        <div
                                            class="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                       </div>
                       <div class="md:hidden">
                        <div class=" flex justify-center py-10">
                            <div class="">
                                <div class="w-full">
                                    <button class="p-3 border-2 px-24 bg-[#0F0FB1] text-[white]"
                                        @click.prevent="updateOrganization()">Continue</button>
                                    <div v-if="isLoading"
                                        class="absolute inset-0 flex items-center justify-center bg-white opacity-80 z-50">
                                        <div
                                            class="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
</template>
  
<script setup>
import { ref, onMounted, computed } from 'vue';
import axios from 'axios';
import router from '../_router';
const validationMessage = ref('');
const isLoading = ref(false)
const email = ref('')
const phone = ref('')
const userId = localStorage.getItem('user_id:')
const fname = ref('')
const lname = ref('')
const editMode = ref(false);
const toggleEditMode = () => {
    editMode.value = !editMode.value;
};
const errors = {
    org_name: '',
    email: '',
    phone: '',
    country: '',
    state: '',
    street: '',
    city: '',
    postal_code: '',
};
const isContinueButtonEnabled = computed(() => {
    const inputData = apiData.value.data;
    errors.org_name = inputData.org_name.trim() === '' ? 'This field is required' : '';
    errors.email = inputData.email.trim() === '' ? 'This field is required' : '';
    errors.phone = inputData.phone.trim() === '' ? 'This field is required' : '';
    errors.country = inputData.addresses.country.trim() === '' ? 'This field is required' : '';
    errors.state = inputData.addresses.state.trim() === '' ? 'This field is required' : '';
    errors.street = inputData.addresses.street.trim() === '' ? 'This field is required' : '';
    errors.city = inputData.addresses.city.trim() === '' ? 'This field is required' : '';
    errors.postal_code = inputData.addresses.postal_code.trim() === '' ? 'This field is required' : '';

    return !Object.values(errors).some((error) => error !== '');
});
// const baseUrl = 'http://192.168.18.62:3000'
const baseUrl = 'https://ecostructure-demo.muftar.com'
const apiData = ref({
    data: {
        org_name: '',
        email: '',
        mc_number: '',
        org_type: '',
        phone: '',
        addresses: {
            country: '',
            state: '',
            street: '',
            city: '',
            postal_code: '',
        },
    },
});

const saveIdToLoccalStorage = (id) => {
    localStorage.setItem('organizationId', id)
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
    } catch (error) {
        console.error(error);
    }
}
const fetchDataFromAPI = () => {
    const dotNumber = localStorage.getItem('dotNumber');
    axios
        .get(`${baseUrl}/org/verify`, {
            headers: {
                dotNumber: dotNumber,
            },
            params: {
                dotNumber: dotNumber,
            },
        })
        .then((response) => {
            console.log(response.data);
            apiData.value = response.data;
            saveIdToLoccalStorage(response.data.data._id)
        })
        .catch((error) => {
            console.error(error);
        })
        .finally(() => {
            isLoading.value = false;
        })
};
const updateOrganization = async () => {
  if (isInputValid()) {
    validationMessage.value = '';

    const orgId = localStorage.getItem('organizationId');
    const userID = localStorage.getItem('user_id:');

    const updatedData = {
      org_name: apiData.value.data.org_name,
      email: apiData.value.data.email,
      phone: apiData.value.data.phone,
      org_type: apiData.value.data.org_type,
      addresses: {
        country: apiData.value.data.addresses.country,
        state: apiData.value.data.addresses.state,
        street: apiData.value.data.addresses.street,
        city: apiData.value.data.addresses.city,
        postal_code: apiData.value.data.addresses.postal_code,
      },
    };

    try {
      isLoading.value = true;
      const response = await axios.post(
        `${baseUrl}/organization/update`,
        updatedData,
        {
          headers: {
            organizationID: orgId,
            userID: userID,
          },
        }
      );

      console.log(response.data);
      apiData.value.data = response.data.data;
      editMode.value = false;
    } catch (error) {
      console.error(error);
    } finally {
      isLoading.value = false;
    }
  } else {
    validationMessage.value = 'Please fill in all required fields.';
  }
};
const isInputValid = () => {
    const inputData = apiData.value.data;
    return (
        inputData.org_name.trim() !== '' &&
        inputData.email.trim() !== '' &&
        inputData.addresses.country.trim() !== '' &&
        inputData.addresses.state.trim() !== '' &&
        inputData.addresses.street.trim() !== '' &&
        inputData.addresses.city.trim() !== '' &&
        inputData.addresses.postal_code.trim() !== ''
    );
};
const formattedAddress = computed(() => {
    const addresses = apiData.value.data.addresses;
    return `${addresses.street}, ${addresses.city}, ${addresses.state}, ${addresses.country} - ${addresses.postal_code}`;
});
onMounted(() => {
    fetchDataFromAPI();
    getUserData();
});
</script>
  
<style scoped>.main-container {
    background-image: url('@/assets/images/mediapageBg.svg');
    height: auto;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
}</style>