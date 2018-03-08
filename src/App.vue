<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <p>
      <router-link to='/'>首页</router-link>
      <router-link to='/hi'>hi页面</router-link>
      <router-link to='/hi/hi1'>hi页面子页面：hi1</router-link>
      <router-link :to='{name:"hi2",params:{username:aaa}}'>hi页面子页面：hi2</router-link>
      <router-link to='/params/yuanwill/198'>利用url传递参数</router-link>
      <router-link to='/goHome'>重定向回首页</router-link>
      <router-link to='/goParams/shenyuan/222'>重定向传递参数</router-link>
      <router-link to='/aliasHi'>hi页面别名</router-link>      
      <router-link to='/15616'>404</router-link>   
      
        <button @click="goBack">后退</button>
        <button @click="goGo">前进</button>
        <button @click="goParam">回传参页面</button>
      
    </p>
    <transition name="fade" mode="out-in">
      <router-view/>
      <router-view name="left"></router-view>
      <router-view name="right"></router-view>
    </transition>
    
    
  </div>
</template>

<script>
export default {
  name: "App",
  data(){
    return {
      aaa:'willss'
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    goGo() {
      this.$router.go(1);
    },
    goParam() {
      this.$router.push('/params/yuanyuan/456')
    }

  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.fade-enter {
  opacity: 0;
}
.fade-leave {
  opacity: 1;
}
.fade-enter-active {
  transition: opacity 0.5s;
}
.fade-leave-active {
  opacity: 0;
  transition: opacity 0.5s;
}
</style>
