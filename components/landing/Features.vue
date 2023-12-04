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
  { icon: "mdi:clock-fast", title: "Quick setup", description: "Forget bookmarking manga and manually checking if a new chapter got released. We automatically track manga across many sites, from big to small."},
  { icon: "ic:baseline-dashboard-customize", title: "Fully customizable", description: "When the latest chapter of your favourite manga gets released, we automagically update your dashboard, so that you can jump straight into reading."},
  { icon: "simple-icons:openai", title: "Powered by ChatGPT", description: "You can trust us to keep your manga list safe. We don't store manga chapters, meaning we won't get that DMCA takedown that killed your favourite manga provider."},
  { icon: "ic:baseline-monitor", title: "Easy monitoring", description: "Forget bookmarking manga and manually checking if a new chapter got released. We automatically track manga across many sites, from big to small."}
]

</script>