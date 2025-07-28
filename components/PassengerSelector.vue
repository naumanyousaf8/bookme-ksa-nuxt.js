<template>
    <div class="passenger-selector" @click="toggleDropdown" ref="dropdown">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" stroke-width="2"/>
        <circle cx="12" cy="7" r="4" stroke="currentColor" stroke-width="2"/>
      </svg>
      <span>{{ displayText }}</span>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" :class="{ rotated: isOpen }">
        <polyline points="6,9 12,15 18,9" stroke="currentColor" stroke-width="2"/>
      </svg>
      
      <div v-if="isOpen" class="dropdown-menu">
        <div class="passenger-type">
          <div class="type-info">
            <span class="type-name">Adults</span>
            <span class="type-desc">12+ years</span>
          </div>
          <div class="counter">
            <button @click.stop="decrement('adults')" :disabled="passengers.adults <= 1">-</button>
            <span>{{ passengers.adults }}</span>
            <button @click.stop="increment('adults')">+</button>
          </div>
        </div>
        
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted, onUnmounted } from 'vue'
  
  const props = defineProps({
    modelValue: {
      type: String,
      default: '1 Adult'
    }
  })
  
  const emit = defineEmits(['update:modelValue'])
  
  const isOpen = ref(false)
  const dropdown = ref(null)
  
  const passengers = ref({
    adults: 1,
    children: 0,
    infants: 0
  })
  
  const displayText = computed(() => {
    const total = passengers.value.adults + passengers.value.children + passengers.value.infants
    if (total === 1 && passengers.value.adults === 1) {
      return '1 Adult'
    }
    
    const parts = []
    if (passengers.value.adults > 0) {
      parts.push(`${passengers.value.adults} Adult${passengers.value.adults > 1 ? 's' : ''}`)
    }
    if (passengers.value.children > 0) {
      parts.push(`${passengers.value.children} Child${passengers.value.children > 1 ? 'ren' : ''}`)
    }
    if (passengers.value.infants > 0) {
      parts.push(`${passengers.value.infants} Infant${passengers.value.infants > 1 ? 's' : ''}`)
    }
    
    return parts.join(', ')
  })
  
  const toggleDropdown = () => {
    isOpen.value = !isOpen.value
  }
  
  const closeDropdown = () => {
    isOpen.value = false
    emit('update:modelValue', displayText.value)
  }
  
  const increment = (type) => {
    passengers.value[type]++
  }
  
  const decrement = (type) => {
    if (passengers.value[type] > 0) {
      passengers.value[type]--
    }
  }
  
  const handleClickOutside = (event) => {
    if (dropdown.value && !dropdown.value.contains(event.target)) {
      closeDropdown()
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
  .passenger-selector {
    position: relative;
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
    color: #fff;
    border: 1px solid rgba(255,255,255,0.5);
    cursor: pointer;
    padding: var(--spacing-sm) var(--spacing-md);
    border-radius: var(--radius-md);
    transition: all var(--transition-fast);
    font-size: var(--font-size-sm);
    font-weight: 500;
  }
  
  .passenger-selector:hover {
    background-color: rgba(255,255,255,0.1);
    color: #fff;
    border-color: #fff;
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
    left: 0;
    background: var(--color-background);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-lg);
    min-width: 280px;
    z-index: 50;
    overflow: hidden;
    animation: fadeIn 0.2s ease-out;
  }
  
  .passenger-type {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--spacing-md) var(--spacing-lg);
    border-bottom: 1px solid var(--color-border-light);
  }
  
  .passenger-type:last-of-type {
    border-bottom: none;
  }
  
  .type-info {
    display: flex;
    flex-direction: column;
  }
  
  .type-name {
    font-weight: 500;
    color: var(--color-text);
  }
  
  .type-desc {
    font-size: var(--font-size-xs);
    color: var(--color-text-muted);
  }
  
  .counter {
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
  }
  
  .counter button {
    width: 32px;
    height: 32px;
    border: 1px solid var(--color-border);
    background: var(--color-background);
    color: var(--color-text);
    border-radius: var(--radius-md);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    transition: all var(--transition-fast);
  }
  
  .counter button:hover:not(:disabled) {
    background: var(--color-primary);
    color: white;
    border-color: var(--color-primary);
  }
  
  .counter button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  .counter span {
    font-weight: 600;
    min-width: 20px;
    text-align: center;
  }
  
  .dropdown-footer {
    padding: var(--spacing-md) var(--spacing-lg);
    border-top: 1px solid var(--color-border-light);
  }
  
  .done-btn {
    width: 100%;
    background: var(--color-primary);
    color: white;
    border: none;
    padding: var(--spacing-sm) var(--spacing-md);
    border-radius: var(--radius-md);
    cursor: pointer;
    font-weight: 500;
    transition: all var(--transition-fast);
  }
  
  .done-btn:hover {
    background: var(--color-primary-dark);
  }
  </style>