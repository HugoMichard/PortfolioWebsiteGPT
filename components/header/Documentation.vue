<template>
    <el-affix :offset="0">
        <el-menu class="flex items-center" mode="horizontal" :ellipsis="false">
            <NuxtLink to="/documentation/get-started/quickstart">
                <el-image src="/PortfolioWebsiteGPT/images/logo.png" class="hover:cursor-pointer">
                </el-image>
            </NuxtLink>
            <div class="flex-grow" />
            <NuxtLink to="/app/dashboard">
                <el-menu-item index="5">Go to the App</el-menu-item>
            </NuxtLink>
        </el-menu>
    </el-affix>
</template>
  
<style>
.flex-grow {
    flex-grow: 1;
}
</style>
