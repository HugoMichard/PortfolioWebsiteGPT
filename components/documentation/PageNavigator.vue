<template>
  <div class="border-l-2 pl-7">
    <el-scrollbar>
      <div
        v-for="title in titles"
        class="m-1"
        @click="() => goToSection(title)"
      >
        <div :class="{ 'ml-3': title.level === 2 }">
          <span
            class="cursor-pointer hover:text-sky-500"
            :class="{
              'text-base': title.level === 1,
              'text-sm': title.level === 2
            }"
          >
            {{ title.text }}
          </span>
        </div>
      </div>
    </el-scrollbar>
  </div>
</template>

<script setup>
const documentationStore = useDocumentationStore()
const regXHeader = /#{1,6}.+/g
let titles = ref([])

documentationStore.$subscribe((_, state) => {
  updateNavigatorWithMarkdown(state.viewedPageMarkdown)
})

const updateNavigatorWithMarkdown = markdown => {
  const titlesFound = markdown.match(regXHeader)
  const levelIndexCounter = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 }
  titles.value = titlesFound
    .map(title => {
      const level = title.split(' ', 1)[0].length
      levelIndexCounter[level] += 1
      return {
        level: level,
        text: title.substring(level + 1),
        levelIndex: levelIndexCounter[level]
      }
    })
    .filter(title => title.level < 3)
}

const goToSection = title => {
  const element = document
    .getElementById('documentation-md-insert-point')
    .getElementsByTagName('h' + title.level)[title.levelIndex - 1]
  const pos = element.style.position
  const top = element.style.top
  element.style.position = 'relative'
  element.style.top = '-60px'
  element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  element.style.top = top
  element.style.position = pos
}
</script>
