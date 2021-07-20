<template>
  <div class="about">
    <h1>This is an about page</h1>
    <!-- title="about title" ->  KossiCoder 컴포넌트에 about title 전달 -->
    <KossieCoder title="about title"/> 
  </div>
</template>


<script>

import KossieCoder from '@/components/KossieCoder.vue';

export default {
  components: {
    KossieCoder
  }
}
</script>