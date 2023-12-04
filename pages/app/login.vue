<template>
    <h1 class="mb-24 text-center text-3xl">Sign In</h1>
    <el-form ref="ruleFormRef" :model="form" label-width="120px" label-position="top" :rules="rules"
        require-asterisk-position="right">
        <el-form-item label="Email" prop="email">
            <el-input v-model="form.email" />
        </el-form-item>
        <el-form-item label="Password" prop="password">
            <el-input v-model="form.password" type="password" />
        </el-form-item>
        <el-button type="primary" class="w-full h-10" @click="login(ruleFormRef)">Sign In</el-button>
        <div class="flex justify-center mt-16 items-center">
            <span class="text-s text-zinc-500">First time ?</span>
            <span class="text-s ml-3 font-bold hover:cursor-pointer" @click="navigateTo('/app/signup')">Create an account</span>
        </div>
    </el-form>
</template>

<script setup>
import { reactive } from 'vue'

definePageMeta({
    layout: "disconnected",
});

const authStore = useAuthStore();
const ruleFormRef = ref()

// do not use same name with ref
const form = reactive({
    email: '',
    password: '',
    confirm_password: ''
})

const rules = reactive({
    email: [{ required: true, message: 'Please input your email', trigger: 'blur' }],
    password: [{ required: true, message: 'Please input your password', trigger: 'blur' }],
})

const login = async (formEl) => {
    if (!formEl) return
    await formEl.validate(async (valid, fields) => {
        if (valid) {
            authStore.login(form.email, form.password);
        } else {
            console.log('error submit!', fields)
        }
    })
}

</script>
