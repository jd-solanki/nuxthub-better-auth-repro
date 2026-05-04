<script lang="ts" setup>
const userStore = useUserStore()

const formData = reactive({
    email: 'admin@mail.com',
    password: 'adminadmin',
})

const verificationFormData = reactive({
    email: '',
})

const onSubmit = async () => {
    await userStore.signIn.email(formData)
}

const onVerificationSubmit = async () => {
    console.log("userStore.authClient!.sendVerificationEmail :>>", userStore.authClient!.sendVerificationEmail)
    await userStore.authClient!.sendVerificationEmail({ email: verificationFormData.email })
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
        <form @submit.prevent="onVerificationSubmit">
            <input type="email" v-model="verificationFormData.email" placeholder="Email" />
            <button>Send verification email</button>
        </form>
    </div>
</template>