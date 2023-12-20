<template>
    <h1 class="mb-12 text-center text-3xl">Create Account</h1>
    <el-form ref="ruleFormRef" :model="form" label-width="120px" label-position="top" :rules="rules"
        require-asterisk-position="right">
        <el-form-item label="Email" prop="email">
            <el-input v-model="form.email" />
        </el-form-item>
        <el-form-item label="Password" prop="password">
            <el-input v-model="form.password" type="password" />
        </el-form-item>
        <el-form-item label="Password Confirmation" prop="confirm_password">
            <el-input v-model="form.confirm_password" type="password" />
        </el-form-item>
        <el-button type="primary" class="w-full h-10" @click="signUp(ruleFormRef)">
            Sign up
        </el-button>
        <div class="flex justify-center mt-16 items-center">
            <span class="text-s text-zinc-500">Already have an account ?</span>
            <span class="text-s ml-3 font-bold hover:cursor-pointer" @click="navigateTo('/app/login')">Sign in</span>
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

const validatePasswordConfirmation = (rule, value, callback) => {
    if (value === '') {
        callback(new Error('Please confirm your password'))
    } else if (value !== form.password) {
        callback(new Error("Passwords don't match"))
    } else {
        callback()
    }
}

const rules = reactive({
    email: [{ required: true, message: 'Please input your email', trigger: 'blur' }, {type: 'email', message: 'Please input valid email address', trigger: ['blur']}],
    password: [{ required: true, message: 'Please pick a password', trigger: 'blur' }],
    confirm_password: [
        { required: true, message: 'Please confirm your password', trigger: 'blur' },
        { validator: validatePasswordConfirmation, trigger: 'blur' }
    ]
})

const signUp = async (formEl) => {
    if (!formEl) return
    await formEl.validate(async (valid, fields) => {
        if (valid) {
            authStore.register(form.email, form.password)
        } else {
            console.log('error submit!', fields)
        }
    })
}

</script>
