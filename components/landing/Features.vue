<template>
  <div id="features">
    <div class="text-center mb-8">
      <h1 class="text-4xl font-bold tracking-tight">
        The best way to answer questions on your website
      </h1>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 justify-items-stretch gap-y-6">
      <landing-feature v-for="feature in features" :icon="feature.icon" :title="feature.title" :description="feature.description" class="bg-white justify-self-center"></landing-feature>
    </div>
    </div>
</template>

<script setup lang="ts">
const features = [
  { icon: "mdi:clock-fast", title: "Quick setup", description: "It only takes a few clicks to setup your custom assistant and get started using it ! Add your website url, some documents if you have any and start chatting with it immediately !"},
  { icon: "ic:baseline-dashboard-customize", title: "Fully customizable", description: "Your assistant is completely customizable, from it's name and function to extremely specific answers it must know to some questions."},
  { icon: "simple-icons:openai", title: "Powered by ChatGPT", description: "ChatGPT is used as our engine to answer your user's questions. We rely on a proven cutting-edge solution to give the best results possible"},
  { icon: "ic:baseline-monitor", title: "Easy monitoring", description: "Your users usage can be easily monitored from our dashboard. Know exactly what is happening at all times !"}
]

</script>