<template>
  <div id="app">
    <Header/>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>  
    <Footer />
  </div>
</template>
<script>
import Header from './components/header'
import Footer from './components/footer'
export default {
  components: {
    Header,
    Footer
  }
}
</script>
<style lang="scss">
@import "assets/style/style.css";
</style>
