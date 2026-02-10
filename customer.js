// ===== CART + MODAL QUANTITY LOGIC =====
let selectedPricePerKg = 0;
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let selectedProduct = "";

const modal = document.getElementById("qtyModal");
const modalProductName = document.getElementById("modalProductName");
const modalQty = document.getElementById("modalQty");
const modalUnit = document.getElementById("modalUnit");
const confirmAdd = document.getElementById("confirmAdd");
const cartBtn = document.querySelector(".nav-btn");

// Open modal on Add to Cart
document.querySelectorAll(".cart-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".product-card");

    selectedProduct = card.querySelector("h3").innerText;

    // ⭐ PRICE PER KG 
    selectedPricePerKg = parseFloat(
      card.querySelector(".price").dataset.price
    );

    modalProductName.innerText = selectedProduct;
    modalQty.value = "";
    modalUnit.value = "kg";

    updatePriceDisplay(); // ⭐ price auto show

    modal.style.display = "flex";
  });
});


// Confirm add
confirmAdd.addEventListener("click", () => {
  const qty = parseFloat(modalQty.value);
  const unit = modalUnit.value;

  if (!qty || qty <= 0) {
    alert("❗ Enter valid quantity");
    return;
  }

  const existing = cart.find(item => item.name === selectedProduct);

  if (existing) {
    existing.quantity += qty;
  } else {
    cart.push({
      name: selectedProduct,
      quantity: qty,
      unit: unit
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  closeModal();
});

function closeModal() {
  modal.style.display = "none";
}
function updatePriceDisplay() {
  const qty = parseFloat(modalQty.value) || 0;
  const unit = modalUnit.value;

  let multiplier = 1;
  if (unit === "quintal") multiplier = 100;
  if (unit === "ton") multiplier = 1000;

  const totalPrice = qty * multiplier * selectedPricePerKg;

  document.getElementById("modalPriceText").innerText =
    `Price: ₹${totalPrice.toFixed(2)}`;
}

function updateCartCount() {
  cartBtn.innerText = `🛒 Cart ${cart.length}`;
}

updateCartCount();

    // Optional feedback
   confirmAdd.innerText = "✔ Added";
setTimeout(() => {
  confirmAdd.innerText = "Add to Cart";
}, 800);

modalQty.addEventListener("input", updatePriceDisplay);
modalUnit.addEventListener("change", updatePriceDisplay);

console.log(cart);

// CART BUTTON SCROLL TO CART SECTION 
document.getElementById("cartBtn").addEventListener("click", () => {
  const cartSection = document.getElementById("cartSection");
  if (cartSection) {
    cartSection.scrollIntoView({ behavior: "smooth" });
  }
});


// Search Bar
const searchInput = document.getElementById("searchInput");
const productCards = document.querySelectorAll(".product-card");

searchInput.addEventListener("keyup", function () {
  const searchValue = searchInput.value.toLowerCase();

  productCards.forEach(card => {
    const productName = card.querySelector("h3").innerText.toLowerCase();
    const farmerName = card.querySelector("p").innerText.toLowerCase();

    if (productName.includes(searchValue) || farmerName.includes(searchValue)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

// Profile section
const profileBtn = document.getElementById("profileBtn");
const profileDropdown = document.getElementById("profileDropdown");

profileBtn.addEventListener("click", () => {
  profileDropdown.style.display =
    profileDropdown.style.display === "flex" ? "none" : "flex";
});

// Close on clicking outside
document.addEventListener("click", (e) => {
  if (!profileBtn.contains(e.target)) {
    profileDropdown.style.display = "none";
  }
});


// category section
function filterCategory(category) {
  const products = document.querySelectorAll('.product-card');

  products.forEach(product => {
    const productCategory = product.getAttribute('data-category');

    if (category === 'all' || productCategory === category) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}


// Get customer name from localStorage
const customerName = localStorage.getItem("customerName") || "Customer";

// Time based greeting
const hour = new Date().getHours();
let greeting;

if (hour < 12) {
  greeting = "Good Morning";
} else if (hour < 17) {
  greeting = "Good Afternoon";
} else {
  greeting = "Good Evening";
}

// Show greeting on dashboard
document.getElementById("greetText").innerText =
  `${greeting}, ${customerName} 👋`;
