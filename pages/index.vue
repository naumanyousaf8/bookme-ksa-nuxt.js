<template>
  <div>
    <HeroSection>
      <template #title>
        <div class="main-hero-content">
          <h1 class="main-hero-title">Book Flights, Hotels & Events Online</h1>
          <p class="main-hero-subtitle">
            Your one-stop platform for travel and entertainment in Saudi Arabia.<br>
            Find the best deals, instant booking, and world-class service.
          </p>
          <button class="main-hero-cta">Start Booking</button>
        </div>
      </template>
    </HeroSection>
    <div style="height: 32px;"></div>
    <MainContent>
      <template #header>
        <h2 class="main-title">Bookme Saudi Arabia</h2>
      </template>
      <template #intro>
        <p>
          Bookme Saudi Arabia is your trusted online travel and ticketing platform, making it easier than ever to book 
          <strong>cheap flights in Saudi Arabia</strong>, reserve <strong>top hotels</strong>, and secure <strong>event tickets</strong> 
          across the country. As the premier online booking platform in Pakistan, Bookme KSA brings world-class, reliable services, 
          seamless experience, and unbeatable prices to travelers in Saudi Arabia.
        </p>
        <p>
          With Bookme, travelers enjoy easy and instant booking confirmation, secure transactions, and multiple payment options. Users can pay in 17 different currencies, including <strong>Saudi Riyals (SAR)</strong>, <strong>US Dollars (USD)</strong>, and <strong>Pakistani Rupees (PKR)</strong>, ensuring a convenient and flexible payment process. Whether you're planning a trip, booking a hotel stay, or attending top events in <strong>Saudi Arabia</strong>, Bookme KSA offers a one-stop, and reliable booking experience.
        </p>
      </template>
      <template #services-header>
        <h3 class="services-title">Book Flights, Hotels & Events Online</h3>
      </template>
      <template #services-content>
        <p class="services-description">
          Bookme Saudi Arabia is a complete online booking platform designed to make travel and entertainment planning effortless. As a trusted name in the industry, it offers a seamless way for users to book flights, reserve accommodations, and purchase event tickets with complete confidence. With a user-friendly interface and competitive pricing, Bookme KSA provides access to multiple airlines, a wide range of <strong>hotel bookings in Saudi Arabia</strong>, catering to both luxury travelers and budget-conscious guests. Beyond travel, Bookme KSA also connects users to the most exciting experiences in the country. Whether it's concerts, sports events, or cultural festivals, securing <strong>event tickets in Saudi Arabia</strong> is quick and simple.
        </p>
        <p class="services-description">
          Travelers can compare <strong>real-time prices</strong>, get <strong>instant confirmations</strong>, and enjoy a <strong>seamless online booking experience</strong>. Bookme KSA gives you full control over your travel and entertainment plans by offering multiple payment options, transparent pricing, exclusive discounts, and 24/7 customer support to ensure a smooth experience from start to finish.
        </p>
      </template>
    </MainContent>
    <FaqSection>
      <template #header>
        <h3 class="faq-title">Frequently Asked Questions</h3>
      </template>
    </FaqSection>
  </div>
</template>

<script setup>
  const handleSearch = () => {
    console.log('Searching for flights...')
    // Navigate to search results or handle search logic
  }
</script>

<style scoped>
.main-hero-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  padding: 32px 0;
}
.main-hero-title {
  color: #fff;
  font-size: 2.8rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-shadow: 0 2px 8px rgba(30,58,138,0.10);
}
.main-hero-subtitle {
  color: rgba(255,255,255,0.85);
  font-size: 1.25rem;
  margin-bottom: 2rem;
  line-height: 1.6;
}
.main-hero-cta {
  background: #fff;
  color: #1e3a8a;
  border: none;
  border-radius: 0.75rem;
  padding: 0.75rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  box-shadow: 0 2px 8px 0 rgba(30,58,138,0.08);
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}
.main-hero-cta:hover {
  background: #2563eb;
  color: #fff;
}
.hero-title {
    font-size: var(--font-size-4xl);
    font-weight: bold;
    margin-bottom: var(--spacing-sm);
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .hero-subtitle {
    font-size: var(--font-size-lg);
    margin-bottom: var(--spacing-xl);
    opacity: 0.9;
  }
  
  .search-btn {
    background: var(--color-primary);
    border: none;
    color: white;
    padding: var(--spacing-md) var(--spacing-xl);
    border-radius: var(--radius-lg);
    cursor: pointer;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
    transition: all var(--transition-fast);
    font-size: var(--font-size-base);
  }
  
  .search-btn:hover {
    background: var(--color-primary-dark);
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
  }
  
  .main-title {
    font-size: var(--font-size-4xl);
    font-weight: bold;
    color: var(--color-text);
    margin-bottom: var(--spacing-lg);
    text-align: center;
  }
  
  .services-title {
    font-size: var(--font-size-3xl);
    font-weight: bold;
    color: var(--color-text);
    margin-bottom: var(--spacing-lg);
    text-align: center;
  }
  
  .services-description {
    font-size: var(--font-size-base);
    line-height: 1.7;
    color: var(--color-text-secondary);
    margin-bottom: var(--spacing-md);
    text-align: justify;
  }
  
  .services-description strong {
    color: var(--color-primary);
    font-weight: 600;
  }
  
  .faq-title {
    font-size: var(--font-size-3xl);
    font-weight: bold;
    color: var(--color-text);
    margin-bottom: var(--spacing-xl);
    text-align: center;
  }
  
  @media (max-width: 768px) {
    .hero-title {
      font-size: var(--font-size-3xl);
    }
    
    .main-title {
      font-size: var(--font-size-2xl);
    }
    
    .services-title {
      font-size: var(--font-size-xl);
    }
    
    .faq-title {
      font-size: var(--font-size-2xl);
    }
    
    .services-description {
      font-size: var(--font-size-sm);
      text-align: left;
    }
  }
</style>