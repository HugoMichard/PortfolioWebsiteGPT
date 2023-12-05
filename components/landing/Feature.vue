<template>
  <div class="grid grid-cols-6 gap-4">
    <div class="bg-blue-500 justify-self-end h-fit p-2">
        <Icon :name="props.icon" color="white" size="30"></Icon>
    </div>
    <div class="justify-self-start col-span-5">
        <h2 class="text-xl font-medium">{{ props.title }}</h2>
        <p class="text-slate-500">{{ props.description }}</p>
    </div>
  </div>
</template>


<script lang="ts" setup>
const props = defineProps({
  icon: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },

});
</script>