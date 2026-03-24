<script lang="ts" setup>
const { client: authClient, signIn } = useUserSession()

const formData = reactive({
    email: 'admin@mail.com',
    password: 'adminadmin',
})

const onSubmit = async () => {
    await signIn.email(formData)
}
</script>


<template>
    <div>
        <p>login page</p>
        <form @submit.prevent="onSubmit">
            <input type="email" v-model="formData.email" placeholder="Email" />
            <input type="password" v-model="formData.password" placeholder="Password" />
            <button type="submit">Login</button>
        </form>
    </div>
</template>