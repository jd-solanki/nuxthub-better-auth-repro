<script lang="ts" setup>
const userStore = useUserStore()
</script>


<template>
    <div>
        <p>index page</p>
        <!-- <p v-if="userStore.isUserAdmin">You are an admin.</p> -->
         <pre>{{ userStore.user }}</pre>
    </div>
</template>