<template>
  <div class="common-layout">
    <el-container>
      <el-header class="pr-0">
        <HeaderLanding></HeaderLanding>
      </el-header>
      <el-container>
        <el-main class="pt-0 pr-0 pl-0">
          <slot />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
