<template>
  <el-row class="h-[calc(100vh-60px)] items-center" id="about">
    <el-col :span="12" :xs="24" class="grid justify-items-center">
      <div class="pl-10">
        <h1 class="text-5xl font-bold text-left">
          Custom ChatGPT<br /><span class="text-blue-600"
            >Website Assistants</span
          >
        </h1>
        <p class="text-left text-slate-600 mt-5 text-xl">
          Create and manage your ChatGPT Assistant.
          <br />
          Answers your client questions on your website and your documents.
        </p>
        <el-button
          class="mt-5 text-lg p-6"
          type="primary"
          size="large"
          color="#2563EB"
          @click="navigateTo('/app/signup')"
          >Create your assistant now</el-button
        >
      </div>
    </el-col>
    <el-col :span="12" :xs="24" class="grid justify-items-center">
      <el-image src="/images/landing-discussion.png" fit="none"></el-image>
    </el-col>
  </el-row>
</template>
