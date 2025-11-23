/**
 * ╔═══════════════════════════════════════════════════════════════╗
 * ║  © 2024-2025 Riski (rclayskuy10)                             ║
 * ║  Landing Page Café BangKi - JavaScript                       ║
 * ║  ───────────────────────────────────────────────────────────  ║
 * ║  ⚠️  PROTECTED BY COPYRIGHT - ALL RIGHTS RESERVED            ║
 * ║                                                               ║
 * ║  PERINGATAN:                                                 ║
 * ║  Script ini dilindungi hak cipta. Penggunaan, modifikasi,    ║
 * ║  atau distribusi tanpa izin adalah ILEGAL dan dapat          ║
 * ║  dikenakan sanksi hukum.                                     ║
 * ║                                                               ║
 * ║  Lisensi: https://saweria.co/riski2000                       ║
 * ║  Template ID: CAFE-BANGKI-2025-RCL                           ║
 * ╚═══════════════════════════════════════════════════════════════╝
 */

// Anti-Tampering Console Warning
console.log('%c⚠️ PERINGATAN HAK CIPTA ⚠️', 'color: red; font-size: 20px; font-weight: bold;');
console.log('%cTemplate ini dilindungi hak cipta © 2024-2025 Riski (rclayskuy10)', 'color: orange; font-size: 14px;');
console.log('%cMengubah atau menghapus watermark adalah ILEGAL', 'color: red; font-size: 12px;');
console.log('%cLisensi: https://saweria.co/riski2000', 'color: blue; font-size: 12px;');
console.log('%c═══════════════════════════════════════════════════════════', 'color: gray;');

// Copyright Protection - DO NOT REMOVE
(function() {
    'use strict';
    const templateId = 'CAFE-BANGKI-2025-RCL';
    const developer = 'Riski (rclayskuy10)';
    
    // Watermark verification
    setInterval(function() {
        const credit = document.querySelector('.developer-credit');
        if (!credit || credit.style.display === 'none' || credit.style.visibility === 'hidden') {
            console.error('⚠️ COPYRIGHT VIOLATION DETECTED!');
            console.error('Watermark removal is illegal. Template ID:', templateId);
        }
    }, 5000);
    
    // Console protection message
    Object.defineProperty(window, 'templateInfo', {
        get: function() {
            return {
                id: templateId,
                developer: developer,
                copyright: '© 2024-2025',
                license: 'https://saweria.co/riski2000',
                warning: '⚠️ This template is protected by copyright law'
            };
        }
    });
})();

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Close mobile menu if open
            const navMenu = document.getElementById('nav-menu');
            const hamburger = document.getElementById('hamburger');
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        }
    });
});

// Navbar Background Change on Scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Fade-in Animation on Scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all elements with fade-in class
document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => {
        observer.observe(element);
    });
});

// Active Navigation Link
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Parallax Effect on Hero Section
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const scrolled = window.scrollY;
    if (hero && scrolled < hero.offsetHeight) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// Add hover effect for menu cards
const menuCards = document.querySelectorAll('.menu-card');
menuCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Gallery item click effect
const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach(item => {
    item.addEventListener('click', function() {
        const img = this.querySelector('img');
        // Optional: You can add a lightbox effect here
        console.log('Gallery item clicked:', img.src);
    });
});

// Scroll to top button (optional enhancement)
function addScrollToTop() {
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollBtn.className = 'scroll-to-top';
    
    document.body.appendChild(scrollBtn);
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    });
    
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Initialize scroll to top button
addScrollToTop();

// Preload images for better performance
function preloadImages() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        const src = img.getAttribute('src');
        if (src) {
            const preloadImg = new Image();
            preloadImg.src = src;
        }
    });
}

// Call preload on page load
window.addEventListener('load', preloadImages);

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
    
    // Set dynamic year for copyright
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});