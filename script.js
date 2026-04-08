const projectsData = [
    {
        title: "E-Commerce Platform",
        image: "https://via.placeholder.com/400x300?text=E-Commerce",
        description: "Full-featured e-commerce with React and Node.js",
        tags: ["React", "Node.js", "MongoDB"]
    },
    {
        title: "Task Management App",
        image: "https://via.placeholder.com/400x300?text=Task+App",
        description: "Collaborative task manager with real-time updates",
        tags: ["Vue.js", "Firebase", "Tailwind"]
    },
    {
        title: "Analytics Dashboard",
        image: "https://via.placeholder.com/400x300?text=Dashboard",
        description: "Real-time analytics with interactive charts",
        tags: ["React", "D3.js", "GraphQL"]
    }
];

function renderProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    projectsGrid.innerHTML = '';

    projectsData.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div>
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        `;
        projectsGrid.appendChild(projectCard);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderProjects();

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message!');
            contactForm.reset();
        });
    }
});
