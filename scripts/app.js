// Array of speaker data
const speakers = [
    {
        name: "John Doe",
        title: "Chief Marketing Officer",
        company: "Acme Corp",
        description: "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.",
        image: "./assets/images/1.jpg",
        social: {
            twitter: "#",
            linkedin: "#",
            facebook: "#"
        }
    },
    {
        name: "Jane Smith",
        title: "Chief Engagement Officer",
        company: "Acquia",
        description: "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.",
        image: "./assets/images/2.jpg",
        social: {
            twitter: "#",
            linkedin: "#",
            facebook: "#"
        }
    },
    {
        name: "Bob Johnson",
        title: "Chief Technical Developer",
        company: "Pantheon",
        description: "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.",
        image: "./assets/images/3.jpg",
        social: {
            twitter: "#",
            linkedin: "#",
            facebook: "#"
        }
    },
    {
        name: "veliem seo",
        title: "Chief Marketing Officer",
        company: "Specbee",
        description: "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.",
        image: "./assets/images/4.jpg",
        social: {
            twitter: "#",
            linkedin: "#",
            facebook: "#"
        }
    },
];

// DOM Elements
const speakerSlider = document.getElementById("speaker-slider");
const modal = document.getElementById("modal");
const closeModalButton = document.getElementById("close-modal");
const modalSpeakerInfo = document.getElementById("modal-speaker-info");

// Function to create speaker cards
function createSpeakerCards() {
    speakers.forEach((speaker, index) => {
        const card = document.createElement("div");
        card.className = "speaker-card";
        card.innerHTML = `
            <img src="${speaker.image}" alt="${speaker.name}" class="speaker-card__image">
            <div class="speaker-card__name">${speaker.name}</div>
            <div class="speaker-card__title">${speaker.title}</div>
            <div class="speaker-card__company">${speaker.company}</div>
        `;
        card.addEventListener("click", () => showSpeakerDetails(index));
        speakerSlider.appendChild(card);
    });
}

// Function to show speaker details in modal
function showSpeakerDetails(index) {
    const speaker = speakers[index];
    modalSpeakerInfo.innerHTML = `
        <img src="${speaker.image}" alt="${speaker.name}" class="speaker-card__image">
        <div class="modal__speaker-name">${speaker.name}</div>
        <div class="modal__speaker-title">${speaker.title}, ${speaker.company}</div>
        <p class="modal__description">${speaker.description}</p>
    `;
    modal.style.display = "flex";
}

// Event listener to close modal
closeModalButton.addEventListener("click", () => {
    modal.style.display = "none";
});

// Initialize the slider
createSpeakerCards();
