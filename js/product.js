const baseUrl = "https://gamehubapi.schoolwork.one/wp-json/wc/store/products";
const productDetailContainer = document.querySelector(".product-details");

async function getProductsDetails(url, id) {
  const response = await fetch(url);
  const products = await response.json();
  console.log(products);
  for (i = 0; i < products.length; i++) {
    const product = products[i];
    if (product.id == id) {
      productDetailContainer.innerHTML += `
    <div class="product"><h2>${product.name}</h2></div>
    <div class="product-image"><img src="${product.images[0].src}" height="100" width="100"></div>
    <div class="product"><b>Descritpion</b><p>${product.description}</p></div>
    `;
      break;
    }
  }
}

function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
const productId = getParameterByName("id");
getProductsDetails(baseUrl, productId);
