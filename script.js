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
const translations = {
    ru: {
        // Header
        'nav.services': 'Услуги',
        'nav.process': 'Как мы работаем',
        'nav.cases': 'Кейсы',
        'nav.benefits': 'Преимущества',
        'nav.reports': 'Отчёты',
        'nav.pricing': 'Тарифы',
        'nav.contact': 'Контакты',
        'header.cta': 'Получить бесплатный аудит',

        // Hero Section
        'hero.title': '<span class="hero-text-blue">Запускаем и ведем</span> <span class="highlight-google">Google Ads <img src="images/googleads.webp" alt="Google Ads" class="google-ads-icon"></span> <span class="hero-text-blue">для ecommerce и сервисных компаний с фокусом на прибыль</span> <img src="images/cube.webp" alt="" class="hero-title-cube">',
        'hero.subtitle': 'Google Ads полного цикла для онлайн-бизнеса в Европе и США.<br>От стратегии до масштабирования.',
        'hero.badge': 'Без долгих договоров — ежемесячная оплата, прозрачная отчетность',
        'hero.cta1': 'Получить бесплатный аудит',
        'hero.cta2': 'Написать в Telegram',

        // Steps
        'step1.title': 'Консультация',
        'step1.desc': 'Обсуждение вашего бизнеса и целей',
        'step2.title': 'Подготовка',
        'step2.desc': 'Создание и настройка всех необходимых аккаунтов',
        'step3.title': 'Запуск',
        'step3.desc': 'Создание и запуск кампаний',
        'step4.title': 'Оптимизация',
        'step4.desc': 'Постоянное улучшение результатов',

        // Services Section
        'services.title': 'Наши услуги',
        'services.subtitle': 'Полный цикл управления Google Ads для вашего бизнеса',

        'service1.title': 'Аудит рекламных кампаний',
        'service1.desc': 'Детальный анализ кампаний с рекомендациями по улучшению.',

        'service2.title': 'Техническая настройка',
        'service2.desc': 'Настройка GA4, GTM и Merchant Center для точного отслеживания всех конверсий.',

        'service3.title': 'Запуск Google Ads',
        'service3.desc': 'Создание Performance Max, Shopping, Search и Display кампаний под ключ.',

        'service4.title': 'Ведение и оптимизация',
        'service4.desc': 'Ежедневный мониторинг и оптимизация работы кампаний.',

        'service5.title': 'Аналитика и отчётность',
        'service5.desc': 'Еженедельные интерактивные отчёты в Google Looker Studio с детализацией по метрикам.',

        'service6.title': 'Стратегия масштабирования',
        'service6.desc': 'План роста бюджета без потери эффективности. Тестирование новых форматов.',

        // Process Section
        'process.title': 'Как мы работаем',
        'process.subtitle': 'Прозрачный процесс на каждом этапе',

        'process1.title': 'Анализ',
        'process1.desc': 'Изучаем ваш бизнес, аудиторию и конкурентов.',

        'process2.title': 'Планирование',
        'process2.desc': 'Разрабатываем стратегию, определяем KPI и бюджеты.',

        'process3.title': 'Запуск',
        'process3.desc': 'Создаем кампании, настраиваем GA4, GTM, Merchant Center.',

        'process4.title': 'Оптимизация',
        'process4.desc': 'A/B тестирование, сегментация аудиторий и оптимизация ставок.',

        'process5.title': 'Отчетность',
        'process5.desc': 'Визуальные отчеты в Looker Studio.',

        'process6.title': 'Масштабирование',
        'process6.desc': 'Масштабируем успешные кампании без потери эффективности.',

        // Benefits
        'benefits.title': 'Преимущества работы с нами',

        'benefit1.title': 'Сертифицированные специалисты',
        'benefit1.desc': 'Только эксперты с сертификацией Google Partner. Официальное подтверждение квалификации Google Ads.',

        'benefit4.title': 'Бесплатный аудит',
        'benefit4.desc': 'Детальный анализ ваших текущих кампаний абсолютно бесплатно. Получите конкретные рекомендации по улучшению.',

        'benefit6.title': 'Фокус на ROAS',
        'benefit6.desc': 'Главная цель — повышение вашей рентабельности. Оптимизируем кампании для максимальной отдачи от рекламных расходов.',

        'benefit5.title': 'Опыт в онлайн-бизнесе',
        'benefit5.desc': 'Работаем с ecommerce и сервисными компаниями. Глубокая экспертиза в продвижении как товаров, так и услуг.',

        'benefit2.title': 'Честность',
        'benefit2.desc': 'Прозрачная отчётность, реальные цифры, полный доступ к аккаунту и еженедельные отчёты.',

        'benefit3.title': 'Без технических сложностей',
        'benefit3.desc': 'Мы берём на себя все технические аспекты. Настраиваем доступы к Google Ads, GA4, GTM и Merchant Center.',

        // Reports
        'reports.title': 'Регулярная отчётность',
        'reports.subtitle': 'Для каждого проекта собираем отчёт в Google Looker Studio. В отчете вы видите:',
        'reports.feature1': 'Сумма заказов и количество конверсий по кампаниям',
        'reports.feature2': 'Динамика метрик по периодам',
        'reports.feature3': 'ROAS, доля рекламных расходов и цена за конверсию',
        'reports.feature4': 'Успешные и проблемные кампании',
        'reports.note': 'Здесь будет встроен живой пример отчета с вашего проекта, чтобы вы могли в пару кликов проверить, как работает реклама',

        // Cases Section
        'cases.title': 'Кейсы',
        'cases.subtitle': 'Реальные результаты наших клиентов',
        'cases.task.label': 'Задача:',
        'cases.country.label': 'Страна:',

        'case1.name': 'Интернет-магазин сувениров',
        'case1.challenge': 'Полный аудит, техническая настройка, реструктуризация и перезапуск кампаний с фокусом на рост прибыли и конверсий.',
        'case1.country': 'Польша 🇵🇱',
        'case1.roas.label': 'ROAS:',
        'case1.roas.value': '12.1 → 16.5',
        'case1.revenue.label': 'Выручка:',
        'case1.revenue.value': '+123,622 PLN',
        'case1.period.label': 'Период:',
        'case1.period.value': '5 месяцев',

        'case2.name': 'Доставка цветов и услуги на Бали',
        'case2.challenge': 'Масштабирование кампаний с сохранением эффективности для сезонного бизнеса (праздники, свадьбы, романтические услуги).',
        'case2.country': 'Индонезия 🇮🇩 (Бали)',
        'case2.roas.label': 'ROAS:',
        'case2.roas.value': '15.1 → 16.9',
        'case2.revenue.label': 'Выручка:',
        'case2.revenue.value': '+6,250,000 IDR',
        'case2.period.label': 'Период:',
        'case2.period.value': '7 месяцев',

        'case3.name': 'Магазин аксессуаров для грузовиков',
        'case3.challenge': 'Масштабирование кампаний с увеличением объёма заказов при сохранении прибыльности и эффективности.',
        'case3.country': 'США 🇺🇸',
        'case3.conversions.label': 'Конверсии:',
        'case3.conversions.value': '2,412 → 4,425',
        'case3.revenue.label': 'Выручка:',
        'case3.revenue.value': '+90%',
        'case3.period.label': 'Период:',
        'case3.period.value': '12 месяцев',

        // Pricing
        'pricing.title': 'Тарифы',

        'price1.title': '<img src="images/cube.webp" alt="" class="pricing-title-icon">СТАРТ',
        'price1.desc': 'Для первого запуска или перезапуска после неудачных попыток',
        'price1.budget': 'Рекламный бюджет до $1,000/месяц',
        'price1.amount': 'от $300',
        'price1.period': '/месяц',
        'price1.cta': 'Начать',

        'price2.badge': 'Популярный',
        'price2.title': '<img src="images/cube.webp" alt="" class="pricing-title-icon">МАСШТАБ',
        'price2.desc': 'Для растущих компаний, готовых масштабировать выручку',
        'price2.budget': 'Рекламный бюджет $1,000-5,000/месяц',
        'price2.amount': 'от $400',
        'price2.period': '/месяц',
        'price2.cta': 'Обсудить проект',

        'price3.title': '<img src="images/cube.webp" alt="" class="pricing-title-icon">ENTERPRISE',
        'price3.desc': 'Для компаний, работающих на нескольких рынках с индивидуальными KPI',
        'price3.budget': 'Рекламный бюджет от $5,000/месяц и выше',
        'price3.amount': 'от $1,000',
        'price3.period': '/месяц',
        'price3.cta': 'Запросить предложение',

        'price1.feature1': '✓ Аудит и первичная стратегия',
        'price1.feature2': '✓ 1-3 кампании (PMax или Search + Shopping)',
        'price1.feature3': '✓ Настройка GA4, GTM, Merchant Center',
        'price1.feature4': '✓ Оптимизация и еженедельная отчётность',

        'price2.feature1': '✓ Всё из тарифа СТАРТ',
        'price2.feature2': '✓ До 10 кампаний (PMax, Shopping, Search)',
        'price2.feature3': '✓ A/B тесты и сегментация аудиторий',
        'price2.feature4': '✓ Ежемесячный отчёт с рекомендациями по росту',
        'price2.feature5': '✓ Возможен бонус за перевыполнение KPI',

        'price3.feature1': '✓ Всё из тарифа МАСШТАБ',
        'price3.feature2': '✓ Неограниченное количество кампаний',
        'price3.feature3': '✓ Стратегия под несколько рынков и языков',
        'price3.feature4': '✓ Регулярные стратегические сессии',
        'price3.feature5': '✓ Гибкая работа по индивидуальным KPI',

        'audit.title': 'Готовы расти с Google Ads уже сегодня?',
        'audit.text': '<span class="subtitle-check">✓</span>Оставьте заявку на бесплатный аудит. Оценим ваш сайт, текущую рекламу и покажем точки роста.',
        'audit.cta1': 'Связаться в Telegram',
        'audit.cta2': 'Получить аудит',
        'audit.benefits.title': 'Что вы получите по итогу аудита',

        'audit.benefit1.title': 'Техническая часть',
        'audit.benefit1.desc': 'Проверим конверсии, фид, базовую аналитику',
        'audit.benefit2.title': 'Структура рекламы',
        'audit.benefit2.desc': 'Узнаем что работает, а что сливает бюджет',
        'audit.benefit3.title': 'Оценим потенциал роста',
        'audit.benefit3.desc': 'Оценку по выручке и ROAS',

        'audit.note': 'Если поймем, что сейчас не время масштабировать рекламу, так и скажем вам.',

        // Contact
        'contact.title': 'Давайте обсудим ваш проект',
        'contact.subtitle': '<span class="subtitle-check">✓</span>Ответим в течение часа',
        'contact.info.title': 'Контакты',
        'contact.phone.label': 'Телефон',
        'contact.messengers.label': 'Мессенджеры',
        'contact.email.label': 'Почта',
        'contact.note': 'Напишите, из какой вы ниши и в каком регионе планируете рекламироваться, чтобы мы сразу перешли к делу, а не к общим вопросам.',

        'form.name': 'Как к вам обращаться *',
        'form.contact': 'Telegram, телефон или email *',
        'form.company': 'Название вашей компании',
        'form.market': 'Ваша страна',
        'form.project': 'Ниша, средний чек, примерный бюджет на рекламу, средняя маржинальность',
        'form.privacy': 'Нажимая кнопку, вы соглашаетесь на обработку ваших данных для связи по проекту. Никакого спама, только по делу.',
        'form.submit': 'Отправить заявку',

        // Footer
        'footer.description': 'Google Ads агентство для онлайн-бизнеса. Увеличиваем ROAS и масштабируем продажи.',
        'footer.services': 'Услуги',
        'footer.services.link1': 'Аудит и стратегия',
        'footer.services.link2': 'Запуск кампаний',
        'footer.services.link3': 'Ведение и оптимизация',
        'footer.services.link4': 'Отчётность',
        'footer.company': 'Компания',
        'footer.contacts': 'Контакты',
        'footer.copyright': '© 2025 QBIC Ads. Все права защищены.'
    },

    en: {
        // Navigation
        'nav.services': 'Services',
        'nav.process': 'How We Work',
        'nav.cases': 'Cases',
        'nav.benefits': 'Why Us?',
        'nav.pricing': 'Pricing',
        'nav.contact': 'Contact',
        'header.cta': 'Get Free Audit',

        // Hero Section
        'hero.title': '<span class="hero-text-blue">Launch and manage</span> <span class="highlight-google">Google Ads <img src="images/googleads.webp" alt="Google Ads" class="google-ads-icon"></span> <span class="hero-text-blue"><br>for ecommerce and service companies with focus on profit <img src="images/cube.webp" alt="" class="hero-title-cube"></span>',
        'hero.subtitle': 'Full-cycle Google Ads for online businesses in Europe and the US.<br>End-to-end service from strategy to scaling.',
        'hero.badge': 'No long-term contracts — monthly billing, transparent reporting.',
        'hero.cta1': 'Get Audit',
        'hero.cta2': 'Telegram',

        // Steps
        'step1.title': 'Consultation',
        'step1.desc': 'Discussing your business and goals',
        'step2.title': 'Preparation',
        'step2.desc': 'Creating and setting up all necessary accounts',
        'step3.title': 'Launch',
        'step3.desc': 'Creating and launching campaigns',
        'step4.title': 'Optimization',
        'step4.desc': 'Continuous improvement of results',

        // Services Section
        'services.title': 'Our Services',
        'services.subtitle': 'Full-cycle Google Ads management for your business',

        'service1.title': 'Campaign Audit',
        'service1.desc': 'Detailed campaign analysis with improvement recommendations.',

        'service2.title': 'Technical Setup',
        'service2.desc': 'GA4, GTM, and Merchant Center configuration for accurate conversion tracking.',

        'service3.title': 'Google Ads Launch',
        'service3.desc': 'Turnkey Performance Max, Shopping, Search, and Display campaigns.',

        'service4.title': 'Management & Optimization',
        'service4.desc': 'Daily monitoring and performance optimization.',

        'service5.title': 'Analytics & Reporting',
        'service5.desc': 'Weekly interactive reports in Google Looker Studio with detailed metrics.',

        'service6.title': 'Scaling Strategy',
        'service6.desc': 'Budget growth plan without losing efficiency. Testing new formats.',

        // Process Section
        'process.title': 'How We Work',
        'process.subtitle': 'Clear process at every stage',

        'process1.title': 'Analysis',
        'process1.desc': 'Study your business, audience, and competitors.',

        'process2.title': 'Planning',
        'process2.desc': 'Develop strategy, define KPIs and budgets.',

        'process3.title': 'Launch',
        'process3.desc': 'Create campaigns, configure GA4, GTM, Merchant Center.',

        'process4.title': 'Optimization',
        'process4.desc': 'A/B testing, audience segmentation, and bid optimization.',

        'process5.title': 'Reporting',
        'process5.desc': 'Visual reports in Looker Studio with detailed metrics breakdown.',

        'process6.title': 'Scaling',
        'process6.desc': 'Scale successful campaigns without losing efficiency.',

        // Reports Section
        'reports.title': 'Regular Reporting',
        'reports.subtitle': 'Interactive reports in Google Looker Studio',
        'reports.feature1': 'Order value and conversion count by campaign',
        'reports.feature2': 'Performance trends by period',
        'reports.feature3': 'ROAS, ad spend percentage, and cost per conversion',
        'reports.feature4': 'Top-performing and underperforming campaigns',

        // Cases Section
        'cases.title': 'Cases',
        'cases.subtitle': 'Real results from our clients',
        'cases.task.label': 'Task:',
        'cases.country.label': 'Country:',

        'case1.name': 'Souvenir online store',
        'case1.challenge': 'Full audit, technical setup, restructuring and campaign relaunch with focus on profit and conversion growth.',
        'case1.country': 'Poland 🇵🇱',
        'case1.roas.label': 'ROAS:',
        'case1.roas.value': '12.1 → 16.5',
        'case1.revenue.label': 'Revenue:',
        'case1.revenue.value': '+123,622 PLN',
        'case1.period.label': 'Period:',
        'case1.period.value': '5 months',

        'case2.name': 'Flower delivery and services in Bali',
        'case2.challenge': 'Scaling campaigns while maintaining efficiency for seasonal business (holidays, weddings, romantic services).',
        'case2.country': 'Indonesia 🇮🇩 (Bali)',
        'case2.roas.label': 'ROAS:',
        'case2.roas.value': '15.1 → 16.9',
        'case2.revenue.label': 'Revenue:',
        'case2.revenue.value': '+6,250,000 IDR',
        'case2.period.label': 'Period:',
        'case2.period.value': '7 months',

        'case3.name': 'Truck accessories store',
        'case3.challenge': 'Scaling campaigns with increased order volume while maintaining profitability and efficiency.',
        'case3.country': 'USA 🇺🇸',
        'case3.conversions.label': 'Conversions:',
        'case3.conversions.value': '2,412 → 4,425',
        'case3.revenue.label': 'Revenue:',
        'case3.revenue.value': '+90%',
        'case3.period.label': 'Period:',
        'case3.period.value': '12 months',

        // Benefits Section
        'benefits.title': 'Why Us?',

        'benefit1.title': 'Certified Specialists',
        'benefit1.desc': 'Only Google Partner Certified experts. Official Google Ads qualification confirmation.',

        'benefit4.title': 'Free Audit',
        'benefit4.desc': 'Detailed analysis of your current campaigns absolutely free. Get specific improvement recommendations.',

        'benefit6.title': 'ROAS Focus',
        'benefit6.desc': 'Main goal — growing your profitability. We optimize campaigns for maximum return on ad spend.',

        'benefit5.title': 'Online Business Experience',
        'benefit5.desc': 'Work with ecommerce and service companies. Deep expertise in promoting both products and services.',

        'benefit2.title': 'Honesty',
        'benefit2.desc': 'Transparent reporting, real numbers, full account access, and weekly reports.',

        'benefit3.title': 'No Technical Complexity',
        'benefit3.desc': 'We handle all technical aspects. Set up access to Google Ads, GA4, GTM, and Merchant Center.',

        // Pricing Section
        'pricing.title': 'Pricing',

        'price1.title': '<img src="images/cube.webp" alt="" class="pricing-title-icon">START',
        'price1.desc': 'For first launch or restart after previous unsuccessful attempts',
        'price1.budget': 'Ad budget up to $1,000/month',
        'price1.amount': 'from $300',
        'price1.period': '/month',
        'price1.cta': 'Get Started',

        'price2.badge': 'Popular',
        'price2.title': '<img src="images/cube.webp" alt="" class="pricing-title-icon">SCALE',
        'price2.desc': 'For growing businesses ready to scale revenue',
        'price2.budget': 'Ad budget $1,000-5,000/month',
        'price2.amount': 'from $400',
        'price2.period': '/month',
        'price2.cta': 'Discuss Project',

        'price3.title': '<img src="images/cube.webp" alt="" class="pricing-title-icon">ENTERPRISE',
        'price3.desc': 'For companies operating in multiple markets with custom KPIs',
        'price3.budget': 'Ad budget from $5,000/month and above',
        'price3.amount': 'from $1,000',
        'price3.period': '/month',
        'price3.cta': 'Request Quote',

        'price1.feature1': '✓ Comprehensive audit and strategy',
        'price1.feature2': '✓ 1-3 campaigns (PMax or Search + Shopping)',
        'price1.feature3': '✓ GA4, GTM, Merchant Center setup',
        'price1.feature4': '✓ Ongoing optimization and weekly reports',

        'price2.feature1': '✓ Everything from START plan',
        'price2.feature2': '✓ Up to 10 campaigns (PMax, Shopping, Search)',
        'price2.feature3': '✓ A/B testing and audience segmentation',
        'price2.feature4': '✓ Monthly strategic report with growth recommendations',
        'price2.feature5': '✓ Performance bonus for exceeding KPIs',

        'price3.feature1': '✓ Everything from SCALE plan',
        'price3.feature2': '✓ Unlimited campaigns',
        'price3.feature3': '✓ Strategy for multiple markets and languages',
        'price3.feature4': '✓ Bi-weekly strategic sessions',
        'price3.feature5': '✓ Flexible work based on individual KPIs',

        'audit.title': 'Ready to grow with Google Ads today?',
        'audit.text': '<span class="subtitle-check">✓</span>Request a free audit. We\'ll evaluate your site and current campaigns.',
        'audit.cta1': 'Contact on Telegram',
        'audit.cta2': 'Get Audit',
        'audit.benefits.title': 'What you\'ll get from the audit',

        'audit.benefit1.title': 'Technical Part',
        'audit.benefit1.desc': 'Conversion tracking, product feed, and analytics audit',
        'audit.benefit2.title': 'Advertising Structure',
        'audit.benefit2.desc': 'Identify high-performing campaigns and budget waste',
        'audit.benefit3.title': 'Growth Potential',
        'audit.benefit3.desc': 'Revenue and ROAS growth potential analysis',

        // Contact Section
        'contact.title': 'Let\'s Discuss Your Project',
        'contact.subtitle': '<span class="subtitle-check">✓</span>We\'ll respond within 1 hour',
        'contact.info.title': 'Contacts',
        'contact.phone.label': 'Phone',
        'contact.email.label': 'Email',
        'contact.messengers.label': 'Contact Us',
        'contact.note': 'Share your niche, average order value, and budget — this will help us prepare personalized recommendations.',

        'form.name': 'Your name *',
        'form.contact': 'Telegram, phone or email *',
        'form.company': 'Your company name',
        'form.market': 'Your country',
        'form.project': 'Niche, avg. order value, ad budget, profit margin',
        'form.privacy': 'By submitting, you agree to our privacy policy. We\'ll only contact you about your project — no spam.',
        'form.submit': 'Submit Request',

        // Footer
        'footer.description': 'Google Ads agency for online businesses. We increase ROAS and scale revenue.',
        'footer.services': 'Services',
        'footer.services.link1': 'Audit & Strategy',
        'footer.services.link2': 'Campaign Launch',
        'footer.services.link3': 'Management & Optimization',
        'footer.services.link4': 'Reporting',
        'footer.company': 'Company',
        'footer.company.link1': 'Why Us?',
        'footer.company.link2': 'Our Projects',
        'footer.company.link3': 'Pricing',
        'footer.company.link4': 'How We Work',
        'footer.company.link5': 'Contact',
        'footer.contacts': 'Contacts',
        'footer.copyright': '© 2025 QBIC Ads. All rights reserved.'
    },

    ua: {
        // Header
        'nav.services': 'Послуги',
        'nav.process': 'Як ми працюємо',
        'nav.cases': 'Кейси',
        'nav.benefits': 'Переваги',
        'nav.reports': 'Звіти',
        'nav.pricing': 'Тарифи',
        'nav.contact': 'Контакти',
        'header.cta': 'Отримати безкоштовний аудит',

        // Hero Section
        'hero.title': '<span class="hero-text-blue">Запускаємо та ведемо</span> <span class="highlight-google">Google Ads <img src="images/googleads.webp" alt="Google Ads" class="google-ads-icon"></span> <span class="hero-text-blue">для ecommerce та сервісних компаній з фокусом на прибуток</span> <img src="images/cube.webp" alt="" class="hero-title-cube">',
        'hero.subtitle': 'Google Ads повного циклу для онлайн-бізнесу в Європі та США.<br>Від стратегії до масштабування.',
        'hero.badge': 'Без довгих договорів — щомісячна оплата, прозора звітність',
        'hero.cta1': 'Отримати безкоштовний аудит',
        'hero.cta2': 'Написати в Telegram',

        // Steps
        'step1.title': 'Консультація',
        'step1.desc': 'Обговорення вашого бізнесу та цілей',
        'step2.title': 'Підготовка',
        'step2.desc': 'Створення та налаштування всіх необхідних акаунтів',
        'step3.title': 'Запуск',
        'step3.desc': 'Створення та запуск кампаній',
        'step4.title': 'Оптимізація',
        'step4.desc': 'Постійне покращення результатів',

        // Services Section
        'services.title': 'Наші послуги',
        'services.subtitle': 'Повний цикл управління Google Ads для вашого бізнесу',

        'service1.title': 'Аудит рекламних кампаній',
        'service1.desc': 'Детальний аналіз кампаній з рекомендаціями щодо покращення.',

        'service2.title': 'Технічне налаштування',
        'service2.desc': 'Налаштування GA4, GTM та Merchant Center для точного відстеження всіх конверсій.',

        'service3.title': 'Запуск Google Ads',
        'service3.desc': 'Створення Performance Max, Shopping, Search та Display кампаній під ключ.',

        'service4.title': 'Ведення та оптимізація',
        'service4.desc': 'Щоденний моніторинг та оптимізація роботи кампаній.',

        'service5.title': 'Аналітика та звітність',
        'service5.desc': 'Щотижневі інтерактивні звіти в Google Looker Studio з деталізацією по метриках.',

        'service6.title': 'Стратегія масштабування',
        'service6.desc': 'План зростання бюджету без втрати ефективності. Тестування нових форматів.',

        // Process Section
        'process.title': 'Як ми працюємо',
        'process.subtitle': 'Прозорий процес на кожному етапі',

        'process1.title': 'Аналіз',
        'process1.desc': 'Вивчаємо ваш бізнес, аудиторію та конкурентів.',

        'process2.title': 'Планування',
        'process2.desc': 'Розробляємо стратегію, визначаємо KPI та бюджети.',

        'process3.title': 'Запуск',
        'process3.desc': 'Створюємо кампанії, налаштовуємо GA4, GTM, Merchant Center.',

        'process4.title': 'Оптимізація',
        'process4.desc': 'A/B-тестування, сегментація аудиторій та оптимізація ставок.',

        'process5.title': 'Звітність',
        'process5.desc': 'Візуальні звіти в Looker Studio з детальною розбивкою метрик.',

        'process6.title': 'Масштабування',
        'process6.desc': 'Масштабуємо успішні кампанії без втрати ефективності.',

        // Benefits
        'benefits.title': 'Переваги роботи з нами',

        'benefit1.title': 'Сертифіковані спеціалісти',
        'benefit1.desc': 'Тільки експерти з сертифікацією Google Partner. Офіційне підтвердження кваліфікації Google Ads.',

        'benefit4.title': 'Безкоштовний аудит',
        'benefit4.desc': 'Детальний аналіз ваших поточних кампаній абсолютно безкоштовно. Отримайте конкретні рекомендації щодо покращення.',

        'benefit6.title': 'Фокус на ROAS',
        'benefit6.desc': 'Головна мета — підвищення вашої рентабельності. Оптимізуємо кампанії для максимальної віддачі від рекламних витрат.',

        'benefit5.title': 'Досвід в онлайн-бізнесі',
        'benefit5.desc': 'Працюємо з ecommerce та сервісними компаніями. Глибока експертиза в просуванні як товарів, так і послуг.',

        'benefit2.title': 'Чесність',
        'benefit2.desc': 'Прозора звітність, реальні цифри, повний доступ до акаунту та щотижневі звіти.',

        'benefit3.title': 'Без технічних складнощів',
        'benefit3.desc': 'Ми беремо на себе всі технічні аспекти. Налаштовуємо доступи до Google Ads, GA4, GTM та Merchant Center.',

        // Reports
        'reports.title': 'Регулярна звітність',
        'reports.subtitle': 'Для кожного проекту збираємо звіт в Google Looker Studio. У звіті ви бачите:',
        'reports.feature1': 'Сума замовлень та кількість конверсій по кампаніях',
        'reports.feature2': 'Динаміка метрик по періодах',
        'reports.feature3': 'ROAS, частка рекламних витрат та ціна за конверсію',
        'reports.feature4': 'Успішні та проблемні кампанії',
        'reports.note': 'Тут буде вбудований живий приклад звіту з вашого проекту, щоб ви могли за пару кліків перевірити, як працює реклама',

        // Cases Section
        'cases.title': 'Кейси',
        'cases.subtitle': 'Реальні результати наших клієнтів',
        'cases.task.label': 'Завдання:',
        'cases.country.label': 'Країна:',

        'case1.name': 'Інтернет-магазин сувенірів',
        'case1.challenge': 'Повний аудит, технічне налаштування, реструктуризація та перезапуск кампаній з фокусом на зростання прибутку та конверсій.',
        'case1.country': 'Польща 🇵🇱',
        'case1.roas.label': 'ROAS:',
        'case1.roas.value': '12.1 → 16.5',
        'case1.revenue.label': 'Виручка:',
        'case1.revenue.value': '+123,622 PLN',
        'case1.period.label': 'Період:',
        'case1.period.value': '5 місяців',

        'case2.name': 'Доставка квітів та послуги на Балі',
        'case2.challenge': 'Масштабування кампаній зі збереженням ефективності для сезонного бізнесу (свята, весілля, романтичні послуги).',
        'case2.country': 'Індонезія 🇮🇩 (Балі)',
        'case2.roas.label': 'ROAS:',
        'case2.roas.value': '15.1 → 16.9',
        'case2.revenue.label': 'Виручка:',
        'case2.revenue.value': '+6,250,000 IDR',
        'case2.period.label': 'Період:',
        'case2.period.value': '7 місяців',

        'case3.name': 'Магазин аксесуарів для вантажівок',
        'case3.challenge': 'Масштабування кампаній зі збільшенням обсягу замовлень при збереженні прибутковості та ефективності.',
        'case3.country': 'США 🇺🇸',
        'case3.conversions.label': 'Конверсії:',
        'case3.conversions.value': '2,412 → 4,425',
        'case3.revenue.label': 'Виручка:',
        'case3.revenue.value': '+90%',
        'case3.period.label': 'Період:',
        'case3.period.value': '12 місяців',

        // Pricing
        'pricing.title': 'Тарифи',

        'price1.title': '<img src="images/cube.webp" alt="" class="pricing-title-icon">СТАРТ',
        'price1.desc': 'Для першого запуску або перезапуску після невдалих спроб',
        'price1.budget': 'Рекламний бюджет до $1,000/місяць',
        'price1.amount': 'від $300',
        'price1.period': '/місяць',
        'price1.cta': 'Розпочати',

        'price2.badge': 'Популярний',
        'price2.title': '<img src="images/cube.webp" alt="" class="pricing-title-icon">МАСШТАБ',
        'price2.desc': 'Для компаній, що ростуть і готові масштабувати виручку',
        'price2.budget': 'Рекламний бюджет $1,000-5,000/місяць',
        'price2.amount': 'від $400',
        'price2.period': '/місяць',
        'price2.cta': 'Обговорити проект',

        'price3.title': '<img src="images/cube.webp" alt="" class="pricing-title-icon">ENTERPRISE',
        'price3.desc': 'Для компаній, що працюють на кількох ринках з індивідуальними KPI',
        'price3.budget': 'Рекламний бюджет від $5,000/місяць і вище',
        'price3.amount': 'від $1,000',
        'price3.period': '/місяць',
        'price3.cta': 'Запросити пропозицію',

        'price1.feature1': '✓ Комплексний аудит та стратегія',
        'price1.feature2': '✓ 1-3 кампанії (PMax або Search + Shopping)',
        'price1.feature3': '✓ Налаштування GA4, GTM, Merchant Center',
        'price1.feature4': '✓ Постійна оптимізація та щотижневі звіти',

        'price2.feature1': '✓ Все з тарифу СТАРТ',
        'price2.feature2': '✓ До 10 кампаній (PMax, Shopping, Search)',
        'price2.feature3': '✓ A/B-тести та сегментація аудиторій',
        'price2.feature4': '✓ Щомісячний стратегічний звіт з рекомендаціями по зростанню',
        'price2.feature5': '✓ Бонус за виконання за перевиконання KPI',

        'price3.feature1': '✓ Все з тарифу МАСШТАБ',
        'price3.feature2': '✓ Необмежена кількість кампаній',
        'price3.feature3': '✓ Стратегія під кілька ринків та мов',
        'price3.feature4': '✓ Щодвотижневі стратегічні сесії',
        'price3.feature5': '✓ Гнучка робота за індивідуальними KPI',

        'audit.title': 'Готові рости з Google Ads вже сьогодні?',
        'audit.text': '<span class="subtitle-check">✓</span>Залиште заявку на безкоштовний аудит. Оцінимо ваш сайт, поточну рекламу та покажемо точки зростання.',
        'audit.cta1': 'Зв\'язатися в Telegram',
        'audit.cta2': 'Отримати аудит',
        'audit.benefits.title': 'Що ви отримаєте за підсумком аудиту',

        'audit.benefit1.title': 'Технічна частина',
        'audit.benefit1.desc': 'Перевіримо конверсії, фід, базову аналітику',
        'audit.benefit2.title': 'Структура реклами',
        'audit.benefit2.desc': 'Дізнаємося що працює, а що зливає бюджет',
        'audit.benefit3.title': 'Оцінимо потенціал зростання',
        'audit.benefit3.desc': 'Оцінку по виручці та ROAS',

        'audit.note': 'Якщо зрозуміємо, що зараз не час масштабувати рекламу, так і скажемо вам.',

        // Contact
        'contact.title': 'Давайте обговоримо ваш проект',
        'contact.subtitle': '<span class="subtitle-check">✓</span>Відповімо протягом години',
        'contact.info.title': 'Контакти',
        'contact.phone.label': 'Телефон',
        'contact.messengers.label': 'Месенджери',
        'contact.email.label': 'Пошта',
        'contact.note': 'Напишіть, з якої ниші ви та в якому регіоні плануєте рекламуватися, щоб ми одразу перейшли до справи, а не до загальних питань.',

        'form.name': 'Як до вас звертатися *',
        'form.contact': 'Telegram, телефон або email *',
        'form.company': 'Назва вашої компанії',
        'form.market': 'Ваша країна',
        'form.project': 'Ніша, середній чек, приблизний бюджет на рекламу, середня маржинальність',
        'form.privacy': 'Натискаючи кнопку, ви погоджуєтеся на обробку ваших даних для зв\'язку по проекту. Ніякого спаму, тільки по справі.',
        'form.submit': 'Відправити заявку',

        // Footer
        'footer.description': 'Google Ads агентство для онлайн-бізнесу. Збільшуємо ROAS та масштабуємо виручку.',
        'footer.services': 'Послуги',
        'footer.services.link1': 'Аудит та стратегія',
        'footer.services.link2': 'Запуск кампаній',
        'footer.services.link3': 'Ведення та оптимізація',
        'footer.services.link4': 'Звітність',
        'footer.company': 'Компанія',
        'footer.contacts': 'Контакти',
        'footer.copyright': '© 2025 QBIC Ads. Всі права захищені.'
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

    // Default to Russian for other languages
    return 'ru';
}

// Detect language from URL path or query parameter
function getLanguageFromURL() {
    // Check URL path first (e.g., /ru/, /ua/)
    const path = window.location.pathname;
    const pathMatch = path.match(/^\/(ru|ua)\/?/);
    if (pathMatch) {
        return pathMatch[1];
    }

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

console.log('Language switcher initialized:', {
    langBtn: langBtn,
    langOptionsCount: langOptions.length
});

if (langBtn && langOptions.length > 0) {
    langOptions.forEach(option => {
        console.log('Adding listener to:', option.dataset.lang);
        option.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const selectedLang = option.dataset.lang;
            console.log('Language clicked:', selectedLang);
            switchLanguage(selectedLang);
            // Update URL based on language
            updateURL(selectedLang);
        });
    });
}

// Update URL based on selected language
function updateURL(lang) {
    let newURL;
    if (lang === 'en') {
        // English version - root domain
        newURL = window.location.origin + '/';
    } else {
        // Other languages - use path prefix
        newURL = window.location.origin + '/' + lang + '/';
    }

    // Update URL without page reload using History API
    window.history.pushState({lang: lang}, '', newURL);
}

// Switch language function
function switchLanguage(lang) {
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
window.addEventListener('DOMContentLoaded', () => {
    // Get language from URL, localStorage, or default
    const detectedLang = getLanguageFromURL();

    // Always initialize language to ensure page is translated
    switchLanguage(detectedLang);

    // Update URL if needed (in case language came from localStorage)
    const urlParams = new URLSearchParams(window.location.search);
    const hasLangParam = urlParams.has('lang');

    // Only update URL if we're not on a language-specific path and not using query param
    if (!window.location.pathname.match(/^\/(ru|ua)/) && !hasLangParam && detectedLang !== 'en') {
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

            // Reset form
            contactForm.reset();

            // Redirect to thank you page with current language
            const currentLang = localStorage.getItem('selectedLanguage') || 'en';
            window.location.href = `thankyou.html?lang=${currentLang}`;

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

// Console log
console.log('%c QBIC Ads ', 'background: #00d4ff; color: #1a1a2e; font-size: 20px; font-weight: bold; padding: 10px;');
console.log('%c 🚀 Google Ads Landing Page готова! ', 'background: #10b981; color: white; font-size: 14px; padding: 5px;');

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
