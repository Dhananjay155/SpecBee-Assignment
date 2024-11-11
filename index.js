const speakersList = document.querySelector(".speakers__list");
const prevBtn = document.querySelector(".speakers__arrow--left");
const nextBtn = document.querySelector(".speakers__arrow--right");
const modal = document.querySelector(".modal");

const allSpeakers = [
  {
    name: "John Doe",
    company: "Specbee",
    position: "Chief Marketing Officer",
    image: "./assets/Photo1.png",
    description:
      "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.",
  },
  {
    name: "John Doe",
    company: "Specbee",
    position: "Chief Marketing Officer",
    image: "./assets/Photo2.png",
    description:
      "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.",
  },
  {
    name: "John Doe",
    company: "Specbee",
    position: "Chief Marketing Officer",
    image: "./assets/Photo3.png",
    description:
      "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.",
  },
  {
    name: "John Doe",
    company: "Specbee",
    position: "Chief Marketing Officer",
    image: "./assets/Photo4.png",
    description:
      "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.",
  },
  
  {
    name: "John Doe",
    company: "Specbee",
    position: "Chief Marketing Officer",
    image: "./assets/Photo4.png",
    description:
      "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.",
  },
  {
    name: "John Doe",
    company: "Specbee",
    position: "Chief Marketing Officer",
    image: "./assets/Photo3.png",
    description:
      "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.",
  },
  {
    name: "John Doe",
    company: "Specbee",
    position: "Chief Marketing Officer",
    image: "./assets/Photo2.png",
    description:
      "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.",
  },
  {
    name: "John Doe",
    company: "Specbee",
    position: "Chief Marketing Officer",
    image: "./assets/Photo1.png",
    description:
      "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.",
  },
  {
    name: "John Doe",
    company: "Specbee",
    position: "Chief Marketing Officer",
    image: "./assets/Photo3.png",
    description:
      "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.",
  },
  {
    name: "John Doe",
    company: "Specbee",
    position: "Chief Marketing Officer",
    image: "./assets/Photo4.png",
    description:
      "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.",
  },
  {
    name: "John Doe",
    company: "Specbee",
    position: "Chief Marketing Officer",
    image: "./assets/Photo1.png",
    description:
      "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.",
  },
  {
    name: "John Doe",
    company: "Specbee",
    position: "Chief Marketing Officer",
    image: "./assets/Photo2.png",
    description:
      "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.",
  },
  
];

let currentPage = 1;
let itemsPerPage = 4; 

function renderSpeakers() {
  speakersList.innerHTML = ""; 
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const speakersToDisplay = allSpeakers.slice(start, end);

  speakersToDisplay.forEach((speaker) => {
    const speakerCard = document.createElement("div");
    speakerCard.classList.add("speaker__card");
    speakerCard.innerHTML = `
      <img src="${speaker.image}" alt="${speaker.name}" class="speaker__card__photo" />
      <h3 class="speaker__card__name">${speaker.name}</h3>
      <p class="speaker__card__position">${speaker.position}</p>
      <p class="speaker__card__description">${speaker.company}</p>
    `;

    speakerCard.addEventListener("click", () => {
      showModal(speaker); 
    });

    speakersList.appendChild(speakerCard);
  });

  updateButtonStates();
}

function showModal(speaker) {
  modal.innerHTML = `
    <div class="modal__container">
      <button class="modal__close">&times;</button>
      <div class="modal__profile">
        <img src="${speaker.image}" alt="${speaker.name}" class="modal__profile__photo" />
      </div>
      
      <div class="modal__details">
        <h2 class="modal__name">${speaker.name}</h2>
        <p class="modal__position">${speaker.position}</p>
        <p class="modal__company">${speaker.company}</p>
        
        <div class="modal__profile__socialicon">
       <i class="fa-brands fa-drupal fa-sm" style="margin-top:10px"></i>
        <i class="ri-twitter-x-line"></i>
        <i class="ri-linkedin-box-line"></i>
      </div>
      
      </div><hr class="modal__line">
      
      <p class="modal__description">${speaker.description}</p>
    </div>
  `;
  modal.style.display = "block"; 
  const closeBtn = modal.querySelector(".modal__close");
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none"; 
  });
}

function updateButtonStates() {
  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage * itemsPerPage >= allSpeakers.length;
}

function updateItems() {
  const screenWidth = window.innerWidth;
  if (screenWidth > 1400) {
    itemsPerPage = 4;
  } else if (screenWidth >= 1240) {
    itemsPerPage = 3;
  } else if (screenWidth >= 768) {
    itemsPerPage = 2;
  } else {
    itemsPerPage = 1;
  }

  currentPage = 1;
  renderSpeakers();
}

const renderNext = () => {
  if (currentPage * itemsPerPage < allSpeakers.length) {
    currentPage++;
    renderSpeakers();
  }
};

const renderPrev = () => {
  if (currentPage > 1) {
    currentPage--;
    renderSpeakers();
  }
};

updateItems();
window.addEventListener("resize", updateItems);

prevBtn.addEventListener("click", renderPrev);
nextBtn.addEventListener("click", renderNext);
