// ================= CATEGORY ACTIVE =================

const categories = document.querySelectorAll(".category");

categories.forEach((category) => {
  category.addEventListener("click", () => {
    categories.forEach((item) => item.classList.remove("active"));
    category.classList.add("active");
  });
});





// ================= RENDER PRODUCTS =================

function renderProducts(containerId, items) {
  const container = document.getElementById(containerId);

  if (!container) return;

  container.innerHTML = "";

  items.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("product-card");

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p class="price">${product.price}</p>
      <p class="offer">${product.offer}</p>
      <div class="rating">${product.rating}</div>
    `;

    container.appendChild(card);
  });
}



// HERO SLIDER
const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");
const heroNext = document.querySelector(".slider .next");
const heroPrev = document.querySelector(".slider .prev");
const dotsContainer = document.querySelector(".dots");

let heroIndex = 0;

images.forEach((_, i) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");

  if (i === 0) dot.classList.add("active");

  dot.addEventListener("click", () => {
    heroIndex = i;
    showHeroSlide();
  });

  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

function showHeroSlide() {
  slides.style.transform = `translateX(-${heroIndex * 100}%)`;

  dots.forEach(dot => dot.classList.remove("active"));
  dots[heroIndex].classList.add("active");
}

heroNext.addEventListener("click", () => {
  heroIndex = (heroIndex + 1) % images.length;
  showHeroSlide();
});

heroPrev.addEventListener("click", () => {
  heroIndex = (heroIndex - 1 + images.length) % images.length;
  showHeroSlide();
});

setInterval(() => {
  heroIndex = (heroIndex + 1) % images.length;
  showHeroSlide();
}, 3000);


// PRODUCT SLIDER
const track = document.querySelector(".product-track");
const cards = document.querySelectorAll(".product-slider-container .product-card");
const nextBtn = document.querySelector(".product-next");
const prevBtn = document.querySelector(".product-prev");

let currentIndex = 0;
const visibleCards = 5;
const cardWidth = 195; // adjust if needed

function updateSlider() {
  track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

nextBtn.addEventListener("click", () => {
  if (currentIndex >= cards.length - visibleCards) {
    currentIndex = 0; // repeat from start
  } else {
    currentIndex++;
  }

  updateSlider();
});

prevBtn.addEventListener("click", () => {
  if (currentIndex <= 0) {
    currentIndex = cards.length - visibleCards; // go to end
  } else {
    currentIndex--;
  }

  updateSlider();
});

updateSlider();

// =====================sugestionn================

const suggestedContainer = document.querySelector(".suggested-products");
const suggestedBtn = document.querySelector(".scroll-btn");

suggestedBtn.addEventListener("click", () => {
  suggestedContainer.scrollBy({
    left: 800,
    behavior: "smooth"
  });
});




// spotlight slider
const spotlightRow = document.querySelectorAll(".ad-row")[0];
const spotlightBtn = spotlightRow.querySelector(".ad-next");

spotlightBtn.addEventListener("click", () => {
  spotlightRow.scrollBy({
    left: 550,
    behavior: "smooth"
  });
});


// featured brands slider
const featuredRow = document.querySelectorAll(".ad-row")[1];
const featuredBtn = featuredRow.querySelector(".ad-next");

featuredBtn.addEventListener("click", () => {
  featuredRow.scrollBy({
    left: 550,
    behavior: "smooth"
  });
});


// people also viewed slider
const peopleProducts = document.querySelector(".people-products");

let peopleIndex = 0;
const peopleCards = document.querySelectorAll(".people-card");
const visiblePeople = 4;
const peopleCardWidth = 305;

function updatePeopleSlider() {
  peopleProducts.style.transform = `translateX(-${peopleIndex * peopleCardWidth}px)`;
}

setInterval(() => {
  if (peopleIndex >= peopleCards.length - visiblePeople) {
    peopleIndex = 0;
  } else {
    peopleIndex++;
  }

  updatePeopleSlider();
}, 3000);