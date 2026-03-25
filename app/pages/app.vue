<script lang="ts" setup>
const { signOut } = useUserSession()
</script>


<template>
    <div>
        <p>private app page</p>
        <button @click="async () => await signOut()">logout</button>
    </div>
</template>