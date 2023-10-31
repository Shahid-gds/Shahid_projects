<template>
    <div class="container mx-auto p-4">
        <div class="xl:w-1/2 bg-[#FFFFFF] rounded-t-xl  items-center mx-auto p-4 mt-2 justify-between border-b-2 ">
            <div class="flex items-center md:space-x-4">
                <div class="w-10 h-10 bg-[#BB5959] rounded-lg p-2">
                    <h1 class="text-[white]">SA</h1>
                </div>
                <div>
                    <h1 class="font-semibold text-lg">Smith Andrewson</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing?</p>
                </div>
            </div>
        </div>
        <div class="xl:w-1/2 bg-[#FFFFFF] items-center mx-auto p-4 justify-between border-b-2 ">
            <div class="flex items-center space-x-14">
                <div class="w-10 h-10 bg-[#333333] rounded-lg p-2 absolute -mt-48 ">
                    <img src="../../assets/images/chatwhitelogo.svg" alt="">
                </div>
                <div>
                    <h1 class="font-semibold text-lg">Muftar GPT</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book.
                    </p>
                    <div class="mt-8">
                        <ul>
                            <li>- Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li>- Sed cursus enim ut lobortis blandit..</li>
                            <li>- Nunc egestas elit nec lacus commodo imperdiet.</li>
                            <li>- Ut feugiat odio non imperdiet efficitur.</li>
                            <li>- Mauris euismod nisi in tellus tincidunt, et viverra urna commodo.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="xl:w-1/2 bg-[#FFFFFF]  items-center mx-auto p-4 justify-between border-b-2 ">
            <div class="flex items-center space-x-14">
                <div class="w-10 h-10 bg-[#BB5959] rounded-lg p-2 absolute -mt-4">
                    <h1 class="text-[white]">SA</h1>
                </div>
                <div>
                    <h1 class="font-semibold text-lg">Smith Andrewson</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s, </p>
                </div>
            </div>
        </div>
        <div class="xl:w-1/2 bg-[#FFFFFF] items-center mx-auto p-4 justify-between border-b-2 ">
            <div class="flex items-center space-x-14">
                <div class="w-10 h-10 bg-[#333333] rounded-lg p-2 absolute -mt-24 ">
                    <img src="../../assets/images/chatwhitelogo.svg" alt="">
                </div>
                <div>
                    <h1 class="font-semibold text-lg">Muftar GPT</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                    </p>
                    <div class="mt-8">
                        <ul>
                            <li>when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="xl:w-1/2 bg-[#FFFFFF] items-center mx-auto p-4 justify-between rounded-b-xl ">
            <div class="p-2 flex items-center justify-between mt-36">
                <div class="w-full relative input-wrapper">
                    <input type="text" v-model="searchTerm" @input="handleInput"
                        class="border-2 w-full p-3 rounded-l-xl border-r-0 bg-[#FBFBFB] border-[#D6D6D6] px-4 outline-none"
                        placeholder="Ask Muftar GPT" />
                    <div v-if="userList.length" 
                        class="absolute h-40 z-10 list-none bottom-14 bg-[#FFFFFF] text-[#656565] border-2 p-3 rounded-t-xl overflow-y-auto left-0" :style="{ top: listTop + 'px', left: listLeft + 'px' }">
                        <ul class="space-y-1" >
                            <li class="cursor-pointer hover:bg-[#CFCFCF] rounded-lg p-2" v-for="user in userList" :key="user.id" @click="selectUser(user)" >{{ user.name }}</li>
                        </ul>
                    </div>
                </div>
                <div class="border-2 p-3 border-l-0 bg-[#FBFBFB] border-[#D6D6D6] cursor-pointer rounded-r-xl">
                    <svg class="h-6" xmlns="http://www.w3.org/2000/svg" width="30.674" height="26.661"
                        viewBox="0 0 30.674 26.661">
                        <path id="Path_14901" data-name="Path 14901"
                            d="M30.654,34.581a.9.9,0,0,0-1.2-1.029L.579,44.575a.9.9,0,0,0,0,1.678l8.112,3.133v9.868a.9.9,0,0,0,1.7.4L13.744,53l8.187,6.076a.9.9,0,0,0,1.4-.459c7.644-25.064,7.314-23.974,7.328-24.037Zm-7.128,3.158L9.459,47.757,3.407,45.42ZM10.485,49.233,22.747,40.5C12.2,51.631,12.747,51.046,12.7,51.107c-.068.092.119-.266-2.216,4.366Zm11.494,7.641-7.207-5.348L27.8,37.779Z"
                            transform="translate(-0.001 -33.492)" fill="#7386bf" />
                    </svg>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import '../../assets/css/index.css'
export default {
  data() {
    return {
      searchTerm: '',
      userList: [],
      listLeft: 0
    };
  },
  methods: {
    async fetchUsers() {
      const response = await fetch('http://localhost:3000/users');
      const users = await response.json();
      const search = this.searchTerm.toLowerCase();
      this.userList = users.filter(user =>
        user.name.toLowerCase().includes(search.slice(search.indexOf('@') + 1))
      );
    },
    handleInput() {
      if (this.searchTerm.includes('@')) {
        this.fetchUsers();
      } 
      else {
        this.userList = [];
      }
    },
    selectUser(user) {
      this.searchTerm = `${this.searchTerm.slice(0, this.searchTerm.indexOf('@') + 1)}${user.name}`;
      this.userList = [];
    }
  },

};
</script>

<style scoped>


</style>