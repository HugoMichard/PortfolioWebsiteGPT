<template>
  <div>
    <h1 class="text-5xl font-bold capitalize mb-5">{{ route.path.substring(route.path.lastIndexOf('/') + 1).replaceAll('-', ' ') }}</h1>
    <div id="documentation-md-insert-point" class="markdown-body"></div>
  </div>
</template>

<script setup>
import { Remarkable } from 'remarkable'
const documentationStore = useDocumentationStore()

const route = useRoute()

onMounted(() => {
  if (documentationStore.pathToFile !== route.path) {
    documentationStore.getPageMarkdown(route.path)
    documentationStore.$subscribe((_, state) => {updateDomWithMarkdown(state.viewedPageMarkdown)})
  } else {
    updateDomWithMarkdown(documentationStore.viewedPageMarkdown)
  }
})

const updateDomWithMarkdown = (markdown) => {
  const point = document.getElementById('documentation-md-insert-point')
  const remarkable = new Remarkable()
  if(point) point.innerHTML = remarkable.render(markdown)
}
</script>

<style>
@import url("~/assets/css/markdown.css");
</style>
