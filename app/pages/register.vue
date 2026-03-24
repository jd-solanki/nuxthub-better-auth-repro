<script lang="ts" setup>
const { client: authClient, signUp } = useUserSession()

const formData = reactive({
    email: 'admin@mail.com',
    password: 'adminadmin',
})

const onSubmit = async () => {
    await signUp.email({
        ...formData,
        name: formData.email.split('@')[0] ?? 'unknown',
    })
}
</script>


<template>
    <div>
        <p>register page</p>
        <form @submit.prevent="onSubmit">
            <input type="email" v-model="formData.email" placeholder="Email" />
            <input type="password" v-model="formData.password" placeholder="Password" />
            <button type="submit">Register</button>
        </form>
    </div>
</template>