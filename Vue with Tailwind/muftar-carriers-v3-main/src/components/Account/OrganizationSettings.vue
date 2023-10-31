<template>
    <div class="w-full p-4">
        <div class="flex ">
            <!-- <ul class="flex space-x-2 my-auto">
                <li class="cursor-pointer py-2 px-4 font-bold text-gray-400">My Details</li>
                <li class="cursor-pointer py-2 px-4 font-bold text-gray-400">Profile</li>
                <li class="cursor-pointer py-2 px-4 font-bold text-gray-400">Password</li>
                <li class="cursor-pointer py-2 px-4 text-primary bg-blue-100 rounded-md font-bold">Notifications</li>
            </ul> -->

            <!-- <div class="space-x-2">
                <button @click="logout()" class="bg-red-500 text-white px-4 py-2 rounded-md ">Logout</button>
            </div> -->
        </div>

        <div class=" space-y-5">
            <div class="space-y-1">
                <h1 class="font-bold text-3xl">Organization Settings</h1>
                <p class="text-gray-400">Choose when and how we contact you.</p>
            </div>


            <div class="border-b">
                <ul class="flex space-x-4 text-gray-500">
                    <li class="border-b-primary p-4 border-b-4 cursor-pointer text-primary font-bold">Email</li>
                    <li class="p-4 cursor-pointer font-bold">in-app</li>
                    <li class="p-4 cursor-pointer font-bold">Push</li>
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


        </div>


    </div>
</template>


<script setup>
import { fb } from '@/_firebase/init'
import { useStore } from 'vuex'
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'


const router = useRouter();
const store = useStore();

const loading = ref(false);

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

