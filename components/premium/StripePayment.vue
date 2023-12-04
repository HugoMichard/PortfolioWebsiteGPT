<template>
  <div>
    <div class="flex justify-center mt-5">
      <el-button
        class="text-2xl w-full h-8 p-6"
        color="#2563EB"
        :disabled="is_active"
        @click="subscribe"
      >
        {{ is_active ? 'Subscribed' : 'Subscribe Now' }}
      </el-button>
    </div>
    <div class="flex justify-center">
      <span class="text-xs text-center mt-4"> Supported payment methods: </span>
    </div>
    <div class="flex justify-center items-center">
      <el-image
        src="/images/payment_methods.png"
        class="w-40 h-fit"
        fit="fill"
      ></el-image>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  subscription: {
    type: Object,
    required: true
  },
  is_active: {
    type: Boolean,
    required: true
  }
})
const authStore = useAuthStore()

const subscribe = () => {
  if (authStore.subscription.name === 'Unknown') {
    navigateTo('/app/login')
    return
  }
  if (props.is_active) {
    navigateTo('')
    return
  }
  if (props.subscription.link.length <= 5) {
    authStore.unsubscribe()
    return
  }
  navigateTo(
    `${props.subscription.link}?prefilled_email=${authStore.user.email}&client_reference_id=${authStore.user.id}`,
    { external: true }
  )
}
</script>

<style>
.stripe-card {
  min-width: 350px; /* Minimum width for each div */
  flex: 1; /* Distribute available space evenly among the divs */
}
</style>
