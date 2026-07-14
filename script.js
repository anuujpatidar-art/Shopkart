function addToCart(name, price) {
  if (localStorage.getItem("loggedIn") !== "true") {
    alert("Login required");
    window.location.href = "login.html";
    return;
  }

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(name + " added to cart");
}