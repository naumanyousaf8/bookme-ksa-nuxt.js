<template>
    <div class="class-selector" @click="toggleDropdown" ref="dropdown">
      <span>{{ selectedClass.name }}</span>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" :class="{ rotated: isOpen }">
        <polyline points="6,9 12,15 18,9" stroke="currentColor" stroke-width="2"/>
      </svg>
      
      <div v-if="isOpen" class="dropdown-menu">
        <div 
          v-for="classOption in classes" 
          :key="classOption.value"
          class="dropdown-item"
          :class="{ active: classOption.value === selectedClass.value }"
          @click.stop="selectClass(classOption)"
        >
          <div class="class-info">
            <span class="class-name">{{ classOption.name }}</span>
            <span class="class-desc">{{ classOption.description }}</span>
          </div>
          <div v-if="classOption.value === selectedClass.value" class="check-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <polyline points="20,6 9,17 4,12" stroke="currentColor" stroke-width="2"/>
            </svg>
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
      default: 'Economy'
    }
  })
  
  const emit = defineEmits(['update:modelValue'])
  
  const isOpen = ref(false)
  const dropdown = ref(null)
  
  const classes = [
    { 
      value: 'economy', 
      name: 'Economy', 
      description: 'Standard seating and service' 
    },
    { 
      value: 'premium-economy', 
      name: 'Premium Economy', 
      description: 'Extra legroom and enhanced service' 
    },
    { 
      value: 'business', 
      name: 'Business', 
      description: 'Premium seating and priority service' 
    },
    { 
      value: 'first', 
      name: 'First Class', 
      description: 'Luxury seating and exclusive service' 
    }
  ]
  
  const selectedClassValue = ref('economy')
  
  const selectedClass = computed(() => {
    return classes.find(cls => cls.value === selectedClassValue.value) || classes[0]
  })
  
  const toggleDropdown = () => {
    isOpen.value = !isOpen.value
  }
  
  const selectClass = (classOption) => {
    selectedClassValue.value = classOption.value
    isOpen.value = false
    emit('update:modelValue', classOption.name)
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
  .class-selector {
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
  
  .class-selector:hover {
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
    right: 0;
    background: var(--color-background);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-lg);
    min-width: 280px;
    z-index: 50;
    overflow: hidden;
    animation: fadeIn 0.2s ease-out;
  }
  
  .dropdown-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--spacing-md) var(--spacing-lg);
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
  
  .class-info {
    display: flex;
    flex-direction: column;
  }
  
  .class-name {
    font-weight: 500;
    color: inherit;
  }
  
  .class-desc {
    font-size: var(--font-size-xs);
    opacity: 0.7;
    margin-top: 2px;
  }
  
  .check-icon {
    color: inherit;
  }
  </style>