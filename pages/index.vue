<template>
  <div>
    <div>
      <landing-summary></landing-summary>
      <div class="ml-3 mr-3">
        <landing-features></landing-features>
        <landing-premium class="mt-24"></landing-premium>
        <landing-newsletter class="mt-24"></landing-newsletter>
        <landing-footer class="mt-14 pt-10 mb-10 border-t-2"></landing-footer>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'landing'
})
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>