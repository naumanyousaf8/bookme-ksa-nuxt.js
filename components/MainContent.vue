<template>
    <section class="main-content">
      <div class="container">
        <slot name="header">
          <h2 class="main-title">Bookme Saudi Arabia</h2>
        </slot>
        
        <div class="content-text">
          <slot name="intro">
            <p>
              Bookme Saudi Arabia is your trusted online travel and ticketing platform, making it easier than ever to book 
              <strong>cheap flights in Saudi Arabia</strong>, reserve <strong>top hotels</strong>, and secure <strong>event tickets</strong> 
              across the country. As the premier online booking platform in Pakistan, Bookme KSA brings world-class, reliable services, 
              seamless experience, and unbeatable prices to travelers in Saudi Arabia.
            </p>
            
            <p>
              With Bookme, travelers enjoy easy and instant booking confirmation, secure transactions, and multiple payment options. Users can pay in 17 different currencies, including <strong>Saudi Riyals (SAR)</strong>, <strong>US Dollars (USD)</strong>, and <strong>Pakistani Rupees (PKR)</strong>, ensuring a convenient and flexible payment process. Whether you're planning a trip, booking a hotel stay, or attending top events in <strong>Saudi Arabia</strong>, Bookme KSA offers a one-stop, and reliable booking experience.
            </p>
          </slot>
        </div>
  
        <div class="services-section">
          <slot name="services-header">
            <h3 class="services-title">Book Flights, Hotels & Events Online</h3>
          </slot>
          
          <slot name="services-content">
            <p class="services-description">
              Bookme Saudi Arabia is a complete online booking platform designed to make travel and entertainment planning effortless. As a trusted name in the industry, it offers a seamless way for users to book flights, reserve accommodations, and purchase event tickets with complete confidence. With a user-friendly interface and competitive pricing, Bookme KSA provides access to multiple airlines, a wide range of <strong>hotel bookings in Saudi Arabia</strong>, catering to both luxury travelers and budget-conscious guests. Beyond travel, Bookme KSA also connects users to the most exciting experiences in the country. Whether it's concerts, sports events, or cultural festivals, securing <strong>event tickets in Saudi Arabia</strong> is quick and simple.
            </p>
            
            <p class="services-description">
              Travelers can compare <strong>real-time prices</strong>, get <strong>instant confirmations</strong>, and enjoy a <strong>seamless online booking experience</strong>. Bookme KSA gives you full control over your travel and entertainment plans by offering multiple payment options, transparent pricing, exclusive discounts, and 24/7 customer support to ensure a smooth experience from start to finish.
            </p>
          </slot>
        </div>
  
        <slot name="additional-content"></slot>
      </div>
    </section>
  </template>
  
  <style scoped>
  .main-content {
    padding: var(--spacing-3xl) 0;
    background: #f6f9fd;
  }
  
  .main-title {
    font-size: var(--font-size-4xl);
    font-weight: bold;
    color: var(--color-text);
    margin-bottom: var(--spacing-lg);
    text-align: center;
  }
  
  .content-text {
    margin-bottom: var(--spacing-2xl);
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .content-text p {
    font-size: var(--font-size-base);
    line-height: 1.7;
    color: var(--color-text-secondary);
    margin-bottom: var(--spacing-md);
    text-align: justify;
  }
  
  .content-text strong {
    color: var(--color-primary);
    font-weight: 600;
  }
  
  .services-section {
    margin-top: var(--spacing-2xl);
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
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
  
  @media (max-width: 768px) {
    .main-content {
      padding: var(--spacing-2xl) 0;
    }
    
    .main-title {
      font-size: var(--font-size-2xl);
    }
    
    .services-title {
      font-size: var(--font-size-xl);
    }
    
    .content-text p,
    .services-description {
      font-size: var(--font-size-sm);
      text-align: left;
    }
  }
  </style>