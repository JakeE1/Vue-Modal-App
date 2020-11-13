<template>
<div>
    <button class="btn btnPrimary" @click="setModalView('login')">Loggin button</button>
    <button class="btn btnPrimary" @click="setModalView('registration')">Registration button</button>
</div>
</template>

<script>
export default {
    methods: {
        setModalView (view) {
            this.$store.dispatch('setModalView', view)
        }
    }
}
</script>

<style scoped>
div {
    text-align: center;
}
</style>