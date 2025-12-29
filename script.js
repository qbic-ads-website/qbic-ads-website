// QBIC Ads - Google Ads Landing Page JavaScript (Optimized)

// Translations cache
let translations = {};

// Load translations dynamically
async function loadTranslations(lang) {
    if (translations[lang]) {
        return translations[lang]; // Return from cache
    }
    
    try {
        const response = await fetch(`translations/${lang}.json?v=1`);
        if (!response.ok) {
            throw new Error(`Failed to load ${lang} translations`);
        }
        const data = await response.json();
        translations[lang] = data;
        return data;
    } catch (error) {
        console.error('Error loading translations:', error);
        // Fallback to English
        if (lang !== 'en') {
            return loadTranslations('en');
        }
        return {};
    }
}

// QBIC Ads - Google Ads Landing Page JavaScript

// Progress Bar on Scroll
window.addEventListener('scroll', () => {
    const progressBar = document.getElementById('progressBar');
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    progressBar.style.width = scrolled + '%';
});

// Scroll Animations - Intersection Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            animateOnScroll.unobserve(entry.target);
        }
    });
}, observerOptions);

// Typing effect for hero title
function typeWriter(element, text, speed = 50) {
    element.classList.add('typing');
    let i = 0;
    element.innerHTML = '';

    function type() {
        if (i < text.length) {
            if (text.charAt(i) === '<') {
                // Handle HTML tags
                const endTag = text.indexOf('>', i);
                element.innerHTML += text.substring(i, endTag + 1);
                i = endTag + 1;
            } else {
                element.innerHTML += text.charAt(i);
                i++;
            }
            setTimeout(type, speed);
        }
    }
    type();
}

// Add animation class to elements - wait for full page load
window.addEventListener('load', () => {
    console.log('Initializing animations...');

    // Hero animations
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroBadge = document.querySelector('.hero-badge');
    const heroButtons = document.querySelector('.hero-buttons');
    const visualCards = document.querySelectorAll('.visual-card');
    const persons = document.querySelectorAll('.person');
    const globe = document.querySelector('.globe');

    if (heroTitle) {
        setTimeout(() => {
            heroTitle.classList.add('animate-in');
        }, 100);
    }

    if (heroSubtitle) {
        setTimeout(() => {
            heroSubtitle.classList.add('animate-in');
        }, 600);
    }

    if (heroBadge) {
        setTimeout(() => {
            heroBadge.classList.add('animate-in');
        }, 900);
    }

    if (heroButtons) {
        setTimeout(() => {
            heroButtons.classList.add('animate-in');
        }, 1200);
    }

    // Animate visual cards
    visualCards.forEach((card) => {
        setTimeout(() => {
            card.classList.add('animate-in');
        }, 1800);
    });

    // Animate persons and globe
    persons.forEach((person) => {
        person.classList.add('animate-in');
    });
    if (globe) {
        globe.classList.add('animate-in');
    }

    // Animate section titles and subtitles
    const titles = document.querySelectorAll('.section-title, .section-subtitle');
    console.log('Found titles:', titles.length);
    titles.forEach(el => {
        el.classList.add('fade-up');
        animateOnScroll.observe(el);
    });

    // Animate service cards with stagger effect
    const serviceCards = document.querySelectorAll('.service-card');
    console.log('Found service cards:', serviceCards.length);
    serviceCards.forEach((card, index) => {
        card.classList.add('fade-up');
        card.style.setProperty('--animation-order', index);
        animateOnScroll.observe(card);
    });

    // Animate process steps with stagger effect
    const processSteps = document.querySelectorAll('.process-step');
    console.log('Found process steps:', processSteps.length);
    processSteps.forEach((step, index) => {
        step.classList.add('fade-up');
        step.style.setProperty('--animation-order', index);
        animateOnScroll.observe(step);
    });

    // Animate benefit cards with stagger effect
    const benefitCards = document.querySelectorAll('.benefit-card');
    console.log('Found benefit cards:', benefitCards.length);
    benefitCards.forEach((card, index) => {
        card.classList.add('fade-up');
        card.style.setProperty('--animation-order', index);
        animateOnScroll.observe(card);
    });

    // Animate pricing cards with stagger effect
    const pricingCards = document.querySelectorAll('.pricing-card');
    console.log('Found pricing cards:', pricingCards.length);
    pricingCards.forEach((card, index) => {
        card.classList.add('fade-up');
        card.style.setProperty('--animation-order', index);
        animateOnScroll.observe(card);
    });

    // Animate audit benefits with stagger effect
    const auditBenefits = document.querySelectorAll('.audit-benefit');
    console.log('Found audit benefits:', auditBenefits.length);
    auditBenefits.forEach((benefit, index) => {
        benefit.classList.add('fade-up');
        benefit.style.setProperty('--animation-order', index);
        animateOnScroll.observe(benefit);
    });

    // Animate report preview
    const reportPreview = document.querySelector('.report-preview');
    if (reportPreview) {
        console.log('Found report preview');
        reportPreview.classList.add('fade-up');
        animateOnScroll.observe(reportPreview);
    }

    console.log('Animations initialized!');
});

// Configuration - IMPORTANT: Replace with your data!
const TELEGRAM_CONFIG = {
    botToken: '8336078154:AAGiXKkPV0ogtFzE3tSvu-a8ycskbcOsGks',
    chatId: '7684077395',
    googleScriptUrl: 'https://script.google.com/macros/s/AKfycbzVmClpZJKAmRQXyxVqyXBEJEEP5VMUEBEQvFZPf5XP6fnr1G2fthfK71AJ38JzXy4m/exec'
};

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('.nav');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        nav.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });
}

// Header scroll effect
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        header.style.padding = '12px 0';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
    } else {
        header.style.padding = '18px 0';
        header.style.boxShadow = 'none';
    }

    // Show/hide scroll to top button
    const scrollTopBtn = document.querySelector('.scroll-top');
    if (scrollTopBtn) {
        if (currentScroll > 300) {
            scrollTopBtn.style.display = 'flex';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    }

    lastScroll = currentScroll;
});


// Translations Database

// Detect browser language
function detectBrowserLanguage() {
    // Get browser language (e.g., 'ru-RU', 'en-US', 'uk-UA')
    const browserLang = navigator.language || navigator.userLanguage;
    const langCode = browserLang.toLowerCase().split('-')[0];

    // Map browser language to supported languages
    if (langCode === 'ru') return 'ru';
    if (langCode === 'uk' || langCode === 'ua') return 'ua';
    if (langCode === 'en') return 'en';

    // Default to English for other languages
    return 'en';
}

// Detect language from URL query parameter
function getLanguageFromURL() {
    // Check URL query parameter (e.g., ?lang=ru)
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');
    if (langParam && ['ru', 'ua', 'en'].includes(langParam)) {
        return langParam;
    }

    // Check localStorage
    const savedLang = localStorage.getItem('selectedLanguage');
    if (savedLang && ['ru', 'ua', 'en'].includes(savedLang)) {
        return savedLang;
    }

    // Auto-detect from browser language
    return detectBrowserLanguage();
}

// Current language
let currentLang = getLanguageFromURL();

// Language Switcher with Translation
const langBtn = document.querySelector('.lang-btn');
const langOptions = document.querySelectorAll('.lang-option');
const langDropdown = document.querySelector('.lang-dropdown');

console.log('Language switcher initialized:', {
    langBtn: langBtn,
    langOptionsCount: langOptions.length
});

// Toggle dropdown on mobile when clicking the lang button
if (langBtn && langDropdown) {
    let isToggling = false;

    // Function to toggle dropdown
    const toggleDropdown = (e) => {
        e.stopPropagation();
        e.preventDefault();

        // Prevent double-firing on devices that support both touch and click
        if (isToggling) return;
        isToggling = true;
        setTimeout(() => { isToggling = false; }, 300);

        const wasActive = langDropdown.classList.contains('active');
        langDropdown.classList.toggle('active');

        // Position dropdown centered under the button on mobile
        if (!wasActive && window.innerWidth <= 768) {
            // Use requestAnimationFrame to avoid forced reflow
            requestAnimationFrame(() => {
                const btnRect = langBtn.getBoundingClientRect();
                const dropdownWidth = 60; // min-width from CSS
                const left = btnRect.left + (btnRect.width / 2) - (dropdownWidth / 2);
                langDropdown.style.left = left + 'px';
                langDropdown.style.top = (btnRect.bottom + 4) + 'px';
            });
        }
    };

    // Add both click and touchend for better mobile support
    langBtn.addEventListener('click', toggleDropdown);
    langBtn.addEventListener('touchend', toggleDropdown);

    // Close dropdown when clicking/touching outside
    const closeDropdown = (e) => {
        if (!e.target.closest('.lang-switcher') && langDropdown.classList.contains('active')) {
            langDropdown.classList.remove('active');
            console.log('Dropdown closed - clicked outside');
        }
    };

    document.addEventListener('click', closeDropdown);
    document.addEventListener('touchend', closeDropdown);
}

if (langBtn && langOptions.length > 0) {
    langOptions.forEach(option => {
        console.log('Adding listener to:', option.dataset.lang);

        const selectLanguage = async (e) => {
            e.preventDefault();
            e.stopPropagation();
            const selectedLang = option.dataset.lang;
            console.log('Language selected:', selectedLang, 'Event type:', e.type);
            await switchLanguage(selectedLang);
            // Update URL based on language
            updateURL(selectedLang);
            // Close dropdown after selection
            if (langDropdown) {
                langDropdown.classList.remove('active');
            }
        };

        option.addEventListener('click', selectLanguage);
        option.addEventListener('touchend', selectLanguage);
    });
}

// Update URL based on selected language
function updateURL(lang) {
    let newURL;
    if (lang === 'en') {
        // English version - root domain without query param
        newURL = window.location.origin + '/';
    } else {
        // Other languages - use query parameter
        newURL = window.location.origin + '/?lang=' + lang;
    }

    // Update URL without page reload using History API
    window.history.pushState({lang: lang}, '', newURL);
}

// Switch language function
async function switchLanguage(lang) {
    currentLang = lang;

    // Update html lang attribute
    document.documentElement.setAttribute('lang', lang);

    // Update button text
    const langNames = {
        'ru': 'RU',
        'en': 'ENG',
        'ua': 'UA'
    };
    if (langBtn) {
        langBtn.textContent = langNames[lang];
    }

    // Save to localStorage
    localStorage.setItem('selectedLanguage', lang);

    // Load translations if not cached
    await loadTranslations(lang);

    // Translate all elements
    translatePage(lang);
}

// Translate page
function translatePage(lang) {
    // Translate text content
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = translations[lang][key];

        if (translation) {
            // Сохраняем иконку section-title-icon если она есть
            const icon = element.querySelector('.section-title-icon');

            // Обновляем контент
            element.innerHTML = translation;

            // Восстанавливаем иконку в начало элемента, если она была
            if (icon) {
                element.insertBefore(icon, element.firstChild);
            }

            // Исправляем пути изображений и принудительно перезагружаем
            element.querySelectorAll('img').forEach(img => {
                const srcAttr = img.getAttribute('src');
                if (srcAttr) {
                    // Метод 1: Полный сброс и перезагрузка
                    img.removeAttribute('src');

                    // Принудительный reflow
                    void img.offsetWidth;

                    // Используем requestAnimationFrame для гарантии на мобильных
                    requestAnimationFrame(() => {
                        img.setAttribute('src', srcAttr);

                        // Обработчик успешной загрузки
                        img.onload = function() {
                            this.style.opacity = '1';
                        };

                        // Обработчик ошибки с автоповтором
                        img.onerror = function() {
                            console.warn('Image load failed, retrying:', srcAttr);
                            // Убираем параметры кеша из URL если есть
                            const cleanSrc = srcAttr.split('?')[0];
                            // Добавляем timestamp для обхода кеша
                            this.src = cleanSrc + '?t=' + Date.now();
                        };
                    });
                }
            });
        }
    });

    // Translate placeholders
    const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
    placeholders.forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        const translation = translations[lang][key];

        if (translation) {
            element.placeholder = translation;
        }
    });
}

// Load saved language on page load
window.addEventListener('DOMContentLoaded', async () => {
    // Get language from URL, localStorage, or default
    const detectedLang = getLanguageFromURL();

    // Always initialize language to ensure page is translated
    await switchLanguage(detectedLang);

    // Update URL if needed (in case language came from localStorage or browser detection)
    const urlParams = new URLSearchParams(window.location.search);
    const hasLangParam = urlParams.has('lang');

    // Only update URL if there's no query param and language is not default (en)
    if (!hasLangParam && detectedLang !== 'en') {
        updateURL(detectedLang);
    }
});

// Form Handling with Telegram Integration
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Get form data using FormData API (more reliable)
        const formDataObj = new FormData(e.target);

        const formData = {
            name: formDataObj.get('name')?.trim() || '',
            contact: formDataObj.get('contact')?.trim() || '',
            company: formDataObj.get('company')?.trim() || 'Не указана',
            market: formDataObj.get('market')?.trim() || 'Не указана',
            project: formDataObj.get('project')?.trim() || 'Не указан'
        };

        // Debug: log form data
        console.log('Form data:', formData);

        // Validate required fields
        if (!formData.name || !formData.contact) {
            console.log('Validation failed:', { name: formData.name, contact: formData.contact });
            showMessage('Пожалуйста, заполните все обязательные поля', 'error');
            return;
        }

        console.log('Validation passed, sending form...');

        // Disable submit button
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.textContent = 'Отправка...';

        try {
            // Send to Telegram
            await sendToTelegram(formData);

            // Push form submission event to GTM dataLayer
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                'event': 'form_submission',
                'formName': 'contact_form',
                'formData': {
                    'name': formData.name,
                    'contact': formData.contact,
                    'company': formData.company,
                    'market': formData.market
                }
            });

            console.log('✅ Form submission event pushed to GTM dataLayer');

            // Reset form
            contactForm.reset();

            // Wait for GTM to process the event before redirecting
            const currentLang = localStorage.getItem('selectedLanguage') || 'en';
            setTimeout(() => {
                window.location.href = `thankyou.html?lang=${currentLang}`;
            }, 500);

        } catch (error) {
            console.error('Error:', error);
            showMessage('Произошла ошибка при отправке. Пожалуйста, попробуйте позже или свяжитесь с нами по телефону.', 'error');
        } finally {
            // Re-enable submit button
            submitBtn.disabled = false;
            submitBtn.textContent = originalBtnText;
        }
    });
}

// Send form data to Telegram via Google Apps Script
async function sendToTelegram(data) {
    const payload = {
        name: data.name,
        contact: data.contact,
        company: data.company,
        market: data.market,
        project: data.project,
        timestamp: new Date().toLocaleString('ru-RU')
    };

    console.log('📤 Sending form data to Google Apps Script...');
    console.log('URL:', TELEGRAM_CONFIG.googleScriptUrl);
    console.log('Payload:', payload);

    try {
        // Send to Google Apps Script
        const response = await fetch(TELEGRAM_CONFIG.googleScriptUrl, {
            method: 'POST',
            mode: 'no-cors', // Important for Google Apps Script
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        });

        console.log('✅ Form sent successfully to Google Apps Script');
        console.log('Response:', response);

        // Note: With mode: 'no-cors', we can't read the response
        // But the request will be sent successfully
        return { success: true };
    } catch (error) {
        console.error('❌ Error sending to Google Apps Script:', error);
        throw error;
    }
}

// Show form message
function showMessage(text, type) {
    const formMessage = document.getElementById('formMessage');
    if (!formMessage) {
        console.error('formMessage element not found');
        alert(text);
        return;
    }
    formMessage.textContent = text;
    formMessage.className = 'form-message ' + type;
    formMessage.style.display = 'block';

    // Auto-hide after 5 seconds
    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 5000);
}

// Stats counter animation
function animateCounter(element, target, duration = 2000) {
    const targetNumber = parseFloat(target);
    const isDecimal = target.includes('.');
    const isNegative = target.includes('-');
    const suffix = target.match(/[a-zA-Z%+\-x]/g)?.join('') || '';
    
    let start = 0;
    const increment = targetNumber / (duration / 16);

    const timer = setInterval(() => {
        start += increment;
        if ((increment > 0 && start >= targetNumber) || (increment < 0 && start <= targetNumber)) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            if (isDecimal) {
                element.textContent = start.toFixed(1) + suffix;
            } else {
                element.textContent = Math.floor(start) + suffix;
            }
        }
    }, 16);
}

// Animate stats when visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.animated) {
            const number = entry.target.querySelector('.stat-number');
            if (number) {
                const targetText = number.textContent;
                animateCounter(number, targetText);
                entry.target.dataset.animated = 'true';
            }
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-item').forEach(item => {
    statsObserver.observe(item);
});

// Scroll to top smooth
const scrollTopBtn = document.querySelector('.scroll-top');
if (scrollTopBtn) {
    scrollTopBtn.style.display = 'none';

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ============================================
// GTM CONVERSION TRACKING
// ============================================

// Track Telegram button clicks
document.querySelectorAll('a[href*="t.me"], .telegram').forEach(link => {
    link.addEventListener('click', () => {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            'event': 'telegram_click',
            'button_location': link.closest('.hero') ? 'hero' :
                              link.closest('.floating-buttons') ? 'floating' :
                              link.closest('.contact') ? 'contact' :
                              link.closest('.footer') ? 'footer' : 'other'
        });
        console.log('📱 Telegram click tracked');
    });
});

// Track WhatsApp button clicks
document.querySelectorAll('a[href*="wa.me"], .whatsapp').forEach(link => {
    link.addEventListener('click', () => {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            'event': 'whatsapp_click',
            'button_location': link.closest('.floating-buttons') ? 'floating' :
                              link.closest('.contact') ? 'contact' :
                              link.closest('.footer') ? 'footer' : 'other'
        });
        console.log('📱 WhatsApp click tracked');
    });
});

// Track phone clicks
document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.addEventListener('click', () => {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            'event': 'phone_click',
            'phone_number': link.getAttribute('href').replace('tel:', ''),
            'button_location': link.closest('.contact') ? 'contact' :
                              link.closest('.footer') ? 'footer' : 'other'
        });
        console.log('📞 Phone click tracked');
    });
});

// Track email clicks
document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
    link.addEventListener('click', () => {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            'event': 'email_click',
            'button_location': link.closest('.contact') ? 'contact' :
                              link.closest('.footer') ? 'footer' : 'other'
        });
        console.log('✉️ Email click tracked');
    });
});

// Track YouTube clicks
document.querySelectorAll('a[href*="youtube.com"], .youtube').forEach(link => {
    link.addEventListener('click', () => {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            'event': 'youtube_click',
            'button_location': link.closest('.contact') ? 'contact' :
                              link.closest('.footer') ? 'footer' : 'other'
        });
        console.log('📺 YouTube click tracked');
    });
});

// Track Instagram clicks
document.querySelectorAll('a[href*="instagram.com"], .instagram').forEach(link => {
    link.addEventListener('click', () => {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            'event': 'instagram_click',
            'button_location': link.closest('.contact') ? 'contact' :
                              link.closest('.footer') ? 'footer' : 'other'
        });
        console.log('📷 Instagram click tracked');
    });
});

// Track LinkedIn clicks
document.querySelectorAll('a[href*="linkedin.com"], .linkedin').forEach(link => {
    link.addEventListener('click', () => {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            'event': 'linkedin_click',
            'button_location': link.closest('.contact') ? 'contact' :
                              link.closest('.footer') ? 'footer' : 'other'
        });
        console.log('💼 LinkedIn click tracked');
    });
});

// Track scroll depth
let scrollDepth50Tracked = false;
let scrollDepth75Tracked = false;

window.addEventListener('scroll', () => {
    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

    // 50% scroll
    if (scrollPercent >= 50 && !scrollDepth50Tracked) {
        scrollDepth50Tracked = true;
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            'event': 'scroll_depth',
            'scroll_percentage': 50
        });
        console.log('📜 Scroll 50% tracked');
    }

    // 75% scroll
    if (scrollPercent >= 75 && !scrollDepth75Tracked) {
        scrollDepth75Tracked = true;
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            'event': 'scroll_depth',
            'scroll_percentage': 75
        });
        console.log('📜 Scroll 75% tracked');
    }
});

// Track time on site (2 minutes)
let timeOnSite2MinTracked = false;

setTimeout(() => {
    if (!timeOnSite2MinTracked) {
        timeOnSite2MinTracked = true;
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            'event': 'time_on_site',
            'duration_seconds': 120
        });
        console.log('⏱️ Time on site 2 minutes tracked');
    }
}, 120000); // 2 minutes = 120000ms

// Console log
console.log('%c QBIC Ads ', 'background: #00d4ff; color: #1a1a2e; font-size: 20px; font-weight: bold; padding: 10px;');
console.log('%c 🚀 Google Ads Landing Page готова! ', 'background: #10b981; color: white; font-size: 14px; padding: 5px;');
console.log('%c 📊 GTM Conversion Tracking активен ', 'background: #8b5cf6; color: white; font-size: 14px; padding: 5px;');

// Instructions for Telegram bot setup
if (TELEGRAM_CONFIG.botToken === 'YOUR_BOT_TOKEN_HERE') {
    console.log('%c ⚠️ Настройте Telegram бота для получения заявок! ', 'background: #ef4444; color: white; font-size: 14px; padding: 5px;');
    console.log(`
📱 Инструкция по настройке Telegram бота:

1. Откройте Telegram и найдите @BotFather
2. Отправьте команду /newbot
3. Следуйте инструкциям и получите токен бота
4. Откройте script.js и замените YOUR_BOT_TOKEN_HERE на полученный токен

5. Чтобы получить chat_id:
   - Напишите что-нибудь вашему боту
   - Откройте: https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates
   - Найдите "chat":{"id":123456789} - это ваш chat_id
   - Замените YOUR_CHAT_ID_HERE в script.js

6. Готово! Теперь заявки будут приходить в Telegram 🎉

Альтернативно, вы можете подключить другой backend для обработки форм.
    `);
}

// Add parallax effect to hero background
window.addEventListener('scroll', () => {
    const heroBackground = document.querySelector('.hero-background');
    if (heroBackground) {
        const scrolled = window.pageYOffset;
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Lazy loading for images (if you add real images)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Add smooth reveal animation on page load
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Modal functions for reporting image
function openReportModal() {
    const modal = document.getElementById('reportModal');
    if (modal) {
        modal.style.display = 'block';
    }
}

function closeReportModal() {
    const modal = document.getElementById('reportModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Close modal on Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeReportModal();
    }
});
