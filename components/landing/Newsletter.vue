<template>
  <div class="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-y-6">
    <h1 class="text-3xl font-bold text-left">
      Ready to dive in?<br /><span class="text-blue-600"
        >Create your assistant today.</span
      >
    </h1>
    <el-button
      class="mt-5 text-lg p-6"
      type="primary"
      size="large"
      color="#2563EB"
      @click="navigateTo('/app/signup')"
      >Get started</el-button
    >
  </div>
</template>
