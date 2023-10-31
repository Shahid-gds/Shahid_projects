<template>
    <div class="fixed inset-0 block  backdrop-blur-sm z-50">

    </div>
    <div class="fixed h-[800px] bg-white z-50 top-14 left-[30%]  rounded-xl shadow  w-[708px] " ref="el">

        <!-- CLOSE BUTTON -->
        <div @click="closeModal"
            class="bg-primary cursor-pointer text-white text-center absolute -top-4 -right-4 p-3 h-10 w-10  rounded-full">
            <img class="mx-auto my-auto" src="@/assets/icons/support/close.svg" alt="Close">
        </div>
        <div class="container mx-auto p-4 w-full h-full bg-[white] rounded-xl">
            <!-- Review Modal Form -->
            <div v-if="showReviewModal" @click="closeReviewModal($event)"
                class="xl:p-4 px-10 fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-50">
                <div class="modal-content space-y-6 bg-white p-8 rounded-lg text-center shadow-xl">
                    <h1 class="text-3xl text-[#3D5AA9]">Your Review goes here!</h1>
                    <textarea v-model="reviewMessage"
                        class="border-2 w-full p-3 resize-none overflow-hidden h-auto rounded-xl bg-[#FBFBFB] border-[#D6D6D6] px-4 outline-none"
                        placeholder=""></textarea>
                    <button @click="submitReview(this.chatMessages[this.chatMessages.length - 1])"
                        class="border-2 border-[#CBD7F6] p-2 px-3 rounded-xl hover:bg-[#D3E6FB] hover:text-[#3D5AA9]">Submit
                        Feedback</button>
                </div>
            </div>
            <div class="p-4">
                <div class="p-2 flex justify-center cursor-pointer space-x-3 items-center border-2 rounded-xl bg-[#FBFBFB] border-[#D6D6D6] px-4 outline-none"
                    @click="newChat">
                    <div class="">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                        </svg>
                    </div>
                    <div>
                        <button class="">
                            New Chat
                        </button>
                    </div>
                </div>
            </div>
            <div class="messages p-4" ref="messages">
                <div class="message" v-for="(message, index) in chatMessages" :key="index">
                    <div class="message-content">
                        <div class="flex items-start space-x-6 p-2" v-if="message.sender === 'user'">
                            <div class="">
                                <!-- <h1 class="text-white text-lg">SK</h1> -->
                                <img :src="userdata.photo" alt="org-photo" class="h-11 w-11 rounded-full" />
                            </div>
                            <div class="">
                                <h1 class="text-lg font-bold">{{ userdata.fname }} {{ userdata.lname }}</h1>
                                {{ message.content }}
                            </div>
                            
                        </div>
                        <div v-else>
                            <div class="flex items-start space-x-6  w-full bg-[#EEF2FE] rounded-lg p-2">
                                <div class="bg-[#333333] rounded-full p-2" v-if="!message.loading">
                                    <img src="../../../../assets/chatwhitelogo.svg" alt="" class="">
                                </div>
                                <div class="w-full justify-between">
                                    <div class="text-justify">
                                        <h1 class="text-lg  font-bold" v-if="!message.loading">Muftar GPT</h1>
                                        <p>{{ message.content }}</p>
                                        <div v-if="message.loading" class="loading">
                                            <div class="typing-indicator h-10 mt-5">
                                                <span class="dot"></span>
                                                <span class="dot"></span>
                                                <span class="dot"></span>
                                            </div>                                      
                                        </div>
                                      </div>
                                    <div class="flex items-center justify-end space-x-2 mt-2" v-if="!message.loading">
                                        <button @click="likeMessage(message)" class="text-green-500">
                                            <svg :class="{ 'text-black': message.liked }" xmlns="http://www.w3.org/2000/svg"
                                                fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                                            </svg>
                                        </button>
                                        <span>{{ message.likes }}</span>
                                        <button @click="dislikeMessage(message)" class="text-red-500">
                                            <svg :class="{ 'text-black': message.disliked }"
                                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384" />
                                            </svg>
                                        </button>
                                        <span>{{ message.dislikes }}</span>
                                        <div>
                                            <button @click="showReviewModal = true"
                                                class="border-2 p-1 px-3 rounded-lg">Review</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="input-container bg-[#FFFFFF] items-center mx-auto p-4 justify-between rounded-b-xl">
                <div class="p-2 flex items-center justify-between">
                    <input
                    type="text"
                    class="border-2 w-full p-3 rounded-l-xl border-r-0 bg-[#FBFBFB] border-[#D6D6D6] px-4 outline-none focus:ring-0 focus:border-[#D6D6D6]"
                    placeholder="Ask Muftar GPT"
                    autocomplete="off"
                    v-model="inputText"
                    @input="handleInput"
                    @keydown.enter="sendMessage"
                    @keydown.esc="hideList"
                  />
                        <div id="listContainer" class="bottom-28 p-4 rounded-lg h-72 overflow-y-auto" v-if="showList">
                            <ul class="py-3">
                              <li class="list-item py-1.5 px-2 cursor-pointer hover:bg-gray-300 hover:rounded-lg" v-for="item in currentList" :key="item" @click="selectItem(item)">
                                <span>{{ item.split(' (ID: ')[0] }}</span>
                              </li>
                            </ul>
                          </div>                         
                    <div class="border-2 p-3 border-l-0 bg-[#FBFBFB] border-[#D6D6D6] cursor-pointer rounded-r-xl" @click="sendMessage">
                        <svg v-if="!loading" class="h-6" xmlns="http://www.w3.org/2000/svg" width="30.674" height="26.661"
                            viewBox="0 0 30.674 26.661">
                            <path id="Path_14901" data-name="Path 14901"
                                d="M30.654,34.581a.9.9,0,0,0-1.2-1.029L.579,44.575a.9.9,0,0,0,0,1.678l8.112,3.133v9.868a.9.9,0,0,0,1.7.4L13.744,53l8.187,6.076a.9.9,0,0,0,1.4-.459c7.644-25.064,7.314-23.974,7.328-24.037Zm-7.128,3.158L9.459,47.757,3.407,45.42ZM10.485,49.233,22.747,40.5C12.2,51.631,12.747,51.046,12.7,51.107c-.068.092.119-.266-2.216,4.366Zm11.494,7.641-7.207-5.348L27.8,37.779Z"
                                transform="translate(-0.001 -33.492)" fill="#7386bf" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<!-- <script setup>
import { ref, defineEmits } from 'vue'
import { onClickOutside } from '@vueuse/core'

const emit = defineEmits(['closeModal'])

const el = ref(null)
onClickOutside(el, () => {
    closeModal();
})


const closeModal = () => {
    emit('closeModal');
}

</script> -->
<script>
import axios from 'axios';
import { mapState } from 'vuex'
export default {
    data() {
        return {
            inputText: '',
            chatMessages: [],
            modalVisible: true,
            showReviewModal: false,
            reviewMessage: '',
            drivers: [],
            unassignLoads: [],
            showList: false,
            selectedName: '',
            selectedSymbol: '',
        };
    },
    computed: {
        ...mapState(['org_data', 'userID', 'userdata'])
    },
    methods: {
        async closeModal() {
            try {
                const response = await axios.post('https://muftar-gpt-mfa4wusola-uc.a.run.app/end', {
                    orgID: this.org_data._id || this.org_data.id,
                    userID: this.userdata.uid || this.userdata.id,
                });
                // The counter if the API call is successful
                if (response.status === 200) {
                    console.log(response.data)
                    this.$emit('closeModal');
                }

            } catch (error) {
                console.log('Error:', error);
            }
        },
        onClickOutside(event) {
            if (!this.$refs.modal.contains(event.target)) {
                this.closeModal();
            }
        },
        async sendMessage() {
  if (this.inputText.trim() === '') return;

  let driverID = this.hiddenId || '';
  let loadID = this.hiddenLoadId || '';

  const message = {
    orgID: this.org_data._id || this.org_data.id,
    userID: this.userdata.uid || this.userdata.id,
    userText: this.inputText,
    driverID,
    loadID
  };

  this.chatMessages.push({
    content: "" + this.inputText,
    sender: 'user',
  });
  this.inputText = '';

  // Scroll to the bottom of the container
  this.$nextTick(() => {
    const messagesContainer = this.$refs.messages;
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  });

  const newMessage = {
    content: '',
    sender: 'bot',
    loading: true,
  };

  const responseIndex = this.chatMessages.push(newMessage) - 1;
  try {
    const response = await axios.post('https://muftar-gpt-mfa4wusola-uc.a.run.app/user_ask', message);
    const newMessageWithResponse = {
      content: response.data.response,
      id: response.data._id,
      sender: 'bot',
      loading: false
    };

    await new Promise(resolve => setTimeout(resolve, 1000));

    this.chatMessages[responseIndex] = newMessageWithResponse;
  } catch (error) {
    console.error(error);
    newMessage.content = 'Error: Failed to fetch response';
    newMessage.loading = false;

    this.chatMessages[responseIndex] = newMessage;
  }

  this.hiddenId = '';
},

        async submitReview(message) {
            try {
                const response = await axios.post('https://muftar-gpt-mfa4wusola-uc.a.run.app/feedback', {
                    id: message.id, // Pass the 'id' property of the message
                    orgID: this.org_data._id || this.org_data.id,
                    userID: this.userdata.uid || this.userdata.id,
                    ask: '',
                    response: '',
                    parity: '',
                    message: this.reviewMessage,
                });

                if (response.status === 200) {
                    message.reviewSubmitted,
                        this.reviewMessage = '';
                    this.showReviewModal = false;
                }
            } catch (error) {
                console.log('Error:', error);
            }
        },

        async likeMessage(message) {
            try {
                const response = await axios.post('https://muftar-gpt-mfa4wusola-uc.a.run.app/feedback', {
                    id: message.id, // Pass the 'id' property of the message
                    orgID: this.org_data._id || this.org_data.id,
                    userID: this.userdata.uid || this.userdata.id,
                    ask: '',
                    response: '',
                    parity: 'Good',
                    message: '',
                });

                // The counter if the API call is successful
                if (response.status === 200) {
                    message.likes;
                    message.liked = !message.liked
                    message.disliked = false
                }
            } catch (error) {
                console.log('Error:', error);
            }
        },

        async dislikeMessage(message) {
            try {
                const response = await axios.post('https://muftar-gpt-mfa4wusola-uc.a.run.app/feedback', {
                    id: message.id, // Pass the 'id' property of the message
                    orgID: this.org_data._id || this.org_data.id,
                    userID: this.userdata.uid || this.userdata.id,
                    ask: '',
                    response: '',
                    parity: 'Bad',
                    message: '',

                });

                // The counter if the API call is successful
                if (response.status === 200) {
                    message.dislikes;
                    message.disliked = !message.disliked
                    message.liked = false
                }
            } catch (error) {
                console.log('Error:', error);
            }
        },

        // async continueClicked() {
        //     try {
        //         const response = await axios.get('http://127.0.0.1:8000/end');
        //         console.log(response.data);
        //         this.modalVisible = false;
        //     } catch (error) {
        //         console.log('Error:', error);
        //     }
        // },
        // startChat() {
        //     this.continueClicked();
        // },
        // async newChat() {
        //     try {
        //         const response = await axios.post('http://127.0.0.1:8000/end');
        //         console.log(response.data);
        //         this.chatMessages = [];
        //     } catch (error) {
        //         console.log('Error:', error);
        //     }
        // },
        async newChat() {
            try {
                const response = await axios.post('https://muftar-gpt-mfa4wusola-uc.a.run.app/end', {
                    orgID: this.org_data._id || this.org_data.id,
                    userID: this.userdata.uid || this.userdata.id,
                });
                // The counter if the API call is successful
                if (response.status === 200) {
                    console.log(response.data)
                   this.chatMessages = []
                }

            } catch (error) {
                console.log('Error:', error);
            }
        },
        closeReviewModal(event) {
            // Check if the target element is outside of the review modal
            if (!event.target.closest('.modal-content')) {
                this.showReviewModal = false;
            }
        },
hideList() {
    this.showList = false;
  },       
  handleInput() {
  const inputText = this.inputText.trim();
  this.showList = false;

  if (inputText.startsWith('assign load #') && inputText.includes(' to driver @')) {
    const loadIdMatch = inputText.match(/assign load #(\d+)/);
    const driverNameMatch = inputText.match(/to driver @(.*?)\b/);
    if (loadIdMatch && driverNameMatch) {
      const loadId = loadIdMatch[1];
      const driverName = driverNameMatch[1];

      // Assign the load ID and driver name to the corresponding variables
      this.hiddenLoadId = loadId;
      this.hiddenId = driverName;

      // Construct the displayed text without the IDs
      const itemText = `assign load #${loadId} to driver @${driverName}`;

      // Append the displayed text to the inputText field
      const currentInputText = this.inputText.trim();
      const symbol = this.selectedSymbol || (currentInputText.includes('@') || currentInputText.includes('#') ? '' : this.selectedSymbol);
      this.inputText = currentInputText + symbol + itemText;

      // Clear the currentList and hide the dropdown
      this.currentList = [];
      this.showList = false;

      return;
    }
  }

  if (inputText.endsWith('@')) {
    const requestBody = {
      orgID: this.org_data._id || this.org_data.id,
      userID: this.userdata.uid || this.userdata.id,
    };

    // Get driver list from API
    fetch('https://muftar-gpt-mfa4wusola-uc.a.run.app/drivers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(drivers => {
        console.log(drivers); // Debug: Check the contents of the drivers array
        this.currentList = drivers.map(driver => {
          const [firstName, lastName, id] = driver.split(' ');
          const hiddenId = id; // Store the id separately
          return `${firstName} ${lastName} (ID: ${hiddenId})`; // Concatenate firstName, lastName, and id into a single string
        });
        this.showList = true;
      })
      .catch(error => {
        console.error('Error:', error);
      });
  } else if (inputText.endsWith('#')) {
    const requestBody = {
      orgID: this.org_data._id || this.org_data.id,
      userID: this.userdata.uid || this.userdata.id,
    };

    // Get assign loads list from API
    fetch('https://muftar-gpt-mfa4wusola-uc.a.run.app/unassingned_loads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(unassignLoads => {
        console.log(unassignLoads); // Debug: Check the contents of the drivers array
        this.currentList = unassignLoads.map(load => {
          const [l, loadId,] = load.split(' ');
          const hiddenLoadId = l;
          return `${''} ${hiddenLoadId} (ID: ${hiddenLoadId})`;
        });
        this.showList = true;
      })
      .catch(error => {
        console.error('Error:', error);
      });
  } else {
    this.currentList = [];
  }
},

selectItem(item) {
  const [name, id, loadId] = item.split(' (ID: ');

  this.selectedName = name;
  const selectedId = id ? id.slice(0, -1) : '';
  const selectedLoadId = loadId ? loadId.slice(0, -1) : '';

  // Assign both load ID and driver ID to the corresponding variables
  this.hiddenLoadId = selectedLoadId;
  this.hiddenId = selectedId;

  // Construct the displayed text without the IDs
  let itemText = this.selectedName;

  // Append the displayed text to the inputText field
  const currentInputText = this.inputText.trim();
  const symbol = this.selectedSymbol || (currentInputText.includes('@') || currentInputText.includes('#') ? '' : this.selectedSymbol);
  this.inputText = currentInputText + symbol + itemText;

  // Clear the currentList and hide the dropdown
  this.currentList = [];
  this.showList = false;
}

    },
    mounted() {
        this.modalVisible = true; // Show the modal when the component is mounted
        // this.fetchData();
    },
};

</script>

<style scoped>
  
.modal {
    position: fixed;
    z-index: 999;
    background: white;
    top: 20%;
    left: 50%;
    width: 300px;
    margin-left: -150px;
}
.messages {
    width: 42rem;
    height: 37rem;
    overflow-y: auto;
}
::-webkit-scrollbar {
    width: 0px;
}

.message {
    margin-bottom: 10px;
}
#listContainer {
    position: absolute;
    padding: 10px 20px;
    background: white;
    box-sizing: 0 5px 25px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    transition: 0.5s;
    box-shadow: rgba(12, 0, 0, 0.25) 0px 6px 12px -2px,
      rgba(15, 1, 1, 0.3) 0px 3px 7px -3px;
    z-index: 998; /* Lower z-index for #listContainer */
}
.typing-indicator {
    display: flex;
    align-items: start;
  }
  
  .dot {
    width: 12px;
    height: 12px;
    margin: 0 3px;
    background-color: #CBD7F6;
    border-radius: 50%;
    opacity: 0;
    animation: typing 1.4s infinite;
  }
  
  .dot:nth-child(1) {
    animation-delay: 0.2s;
  }
  
  .dot:nth-child(2) {
    animation-delay: 0.4s;
  }
  
  .dot:nth-child(3) {
    animation-delay: 0.6s;
  }
  
  @keyframes typing {
    0% {
      transform: translateX(0);
      opacity: 0;
    }
    50% {
      transform: translateX(10px);
      opacity: 1;
    }
    100% {
      transform: translateX(0);
      opacity: 0;
    }
  }

  #driver > .id {
    display: none;
  }
  
@media only screen and (max-width: 1024px) {
    .messages {
        width: 30rem;
        height: 30rem;
        overflow-y: auto;
    }
}

@media only screen and (max-width: 600px) {
    .messages {
        width: 25rem;
        height: 30rem;
        overflow-y: auto;
    }
}
</style>