<template>
  <section class="hero-section">
    <div class="hero-shell">
      <div class="hero-title-slot">
        <slot name="title" />
      </div>
      <div class="hero-search-slot">
        <slot name="search-form" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  background: #0c4da8;
  width: 100%;
  padding: 48px 0 32px 0;
  display: flex;
  justify-content: center;
}
.hero-shell {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 24px;
}
.hero-title-slot {
  width: 100%;
  margin-bottom: 32px;
}
.hero-search-slot {
  width: 100%;
  display: flex;
  justify-content: flex-start;
}
@media (max-width: 768px) {
  .hero-section {
    padding: 32px 0 16px 0;
  }
  .hero-shell {
    padding: 0 8px;
  }
  .hero-title-slot {
    margin-bottom: 20px;
  }
}
</style>