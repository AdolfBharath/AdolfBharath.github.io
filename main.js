// Hacker Theme JavaScript: main.js

const headerTextElement = document.getElementById('header-text');
const originalHeader = 'Initializing System... Welcome, AdolfBharath. Access Granted to System_Root: Portfolio 2.0';
const typingSpeed = 50; // Speed in milliseconds per character
let charIndex = 0;

/**
 * Executes the character-by-character typing animation.
 */
function typeHeader() {
    if (charIndex < originalHeader.length) {
        // Append the next character
        headerTextElement.textContent += originalHeader.charAt(charIndex);
        charIndex++;
        // Continue typing after a short delay
        setTimeout(typeHeader, typingSpeed);
    } else {
        // Animation complete: add blinking cursor and glitch effect to the final text
        headerTextElement.classList.add('glitch-text');
        headerTextElement.innerHTML += '<span class="blinking-cursor">|</span>';
        
        // Remove the cursor after 3 seconds for a cleaner look
        setTimeout(() => {
            const cursor = headerTextElement.querySelector('.blinking-cursor');
            if (cursor) cursor.remove();
        }, 3000);
    }
}

/**
 * Initializes all portfolio animations and effects.
 */
function initHackerPortfolio() {
    // 1. Clear the header text so it can be typed out
    headerTextElement.textContent = '';
    
    // 2. Start the typing animation sequence
    typeHeader();

    // 3. Add smooth scrolling for command links
    document.querySelectorAll('.command-menu a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            // Simulate a command execution delay before scrolling
            setTimeout(() => {
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            }, 500);
        });
    });

    // 4. Log a message to the browser console for extra flair
    console.log("%cSYSTEM: Welcome to AdolfBharath's Digital Root.", "color: #00FF41; font-size: 14px;");
}

// Start the whole sequence when the page is loaded
document.addEventListener('DOMContentLoaded', initHackerPortfolio);
