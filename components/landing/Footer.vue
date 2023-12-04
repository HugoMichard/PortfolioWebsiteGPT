<template>
  <div class="sm:gap-x-28 gap-x-12 gap-y-12 flex flex-wrap justify-center">
    <div v-for="footer in footers">
      <h1 class="text-semibold uppercase text-slate-400">
        {{ footer.title }}
      </h1>
      <div v-for="link in footer.links">
        <el-link
          type="info"
          class="ml-1 capitalize mt-2"
          :underline="false"
          :href="link.url"
          >{{ link.text }}</el-link
        >
      </div>
    </div>
    <div>
      <h1 class="text-semibold uppercase text-slate-400">
        Sign up to the Newsletter
      </h1>
      <el-text type="info" class="mt-2"
        >Stay in tune with WebsiteGPT's latest updates</el-text
      >
      <br />
      <div class="flex sm:flex-nowrap flex-wrap mt-2">
        <el-input
          v-model="emailAddress"
          placeholder="Email address"
          class="w-38"
        />
        <el-button color="#2563EB" @click="subscribeToNewsletter"
          >SUBSCRIBE</el-button
        >
      </div>
    </div>
  </div>
</template>

<script setup>
const emailAddress = ref('')
const footers = [
  {
    title: 'Product',
    links: [
      { text: 'About', url: '#about' },
      { text: 'Features', url: '#features' },
      { text: 'Pricing', url: '#premium' }
    ]
  },
  {
    title: 'Documentation',
    links: [
      { text: 'Get Started', url: 'documentation/get-started/quickstart' },
      { text: 'Assistant', url: 'documentation/assistant/overview' }
    ]
  }
]

const subscribeToNewsletter = () => {
  $fetch(`https://api.headlessforms.cloud/api/v1/form/t8QbsCVx9i`, {
    method: 'post',
    body: {
      type: 'newsletter subscription',
      app: 'websitegpt',
      email: emailAddress.value
    }
  })
    .then(() => {
      ElMessage({
        message: 'You have successfully subscribed to the newsletter !',
        type: 'success'
      })
    })
    .catch(() => {
      ElMessage.error({
        message: 'Newsletter Subscription failed. An unexpected error happened. Please try again later',
      })
    })
}
</script>
