<template>
  <div id="app">
    <router-view></router-view>
     <!-- <main-tab-bar></main-tab-bar> -->
     <MainTabBar/> 
   
  </div>
</template>

<script >
import MainTabBar from './components/content/maintabbar/MainTabBar'
export default {
  name: "App",
  components: {
    MainTabBar
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>
