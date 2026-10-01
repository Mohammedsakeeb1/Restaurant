/* =========================
   MENU DATA
========================= */

const menuItems = [

    /* BIRYANI */

    {
        name: "Butter Chicken Biryani",
        price: 330,
        category: "biryani",
        description: "Chef Special"
    },

    {
        name: "Chicken Hyderabadi Dum Biryani",
        price: 280,
        category: "biryani",
        description: "Authentic Hyderabadi Dum Biryani"
    },

    {
        name: "Chicken Kepsa Biryani",
        price: 330,
        category: "biryani",
        description: "Chef Special"
    },

    {
        name: "Chicken Tikka Hyderabadi Dum Biryani",
        price: 330,
        category: "biryani",
        description: "Boneless chicken tikka biryani"
    },

    {
        name: "Egg Hyderabadi Biryani",
        price: 245,
        category: "biryani",
        description: "Hyderabadi style biryani"
    },

    {
        name: "Emperorz Special Chicken Biryani",
        price: 320,
        category: "biryani",
        description: "Chef Special"
    },

    {
        name: "Murg Musallam Biryani",
        price: 370,
        category: "biryani",
        description: "Chef Special"
    },

    {
        name: "Mutton Hyderabadi Dum Biryani",
        price: 445,
        category: "biryani",
        description: "Authentic Dum Biryani"
    },

    {
        name: "Paneer Tikka Hyderabadi Dum Biryani",
        price: 320,
        category: "biryani",
        description: "Vegetarian biryani"
    },

    {
        name: "Veg Hyderabadi Dum Biryani",
        price: 240,
        category: "biryani",
        description: "Vegetarian Dum Biryani"
    },


    /* KEBAB */

    {
        name: "Chicken Afghani Kebab",
        price: 310,
        category: "kebab",
        description: "Less spicy"
    },

    {
        name: "Chicken Angara Kebab",
        price: 340,
        category: "kebab",
        description: "Spicy"
    },

    {
        name: "Chicken Banjara Kebab",
        price: 320,
        category: "kebab",
        description: "Medium spicy"
    },

    {
        name: "Chicken Haryali Kebab",
        price: 310,
        category: "kebab",
        description: "Green minty"
    },

    {
        name: "Chicken Kalimiri Kebab",
        price: 310,
        category: "kebab",
        description: ""
    },

    {
        name: "Chicken Kebab Platter",
        price: 370,
        category: "kebab",
        description: "Tikka, Afghani & Haryali"
    },

    {
        name: "Chicken Malai Kebab",
        price: 340,
        category: "kebab",
        description: "Creamy"
    },

    {
        name: "Chicken Seekh Kebab",
        price: 340,
        category: "kebab",
        description: ""
    },

    {
        name: "Chicken Tangdi Kebab",
        price: 370,
        category: "kebab",
        description: ""
    },

    {
        name: "Chicken Tikka Kebab",
        price: 295,
        category: "kebab",
        description: "Medium spicy"
    },


    /* TANDOORI */

    {
        name: "Chicken Tandoori Peshawari",
        price: 320,
        category: "tandoori",
        description: "Medium spicy"
    },

    {
        name: "Chicken Banjara Tandoori",
        price: 340,
        category: "tandoori",
        description: "Yellow"
    },

    {
        name: "Chicken Haryali Tandoori",
        price: 330,
        category: "tandoori",
        description: "Green minty"
    },

    {
        name: "Chicken Tandoori Afghani",
        price: 320,
        category: "tandoori",
        description: "Less spicy"
    },

    {
        name: "Chicken Tandoori Angara",
        price: 350,
        category: "tandoori",
        description: "Spicy"
    },


    /* BURGER */

    {
        name: "Shredded Burger",
        price: 220,
        category: "burger",
        description: ""
    },

    {
        name: "Zinger Burger",
        price: 210,
        category: "burger",
        description: ""
    },


    /* FRIED */

    {
        name: "Chicken Hot N Crispy",
        price: 240,
        category: "fried",
        description: ""
    },

    {
        name: "Boneless Strips",
        price: 200,
        category: "fried",
        description: ""
    },

    {
        name: "Chicken Popcorn",
        price: 200,
        category: "fried",
        description: ""
    },

    {
        name: "Fried Chicken Burger Combo",
        price: 799,
        category: "fried",
        description: "Hot N Crispy + Burger + Fries + Soft Drink"
    },

    {
        name: "Fried Chicken Combo - Family",
        price: 1549,
        category: "fried",
        description: "Hot N Crispy + Strips + Popcorn + Fries + Soft Drink"
    },


    /* STARTERS */

    {
        name: "Chicken 65",
        price: 250,
        category: "starter",
        description: ""
    },

    {
        name: "Chicken Chilli",
        price: 270,
        category: "starter",
        description: ""
    },

    {
        name: "Chicken Crispy",
        price: 280,
        category: "starter",
        description: ""
    },

    {
        name: "Chicken Garlic",
        price: 270,
        category: "starter",
        description: ""
    },

    {
        name: "Chicken Lemon",
        price: 270,
        category: "starter",
        description: ""
    },

    {
        name: "Chicken Lollipop",
        price: 320,
        category: "starter",
        description: ""
    },

    {
        name: "Chicken Manchurian",
        price: 280,
        category: "starter",
        description: ""
    },

    {
        name: "Chicken Sukka",
        price: 375,
        category: "starter",
        description: "Chef Special"
    },

    {
        name: "Egg Chilli",
        price: 230,
        category: "starter",
        description: ""
    },

    {
        name: "Egg Manchurian",
        price: 240,
        category: "starter",
        description: ""
    },

    {
        name: "Chicken Fire Wings",
        price: 200,
        category: "starter",
        description: ""
    },


    /* MAIN COURSE */

    {
        name: "Butter Chicken",
        price: 325,
        category: "main",
        description: "Buttery boneless"
    },

    {
        name: "Chicken Angara Masala",
        price: 325,
        category: "main",
        description: "Spicy"
    },

    {
        name: "Chicken Handi",
        price: 270,
        category: "main",
        description: ""
    },

    {
        name: "Chicken Hyderabadi Masala",
        price: 325,
        category: "main",
        description: ""
    },

    {
        name: "Chicken Kolhapuri",
        price: 295,
        category: "main",
        description: ""
    },

    {
        name: "Chicken Lababdar",
        price: 295,
        category: "main",
        description: ""
    },

    {
        name: "Chicken Masala",
        price: 270,
        category: "main",
        description: ""
    },

    {
        name: "Chicken Tikka Masala",
        price: 295,
        category: "main",
        description: "Boneless"
    },

    {
        name: "Egg Masala",
        price: 190,
        category: "main",
        description: ""
    },

    {
        name: "Murg Musalam",
        price: 375,
        category: "main",
        description: "Chef Special"
    },


    /* CHINESE */

    {
        name: "Paneer Fried Rice",
        price: 249,
        category: "chinese",
        description: "Chinese"
    },

    {
        name: "Veg Fried Rice",
        price: 240,
        category: "chinese",
        description: ""
    },

    {
        name: "Veg Hakka Noodles",
        price: 240,
        category: "chinese",
        description: ""
    },

    {
        name: "Veg Schezwan Fried Rice",
        price: 255,
        category: "chinese",
        description: ""
    },

    {
        name: "Chicken Fried Rice",
        price: 250,
        category: "chinese",
        description: ""
    },

    {
        name: "Chicken Hakka Noodles",
        price: 240,
        category: "chinese",
        description: ""
    },

    {
        name: "Chicken Manchurian Rice + Gravy",
        price: 330,
        category: "chinese",
        description: ""
    },

    {
        name: "Chicken Schezwan Fried Rice",
        price: 300,
        category: "chinese",
        description: ""
    },

    {
        name: "Chicken Tikka Fried Rice",
        price: 280,
        category: "chinese",
        description: ""
    },

    {
        name: "Chicken Triple Fried Rice + Gravy",
        price: 330,
        category: "chinese",
        description: ""
    },

    {
        name: "Egg Fried Rice",
        price: 220,
        category: "chinese",
        description: ""
    },

    {
        name: "Egg Hakka Noodles",
        price: 220,
        category: "chinese",
        description: ""
    },

    {
        name: "Egg Schezwan Fried Rice",
        price: 250,
        category: "chinese",
        description: ""
    },


    /* BREAD */

    {
        name: "Garlic Cheese Naan",
        price: 80,
        category: "bread",
        description: ""
    },

    {
        name: "Garlic Naan",
        price: 70,
        category: "bread",
        description: ""
    },

    {
        name: "Kulcha",
        price: 50,
        category: "bread",
        description: ""
    },

    {
        name: "Naan",
        price: 60,
        category: "bread",
        description: ""
    },

    {
        name: "Tandoori Roti",
        price: 40,
        category: "bread",
        description: "Wheat"
    },


    /* VEG */

    {
        name: "Dal Fry",
        price: 190,
        category: "veg",
        description: ""
    },

    {
        name: "Dal Khichadi Tadka",
        price: 180,
        category: "veg",
        description: ""
    },

    {
        name: "Dal Tadaka",
        price: 190,
        category: "veg",
        description: ""
    },

    {
        name: "Mix Veg",
        price: 190,
        category: "veg",
        description: ""
    },

    {
        name: "Paneer Butter Masala",
        price: 325,
        category: "veg",
        description: ""
    },

    {
        name: "Paneer Masala",
        price: 270,
        category: "veg",
        description: ""
    },

    {
        name: "Paneer Tikka Masala",
        price: 295,
        category: "veg",
        description: ""
    },

    {
        name: "Veg Kolhapuri",
        price: 270,
        category: "veg",
        description: ""
    },

    {
        name: "Gobi 65",
        price: 240,
        category: "veg",
        description: ""
    },

    {
        name: "Gobi Manchurian",
        price: 240,
        category: "veg",
        description: ""
    },

    {
        name: "Paneer 65",
        price: 270,
        category: "veg",
        description: ""
    },

    {
        name: "Paneer Chilli",
        price: 270,
        category: "veg",
        description: ""
    },

    {
        name: "Paneer Crispy",
        price: 280,
        category: "veg",
        description: ""
    },

    {
        name: "Paneer Manchurian",
        price: 290,
        category: "veg",
        description: ""
    },

    {
        name: "Paneer Tikka Kebab",
        price: 290,
        category: "veg",
        description: "Roasted"
    },

    {
        name: "Veg Crispy",
        price: 240,
        category: "veg",
        description: ""
    },

    {
        name: "Veg Manchurian",
        price: 240,
        category: "veg",
        description: ""
    },


    /* SOUP */

    {
        name: "Chicken Clear Soup",
        price: 220,
        category: "soup",
        description: ""
    },

    {
        name: "Chicken Hot & Sour Soup",
        price: 240,
        category: "soup",
        description: ""
    },

    {
        name: "Chicken Manchow Soup",
        price: 240,
        category: "soup",
        description: ""
    },

    {
        name: "Chicken Shorba",
        price: 230,
        category: "soup",
        description: ""
    },

    {
        name: "Veg Clear Soup",
        price: 190,
        category: "soup",
        description: ""
    },

    {
        name: "Veg Hot & Sour Soup",
        price: 200,
        category: "soup",
        description: ""
    },

    {
        name: "Veg Manchow Soup",
        price: 210,
        category: "soup",
        description: ""
    },


    /* RICE */

    {
        name: "Biryani Masala Rice",
        price: 140,
        category: "rice",
        description: ""
    },

    {
        name: "Dal Khichadi",
        price: 187,
        category: "rice",
        description: ""
    },

    {
        name: "Jeera Rice",
        price: 130,
        category: "rice",
        description: ""
    },

    {
        name: "Steam Rice",
        price: null,
        category: "rice",
        description: ""
    },

    {
        name: "French Fries",
        price: 160,
        category: "fried",
        description: ""
    }

];


/* =========================
   MENU RENDER
========================= */

const menuGrid = document.getElementById("menuGrid");
const menuEmpty = document.getElementById("menuEmpty");

let activeCategory = "all";


function renderMenu() {

    const searchText =
        document
            .getElementById("menuSearch")
            .value
            .toLowerCase()
            .trim();


    const filteredItems = menuItems.filter(item => {

        const matchesCategory =
            activeCategory === "all" ||
            item.category === activeCategory;


        const matchesSearch =
            item.name
                .toLowerCase()
                .includes(searchText);


        return matchesCategory && matchesSearch;

    });


    menuGrid.innerHTML = "";


    if (filteredItems.length === 0) {

        menuEmpty.style.display = "block";

        return;

    }


    menuEmpty.style.display = "none";


    filteredItems.forEach(item => {

        const card = document.createElement("article");

        card.className = "menu-card";


        card.innerHTML = `

            <div>

                <span class="menu-category">
                    ${getCategoryName(item.category)}
                </span>

                <h3>
                    ${item.name}
                </h3>

                ${
                    item.description
                        ? `<p>${item.description}</p>`
                        : ""
                }

            </div>


            <div class="menu-price">

                ${
                    item.price !== null
                        ? `₹${item.price}`
                        : "—"
                }

            </div>

        `;


        menuGrid.appendChild(card);

    });

}


function getCategoryName(category) {

    const names = {

        biryani: "BIRYANI",
        kebab: "KEBAB",
        tandoori: "TANDOORI",
        burger: "BURGER",
        fried: "FRIED CHICKEN",
        starter: "STARTER",
        main: "MAIN COURSE",
        chinese: "CHINESE",
        veg: "VEGETARIAN",
        bread: "ROTI & NAAN",
        soup: "SOUP & SHORBA",
        rice: "RICE"

    };

    return names[category] || category.toUpperCase();

}


/* =========================
   CATEGORY FILTER
========================= */

document
    .querySelectorAll(".category-btn")
    .forEach(button => {

        button.addEventListener("click", () => {

            document
                .querySelectorAll(".category-btn")
                .forEach(btn =>
                    btn.classList.remove("active")
                );


            button.classList.add("active");


            activeCategory =
                button.dataset.category;


            renderMenu();

        });

    });


/* =========================
   SEARCH
========================= */

document
    .getElementById("menuSearch")
    .addEventListener("input", renderMenu);


/* Initial menu */

renderMenu();


/* =========================
   MOBILE NAVIGATION
========================= */

const menuToggle =
    document.getElementById("menuToggle");

const navLinks =
    document.getElementById("navLinks");


menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");


    const icon =
        menuToggle.querySelector("i");


    if (navLinks.classList.contains("active")) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});


document
    .querySelectorAll(".nav-links a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            menuToggle
                .querySelector("i")
                .classList.remove("fa-xmark");

            menuToggle
                .querySelector("i")
                .classList.add("fa-bars");

        });

    });


/* =========================
   SCROLL REVEAL
========================= */

const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12
        }

    );


document
    .querySelectorAll(".reveal")
    .forEach(element => {

        observer.observe(element);

    });


/* =========================
   GALLERY LIGHTBOX
========================= */

const lightbox =
    document.getElementById("lightbox");

const lightboxImage =
    document.getElementById("lightboxImage");

const lightboxClose =
    document.getElementById("lightboxClose");


document
    .querySelectorAll(".gallery-item img")
    .forEach(image => {

        image.addEventListener("click", () => {

            lightboxImage.src = image.src;

            lightboxImage.alt = image.alt;

            lightbox.classList.add("active");

            document.body.style.overflow = "hidden";

        });

    });


function closeLightbox() {

    lightbox.classList.remove("active");

    document.body.style.overflow = "";

}


lightboxClose.addEventListener(
    "click",
    closeLightbox
);


lightbox.addEventListener("click", event => {

    if (event.target === lightbox) {

        closeLightbox();

    }

});


document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        closeLightbox();

    }

});