// ============================================
// DARK MODE TOGGLE
// ============================================

const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;
const THEME_STORAGE_KEY = 'portfolio-theme-preference';

/**
 * Initialize theme on page load
 */
function initializeTheme() {
    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Use stored preference, fall back to system preference
    const shouldBeDark = storedTheme === 'dark' || (storedTheme === null && prefersDark);
    
    if (shouldBeDark) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
}

/**
 * Toggle dark mode and save preference
 */
function toggleTheme() {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    localStorage.setItem(THEME_STORAGE_KEY, isDarkMode ? 'dark' : 'light');
    
    // Announce theme change to screen readers
    const newTheme = isDarkMode ? 'Dark' : 'Light';
    themeToggle.setAttribute('aria-label', `Switch to ${newTheme} mode`);
}

// Event listener for theme toggle
if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
}

const navbarToggle = document.getElementById('navbarToggle');
const navbarMenu = document.getElementById('navbarMenu');

function closeNavbarMenu() {
    if (!navbarMenu || !navbarToggle) return;
    navbarMenu.classList.remove('open');
    navbarToggle.setAttribute('aria-expanded', 'false');
    navbarToggle.setAttribute('aria-label', 'Open navigation');
    document.body.classList.remove('nav-open');
}

function toggleNavbarMenu() {
    if (!navbarMenu || !navbarToggle) return;
    const isOpen = navbarMenu.classList.toggle('open');
    navbarToggle.setAttribute('aria-expanded', String(isOpen));
    navbarToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    document.body.classList.toggle('nav-open', isOpen);
}

if (navbarToggle) {
    navbarToggle.addEventListener('click', toggleNavbarMenu);
}

// Close mobile menu after a nav link click
if (navbarMenu) {
    navbarMenu.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', closeNavbarMenu);
    });
}

// Close mobile menu on desktop resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        closeNavbarMenu();
    }
});

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', initializeTheme);

// ============================================
// SMOOTH SCROLLING
// ============================================

/**
 * Handle smooth scrolling for anchor links
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        
        // Skip if href is just "#"
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            // Close mobile menu if open (for future implementation)
            
            setTimeout(() => {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 100);
            
            // Update URL without triggering scroll
            window.history.pushState(null, null, targetId);
        }
    });
});

// ============================================
// NAVIGATION ACTIVE STATE
// ============================================

/**
 * Update active navigation link based on scroll position
 */
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 200) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// Update active nav link on scroll
window.addEventListener('scroll', updateActiveNavLink);
document.addEventListener('DOMContentLoaded', updateActiveNavLink);

// ============================================
// CONTACT FORM HANDLING (with Formspree)
// ============================================

/**
 * Formspree handles form submission automatically via the @formspree/ajax library.
 * The form uses data attributes for validation and error handling:
 * - data-fs-field: marks input fields for validation
 * - data-fs-error: displays field-level error messages
 * - data-fs-success: displays success message
 * - data-fs-submit-btn: button disabled during submission
 */

// No additional form handling needed - Formspree library takes care of it!
// Messages are automatically sent to: jedwardmamba@gmail.com

// ============================================
// SCROLL ANIMATIONS
// ============================================

/**
 * Animate elements on scroll
 */
function observeElements() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Stagger animation for multiple elements
                setTimeout(() => {
                    entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe cards and items
    document.querySelectorAll('.service-card, .why-card, .step, .experience-item, .skill-tag, .credential-card').forEach(el => {
        observer.observe(el);
    });
}

document.addEventListener('DOMContentLoaded', observeElements);

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Debounce function for scroll events
 */
function debounce(func, wait = 100) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Check if element is in viewport
 */
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

// ============================================
// PERFORMANCE: Lazy Loading for Images (if added later)
// ============================================

/**
 * Initialize lazy loading for images
 */
function initLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

document.addEventListener('DOMContentLoaded', initLazyLoading);

// ============================================
// KEYBOARD ACCESSIBILITY
// ============================================

/**
 * Handle keyboard navigation
 */
document.addEventListener('keydown', (e) => {
    // Close any open modals with Escape key
    if (e.key === 'Escape') {
        // Add modal close logic here if needed
    }
});

// ============================================
// LOG INITIALIZATION
// ============================================

console.log('%c Virtual Assistant Landing Page Loaded Successfully ✓', 'color: #3b82f6; font-weight: bold; font-size: 14px;');
console.log('John Edward Mamba - High-Converting VA Landing Page');
console.log('Features: Dark Mode • Light Mode • Responsive Design • Conversion Optimized');
console.log('Contact: jedwardmamba@gmail.com | Phone: +63 916 301 3408');
