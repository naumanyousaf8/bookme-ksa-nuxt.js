<template>
    <div class="currency-selector" @click="toggleDropdown" ref="dropdown">
      <span class="current-currency">{{ currentCurrency.code }}</span>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" :class="{ rotated: isOpen }">
        <polyline points="6,9 12,15 18,9" stroke="currentColor" stroke-width="2"/>
      </svg>
      
      <div v-if="isOpen" class="dropdown-menu">
        <div 
          v-for="currency in currencies" 
          :key="currency.code"
          class="dropdown-item"
          :class="{ active: currency.code === currentCurrency.code }"
          @click.stop="selectCurrency(currency)"
        >
          <span class="symbol">{{ currency.symbol }}</span>
          <span class="name">{{ currency.name }}</span>
          <span class="code">{{ currency.code }}</span>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted, onUnmounted } from 'vue'
  
  const isOpen = ref(false)
  const dropdown = ref(null)
  
  const currencies = [
    { code: 'PKR', name: 'Pakistani Rupee', symbol: '₨' },
    { code: 'SAR', name: 'Saudi Riyal', symbol: '﷼' },
    { code: 'USD', name: 'US Dollar', symbol: '$' },
    { code: 'EUR', name: 'Euro', symbol: '€' },
    { code: 'GBP', name: 'British Pound', symbol: '£' }
  ]
  
  const selectedCurrency = ref('PKR')
  
  const currentCurrency = computed(() => {
    return currencies.find(curr => curr.code === selectedCurrency.value) || currencies[0]
  })
  
  const toggleDropdown = () => {
    isOpen.value = !isOpen.value
  }
  
  const selectCurrency = (currency) => {
    selectedCurrency.value = currency.code
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
  .currency-selector {
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
  
  .currency-selector:hover {
    background-color: var(--color-surface);
    color: var(--color-primary);
  }
  
  .current-currency {
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
    min-width: 200px;
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
  
  .symbol {
    font-size: var(--font-size-base);
    font-weight: 600;
    width: 20px;
    text-align: center;
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