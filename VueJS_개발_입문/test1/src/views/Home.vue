<!--
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>
-->

<!--<script>-->
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

// export default {
//   name: 'Home',
//   components: {
//     HelloWorld
//   }
// }
<!--</script>-->

<!-- 별도 파일로 component 분리 하기 -->
<!-- Single File Component : 한 개의 컴포넌트는 한 개의 파일에 -->
<!-- 화면 구성을 위한 HTML, Vue 코드, 화면 style 까지 한 개의 파일에 모두 기술 가능 -->
<template> <!--HTML 코드 -->
  <div>
    <h1>This is Home page</h1>
    <!-- title="home title" ->  KossiCoder 컴포넌트에 about title 전달 -->
    <KossieCoder title="home title" name="Kossie Coder"/>
  </div>
</template>

<script>
import KossieCoder from '@/components/KossieCoder.vue';

export default {
  components: {
    KossieCoder
  },
/*   data() {
    return {
      name: 'AAAA'
    }
  } */
}
</script>

<style scoped>
h1 {
  color: red;
}
</style>

