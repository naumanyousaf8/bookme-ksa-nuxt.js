<template>
    <div class="layout-auth">
      <div class="auth-container">
        <div class="auth-header">
          <NuxtLink to="/" class="logo">
            <span class="logo-text">bookme</span>
          </NuxtLink>
        </div>
        <div class="auth-content">
          <slot />
        </div>
        <div class="auth-footer">
          <p>&copy; 2025 Bookme Tickets PTE Ltd.</p>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .layout-auth {
    min-height: 100vh;
    background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--spacing-lg);
  }
  
  .auth-container {
    background: var(--color-background);
    border-radius: var(--radius-xl);
    box-shadow: var(--shadow-xl);
    width: 100%;
    max-width: 400px;
    overflow: hidden;
  }
  
  .auth-header {
    padding: var(--spacing-xl);
    text-align: center;
    border-bottom: 1px solid var(--color-border);
  }
  
  .logo-text {
    font-size: var(--font-size-3xl);
    font-weight: bold;
    color: var(--color-primary);
  }
  
  .auth-content {
    padding: var(--spacing-xl);
  }
  
  .auth-footer {
    padding: var(--spacing-lg);
    text-align: center;
    border-top: 1px solid var(--color-border);
    background: var(--color-surface);
  }
  
  .auth-footer p {
    font-size: var(--font-size-xs);
    color: var(--color-text-muted);
    margin: 0;
  }
  </style>