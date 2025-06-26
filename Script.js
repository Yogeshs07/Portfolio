// Dynamic Skills (Example)
const skillsData = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 80 }
    // ... more skills
];

const skillsGrid = document.querySelector(".skills-grid");

skillsData.forEach(skill => {
    const skillElement = `
        <div class="skill">
            <h3>${skill.name}</h3>
            <div class="skill-bar">
                <div class="skill-level" style="width: ${skill.level}%"></div>
            </div>
        </div>
    `;
    skillsGrid.innerHTML += skillElement;
});

// Dynamic Projects (Example - Fetch from an API or JSON file)
// ... (Code to fetch and display project data)

// Contact Form Handling (Example)
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Basic validation (You'll need more robust validation)
    if (name && email && message) {
        // Here you would typically send the form data to your server
        console.log("Form submitted:", { name, email, message });
        alert("Thank you for your message!");
        contactForm.reset();
    } else {
        alert("Please fill in all fields.");
    }
});