<template>
    <el-container class="h-full">
        <el-main class="w-full">
            <NuxtLink to="/">
                <el-image src="/images/logo.png" fit="fill" class="mt-10 ml-10"></el-image>
            </NuxtLink>
            <div class="items-center justify-center flex h-[calc(100vh-200px)]">
                <div class="justify-center md:w-[calc(30vw)] w-[calc(80vw)]">
                    <slot></slot>
                </div>
            </div>
        </el-main>
        <el-aside width="50%" class="h-full p-0 overflow-hidden w-0 md:w-[calc(50vw)]">
            <el-image src="/images/login.jpg" fit="fill" class="h-full"></el-image>
        </el-aside>
    </el-container>
</template>


<style>
html,
body,
#__nuxt,
#__layout {
    height: 100vh !important;
}
</style>