<template>
  <div>
      Completed Todo: {{ numberOfCompletedTodo }}
      <!-- {{ todos }} -->
  </div>
</template>

<script>
export default {
    computed: { 
        numberOfCompletedTodo() {
            return this.$store.getters['todo/numberOfCompletedTodo'];
        },
        // todos() {
        //     return this.$store.state.todos;
        // }
        // vuex 의 store 에 있는 데이터를 가져 올 때에는 computed 오브젝트에 기술.(store 의 최신 데이터 유지 가능)
    }
}
</script>

<style>

</style>