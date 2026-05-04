<script lang="ts" setup>
const userStore = useUserStore()
</script>


<template>
    <div>
        <p>private app page</p>
        <button @click="async () => await userStore.signOut()">logout</button>
    </div>
</template>