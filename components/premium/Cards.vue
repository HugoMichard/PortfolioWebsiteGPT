<template>
  <div>
    <div class="gap-5 flex flex-wrap">
      <PremiumCard
        v-for="subscription of authStore.subscriptions"
        :subscription="subscription"
        :is_active="
          subscription.name.toLowerCase() ===
          authStore.subscription.name?.toLowerCase()
        "
      ></PremiumCard>
    </div>
    <div class="mt-5 special-plan-contact">
      Need a special plan ? Send us an email at contact-websitegpt@gmail.com
    </div>
  </div>
</template>

<script setup>
const authStore = useAuthStore();

authStore.getSubscription();
authStore.getSubscriptions();
</script>