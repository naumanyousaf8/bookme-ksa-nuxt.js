<template>
    <aside class="sidebar" :class="{ open: isOpen }">
      <div class="sidebar-overlay" @click="closeSidebar"></div>
      <nav class="sidebar-content">
       <br>
       <br>
        <ul class="sidebar-menu">
          <li class="menu-item">
            <NuxtLink to="/flights" class="menu-link" @click="closeSidebar">
              <div class="menu-icon">
                <img src="/plane.png" alt="Flights" width="26" height="26" />
              </div>
              <span class="menu-text">Flights</span>
            </NuxtLink>
          </li>
          
          <li class="menu-item">
            <NuxtLink to="/hotels" class="menu-link" @click="closeSidebar">
              <div class="menu-icon">
                <img src="/building.png" alt="Hotels" width="26" height="26" />
              </div>
              <span class="menu-text">Hotels</span>
            </NuxtLink>
          </li>
          
          <li class="menu-item">
            <NuxtLink to="/events" class="menu-link" @click="closeSidebar">
              <div class="menu-icon">
                <img src="/mic-vocal.png" alt="Events" width="26" height="26" />
              </div>
              <span class="menu-text">Events</span>
            </NuxtLink>
          </li>
        </ul>
        
      </nav>
    </aside>
  </template>
  
  <script setup>
  import { useSidebarStore } from '~/stores/sidebar'
  
  const sidebarStore = useSidebarStore()
  const isOpen = computed(() => sidebarStore.isOpen)
  
  const closeSidebar = () => {
    sidebarStore.close()
  }
  
  // Close sidebar on route change
  const route = useRoute()
  watch(() => route.path, () => {
    closeSidebar()
  })
  </script>
  
  <style scoped>
  .sidebar {
    position: fixed;
    top: 90px;
    left: 0;
    bottom: 0;
    width: 256px;
    z-index: 40;
    transform: translateX(-100%);
    transition: transform var(--transition-normal);
  }
  
  .sidebar.open {
    transform: translateX(0);
  }
  
  .sidebar-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    opacity: 0;
    pointer-events: none;
    transition: opacity var(--transition-normal);
  }
  
  .sidebar.open .sidebar-overlay {
    opacity: 1;
    pointer-events: auto;
  }
  
  .sidebar-content {
    height: 100%;
    background: var(--color-background);
    
    display: flex;
    flex-direction: column;
    box-shadow: var(--shadow-lg);
  }
  
  .sidebar-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--spacing-lg);
    border-bottom: 1px solid var(--color-border);
  }
  
  .sidebar-title {
    font-size: var(--font-size-lg);
    font-weight: 600;
    color: var(--color-text);
    margin: 0;
  }
  
  .close-btn {
    background: none;
    border: none;
    cursor: pointer;
    padding: var(--spacing-xs);
    color: var(--color-text-secondary);
    border-radius: var(--radius-md);
    transition: all var(--transition-fast);
  }
  
  .close-btn:hover {
    background-color: var(--color-surface);
    color: var(--color-text);
  }
  
  .sidebar-menu {
    flex: 1;
    list-style: none;
    padding: var(--spacing-md) 0;
    margin: 0;
  }
  
  .menu-item {
    margin-bottom: var(--spacing-xs);
  }
  
  .menu-link {
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
    padding: var(--spacing-md) var(--spacing-lg);
    color: var(--color-text-secondary);
    font-weight: initial;
    text-decoration: none;
    transition: all var(--transition-fast);
    position: relative;
  }
  
  .menu-link:hover,
  .menu-link.router-link-active {
    background-color: var(--color-surface);
    color: var(--color-primary);
  }
  
  .menu-link.router-link-active::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 3px;
    background-color: var(--color-primary);
  }
  
  .menu-icon {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .menu-icon img {
    filter: none;
  }
  
  .menu-text {
    flex: 1;
    font-weight: 100;
    font-size: 18px;
    font-family: 'Poppins', sans-serif;
    color: initial;
  }
  
  .menu-badge {
    font-size: var(--font-size-xs);
    padding: 2px var(--spacing-xs);
    border-radius: var(--radius-full);
    background-color: var(--color-primary);
    color: white;
    font-weight: 600;
  }
  
  .menu-badge.new {
    background-color: var(--color-success);
  }
  
  .sidebar-footer {
    padding: var(--spacing-lg);
    border-top: 1px solid var(--color-border);
  }
  
  .quick-title {
    font-size: var(--font-size-sm);
    font-weight: 600;
    color: var(--color-text);
    margin: 0 0 var(--spacing-md) 0;
  }
  
  .action-buttons {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);
  }
  
  .action-btn {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
    padding: var(--spacing-sm) var(--spacing-md);
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    color: var(--color-text-secondary);
    cursor: pointer;
    transition: all var(--transition-fast);
    font-size: var(--font-size-sm);
    font-weight: 500;
  }
  
  .action-btn:hover {
    background-color: var(--color-primary);
    color: white;
    border-color: var(--color-primary);
  }
  
  @media (min-width: 1024px) {
    .sidebar {
      position: fixed;
      transform: translateX(0);
    }
    
    .sidebar-overlay {
      display: none;
    }
    
    .sidebar-content {
      box-shadow: none;
    }
  }
  
  @media (max-width: 1023px) {
    .sidebar-overlay {
      position: fixed;
      top: 64px;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }
  </style>