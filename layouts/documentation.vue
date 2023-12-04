<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <HeaderDocumentation></HeaderDocumentation>
      </el-header>
      <el-container>
        <el-aside width="200px" class="fixed">
          <DocumentationMenu></DocumentationMenu>
        </el-aside>
        <el-container class="mx-52">
          <el-main>
            <slot />
          </el-main>
        </el-container>
        <el-aside width="200px" class="fixed right-0">
          <ClientOnly>
            <DocumentationPageNavigator></DocumentationPageNavigator>
          </ClientOnly>
        </el-aside>
      </el-container>
    </el-container>
  </div>
</template>
