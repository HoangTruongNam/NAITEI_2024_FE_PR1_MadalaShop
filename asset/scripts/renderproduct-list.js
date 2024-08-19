function displayProducts(productsToDisplay) {
    const productDisplay = document.getElementById('product-display');
    productDisplay.innerHTML = ''; // Clear previous content

    productsToDisplay.forEach(product => {
        const productElement = `
            <div class="p-4 border-t mb-4 flex">
                <img src="${product.image}" alt="${product.title}" class="w-32 h-32 mr-4">
                <div class="flex flex-col justify-between">
                    <div>
                        <h1 class="text-xl font-semibold product-title">${product.title}</h1>
                        <div class="user review flex text-gray-300">${product.review}</div>
                        <div class="descript text-gray-300 w-96 h-20 overflow-scroll">
                            ${product.desc}
                        </div>
                        <div class="mt-4">
                            ${product.price}
                        </div>
                    </div>
                    <div class="btn-cluster mt-4">
                        <button data-i18n="buy_now" class="border mr-2 py-2 px-4 rounded-lg"></button>
                        <button class="green-btn py-3 px-4 text-white text-sm rounded-lg">♥</button>
                    </div>
                </div>
            </div>
        `;
        productDisplay.innerHTML += productElement;
    });
}

function filterProducts(category) {
    const filteredProducts = products.filter(product => product.category === category);
    displayProducts(filteredProducts);
}

// Display all products when the page loads
window.onload = function() {
    displayProducts(products);
};
