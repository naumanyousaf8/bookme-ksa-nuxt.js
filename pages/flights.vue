<template>
  <div>
    <HeroSection>
      <template #title>
        <h1 style="font-size:2.5rem;font-weight:bold;margin-bottom:0.25rem;color:#fff;">Search for Flights</h1>
        <p style="font-size:1.25rem;color:#e0e7ef;margin-bottom:2rem;">Find the best deals for your air travel</p>
      </template>
      <template #search-form>
        <div class="flight-search-bar">
          <div class="trip-options">
            <button
              v-for="option in tripOptions"
              :key="option.value"
              :class="['trip-option', { active: selectedTrip === option.value }]"
              @click="selectedTrip = option.value"
            >
              {{ option.label }}
            </button>
          </div>
          <div class="flight-form-row">
            <div class="input-group">
              <span class="input-icon"><svg width="24" height="24" fill="none"><path d="M2 12h20M2 12l4-4m-4 4l4 4" stroke="#fff" stroke-width="2"/></svg></span>
              <input class="form-input" placeholder="Lahore - LHE" />
            </div>
            <button class="swap-btn"><svg width="24" height="24" fill="none"><path d="M8 17l4 4 4-4M12 21V3" stroke="#fff" stroke-width="2"/></svg></button>
            <div class="input-group">
              <span class="input-icon"><svg width="24" height="24" fill="none"><path d="M2 12h20M2 12l4-4m-4 4l4 4" stroke="#fff" stroke-width="2"/></svg></span>
              <input class="form-input" placeholder="Arrival" />
            </div>
            <div class="input-group">
              <span class="input-icon"><svg width="24" height="24" fill="none"><rect x="3" y="4" width="18" height="18" rx="2" stroke="#fff" stroke-width="2"/><line x1="16" y1="2" x2="16" y2="6" stroke="#fff" stroke-width="2"/><line x1="8" y1="2" x2="8" y2="6" stroke="#fff" stroke-width="2"/><line x1="3" y1="10" x2="21" y2="10" stroke="#fff" stroke-width="2"/></svg></span>
              <input class="form-input" placeholder="23 Jul 2025 - 27 Jul 2025" />
            </div>
            <div class="input-group select-group" @click="showAdultDropdown = !showAdultDropdown" tabindex="0" @blur="showAdultDropdown = false">
              <span class="input-icon"><svg width="24" height="24" fill="none"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#fff" stroke-width="2"/><circle cx="9" cy="7" r="4" stroke="#fff" stroke-width="2"/></svg></span>
              <span class="form-select">{{ selectedAdult }} <svg width="16" height="16" fill="none"><path d="M4 6l4 4 4-4" stroke="#fff" stroke-width="2"/></svg></span>
              <div v-if="showAdultDropdown" class="dropdown-menu">
                <div v-for="option in adultOptions" :key="option" class="dropdown-item" @click.stop="selectAdult(option)">{{ option }}</div>
              </div>
            </div>
            <div class="input-group select-group" @click="showClassDropdown = !showClassDropdown" tabindex="0" @blur="showClassDropdown = false">
              <span class="form-select">{{ selectedClass }} <svg width="16" height="16" fill="none"><path d="M4 6l4 4 4-4" stroke="#fff" stroke-width="2"/></svg></span>
              <div v-if="showClassDropdown" class="dropdown-menu">
                <div v-for="option in classOptions" :key="option" class="dropdown-item" @click.stop="selectClass(option)">{{ option }}</div>
              </div>
            </div>
            <button class="search-btn"><svg width="24" height="24" fill="none"><circle cx="11" cy="11" r="8" stroke="#fff" stroke-width="2"/><path d="m21 21-4.35-4.35" stroke="#fff" stroke-width="2"/></svg>Search</button>
          </div>
        </div>
      </template>
    </HeroSection>
    <div style="height:32px;"></div>
    <div class="flights-content">
      <div class="flight-results-box">
        <h2>Flight Search Results</h2>
        <p>Your flight search results will appear here.</p>
        <h3>Why Book Flights with Bookme?</h3>
        <p>Bookme offers a seamless and secure platform for booking flights to destinations across Saudi Arabia and beyond. Enjoy instant confirmation, transparent pricing, and a wide selection of airlines—all in one place. Our user-friendly interface makes it easy to compare fares, select your preferred travel dates, and choose the best flight options for your needs.</p>
        <h4>Top Features:</h4>
        <ul>
          <li>Compare real-time prices from multiple airlines</li>
          <li>Instant booking confirmation and e-tickets</li>
          <li>Multiple payment options, including local and international currencies</li>
          <li>24/7 customer support for all your travel needs</li>
        </ul>
        <h3>Travel Tips for a Smooth Journey</h3>
        <p>Plan ahead to get the best deals on your flights. Consider booking during off-peak seasons, and always double-check your travel documents before departure. With Bookme, you can set fare alerts and receive notifications about special promotions and discounts.</p>
        <h4>Popular Destinations:</h4>
        <ul>
          <li>Riyadh – The vibrant capital city</li>
          <li>Jeddah – Gateway to the Red Sea</li>
          <li>Madinah – A city of spiritual significance</li>
          <li>Dammam – The heart of the Eastern Province</li>
        </ul>
        <h3>Flexible Booking & Easy Cancellations</h3>
        <p>Bookme understands that travel plans can change. That’s why we offer flexible booking options and easy cancellations, so you can travel with peace of mind. Manage your bookings online and make changes whenever you need.</p>
        <h3>Start Your Journey Today</h3>
        <p>Whether you’re traveling for business, leisure, or a family vacation, Bookme is your trusted partner for all your flight needs. Search, compare, and book your next flight with confidence!</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const tripOptions = [
  { value: 'roundTrip', label: 'Round Trip' },
  { value: 'oneWay', label: 'One Way' },
  { value: 'multiCity', label: 'Multi-City' }
]
const selectedTrip = ref('roundTrip')

const adultOptions = ['1 Adult', '2 Adults', '3 Adults', '4 Adults']
const selectedAdult = ref('1 Adult')
const showAdultDropdown = ref(false)
const selectAdult = (option) => {
  selectedAdult.value = option
  showAdultDropdown.value = false
}

const classOptions = ['Economy', 'Business', 'First']
const selectedClass = ref('Economy')
const showClassDropdown = ref(false)
const selectClass = (option) => {
  selectedClass.value = option
  showClassDropdown.value = false
}
</script>

<style scoped>
.flight-search-bar {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.trip-options {
  display: flex;
  gap: 12px;
  margin-bottom: 18px;
}
.trip-option {
  background: rgba(255,255,255,0.12);
  border: none;
  color: #fff;
  font-weight: 500;
  font-size: 1rem;
  border-radius: 24px;
  padding: 8px 24px;
  cursor: pointer;
  transition: background 0.2s, box-shadow 0.2s;
}
.trip-option.active {
  background: #2563eb;
  box-shadow: 0 2px 8px 0 rgba(37,99,235,0.15);
}
.trip-option:hover {
  background: #1e40af;
}
.flight-form-row {
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
  width: 100px;
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
.swap-btn {
  background: rgba(255,255,255,0.12);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #fff;
  transition: background 0.2s;
}
.swap-btn:hover {
  background: #2563eb;
  color: #fff;
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
.flight-results-box {
  background: #f6f8fa;
  padding: 32px 28px;
  max-width: 1425px;
 
  box-shadow: 0 2px 8px 0 rgba(30,58,138,0.04);
}
.flight-results-box h2 {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 18px;
  color: #1e293b;
}
.flight-results-box h3 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-top: 32px;
  margin-bottom: 12px;
  color: #1e3a8a;
}
.flight-results-box h4 {
  font-size: 1.1rem;
  font-weight: 500;
  margin-top: 24px;
  margin-bottom: 8px;
  color: #2563eb;
}
.flight-results-box p {
  font-size: 1.05rem;
  color: #334155;
  margin-bottom: 18px;
  line-height: 1.7;
}
.flight-results-box ul {
  margin-bottom: 18px;
  padding-left: 22px;
}
.flight-results-box li {
  font-size: 1rem;
  color: #475569;
  margin-bottom: 6px;
  line-height: 1.6;
}
</style>