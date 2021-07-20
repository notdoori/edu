<template>
    <div>
        <h1>{{ title }}</h1>
        <p>{{ name }} </p><br>
        <button @click="updateName">Change Name</button>
    </div>
</template>

<script>
export default {
    props: { // 컴포넌트를 사용하는 상위에서 하위 컴포넌트로 데이터를 전달하기 위해 선언 
        title: {
            type: String,
            required: true
        },
        name: {
            type: String,
            default: 'default name'
        }
    },
    data() {
        return {
            //name: 'Kossie Coder'
        }
    },
    methods: {
        updateName() {
            this.name = 'Kossie Coder Updated.';
        }
    }
}
</script>

<style scoped>

</style>