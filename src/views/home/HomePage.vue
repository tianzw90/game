<template>
    <div class="home-page">
      <div class="home-page-left">
        <HomeLogin />
      </div>
      <div class="home-page-right"></div>
    </div>
</template>

<script>
import HomeLogin from '@/views/login/HomeLogin'
export default {
  components: { HomeLogin },
  name: 'HomePage',
  data () {
    return {
      winHeight: window.innerHeight
    }
  }
}
</script>

<style lang="scss" scoped>
.home-page-left {
  width: 70%;
  height: 100%;
}
.home-page-right {
  width: 30%;
  height: 100%;
  //background-color: #918e8e;
}
.home-page {
  display: flex;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-image: url("@/assets/dnf1.png");
}
</style>
<style lang="scss">
body{
  margin: 0;
  overflow: hidden;
}
</style>
