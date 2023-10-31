<template>
    <section id="hero">
        <div class="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
            <!-- left items -->
            <div class="flex flex-col mb-32 space-y-12 md:w-full mt-12">
                <h1 class="max-w-xl text-4xl font-bold">Powerful & Paperless, Yet Simple</h1>
                <p class="max-w-md text-xl text-[#666668]">Speed up your business processes and make sure
                    your business operations are running smoothly.</p>
                <div>
                    <img src="../assets/images/process.svg" alt="">
                </div>
                <div>
                    <p>Stay informed when new updates are released.</p>
                    <div class="md:inline-block">
                        <input class="border-[#666668] border-2 rounded p-2 px-6 md:w-60 xl:w-80 mt-5" type="email"
                            placeholder="Enter Your Email">
                        <button
                            class="space-x-6 bg-[#3C58A8] p-2.5 px-4 ml-4 rounded text-white absolute mt-5">Join</button>
                    </div>

                </div>
            </div>
            <div>
                <video class="hero-video rounded-xl md:ml-16 xl:max-w-2xl" autoplay muted loop playsinline>
                    <source
                        src="https://firebasestorage.googleapis.com/v0/b/muftar-site.appspot.com/o/site-assets%2Fvideos%2FMuftar-explained.webm?alt=media&token=b496b0db-e448-4422-8457-dafffe1a02a9"
                        type="video/webm">
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
</section>
</template>
<script setup>
</script>