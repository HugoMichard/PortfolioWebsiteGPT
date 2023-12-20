<template>
  <el-container class="h-[calc(100vh-160px)] text-2xl">
    <el-scrollbar>
      <el-menu :default-openeds="defaultOpeneds">
        <el-sub-menu
          v-for="(menuItem, index) in menuList"
          :index="(index + 1).toString()"
          class="text-2xl"
        >
          <template #title>
            <icon size="18" :name="menuItem.icon" class="mr-3"></icon
            ><span class="text-xl">{{ menuItem.title }}</span>
          </template>
          <NuxtLink
            v-for="(subMenuItem, subIndex) in menuItem.subMenus"
            :to="
              '/documentation/' +
              stringToUrl(menuItem.title) +
              '/' +
              stringToUrl(subMenuItem)
            "
          >
            <el-menu-item
              class="text-base ml-5"
              :index="index + 1 + '-' + (subIndex + 1)"
              >{{ subMenuItem }}</el-menu-item
            >
          </NuxtLink>
        </el-sub-menu>
      </el-menu>
    </el-scrollbar>
  </el-container>
</template>

<script setup lang="ts">
const route = useRoute()

const stringToUrl = (string: String) =>
  string.toLowerCase().replaceAll(' ', '-')

const menuList = [
  { title: 'Get started', icon: 'ion:rocket-sharp', subMenus: ['Quickstart'] },
  { title: 'Assistant', icon: 'mdi:robot', subMenus: ['Overview', 'Package'] }
]

const defaultMenuItemWithDocumentation = route.path.substring(
  0,
  route.path.lastIndexOf('/')
)
const defaultMenuItemTitle = defaultMenuItemWithDocumentation.substring(
  defaultMenuItemWithDocumentation.lastIndexOf('/') + 1
)

const defaultItem = menuList
  .map((m, idx) => {
    return { title: m.title, idx: (idx + 1).toString() }
  })
  .filter(m => stringToUrl(m.title) === defaultMenuItemTitle)

const defaultOpeneds = defaultItem.length === 0 ? ['1'] : [defaultItem[0].idx]
</script>
