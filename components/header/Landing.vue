<template>
  <el-affix :offset="0">
    <el-menu class="flex items-center" mode="horizontal" :ellipsis="false">
      <NuxtLink to="/">
        <el-image src="/PortfolioWebsiteGPT/images/logo.png" class="hover:cursor-pointer">
        </el-image>
      </NuxtLink>
      <el-menu-item index="1" @click="navigateTo('#about')" class="ml-2"
        >About</el-menu-item
      >
      <el-menu-item index="2" @click="navigateTo('#features')"
        >Features</el-menu-item
      >
      <el-menu-item index="3" @click="navigateTo('#premium')"
        >Pricing</el-menu-item
      >
      <div class="flex-grow" />
      <NuxtLink to="/app/login">
        <el-menu-item index="4">Login</el-menu-item>
      </NuxtLink>
      <NuxtLink to="/app/signup">
        <el-menu-item index="5">Sign up for Free Account</el-menu-item>
      </NuxtLink>
    </el-menu>
  </el-affix>
</template>

<style>
.flex-grow {
  flex-grow: 1;
}
</style>
