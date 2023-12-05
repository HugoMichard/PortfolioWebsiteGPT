<template>
  <div class="flex justify-center landing-premium" id="premium">
    <div
      class="bg-blue-600 p-10 sm:ml-10 sm:mr-10 rounded-lg shadow-md max-w-7xl"
    >
      <el-row class="items-center" :gutter="20">
        <el-col :span="12" :xs="24" class="grid justify-items-center mb-5 mt-5">
          <div class="pl-10 text-white">
            <h1 class="text-3xl font-bold text-left">WebsiteGPT Pricing</h1>
            <p class="text-left text-slate-200 mt-5 text-xl">
              Create and manage your ChatGPT Assistant.
              <br />
              Answers your client questions on your website and your documents.
            </p>
            <el-button
              class="mt-5 text-lg p-5"
              size="large"
              type="primary"
              plain
              @click="togglePremium"
              >Find out more</el-button
            >
          </div>
        </el-col>
        <el-col
          :span="12"
          :xs="24"
          class="grid justify-items-center max-h-48 overflow-clip"
        >
          <el-image src="/PortfolioWebsiteGPT/images/landing-assistant.png" fit="fill"></el-image>
        </el-col>
      </el-row>
      <premium-cards v-if="false"></premium-cards>
      <el-collapse v-model="activeNames" class="bg-blue-500 border-0">
        <el-collapse-item name="1" class="bg-blue-500">
          <premium-cards></premium-cards>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script setup lang="ts">
const isPremiumHidden = ref(true)
const activeNames: Ref<string[]> = ref([])

const togglePremium = () => {
  activeNames.value = activeNames.value[0] == '1' ? [] : ['1']
  isPremiumHidden.value = !isPremiumHidden.value
}
</script>

<style>

.landing-premium .el-collapse-item__header {
  display: none
}
.landing-premium .el-collapse-item__content {
  padding-bottom: 0;
  background-color: #2563EB;
}
.landing-premium .el-collapse-item__wrap {
  background-color: #2563EB;
  border: none;
}

.landing-premium .special-plan-contact {
  color: white;
}
</style>