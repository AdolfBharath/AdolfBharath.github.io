// Typing Animation
const typingTitle = document.querySelector('.typing-title');
const titleText = "Bharath M - Ethical Hacker & Cybersecurity Analyst";
let index = 0;

function typeWriter() {
    if(index < titleText.length) {
        typingTitle.textContent += titleText.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    }
}
typeWriter();

// Dynamically load projects
const projects = [
    { title: "Deepfake Detection Tool", image: "img/project1.jpg", description: "CNN-based tool detecting deepfake images with 85% accuracy." },
    { title: "Network Vulnerability Scanner", image: "img/project2.jpg", description: "Python tool scanning networks for vulnerabilities." },
    { title: "Ethical Hacking Lab", image: "img/project3.jpg", description: "Safe environment to test penetration techniques." }
];

const projectsGrid = document.getElementById('projects-grid');
projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
        <img src="${project.image}" alt="${project.title}">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
    `;
    projectsGrid.appendChild(card);
});

// Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', function(e){
    e.preventDefault();
    alert("Thank you for contacting me! I will get back to you soon.");
    this.reset();
});

// Matrix Background Animation
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const letters = "01";
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = [];

for(let x=0; x<columns; x++) drops[x] = 1;

function drawMatrix() {
    ctx.fillStyle = "rgba(0,0,0,0.05)";
    ctx.fillRect(0,0,canvas.width, canvas.height);
    ctx.fillStyle = "#0F0";
    ctx.font = fontSize + "px monospace";
    
    for(let i=0; i<drops.length; i++){
        const text = letters[Math.floor(Math.random()*letters.length)];
        ctx.fillText(text, i*fontSize, drops[i]*fontSize);
        if(drops[i]*fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
    }
}
setInterval(drawMatrix, 50);
