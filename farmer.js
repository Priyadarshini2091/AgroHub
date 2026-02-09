let currentSection="";

//Optional
const quotes = [
  "Small seeds grow big futures 🌱",
  "Patience today, harvest tomorrow 🌾",
  "Your land mirrors your dedication",
  "Grow smart, grow strong",
  "Nature rewards consistency"
];




const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
let editIndex = null;



//  Greet 

//Profile DropDown
function toggleProfileMenu(){
  const menu = document.getElementById("profileMenu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

/* Close dropdown when clicking outside */
document.addEventListener("click", function(e){
  const profile = document.querySelector(".profile-wrapper");
  if(!profile.contains(e.target)){
    document.getElementById("profileMenu").style.display = "none";
  }
});



/* Navbar*/
function showSection(id,btn){
  document.querySelectorAll(".section").forEach(s=>s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  document.querySelectorAll(".nav-center button").forEach(b=>b.classList.remove("active"));
  btn.classList.add("active");
}


    
function searchCards(input, section){
const val = input.value.toLowerCase();
document.querySelectorAll(`#${section} .card`).forEach(card => {
    card.style.display = card.innerText.toLowerCase().includes(val)
      ? ""
      : "none";
  });
}


/* Pop-Up */
function openModal(section){
  currentSection=section;
  document.getElementById("modal").style.display="block";
  const fields=document.getElementById("modalFields");
  fields.innerHTML="";

  if(section==="myproducts"){
  modalTitle.innerText=editIndex ===null ? "Add" : "Edit" ;
  fields.innerHTML+=`<input id="name" placeholder="Product Name" required>`;
  fields.innerHTML+=`<input id="category" placeholder="Category (Vegetable / Grain /Crop/ Fruit)">`;
  fields.innerHTML+=`<input id="qty" placeholder="Quantity (kg)">`;
  fields.innerHTML+=`<input id="price" placeholder="Price (₹/kg)">`;
  fields.innerHTML+=`<input id="img" placeholder="Image URL">`;

  if(editIndex !== null){
    const p = products[editIndex];
    name.value = p.name;
    category.value = p.category;
    qty.value = p.qty;
    price.value = p.price;
    img.value = p.img;
  }
}

  if(section==="b_vehicles"){
    modalTitle.innerText="Add Vehicle";
    fields.innerHTML+=`<input id="name" placeholder="Vehicle Name">`;
    fields.innerHTML+=`<input id="capacity" placeholder="Capacity (tons)">`;
    fields.innerHTML+=`<input id="price" placeholder="Price (₹/day)">`;
  }
  if(section==="r_equipment"){
    modalTitle.innerText="Add Equipment";
    fields.innerHTML+=`<input id="name" placeholder="Equipment Name">`;
    fields.innerHTML+=`<input id="type" placeholder="Type">`;
    fields.innerHTML+=`<input id="price" placeholder="Price (₹/day)">`;
  }
  if(section==="r_storage"){
    modalTitle.innerText="Add Storage";
    fields.innerHTML+=`<input id="name" placeholder="Facility Name">`;
    fields.innerHTML+=`<input id="size" placeholder="Size (sqft)">`;
    fields.innerHTML+=`<input id="price" placeholder="Price (₹/month)">`;
  }
}

function closeModal(){
  modal.style.display="none";
}


function saveItem(){
  const name = document.getElementById("name").value.trim();
  const category = document.getElementById("category").value.trim();
  const qty = document.getElementById("qty").value.trim();
  const price = document.getElementById("price").value.trim();
  const img = document.getElementById("img").value.trim();

  if(!name || !price || !img){
    alert("Please fill Name, Price and Image URL");
    return;
  }

  if(editIndex === null){
    // ADD
    products.push({ name, category, qty, price, img });
    alert("Product added successfully ✅");
  } else {
    // UPDATE
    products[editIndex] = { name, category, qty, price, img };
    alert("Product updated successfully ✏️");
    editIndex = null;
  }

  localStorage.setItem("products", JSON.stringify(products));
  renderProducts();
  closeModal();
}



let products = JSON.parse(localStorage.getItem("products")) || [
  {
    name: "Tomato",
    category: "Vegetable",
    qty: "200",
    price: "30",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2eq2ovn8jAuXdRaLst8Xi4Se8Ua85r3lkkg&s"
  },
  {
    name: "Potato",
    category: "Vegetable",
    qty: "500",
    price: "20",
    img: "https://cdn.mos.cms.futurecdn.net/iC7HBvohbJqExqvbKcV3pP.jpg"
  },
  {
    name: "Wheat",
    category: "Grain",
    qty: "1000",
    price: "25",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROOKKTBL40tnqeWGUE98q4RPjFOQBqORVoBw&s"
  },
  {
    name: "Rice",
    category: "Grain",
    qty: "800",
    price: "28",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoxnlQk7pzPa30tVnn6AJpGx08wAYfbsJeyw&s"
  },
  {
    name: "Sugarcane",
    category: "Crop",
    qty: "1500",
    price: "18",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZM5ELhWpoYOVHaDPJ79BG0GDLLjKybFv-Fg&s"
  },
  {
    name: "Brinjal",
    category: "Vegetable",
    qty: "100",
    price: "40",
    img: "https://png.pngtree.com/png-clipart/20240828/original/pngtree-eggplant-brinjal-fresh-vegetable-png-image_15876815.png"
  },
  {
    name: "Carrot",
    category: "Vegetable",
    qty: "200",
    price: "18",
    img: "https://media.istockphoto.com/id/1388403435/photo/fresh-carrots-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=XmrTb_nASc7d-4zVKUz0leeTT4fibDzWi_GpIun0Tlc="
  },
  {
    name: "Cabbage",
    category: "Vegetable",
    qty: "150",
    price: "40",
    img: "https://media.istockphoto.com/id/673162168/photo/green-cabbage-isolated-on-white.jpg?s=612x612&w=0&k=20&c=mCc4mXATvCcfp2E9taRJBp-QPYQ_LCj6nE1D7geaqVk="
  },
  {
    name: "Corn",
    category: "Grain",
    qty: "800",
    price: "18",
    img: "https://images.stockcake.com/public/b/a/d/badaebe6-c055-44ed-8549-aecd848e0d36_large/sunlit-cornfield-ripe-stockcake.jpg"
  },
  {
    name: "Millet",
    category: "Crop",
    qty: "1500",
    price: "18",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMZDgXbsb-hXpdacY9oy3bfwcL0wvsgoJI3w&s"
  },
  {
    name: "Cauliflower",
    category: "Vegetable",
    qty: "130",
    price: "50",
    img: "https://www.shutterstock.com/image-photo/closeup-savoy-cabbage-cauliflower-600nw-2514468089.jpg"
  },
  {
    name: "Mango",
    category: "Fruit",
    qty: "500",
    price: "100",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-wOItsiZLIYb33kd0kdc06Q9N-x_i173ovQ&s"
  },
  {
    name: "Ginger",
    category: "Vegetable",
    qty: "50",
    price: "20",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPOWL31gZ5Qr3k8nEsucbdjP0c1ejwtej2mA&s"
  },
  {
    name: "Raddish",
    category: "Vegetable",
    qty: "90",
    price: "55",
    img: "https://perfarmersglobal.in/wp-content/uploads/2023/10/51YAc4sXeeL._AC_UF8941000_QL80_.jpg"
  },
  {
    name: "Apple",
    category: "Fruit",
    qty: "600",
    price: "120",
    img: "https://hips.hearstapps.com/hmg-prod/images/apples-at-farmers-market-royalty-free-image-1627321463.jpg?crop=0.796xw:1.00xh;0.103xw,0&resize=640:*"
  },
  {
    name: "Banana",
    category: "Fruit",
    qty: "120",
    price: "18",
    img: "https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2021/01/30152155/shutterstock_518328943-1.jpg"
  },
  {
    name: "Cucumber",
    category: "Vegetable",
    qty: "200",
    price: "45",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDbzLs0UxQXyxiuTP7aKlBdDoAy3HwhbyhSQ&s"
  },
  {
    name: "Parwal",
    category: "Vegetable",
    qty: "100",
    price: "50",
    img: "https://zamaorganics.com/cdn/shop/files/Untitled_design_99.png?v=1758805444"
  },
  {
    name: "Garlic",
    category: "Vegetable",
    qty: "70",
    price: "28",
    img: "https://media.istockphoto.com/id/104822116/photo/close-up-of-purple-garlic-bunch.jpg?s=612x612&w=0&k=20&c=dSTSczpOxQSow9WuT-sYV4Rd9wETlXRsvNkjcSwCQTM="
  },
  {
    name: "Onion",
    category: "Vegetable",
    qty: "200",
    price: "25",
    img: "https://plantix.net/en/library/assets/custom/crop-images/onion.jpeg"
  },
  {
    name: "Bitter-gourd",
    category: "Vegetable",
    qty: "100",
    price: "55",
    img: "https://m.media-amazon.com/images/I/51necgplvWL._AC_UF1000,1000_QL80_.jpg"
  }
];



// Edit-Product Fun
function editProduct(index){
  editIndex = index;
  openModal("myproducts");
}

//Dlt-Product Fun
function deleteProduct(index){
  if(confirm("Delete this product?")){
    products.splice(index,1);
    localStorage.setItem("products", JSON.stringify(products));
    renderProducts();
  }
}


// Vehicle List
const vehicles = [
  {
    name: "Tata 407 Truck",
    capacity: "2",
    price: "1500",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbdfAWANvUyW1NFtKRGr9vEFRZKpu7p6rUdw&s"
  },
  {
    name: "Mahindra Pickup",
    capacity: "1",
    price: "1000",
    img: "https://i.pinimg.com/736x/31/11/4d/31114d149e22e999a2a14c5bddf7dfa6.jpg"
  },
  {
    name: "Large Transport Truck",
    capacity: "15",
    price: "5000",
    img: "https://www.shutterstock.com/image-photo/semi-trailer-truck-isolated-on-600nw-2602452961.jpg"
  },
  {
    name: "Tipper  Truck",
    capacity: "8",
    price: "3500",
    img: "https://www.mahindratruckandbus.com/english/images/hcv/Tipper/blazo-x-28/blazo-x-28.jpg"
  },

];

//Equipment List

const equipments = [
  {
    name: "Harvester Machine",
    type: "Harvesting",
    price: "2500",
    img: "https://assets.tractorjunction.com/tractor-junction/assets/images/images/implementTractor/3100-1580369767.jpg"
  },
  {
    name: "Tractor (50 HP)",
    type: "General",
    price: "1500",
    img: "https://tiimg.tistatic.com/fp/1/008/048/50hp-eicher-5660-tractor-with-power-steering-for-agriculture-592.jpg"
  },
  {
    name: "Seed Drill",
    type: "Planting",
    price: "800",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRLIMnqBP69WFMRbdbVR_oYmbxndQK4WSDvA&s"
  }
];

// Storage List
const storages = [
  {
    name: "Cold Storage",
    size: "100 sqft",
    price: "5000",
    img: "https://olcshipping.com/wp-content/uploads/2025/03/coldstorage.webp"
  },
  {
    name: "Dry Storage",
    size: "200 sqft",
    price: "3000",
    img: "https://aaafoodhandler.com/wp-content/uploads/2025/10/Dry-Storage-101-1-scaled.webp"
  },
  {
    name: "Warehouse Space",
    size: "500 sqft",
    price: "8000",
    img: " https://content.jdmagicbox.com/comp/def_content/warehouses-for-food-products/warehouses-for-food-products-3-warehouses-for-food-products-3-rzetz.jpg"
  }
];


// Vehicle-Load
function loadVehicles(){
  const grid = document.getElementById("vehiclesGrid");
  grid.innerHTML = "";

  vehicles.forEach(v => {
    grid.innerHTML += `
  <div class="card">
    <img src="${v.img}" alt="${v.name}">

    <h3>${v.name}</h3>
    <p>Capacity: ${v.capacity} tons</p>
    <p class="price">₹${v.price}/day</p>

    <button class="btn primary"
      style="width:100%; margin-top:10px"
      onclick="bookVehicle('${v.name}')">
      Book Now
    </button>
  </div>
`;
  });
}


function bookVehicle(vehicleName){
  alert(`🚚 ${vehicleName} booked successfully!`);
}


loadVehicles();

// Equipment Load
function loadEquipments(){
  const grid = document.getElementById("equipmentGrid");
  grid.innerHTML = "";

  equipments.forEach(e => {
    grid.innerHTML += `
      <div class="card">
        <img src="${e.img}" alt="${e.name}">

        <h3>${e.name}</h3>
        <p>Type: ${e.type}</p>
        <p class="price">₹${e.price}/day</p>

        <button class="btn primary"
          style="width:100%; margin-top:10px"
          onclick="rentEquipment('${e.name}')">
          Rent Now
        </button>
      </div>
    `;
  });
}
function rentEquipment(equipmentName){
  alert(`🚜 ${equipmentName} rented successfully!`);
}

loadEquipments();


//Storage Load
function loadStorages(){
  const grid = document.getElementById("storageGrid");
  grid.innerHTML = "";

  storages.forEach(s => {
    grid.innerHTML += `
      <div class="card">
        <img src="${s.img}" alt="${s.name}">

        <h3>${s.name}</h3>
        <p>Size: ${s.size}</p>
        <p class="price">₹${s.price}/month</p>

        <button class="btn primary"
          style="width:100%; margin-top:10px"
          onclick="reserveStorage('${s.name}')">
          Reserve Now
        </button>
      </div>
    `;
  });
}

function reserveStorage(storageName){
  alert(`🏬 ${storageName} reserved successfully!`);
}

loadStorages();



function renderProducts(){
  const grid = document.getElementById("productsGrid");
  grid.innerHTML = "";

  products.forEach((p, index) => {
    grid.innerHTML += `
      <div class="card">
        <img src="${p.img}">
        <h3>${p.name}</h3>
        <p>${p.category}</p>
        <p>${p.qty} kg</p>
        <p class="price">₹${p.price}/kg</p>

        <div class="card-actions">
          <button class="btn edit" onclick="editProduct(${index})">Edit</button>
          <button class="btn delete" onclick="deleteProduct(${index})">Delete</button>
        </div>
      </div>
    `;
  });
}


renderProducts();

