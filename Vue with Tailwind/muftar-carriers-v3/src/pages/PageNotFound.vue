<template>
  <div class="container mx-auto">

    <!-- <nav class="navbar navbar-ct-default" role="navigation-demo">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navigation-example-2">
            Back
          </button>
          <router-link :to="{path:'/'}" class="navbar-brand">Muftar Digital</router-link>
        </div>
        <div class="collapse navbar-collapse" id="navigation-example-2">
          <ul class="nav navbar-nav navbar-right">
            <li>
              <router-link :to="{path:'/'}">Home</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav> -->



    <div class="text-center text-5xl space-y-10 mt-12 ">
      <h2 class="text-red-400">404 Not Found</h2>
      <h2 class="text-gray-600">Oops! It seems that this page does not exist.</h2>
      <div>
        <router-link :to="{ path: '/' }" class="text-blue-400">Return Home</router-link>
      </div>
    </div>

    <!-- <footer class="footer-demo">
      <div class="container">
        <nav class="pull-left">
          <ul>
            <li>
              <router-link :to="{path:'/'}">Home</router-link>
            </li>
            <li>
              <router-link :to="{path:'/register'}">Register</router-link>
            </li>
          </ul>
        </nav>
        <div class="copyright pull-right">
          &copy; 2017, made with
          <i class="fa fa-heart heart"></i> by Paper admin
        </div>
      </div>
    </footer> -->

  </div>
</template>

<script setup>

</script>
<style scoped>

</style>
