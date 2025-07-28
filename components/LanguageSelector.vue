<template>
    <div class="language-selector" @click="toggleDropdown" ref="dropdown">
      <span class="current-language">{{ currentLanguage.code }}</span>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" :class="{ rotated: isOpen }">
        <polyline points="6,9 12,15 18,9" stroke="currentColor" stroke-width="2"/>
      </svg>
      
      <div v-if="isOpen" class="dropdown-menu">
        <div 
          v-for="language in languages" 
          :key="language.code"
          class="dropdown-item"
          :class="{ active: language.code === currentLanguage.code }"
          @click.stop="selectLanguage(language)"
        >
          <span class="flag">{{ language.flag }}</span>
          <span class="name">{{ language.name }}</span>
          <span class="code">{{ language.code }}</span>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted, onUnmounted } from 'vue'
  
  const isOpen = ref(false)
  const dropdown = ref(null)
  
  const languages = [
    { code: 'EN', name: 'English', flag: '🇺🇸' },
    { code: 'AR', name: 'العربية', flag: '🇸🇦' },
    { code: 'UR', name: 'اردو', flag: '🇵🇰' }
  ]
  
  const selectedLanguage = ref('EN')
  
  const currentLanguage = computed(() => {
    return languages.find(lang => lang.code === selectedLanguage.value) || languages[0]
  })
  
  const toggleDropdown = () => {
    isOpen.value = !isOpen.value
  }
  
  const selectLanguage = (language) => {
    selectedLanguage.value = language.code
    isOpen.value = false
  }
  
  const handleClickOutside = (event) => {
    if (dropdown.value && !dropdown.value.contains(event.target)) {
      isOpen.value = false
    }
  }
  
  onMounted(() => {
    document.addEventListener('click', handleClickOutside)
  })
  
  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
  })
  </script>
  
  <style scoped>
  .language-selector {
    position: relative;
    display: flex;
    align-items: center;
    gap: var(--spacing-xs);
    color: var(--color-text-secondary);
    cursor: pointer;
    font-size: var(--font-size-sm);
    font-weight: 500;
    padding: var(--spacing-sm);
    border-radius: var(--radius-md);
    transition: all var(--transition-fast);
  }
  
  .language-selector:hover {
    background-color: var(--color-surface);
    color: var(--color-primary);
  }
  
  .current-language {
    font-weight: 600;
  }
  
  svg {
    transition: transform var(--transition-fast);
  }
  
  svg.rotated {
    transform: rotate(180deg);
  }
  
  .dropdown-menu {
    position: absolute;
    top: 100%;
    right: 0;
    background: var(--color-background);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-lg);
    min-width: 180px;
    z-index: 50;
    overflow: hidden;
    animation: fadeIn 0.2s ease-out;
  }
  
  .dropdown-item {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
    padding: var(--spacing-sm) var(--spacing-md);
    cursor: pointer;
    transition: background-color var(--transition-fast);
  }
  
  .dropdown-item:hover {
    background-color: var(--color-surface);
  }
  
  .dropdown-item.active {
    background-color: var(--color-primary);
    color: white;
  }
  
  .flag {
    font-size: var(--font-size-base);
  }
  
  .name {
    flex: 1;
    font-weight: 500;
  }
  
  .code {
    font-size: var(--font-size-xs);
    opacity: 0.7;
  }
  </style>