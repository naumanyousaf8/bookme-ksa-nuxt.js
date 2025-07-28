<template>
  <div>
    <HeroSection>
      <template #title>
        <h1 style="font-size:2.5rem;font-weight:bold;margin-bottom:0.25rem;color:#fff;">Search for Hotels</h1>
        <p style="font-size:1.25rem;color:#e0e7ef;margin-bottom:2rem;">Find the best deals for your stay!</p>
      </template>
      <template #search-form>
        <div class="hotel-search-bar">
          <div class="hotel-form-row">
            <div class="input-group">
              <span class="input-icon"><svg width="24" height="24" fill="none"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" stroke="#fff" stroke-width="2"/></svg></span>
              <input class="form-input" placeholder="Search for Places, Hotels and more" />
            </div>
            <div class="input-group">
              <span class="input-icon"><svg width="24" height="24" fill="none"><rect x="3" y="4" width="18" height="18" rx="2" stroke="#fff" stroke-width="2"/><line x1="16" y1="2" x2="16" y2="6" stroke="#fff" stroke-width="2"/><line x1="8" y1="2" x2="8" y2="6" stroke="#fff" stroke-width="2"/><line x1="3" y1="10" x2="21" y2="10" stroke="#fff" stroke-width="2"/></svg></span>
              <input class="form-input" placeholder="26 Jul 2025 - 27 Jul 2025" />
            </div>
            <div class="input-group select-group" @click="showGuestsDropdown = !showGuestsDropdown" tabindex="0" @blur="showGuestsDropdown = false">
              <span class="input-icon"><svg width="24" height="24" fill="none"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#fff" stroke-width="2"/><circle cx="9" cy="7" r="4" stroke="#fff" stroke-width="2"/></svg></span>
              <span class="form-select">{{ selectedGuests }} <svg width="16" height="16" fill="none"><path d="M4 6l4 4 4-4" stroke="#fff" stroke-width="2"/></svg></span>
              <div v-if="showGuestsDropdown" class="dropdown-menu">
                <div v-for="option in guestsOptions" :key="option" class="dropdown-item" @click.stop="selectGuests(option)">{{ option }}</div>
              </div>
            </div>
            <div class="input-group select-group" @click="showCountryDropdown = !showCountryDropdown" tabindex="0" @blur="showCountryDropdown = false">
              <span class="input-icon"><svg width="24" height="24" fill="none"><circle cx="12" cy="12" r="10" stroke="#fff" stroke-width="2"/><path d="M12 8v4l3 3" stroke="#fff" stroke-width="2"/></svg></span>
              <span class="form-select">{{ selectedCountry }} <svg width="16" height="16" fill="none"><path d="M4 6l4 4 4-4" stroke="#fff" stroke-width="2"/></svg></span>
              <div v-if="showCountryDropdown" class="dropdown-menu">
                <div v-for="option in countryOptions" :key="option" class="dropdown-item" @click.stop="selectCountry(option)">{{ option }}</div>
              </div>
            </div>
            <button class="search-btn"><svg width="24" height="24" fill="none"><circle cx="11" cy="11" r="8" stroke="#fff" stroke-width="2"/><path d="m21 21-4.35-4.35" stroke="#fff" stroke-width="2"/></svg>Search</button>
          </div>
        </div>
      </template>
    </HeroSection>
    <div style="height:32px;"></div>
    <div class="hotels-content">
      <div class="hotel-results-box">
        <h2>Hotel Search</h2>
        <p>Hotel booking functionality will be implemented here.</p>
        <h3>Why Book Hotels with Bookme?</h3>
        <p>Bookme makes it easy to find and reserve the perfect hotel for your stay in Saudi Arabia. Browse a wide range of accommodations, from luxury resorts to budget-friendly options, all with transparent pricing and instant confirmation.</p>
        <h4>Top Features:</h4>
        <ul>
          <li>Compare hotel prices and amenities in real time</li>
          <li>Instant booking confirmation and secure payments</li>
          <li>Flexible cancellation policies for peace of mind</li>
          <li>24/7 customer support for all your hotel needs</li>
        </ul>
        <h3>Tips for a Great Hotel Stay</h3>
        <p>Book early to secure the best rates, especially during peak travel seasons. Read guest reviews and check hotel amenities to ensure a comfortable stay. With Bookme, you can filter hotels by location, price, and star rating to find your ideal match.</p>
        <h4>Popular Destinations:</h4>
        <ul>
          <li>Riyadh – Modern hotels in the capital city</li>
          <li>Jeddah – Beachfront resorts and city stays</li>
          <li>Madinah – Hotels near the Prophet’s Mosque</li>
          <li>Makkah – Accommodations for pilgrims and visitors</li>
        </ul>
        <h3>Book with Confidence</h3>
        <p>With Bookme, you can manage your hotel bookings online, make changes as needed, and enjoy exclusive deals and discounts. Start your journey with Bookme and experience hassle-free hotel reservations!</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
const guestsOptions = ['1 Adult, 1 Room', '2 Adults, 1 Room', '2 Adults, 2 Rooms', '3 Adults, 1 Room']
const selectedGuests = ref('2 Adults, 1 Room')
const showGuestsDropdown = ref(false)
const selectGuests = (option) => {
  selectedGuests.value = option
  showGuestsDropdown.value = false
}

const countryOptions = ['Pakistan', 'Saudi Arabia', 'UAE', 'USA']
const selectedCountry = ref('Pakistan')
const showCountryDropdown = ref(false)
const selectCountry = (option) => {
  selectedCountry.value = option
  showCountryDropdown.value = false
}

// Close dropdowns on outside click
const handleClick = (e) => {
  if (!e.target.closest('.select-group')) {
    showGuestsDropdown.value = false
    showCountryDropdown.value = false
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
.hotel-search-bar {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.hotel-form-row {
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
  font-weight: 600;
  font-size: 1rem;
  margin-left: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 2px 8px 0 rgba(30,58,138,0.08);
  cursor: pointer;
  transition: background 0.2s;
}
.search-btn:hover {
  background: #e0e7ef;
}
.hotel-results-box {
  background: #f6f8fa;
  padding: 32px 28px;
  max-width: 1425px;
  margin: 0 auto;
  box-shadow: 0 2px 8px 0 rgba(30,58,138,0.04);
}
.hotel-results-box h2 {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 18px;
  color: #1e293b;
}
.hotel-results-box h3 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-top: 32px;
  margin-bottom: 12px;
  color: #1e3a8a;
}
.hotel-results-box h4 {
  font-size: 1.1rem;
  font-weight: 500;
  margin-top: 24px;
  margin-bottom: 8px;
  color: #2563eb;
}
.hotel-results-box p {
  font-size: 1.05rem;
  color: #334155;
  margin-bottom: 18px;
  line-height: 1.7;
}
.hotel-results-box ul {
  margin-bottom: 18px;
  padding-left: 22px;
}
.hotel-results-box li {
  font-size: 1rem;
  color: #475569;
  margin-bottom: 6px;
  line-height: 1.6;
}
</style>