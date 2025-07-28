<template>
    <section class="faq-section">
      <div class="container">
        <slot name="header">
          <h3 class="faq-title">Frequently Asked Questions</h3>
        </slot>
        
        <div class="faq-list">
          <div 
            v-for="(faq, index) in faqs" 
            :key="index"
            class="faq-item"
          >
            <button 
              class="faq-question"
              @click="toggleFaq(index)"
              :aria-expanded="faq.isOpen"
            >
              <span>{{ faq.question }}</span>
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none"
                :class="['faq-icon', { rotated: faq.isOpen }]"
              >
                <polyline points="6,9 12,15 18,9" stroke="currentColor" stroke-width="2"/>
              </svg>
            </button>
            
            <Transition name="faq-answer">
              <div 
                v-if="faq.isOpen" 
                class="faq-answer"
              >
                <p>{{ faq.answer }}</p>
              </div>
            </Transition>
          </div>
        </div>
        
        <slot name="footer"></slot>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const faqs = ref([
    {
      question: "What is Bookme KSA?",
      answer: "Bookme KSA is your trusted online travel and ticketing platform in Saudi Arabia, offering easy booking for flights, hotels, and events with secure transactions and competitive prices.",
      isOpen: false
    },
    {
      question: "What information will I be able to see during my ticket purchase?",
      answer: "During your ticket purchase, you'll see detailed flight information, pricing breakdown, seat selection options, baggage allowance, cancellation policies, and payment details before confirming your booking.",
      isOpen: false
    },
    {
      question: "How can I book a flight on Bookme KSA?",
      answer: "Simply enter your departure and arrival cities, select your travel dates, choose the number of passengers, compare available flights, select your preferred option, and complete the secure payment process.",
      isOpen: false
    },
    {
      question: "How do I know if my purchase was successful?",
      answer: "You'll receive an instant confirmation email with your booking details and ticket information. You can also check your booking status in your Bookme account dashboard.",
      isOpen: false
    },
    {
      question: "What payment methods does Bookme KSA accept?",
      answer: "We accept multiple payment methods including credit/debit cards, bank transfers, and mobile payments. You can pay in 17 different currencies including SAR, USD, and PKR.",
      isOpen: false
    },
    {
      question: "If I have a query regarding my E-Ticket, who can I contact for assistance?",
      answer: "Our 24/7 customer support team is available to help with any E-Ticket queries. You can contact us through live chat, email, or phone support for immediate assistance.",
      isOpen: false
    },
    {
      question: "What if I don't receive my confirmation email?",
      answer: "Check your spam/junk folder first. If you still don't see it, contact our customer support team with your booking reference number and we'll resend your confirmation immediately.",
      isOpen: false
    },
    {
      question: "Can I modify or cancel my booking through Bookme Saudi Arabia?",
      answer: "Yes, you can modify or cancel your booking through your Bookme account, subject to the airline's terms and conditions. Cancellation and modification fees may apply depending on the fare type.",
      isOpen: false
    },
    {
      question: "What if I forgot my password?",
      answer: "Click on 'Forgot Password' on the login page, enter your registered email address, and we'll send you a password reset link to create a new password securely.",
      isOpen: false
    },
    {
      question: "Is it safe to book through Bookme KSA?",
      answer: "Absolutely! We use industry-standard SSL encryption to protect your personal and payment information. All transactions are secure and we're committed to maintaining the highest security standards.",
      isOpen: false
    }
  ])
  
  const toggleFaq = (index) => {
    faqs.value[index].isOpen = !faqs.value[index].isOpen
  }
  </script>
  
  <style scoped>
  .faq-section {
    padding: var(--spacing-3xl) 0;
    background: var(--color-surface);
  }
  
  .faq-title {
    font-size: var(--font-size-3xl);
    font-weight: bold;
    color: var(--color-text);
    margin-bottom: var(--spacing-xl);
    text-align: center;
  }
  
  .faq-list {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);
    max-width: 800px;
    margin: 0 auto;
  }
  
  .faq-item {
    background: var(--color-background);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-sm);
    overflow: hidden;
    transition: box-shadow var(--transition-fast);
  }
  
  .faq-item:hover {
    box-shadow: var(--shadow-md);
  }
  
  .faq-question {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--spacing-lg);
    background: none;
    border: none;
    text-align: left;
    cursor: pointer;
    font-size: var(--font-size-base);
    font-weight: 500;
    color: var(--color-text);
    transition: all var(--transition-fast);
  }
  
  .faq-question:hover {
    background-color: var(--color-surface);
  }
  
  .faq-icon {
    color: var(--color-text-muted);
    transition: transform var(--transition-fast);
    flex-shrink: 0;
  }
  
  .faq-icon.rotated {
    transform: rotate(180deg);
    color: var(--color-primary);
  }
  
  .faq-answer {
    padding: 0 var(--spacing-lg) var(--spacing-lg) var(--spacing-lg);
    border-top: 1px solid var(--color-border-light);
  }
  
  .faq-answer p {
    font-size: var(--font-size-sm);
    line-height: 1.6;
    color: var(--color-text-secondary);
    margin: 0;
    padding-top: var(--spacing-md);
  }
  
  /* Transition Styles */
  .faq-answer-enter-active,
  .faq-answer-leave-active {
    transition: all var(--transition-normal);
    overflow: hidden;
  }
  
  .faq-answer-enter-from,
  .faq-answer-leave-to {
    max-height: 0;
    opacity: 0;
    padding-top: 0;
    padding-bottom: 0;
  }
  
  .faq-answer-enter-to,
  .faq-answer-leave-from {
    max-height: 200px;
    opacity: 1;
  }
  
  @media (max-width: 768px) {
    .faq-section {
      padding: var(--spacing-2xl) 0;
    }
    
    .faq-title {
      font-size: var(--font-size-2xl);
    }
    
    .faq-question {
      padding: var(--spacing-md);
      font-size: var(--font-size-sm);
    }
    
    .faq-answer {
      padding: 0 var(--spacing-md) var(--spacing-md) var(--spacing-md);
    }
    
    .faq-answer p {
      font-size: var(--font-size-xs);
      padding-top: var(--spacing-sm);
    }
  }
  </style>