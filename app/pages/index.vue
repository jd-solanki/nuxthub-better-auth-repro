<script lang="ts" setup>
const { user } = useUserSession()
const isAdmin = computed(() => {
    return user.value?.role === 'admin'
})
</script>


<template>
    <div>
        <p>index page</p>
        <p v-if="isAdmin">You are an admin.</p>
    </div>
</template>