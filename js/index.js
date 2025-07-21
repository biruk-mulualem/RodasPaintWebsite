
// JavaScript for Image Slider
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
let currentSlideIndex = 0;

const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');
const paginationContainer = document.getElementById('pagination');

// Function to show a specific slide
function showSlide(index) {
  if (index < 0) {
    currentSlideIndex = totalSlides - 1; // Loop to the last slide
  } else if (index >= totalSlides) {
    currentSlideIndex = 0; // Loop to the first slide
  } else {
    currentSlideIndex = index;
  }

  // Move the slider container to the appropriate slide
  const offset = -currentSlideIndex * 100; // Move by 100% for each slide
  document.querySelector('.slider-container').style.transform = `translateX(${offset}%)`;

  // Update pagination
  updatePagination();
}

// Function to update the active state of pagination buttons
function updatePagination() {
  const paginationButtons = document.querySelectorAll('.pagination-btn');
  paginationButtons.forEach((button, index) => {
    button.classList.remove('active');
    if (index === currentSlideIndex) {
      button.classList.add('active');
    }
  });
}

// Function to create pagination
function createPagination() {
  for (let i = 0; i < totalSlides; i++) {
    const paginationButton = document.createElement('button');
    paginationButton.classList.add('pagination-btn');
    paginationButton.onclick = () => showSlide(i);
    paginationContainer.appendChild(paginationButton);
  }

  // Set the initial active pagination button
  updatePagination();
}

// Event listeners for navigation buttons
prevButton.addEventListener('click', () => showSlide(currentSlideIndex - 1));
nextButton.addEventListener('click', () => showSlide(currentSlideIndex + 1));

// Initialize pagination
createPagination();

// Auto-slide every 5 seconds
setInterval(() => {
  showSlide(currentSlideIndex + 1);
}, 5000);

// Initialize the first slide
showSlide(currentSlideIndex);

// JavaScript for Product Pagination and Rendering
const customProducts = [
  { name: "Water Tankers", description: "   Available in sizes ranging from 200L to 30,000L, our fiberglass water tankers are durable, corrosion-resistant, and ideal for storing water in diverse environments", image: "../images/tanker/t2.jpg" },
  { name: "Bathtubs", description: "We offer fiberglass bathtubs in various sizes and colors, providing a lightweight, durable, and low-maintenance option for your bathroom.", image: "../images/tanker/t2.jpg" },
  { name: "Shower Trays", description: "   Available in different sizes and colors, our fiberglass shower trays are strong, water-resistant, and easy to install.", image: "../images/tanker/t3.jpg" },
  { name: "Kitchen Sinks", description: "   Durable and easy to maintain, our fiberglass kitchen sinks are designed to withstand heavy use while maintaining their appearance.", image: "../images/tanker/t4.jpg" },
  { name: "Transparent & Translucent Roof Sheets", description: "   These roof sheets provide excellent light transmission while offering the durability and weather resistance of fiberglass.", image: "../images/tanker/t5.jpg" },
  { name: "Flower Pots", description: "Lightweight and weather-resistant, our fiberglass flower pots are available in various sizes and styles for both indoor and outdoor use.", image: "../images/tanker/t6.jpg" },
  { name: "Dustbins & Garbage Bins", description: "   Durable and easy to clean, our fiberglass dustbins and garbage bins are ideal for commercial and residential use.", image: "../images/tanker/t2.jpg" },
  { name: "Jacuzzi (Non-Electrical)", description: "   Our fiberglass Jacuzzis are perfect for relaxation, offering a non-electrical, low-maintenance alternative to traditional spa units.", image: "../images/tanker/t2.jpg" },
  { name: "Car Parking Sheds", description: "Fiberglass parking sheds provide durable, weather-resistant cover for your vehicles, with easy installation and minimal maintenance", image: "../images/tanker/t2.jpg" },
  { name: "Pick-Up Hard Tops", description: "These lightweight, strong fiberglass hardtops are designed to fit most pick-up trucks, offering weather protection and durability.", image: "../images/tanker/t2.jpg" },
  { name: "Children’s Swings", description: "Safe and durable, our fiberglass swings are designed for long-lasting use in playgrounds or parks.", image: "../images/tanker/t2.jpg" },
  { name: "Partitions", description: "    Strong, lightweight, and customizable, our fiberglass partitions are perfect for dividing spaces in commercial or industrial settings.", image: "../images/tanker/t2.jpg" },
  { name: "Molds for Gypsum Boards", description: "Durable fiberglass molds for gypsum boards ensure consistent, high-quality results for construction and design projects.", image: "../images/tanker/t2.jpg" }
];

const itemsPerPage = 3;
let currentPage = 1;

function renderProducts(page) {
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const pageProducts = customProducts.slice(start, end);

  const productContainer = document.getElementById('product-container');
  productContainer.innerHTML = '';

  pageProducts.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product');
    productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <div class="product-content">
                    <h3><a href="http://">${product.name}</a></h3>
                    <p>${product.description}</p>
                </div>
            `;
    productContainer.appendChild(productCard);
  });

  renderPagination(page);
}

function renderPagination(page) {
  const totalPages = Math.ceil(customProducts.length / itemsPerPage);
  const paginationControls = document.getElementById('pagination-controls');
  paginationControls.innerHTML = '';

  for (let i = 1; i <= totalPages; i++) {
    const pageButton = document.createElement('button');
    pageButton.classList.add('page-button');
    pageButton.textContent = i;
    pageButton.onclick = () => {
      currentPage = i;
      renderProducts(currentPage);
    };

    if (i === page) {
      pageButton.disabled = true;
    }

    paginationControls.appendChild(pageButton);
  }
}

renderProducts(currentPage);

