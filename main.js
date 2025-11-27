// Dynamically load projects
const projects = [
    {
        title: "Deepfake Detection Tool",
        image: "img/deepfake-detection.jpg",
        description: "Developed a CNN-based Python tool using TensorFlow and OpenCV to detect deepfake images with 85% accuracy."
    },
    {
        title: "Network Vulnerability Scanner",
        image: "img/vulnerability-scanner.jpg",
        description: "A Python-based tool to scan networks for vulnerabilities and generate detailed reports."
    },
    {
        title: "Ethical Hacking Lab",
        image: "img/e-learning.jpg",
        description: "Created a lab environment for testing penetration techniques safely."
    }
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

// Contact Form Submission (simple alert)
document.getElementById('contact-form').addEventListener('submit', function(e){
    e.preventDefault();
    alert("Thank you for contacting me! I will get back to you soon.");
    this.reset();
});
