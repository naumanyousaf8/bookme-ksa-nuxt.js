<template>
    <div class="layout-default">
      <AppHeader />
      <div class="layout-content">
        <AppSidebar v-if="showSidebar" />
        <main class="main-content" :class="{ 'with-sidebar': showSidebar }">
          <slot />
        </main>
      </div>
      <AppFooter />
    </div>
  </template>
  
  <script setup>
  const route = useRoute()
  
  // Show sidebar on main pages
  const showSidebar = computed(() => {
    return route.path === '/' || route.path.startsWith('/flights') || route.path.startsWith('/hotels') || route.path.startsWith('/events')
  })
  </script>
  
  <style scoped>
  .layout-default {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  
  .layout-content {
    flex: 1;
    display: flex;
  }
  
  .main-content {
    flex: 1;
    transition: margin-left var(--transition-normal);
  }
  
  .main-content.with-sidebar {
    margin-left: 0;
  }
  
  @media (min-width: 1024px) {
    .main-content.with-sidebar {
      margin-left: 256px;
    }
  }
  </style>