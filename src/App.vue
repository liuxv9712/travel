<template>
  <div id="app">
    <!-- Detail 页禁用 keepalive,detail是Detail.vue定义的name -->
    <keep-alive exclude="detail">
      <router-view />
    </keep-alive>
    <div id="nav">
      <!-- <router-link to="/">Home</router-link>| -->
      <!-- <router-link to="/about">About</router-link> -->
    </div>
  </div>
</template>

<style>
</style>
