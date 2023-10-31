<template>
  <header>
    <nav>
      <div class="logo">
        <router-link to="/">
          <img src="../../assets/images/logo.svg" alt="" />
        </router-link>
      </div>
      <ul class="links">

        <li>
          <router-link to="/mission">Mission</router-link>
        </li>
        <li>
          <router-link to="/solution">Solutions</router-link>
        </li>
        <li>
          <router-link to="/pricing">Pricing</router-link>
        </li>
        <li>
          <router-link to="/knowledge">Knowledge Bar</router-link>
        </li>
      </ul>
      <ul class="login">
        <li>
          <router-link to="/login">Log in</router-link>
        </li>
        <li class="button">
          <router-link to="/join">Join The Network</router-link>
        </li>
      </ul>
      <div class="icon">

      </div>
    </nav>
  </header>
</template>
  
<style scoped>

@media (max-width: 990px) {
  .logo img {
    width: 150px;
    margin: -5rem 0;
    position: absolute;
  }

  header {
    margin-left: 5rem;
    margin-top: 3rem;
  }

  header ul li {
    list-style: none;
    padding: 0.5rem 0.5rem;
    margin-top: 0.5rem;
  }

  a {
    color: white;
    margin: 0;
  }

  .button a {
    padding: 0.5rem 2.5rem;
    background: #3c58a8;
    border-radius: 0.5rem;
    color: white;
  }
}
@media (max-width: 700px) {
  .logo img {
    width: 150px;
    margin: -5rem 0;
    position: absolute;
  }

  header {
    margin-left: 5rem;
    margin-top: 3rem;
  }

  header ul li {
    list-style: none;
    padding: 0.5rem 0.5rem;
    margin-top: 0.5rem;
  }

  a {
    color: white;
    margin: 0;
  }

  .button a {
    padding: 0.5rem 2.5rem;
    background: #3c58a8;
    border-radius: 0.5rem;
    color: white;
  }
}


</style>
  