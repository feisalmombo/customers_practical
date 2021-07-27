<template>
    <div class="User">
        <h1>{{ $route.params.id }}</h1>
        <p>Version 1.0.0</p>
    </div>
</template>

<script>
export default {
    name: "User",
    props: {
    msg: String
    },
    data() {
        return {
        }
    }
}
</script>

<style scoped>

</style>