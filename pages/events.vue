<template>
  <div>
    <HeroSection>
      <template #title>
        <h1 style="font-size:2.5rem;font-weight:bold;margin-bottom:0.25rem;color:#fff;">Explore Events</h1>
        <p style="font-size:1.25rem;color:#e0e7ef;margin-bottom:2rem;">Book the ticket of ongoing events</p>
      </template>
      <template #search-form>
        <div class="event-search-bar">
          <div class="event-form-row">
            <div class="input-group">
              <span class="input-icon"><svg width="24" height="24" fill="none"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" stroke="#fff" stroke-width="2"/></svg></span>
              <input class="form-input" placeholder="Search Events..." />
            </div>
            <div class="input-group select-group" @click="showLocationDropdown = !showLocationDropdown" tabindex="0" @blur="showLocationDropdown = false">
              <span class="input-icon"><svg width="24" height="24" fill="none"><circle cx="12" cy="12" r="10" stroke="#fff" stroke-width="2"/><path d="M12 8v4l3 3" stroke="#fff" stroke-width="2"/></svg></span>
              <span class="form-select">{{ selectedLocation }} <svg width="16" height="16" fill="none"><path d="M4 6l4 4 4-4" stroke="#fff" stroke-width="2"/></svg></span>
              <div v-if="showLocationDropdown" class="dropdown-menu">
                <div v-for="option in locationOptions" :key="option" class="dropdown-item" @click.stop="selectLocation(option)">{{ option }}</div>
              </div>
            </div>
            <button class="search-btn"><svg width="24" height="24" fill="none"><circle cx="11" cy="11" r="8" stroke="#fff" stroke-width="2"/><path d="m21 21-4.35-4.35" stroke="#fff" stroke-width="2"/></svg>Search</button>
          </div>
        </div>
      </template>
    </HeroSection>
    <div style="height:32px;"></div>
    <div class="events-content">
      <div class="event-results-box">
        <h2>Event Tickets</h2>
        <p>Event booking functionality will be implemented here.</p>
        <h3>Why Book Event Tickets with Bookme?</h3>
        <p>Bookme connects you to the most exciting events in Saudi Arabia, from concerts and sports to cultural festivals and family entertainment. Enjoy a seamless ticketing experience with instant confirmation and secure payments.</p>
        <h4>Top Features:</h4>
        <ul>
          <li>Browse and book tickets for concerts, sports, and more</li>
          <li>Instant e-ticket delivery to your email or mobile</li>
          <li>Multiple payment options and exclusive discounts</li>
          <li>24/7 support for all your event queries</li>
        </ul>
        <h3>Tips for Enjoying Events</h3>
        <p>Book your tickets early to secure the best seats and avoid last-minute rush. Check event details, venue policies, and age restrictions before booking. With Bookme, you can easily manage your tickets and receive updates about upcoming events.</p>
        <h4>Popular Event Categories:</h4>
        <ul>
          <li>Concerts – Live music and entertainment</li>
          <li>Sports – Football, cricket, and more</li>
          <li>Festivals – Cultural and seasonal celebrations</li>
          <li>Family – Activities and shows for all ages</li>
        </ul>
        <h3>Book Your Next Event with Ease</h3>
        <p>With Bookme, you can discover, book, and enjoy the best events in Saudi Arabia. Experience hassle-free ticketing and never miss out on the fun!</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
const locationOptions = ['Anywhere', 'Riyadh', 'Jeddah', 'Madinah', 'Dammam']
const selectedLocation = ref('Anywhere')
const showLocationDropdown = ref(false)
const selectLocation = (option) => {
  selectedLocation.value = option
  showLocationDropdown.value = false
}
// Close dropdown on outside click
const handleClick = (e) => {
  if (!e.target.closest('.select-group')) {
    showLocationDropdown.value = false
  }
}
onMounted(() => {
  window.addEventListener('click', handleClick)
})
onBeforeUnmount(() => {
  window.removeEventListener('click', handleClick)
})
</script>

<style scoped>
.event-search-bar {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.event-form-row {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
}
.input-group {
  display: flex;
  align-items: center;
  background: rgba(255,255,255,0.12);
  border-radius: 12px;
  padding: 0 16px;
  height: 48px;
  min-width: 180px;
  border: 1px solid rgba(255,255,255,0.18);
  position: relative;
}
.input-icon {
  margin-right: 8px;
  display: flex;
  align-items: center;
}
.form-input {
  background: transparent;
  border: none;
  color: #fff;
  font-size: 1rem;
  outline: none;
  width: 140px;
}
.form-input::placeholder {
  color: rgba(255,255,255,0.7);
  opacity: 1;
}
.select-group, .form-select {
  color: #fff;
}
.select-group {
  min-width: 120px;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  align-items: center;
  background: rgba(255,255,255,0.12);
  border-radius: 12px;
  padding: 0 16px;
  height: 48px;
  border: 1px solid rgba(255,255,255,0.18);
  position: relative;
}
.form-select {
  display: flex;
  align-items: center;
  gap: 4px;
  color: #fff;
}
.dropdown-menu {
  position: absolute;
  top: 52px;
  left: 0;
  background: #fff;
  color: #1e293b;
  border-radius: 8px;
  box-shadow: 0 4px 16px 0 rgba(30,58,138,0.12);
  min-width: 140px;
  z-index: 10;
  padding: 4px 0;
}
.dropdown-item {
  padding: 8px 16px;
  cursor: pointer;
  transition: background 0.2s;
}
.dropdown-item:hover {
  background: #e0e7ef;
}
.search-btn {
  background: #fff;
  color: #1e3a8a;
  border: none;
  border-radius: 12px;
  height: 48px;
  padding: 0 32px;
  font-weight: 700;
  font-size: 1.1rem;
  margin-left: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 2px 8px 0 rgba(30,58,138,0.08);
  cursor: pointer;
  transition: background 0.2s, color 0.2s, box-shadow 0.2s;
  outline: none;
}
.search-btn:hover, .search-btn:focus {
  background: #2563eb;
  color: #fff;
  box-shadow: 0 4px 16px 0 rgba(30,58,138,0.12);
}
.event-results-box {
  background: #f6f8fa;
  padding: 32px 28px;
  max-width: 1425px;
  margin: 0 auto;
  box-shadow: 0 2px 8px 0 rgba(30,58,138,0.04);
}
.event-results-box h2 {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 18px;
  color: #1e293b;
}
.event-results-box h3 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-top: 32px;
  margin-bottom: 12px;
  color: #1e3a8a;
}
.event-results-box h4 {
  font-size: 1.1rem;
  font-weight: 500;
  margin-top: 24px;
  margin-bottom: 8px;
  color: #2563eb;
}
.event-results-box p {
  font-size: 1.05rem;
  color: #334155;
  margin-bottom: 18px;
  line-height: 1.7;
}
.event-results-box ul {
  margin-bottom: 18px;
  padding-left: 22px;
}
.event-results-box li {
  font-size: 1rem;
  color: #475569;
  margin-bottom: 6px;
  line-height: 1.6;
}
</style>