<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h4 class="footer-title">About</h4>
          <ul class="footer-links">
            <li><NuxtLink to="/about" class="footer-link">About Bookme</NuxtLink></li>
            <li><NuxtLink to="/contact" class="footer-link">Contact us</NuxtLink></li>
          </ul>
        </div>
        <div class="footer-section">
          <h4 class="footer-title">Services</h4>
          <ul class="footer-links">
            <li><NuxtLink to="/flights" class="footer-link">Flights Booking</NuxtLink></li>
            <li><NuxtLink to="/hotels" class="footer-link">Hotels Booking</NuxtLink></li>
            <li><NuxtLink to="/events" class="footer-link">Events Booking</NuxtLink></li>
          </ul>
        </div>
        <div class="footer-section">
          <h4 class="footer-title">Support</h4>
          <ul class="footer-links">
            <li><NuxtLink to="/privacy" class="footer-link">Privacy policy</NuxtLink></li>
            <li><NuxtLink to="/terms" class="footer-link">Terms of service</NuxtLink></li>
          </ul>
        </div>
        <div class="footer-section app-section">
          <h4 class="footer-title">Get the app</h4>
          <div class="app-links">
            <a href="#" class="app-link">
              <img src="/apple-store-button.png" alt="Download on App Store" class="app-store-badge" />
            </a>
            <a href="#" class="app-link">
              <img src="/google-play-button.png" alt="Get it on Google Play" class="app-store-badge" />
            </a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="footer-copyright">
          <p>&copy; 2025 Bookme Tickets PTE Ltd.</p>
        </div>
        <div class="social-links">
          <a href="#" class="social-link" aria-label="Twitter">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" stroke="currentColor" stroke-width="2"/></svg>
          </a>
          <a href="#" class="social-link" aria-label="LinkedIn">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" stroke="currentColor" stroke-width="2"/><rect x="2" y="9" width="4" height="12" stroke="currentColor" stroke-width="2"/><circle cx="4" cy="4" r="2" stroke="currentColor" stroke-width="2"/></svg>
          </a>
          <a href="#" class="social-link" aria-label="Facebook">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" stroke="currentColor" stroke-width="2"/></svg>
          </a>
          <a href="#" class="social-link" aria-label="YouTube">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" stroke="currentColor" stroke-width="2"/><polygon points="9.75,15.02 15.5,11.75 9.75,8.48" stroke="currentColor" stroke-width="2"/></svg>
          </a>
          <a href="#" class="social-link" aria-label="Instagram">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" stroke-width="2"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="currentColor" stroke-width="2"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" stroke-width="2"/></svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #fff;
  color: var(--color-text-secondary);
  padding: 10px 0 0 0;
  border-top: 1px solid #f3f4f6;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  right: 10px;
  gap: 70px;
  margin-top: 10px;
  margin-bottom: 32px;
}

.footer-section {
  display: flex;
  flex-direction: column;
}

.footer-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 16px;
  color: #222;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 12px;
}

.footer-link {
  color: var(--color-text-secondary);
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.2s;
}

.footer-link:hover {
  color: var(--color-primary);
}

.app-section {
  align-items: flex-start;
}

.app-links {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.app-link {
  display: inline-block;
}

.app-store-badge {
  height: 44px;
  width: auto;
  border-radius: 8px;
  border: 1.5px solid #e5e7eb;
  background: #fff;
  object-fit: contain;
  box-shadow: 0 2px 8px 0 rgba(30,58,138,0.06);
  transition: opacity 0.2s, box-shadow 0.2s;
}

.app-store-badge:hover {
  opacity: 0.85;
  box-shadow: 0 4px 16px 0 rgba(30,58,138,0.12);
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0 0 0;
  border-top: 1px solid #e5e7eb;
}

.footer-copyright p {
  color: var(--color-text-secondary);
  font-size: 1.5rem;
  margin: 0;
}

.social-links {
  display: flex;
  gap: 24px;
}

.social-link {
  color: var(--color-text-secondary);
  text-decoration: none;
  transition: color 0.2s, transform 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: none;
}

.social-link:hover {
  color: var(--color-primary);
  background: #f3f4f6;
  transform: translateY(-2px);
}

@media (max-width: 1024px) {
  .footer-content {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
}

@media (max-width: 600px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  .footer-bottom {
    flex-direction: column;
    gap: 16px;
    text-align: center;
  }
  .social-links {
    justify-content: center;
  }
}
</style>