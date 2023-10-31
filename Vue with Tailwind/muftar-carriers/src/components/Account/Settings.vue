<template>
    <div class="w-full p-8 overflow-y-auto h-full">
        <div class=" space-y-5">
            <div class="space-y-1">
                <h1 class="font-bold text-2xl">Account Settings</h1>
                <p class="text-gray-400">Choose when and how we contact you.</p>
            </div>

            <div class="flex justify-between">
                <div class="my-auto text-xl font-bold">Role: {{ userdata.role }}</div>
                <button @click="logout()" class="bg-red-500 text-white px-4 py-2 rounded-md ">Logout</button>
            </div>

            <div class="space-y-2">
                <h1 class="text-xl font-bold">Change Your Details</h1>
                <div class="flex space-x-2">
                    <img class="h-10 w-10 my-auto rounded-full" :src="userdata.photo" alt="">
                    <a href="#" class="my-auto">Change Profile</a>
                </div>
                <div class="grid grid-cols-3">
                    <div>
                        <p class="font-bold text-gray-500">First Name</p>
                        <div class="border rounded-md w-96" :class="{ ' opacity-40': !edit }">
                            <input type="text" class="rounded-md border-none focus:ring-0 w-full" :disabled="!edit"
                                :value="userdata.fname">
                        </div>
                    </div>

                    <div>
                        <p class="font-bold text-gray-500">Last Name</p>
                        <div class="border rounded-md w-96" :class="{ ' opacity-40': !edit }">
                            <input type="text" class="rounded-md border-none focus:ring-0 w-full" :disabled="!edit"
                                :value="userdata.lname">
                        </div>
                    </div>

                    <div>
                        <p class="font-bold text-gray-500">Email</p>
                        <div class="border rounded-md w-96" :class="{ ' opacity-40': !edit }">
                            <input type="text" class="rounded-md border-none focus:ring-0 w-full" :disabled="!edit"
                                :value="userdata.email">
                        </div>
                    </div>

                </div>
                <div class="flex justify-end space-x-2">
                    <button class="border rounded-md py-2 px-4 text-black" @click="edit = false" v-if="edit">Cancel</button>
                    <button class="border rounded-md py-2 px-4 text-white bg-primary" v-if="edit"
                        @click="edit = false">Save</button>
                    <button class="border rounded-md py-2 px-4 text-black" v-if="!edit" @click="edit = true">Edit</button>
                </div>

            </div>

            <div class="border-b">
                <ul class="flex space-x-4 text-gray-500">
                    <li class="border-b-primary p-4 border-b-4 cursor-pointer text-primary font-bold">Notifiactions</li>
                    <li class="p-4 cursor-pointer font-bold">Help</li>
                </ul>
            </div>

            <div class="grid grid-cols-12 gap-10">
                <div class="border-b col-span-12 md:col-span-6">
                    <div>
                        <h1 class="font-bold text-xl">Notifications from us</h1>
                        <p class="text-sm">Receive the latest news, updates and industry tutorials from us.</p>
                    </div>

                    <!-- CHECKBOXES -->
                    <div class="space-y-4 mt-4">
                        <div class="flex w-96 space-x-2">
                            <input class="mt-1 cursor-pointer focus:ring-0 rounded" type="checkbox">
                            <div>
                                <h1 class="font-bold">News and Updates</h1>
                                <p class="text-sm text-gray-400">News about product and feature updates.</p>
                            </div>

                        </div>

                        <div class="flex w-96 space-x-2">
                            <input class="mt-1 cursor-pointer focus:ring-0 rounded" type="checkbox">
                            <div>
                                <h1 class="font-bold">Tips and tutorials</h1>
                                <p class="text-sm text-gray-400">Tips on getting more out of Untitled</p>
                            </div>
                        </div>

                        <div class="flex w-96 space-x-2">
                            <input class="mt-1 cursor-pointer focus:ring-0 rounded" type="checkbox">
                            <div>
                                <h1 class="font-bold">User Research</h1>
                                <p class="text-sm text-gray-400">Get Involved in our beta testing program or participate
                                    in
                                    paid product user research.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="border-b  col-span-12 md:col-span-6">
                    <div>
                        <h1 class="font-bold text-xl">Comments</h1>
                        <p class="text-sm">These are notifications for comments on your post and replies to your
                            comments.
                        </p>
                    </div>

                    <div class="space-y-4 mt-4">
                        <div class="flex w-96 space-x-2">
                            <input class="mt-1 cursor-pointer focus:ring-0  rounded-full" type="checkbox">
                            <div>
                                <h1 class="font-bold">Do not notify me.</h1>
                            </div>
                        </div>

                        <div class="flex w-96 space-x-2">
                            <input class="mt-1 cursor-pointer focus:ring-0  rounded-full" type="checkbox">
                            <div>
                                <h1 class="font-bold">Mentions Only</h1>
                                <p class="text-sm text-gray-400">Only notify me if I'm mentioned in comment.</p>
                            </div>
                        </div>

                        <div class="flex w-96 space-x-2">
                            <input class="mt-1 cursor-pointer focus:ring-0 rounded-full" type="checkbox">
                            <div>
                                <h1 class="font-bold">All comments</h1>
                                <p class="text-sm text-gray-400">Notify me for all comments on my post.</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="border-b col-span-12 md:col-span-6">
                    <div>
                        <h1 class="font-bold text-xl">Reminders</h1>
                        <p class="text-sm">These are notifications to remind you of updates you might have missed.</p>
                    </div>

                    <div class="space-y-4 mt-4">
                        <div class="flex w-96 space-x-2">
                            <input class="mt-1 cursor-pointer focus:ring-0  rounded-full" type="checkbox">
                            <div>
                                <h1 class="font-bold">Do not notify me.</h1>
                            </div>
                        </div>

                        <div class="flex w-96 space-x-2">
                            <input class="mt-1 cursor-pointer focus:ring-0  rounded-full" type="checkbox">
                            <div>
                                <h1 class="font-bold">Important reminders only</h1>
                                <p class="text-sm text-gray-400">Only notify me if the reminder is tagged as important.
                                </p>
                            </div>
                        </div>

                        <div class="flex w-96 space-x-2">
                            <input class="mt-1 cursor-pointer focus:ring-0 rounded-full" type="checkbox">
                            <div>
                                <h1 class="font-bold">All reminders</h1>
                                <p class="text-sm text-gray-400">Notify me for all reminders.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <teleport to='body'>
                <DeleteAccountModal @deleteAccount="deleteAccount" v-if="showDeleteAccountModal" />
                <LeaveOrgModal @leaveOrg="leaveOrg" v-if="showLeaveOrgModal" />
            </teleport>

            <div class="flex ">
                <div>
                    <h1 class="text-2xl font-bold">Download your data</h1>
                    <p>You can download your data from here</p>
                </div>
                <button class="py-2 my-auto px-4 ml-[10.8rem] rounded-md border border-primary text-primary w-48">Download
                    Data</button>
            </div>

            <div class="space-y-2">
                <h1 class="font-bold text-2xl">Danger Zone</h1>
                <div>
                    <div class="flex space-x-16">
                        <div>
                            <h1 class="text-lg font-bold">Delete Account</h1>
                            <p class="text-sm w-96">Once you delete a account, there is no going back. Please be certain.
                            </p>
                        </div>

                        <button class="px-4 py-2 my-auto rounded-md border bg-red-500 text-white w-48"
                            @click="showDeleteAccountModal = true">Delete
                            Account</button>
                    </div>
                </div>
                <div>
                    <div class="flex space-x-16">
                        <div>
                            <h1 class="text-lg font-bold">Leave Organization</h1>
                            <p class="text-sm w-96">If you leave organization, you can ask organization to invite you.</p>
                        </div>


                        <button @click="showLeaveOrgModal = true"
                            class="px-4 my-auto py-2 rounded-md border bg-red-500 text-white w-48">Leave
                            Organization</button>
                    </div>
                </div>
            </div>

        </div>


    </div>
</template>


<script setup>
import { fb } from '@/_firebase/init'
import { useStore } from 'vuex'
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'


import DeleteAccountModal from './Modals/DeleteAccountModal.vue'
import LeaveOrgModal from './Modals/LeaveOrgModal.vue'



const router = useRouter();
const store = useStore();

const loading = ref(false);
const edit = ref(false);

const showDeleteAccountModal = ref(false);
const showLeaveOrgModal = ref(false);

const deleteAccount = () => {
    showDeleteAccountModal.value = false;
}

const leaveOrg = () => {
    showLeaveOrgModal.value = false;
}

const userdata = computed(() => store.state.userdata);

const logout = () => {
    loading.value = true;
    store.commit('LOGOUT');
    fb.auth().signOut().then(() => {
        router.push('/login');
    }).catch((error) => {
        console.log(error);
    })
}
</script>

<!-- <script>
import { mapState, mapMutations } from 'vuex';
import { fb } from '@/_firebase/init'
export default {
    data() {
        return {
            edit: false,
            processing: false
        }
    },
    methods: {
        ...mapMutations(['LOGOUT']),
        logout() {
            this.processing = true
            this.LOGOUT()
            fb.auth().signOut().then(() => {
                this.$router.push('/login');
            }).catch((error) => {
                console.log(error)
            })
        }
    },
    computed: {
        ...mapState(["org_data"])
    }
}
</script> -->