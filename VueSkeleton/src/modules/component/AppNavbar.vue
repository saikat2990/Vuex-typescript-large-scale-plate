<template>
  <nav class="navbar navbar-light">
    <div class="container">
      <a class="navbar-brand" href="http://kaz.com.bd/">KAZ SOFTWARE</a>
    </div>
    <div v-if="isLogins">
       <a @click="logOut">Log Out</a>
    </div>
  </nav>
</template>

<script lang='ts' src='./AppNavbar.ts'></script>
