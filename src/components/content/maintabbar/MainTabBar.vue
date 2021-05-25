<template>
  <tab-bar class="tab-bar">
      <tab-bar-item path="/home" activeColor="#f37389">
        <template v-slot:item-icon>
          <img src="../../../assets/img/tabbar/home.svg" alt="">
        </template>
        <template v-slot:item-icon-active>
          <img src="../../../assets/img/tabbar/home_active.svg" alt="">
        </template>
        <template v-slot:item-text>
          <div>首页</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/catgory" activeColor="#f37389">
        <template v-slot:item-icon>
          <img src="../../../assets/img/tabbar/category.svg" alt="">
        </template>
        <template v-slot:item-icon-active>
          <img src="../../../assets/img/tabbar/category_active.svg" alt="">
        </template>
        <template v-slot:item-text>
          <div>品类</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="#f37389">
        <template v-slot:item-icon>
          <img src="../../../assets/img/tabbar/shopcart.svg" alt="">
        </template>
        <template v-slot:item-icon-active>
          <img src="../../../assets/img/tabbar/shopcart_active.svg" alt="">
        </template>
        <template v-slot:item-text>
          <div>购物车</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="#f37389">
        <template v-slot:item-icon>
          <img src="../../../assets/img/tabbar/profile.svg" alt="">
        </template>
        <template v-slot:item-icon-active>
          <img src="../../../assets/img/tabbar/profile_active.svg" alt="">
        </template>
        <template v-slot:item-text>
          <div>我的</div>
        </template>
      </tab-bar-item>
  </tab-bar>
</template>

<script>
const TabBar = () => import('../../common/tabbar/TabBar') //异步引入组件
const TabBarItem = () => import('../../common/tabbar/TabBarItem')
export default {
  name:'MainTabBar',
  components: {
    TabBar,
    TabBarItem
  },
  props: {},
  data() {
    return {
    };
  },
  watch: {},
  computed: {},
  methods: {},
};
</script>
<style scoped>
</style>