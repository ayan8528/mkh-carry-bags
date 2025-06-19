let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(product, price) {
  cart.push({ product, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${product} added to cart!`);
}

function updateCartDisplay() {
  const list = document.getElementById("cart-list");
  const total = document.getElementById("total-price");
  if (!list || !total) return;

  cart = JSON.parse(localStorage.getItem("cart")) || [];

  list.innerHTML = "";
  let sum = 0;
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.product} - ₹${item.price}`;
    list.appendChild(li);
    sum += item.price;
  });

  total.textContent = "Total: ₹" + sum;
}

window.onload = updateCartDisplay;
