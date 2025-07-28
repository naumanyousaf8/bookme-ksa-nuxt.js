<template>
    <header class="header">
      <div class="header-container">
        <div class="header-left">
          <button 
            class="menu-btn"
            @click="toggleSidebar"
            :class="{ active: sidebarOpen }"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
          <NuxtLink to="/" class="logo">
            <img src="/bookme%20logo.png" alt="Bookme Logo" class="logo-img" style="height:32px; width:auto;" />
          </NuxtLink>
        </div>
        
  
        <div class="header-right">
          <span class="help-link">Help</span>
          <LanguageSelector />
          <CurrencySelector />
          <NuxtLink to="/login" class="btn btn-secondary">Login</NuxtLink>
          <NuxtLink to="/signup" class="btn btn-primary">Sign up</NuxtLink>
        </div>
      </div>
    </header>
  </template>
  
  <script setup>
  import { useSidebarStore } from '~/stores/sidebar'
  
  const sidebarStore = useSidebarStore()
  
  const sidebarOpen = computed(() => sidebarStore.isOpen)
  
  const toggleSidebar = () => {
    sidebarStore.toggle()
  }
  </script>
  
  <style scoped>
  .header {
    background: var(--color-background);
    border-bottom: 1px solid var(--color-border);
    padding: 0 var(--spacing-lg);
    height: 90px;
    position: sticky;
    top: 0;
    z-index: 50;
    backdrop-filter: blur(8px);
  }
  
  .header-container {
    max-width: 1700px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }
  
  .header-left {
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
  }
  
  .menu-btn {
    background: none;
    border: none;
    cursor: pointer;
    padding: var(--spacing-sm);
    color: var(--color-text-secondary);
    border-radius: var(--radius-md);
    transition: all var(--transition-fast);
  }
  
  .menu-btn:hover,
  .menu-btn.active {
    background-color: var(--color-surface);
    color: var(--color-primary);
  }
  
  .logo {
    text-decoration: none;
  }
  
  .logo-text {
    font-size: var(--font-size-2xl);
    font-weight: bold;
    color: var(--color-primary);
  }
  
  .nav-menu {
    display: none;
    gap: var(--spacing-xl);
  }
  
  .nav-item {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
    color: var(--color-text-secondary);
    text-decoration: none;
    padding: var(--spacing-sm) var(--spacing-md);
    border-radius: var(--radius-md);
    transition: all var(--transition-fast);
    font-weight: 500;
  }
  
  .nav-item:hover,
  .nav-item.router-link-active {
    background-color: var(--color-surface);
    color: var(--color-primary);
  }
  
  .header-right {
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
  }
  
  .help-link {
    color: var(--color-text-secondary);
    cursor: pointer;
    font-size: var(--font-size-sm);
    font-weight: 500;
    transition: color var(--transition-fast);
  }
  
  .help-link:hover {
    color: var(--color-primary);
  }

  .header-right .btn.btn-secondary[disabled],
  .header-right .btn.btn-primary[disabled] {
    opacity: 0.5;
    pointer-events: none;
    cursor: not-allowed;
  }
  
  @media (min-width: 768px) {
    .nav-menu {
      display: flex;
    }
  }
  
  @media (max-width: 768px) {
    .header-right {
      gap: var(--spacing-sm);
    }
    
    .help-link {
      display: none;
    }
    
    .btn {
      padding: var(--spacing-xs) var(--spacing-sm);
      font-size: var(--font-size-xs);
    }
  }
  </style>