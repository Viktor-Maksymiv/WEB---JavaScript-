const homeBtn = document.getElementById("homeBtn");
const catalogBtn = document.getElementById("catalogBtn");
const content = document.getElementById("content");

homeBtn.addEventListener("click", function() {
    content.innerHTML = "<h2>Вітаємо у нашому магазині!</h2><p>Оберіть розділ 'Каталог' для перегляду товарів.</p>";
});

catalogBtn.addEventListener("click", function() {
    loadCatalog();
});

function loadCatalog() {
    fetch("categories.json")
        .then(function(response) {
            return response.json();
        })
        .then(function(categories) {
            let html = "<h2>Каталог</h2>";
            
            for (let i = 0; i < categories.length; i++) {
                html += "<span class='category-link' data-shortname='" + categories[i].shortname + "' data-name='" + categories[i].name + "'>" + categories[i].name + " - " + categories[i].notes + "</span>";
            }
            
            html += "<br><span class='special-link' id='specialsBtn'>Specials</span>";
            content.innerHTML = html;

            const categoryLinks = document.getElementsByClassName("category-link");
            for (let i = 0; i < categoryLinks.length; i++) {
                categoryLinks[i].addEventListener("click", function() {
                    let shortname = this.getAttribute("data-shortname");
                    let name = this.getAttribute("data-name");
                    loadCategoryItems(shortname, name);
                });
            }

            document.getElementById("specialsBtn").addEventListener("click", function() {
                let randomIndex = Math.floor(Math.random() * categories.length);
                let randomCategory = categories[randomIndex];
                loadCategoryItems(randomCategory.shortname, randomCategory.name);
            });
        });
}

function loadCategoryItems(shortname, categoryName) {
    fetch(shortname + ".json")
        .then(function(response) {
            return response.json();
        })
        .then(function(items) {
            let html = "<h2>Категорія: " + categoryName + "</h2>";
            html += "<div class='products-grid'>";

            for (let i = 0; i < items.length; i++) {
                html += "<div class='product-card'>";
                html += "<img src='https://placehold.co/200x200' alt='Зображення товару'>";
                html += "<h3>" + items[i].name + "</h3>";
                html += "<p>" + items[i].description + "</p>";
                html += "<p class='price'>" + items[i].price + "</p>";
                html += "</div>";
            }

            html += "</div>";
            content.innerHTML = html;
        });
}