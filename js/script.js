const baseUrl = "https://gamehubapi.schoolwork.one/wp-json/wc/store/products";
const productContainer = document.querySelector(".products");

async function getProducts(url) {
  const response = await fetch(url);
  const products = await response.json();
  console.log(products);
  products.forEach(function (product) {
    productContainer.innerHTML += `
    <div class="product"><h2>${product.name}</h2></div>
    <div class="product-image"><img src="${product.images[0].src}" height="100" width="100"></div>
    <a href="../product-specific.html?id=${product.id}">See details</a>`;
  });
  console.log(products);
}

getProducts(baseUrl);
