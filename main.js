    // DOM Elements
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navbar = document.getElementById('navbar');
const form = document.querySelector('.contact-form');

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a nav link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Adjust for fixed header
                behavior: 'smooth'
            });
        }
    });
});

// Form submission
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });
        
        // Here you would typically send the form data to a server
        console.log('Form submitted:', formObject);
        
        // Show success message
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.textContent = 'Thank you for your message! I will get back to you soon.';
        successMessage.style.padding = '1rem';
        successMessage.style.backgroundColor = '#d1fae5';
        successMessage.style.borderRadius = '0.375rem';
        successMessage.style.marginTop = '1rem';
        successMessage.style.color = '#065f46';
        
        // Clear previous messages
        const existingMessage = form.querySelector('.success-message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        form.appendChild(successMessage);
        form.reset();
        
        // Remove message after 5 seconds
        setTimeout(() => {
            successMessage.style.opacity = '0';
            setTimeout(() => {
                successMessage.remove();
            }, 300);
        }, 5000);
    });
}

// Set current year in footer
const yearElement = document.getElementById('year');
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// Intersection Observer for scroll animations (reveal utility)
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };

function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) - 50 &&
        rect.bottom >= 0
    );
}

function initReveals() {
    const revealEls = document.querySelectorAll('.reveal');

    // Fallback if IntersectionObserver is unavailable
    if (!('IntersectionObserver' in window)) {
        revealEls.forEach(el => el.classList.add('in-view'));
        return;
    }

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    revealEls.forEach((el, index) => {
        // Stagger via inline delay
        el.style.transitionDelay = `${Math.min(index * 0.06, 0.6)}s`;
        revealObserver.observe(el);

        // Immediately show items already in viewport on load
        if (isInViewport(el)) {
            el.classList.add('in-view');
        }
    });

    // Re-check on resize (handles viewport changes)
    window.addEventListener('resize', () => {
        revealEls.forEach(el => {
            if (isInViewport(el)) {
                el.classList.add('in-view');
            }
        });
    });
}

// Initialize reveals after DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initReveals);
} else {
    initReveals();
}

// Add active class to current section in navigation
const navItems = document.querySelectorAll('.nav-links a');

function updateActiveNav() {
    let fromTop = window.scrollY + 100;
    
    navItems.forEach(link => {
        const section = document.querySelector(link.getAttribute('href'));
        
        if (
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop
        ) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Initial call to set active nav item
updateActiveNav();

// Update active nav on scroll
window.addEventListener('scroll', updateActiveNav);

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});
