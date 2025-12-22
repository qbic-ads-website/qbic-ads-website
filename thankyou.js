// Translations for Thank You page
const translations = {
    ru: {
        'thankyou.title': 'Спасибо за вашу заявку!',
        'thankyou.subtitle': 'Ваша заявка успешно отправлена',
        'thankyou.description': 'Мы свяжемся с вами в течение часа в рабочее время (9:00 - 18:00 GMT+2). Проверьте свои сообщения в указанном мессенджере или email.',
        'thankyou.btn': 'Вернуться на главную',
        'thankyou.socials.title': 'Не хотите ждать? Пишите нам прямо сейчас'
    },
    en: {
        'thankyou.title': 'Thank you for your request!',
        'thankyou.subtitle': 'Your request has been successfully sent',
        'thankyou.description': 'We will contact you within an hour during business hours (9:00 AM - 6:00 PM GMT+2). Please check your messages in the specified messenger or email.',
        'thankyou.btn': 'Back to Homepage',
        'thankyou.socials.title': 'Don\'t want to wait? Message us right now'
    },
    ua: {
        'thankyou.title': 'Дякуємо за вашу заявку!',
        'thankyou.subtitle': 'Ваша заявка успішно відправлена',
        'thankyou.description': 'Ми зв\'яжемося з вами протягом години в робочий час (9:00 - 18:00 GMT+2). Перевірте свої повідомлення у вказаному месенджері або email.',
        'thankyou.btn': 'Повернутися на головну',
        'thankyou.socials.title': 'Не хочете чекати? Пишіть нам прямо зараз'
    }
};

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

// Get current language from URL parameter, localStorage, or browser language
const urlParams = new URLSearchParams(window.location.search);
const langFromUrl = urlParams.get('lang');
let currentLanguage = langFromUrl || localStorage.getItem('selectedLanguage') || detectBrowserLanguage();

// Save language to localStorage if came from URL
if (langFromUrl) {
    localStorage.setItem('selectedLanguage', langFromUrl);
}

// Switch language function
function switchLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('selectedLanguage', lang);

    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });

    // Update page title
    const titles = {
        ru: 'Спасибо за заявку | QUBIC ADS',
        en: 'Thank You | QUBIC ADS',
        ua: 'Дякуємо за заявку | QUBIC ADS'
    };
    document.title = titles[lang] || titles.ru;

    // Update HTML lang attribute
    document.documentElement.lang = lang;
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    switchLanguage(currentLanguage);

    // Update home button link with current language
    const homeBtn = document.querySelector('.btn-home');
    if (homeBtn) {
        homeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = `index.html?lang=${currentLanguage}`;
        });
    }
});
