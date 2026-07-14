let cart = JSON.parse(localStorage.getItem("cart")) || [];
let table = document.getElementById("cart-items");
let total = 0;

if (cart.length === 0) {
  table.innerHTML = "<tr><td colspan='3'>Cart is empty</td></tr>";
}

cart.forEach((item, i) => {
  let row = document.createElement("tr");
  row.innerHTML = `
    <td>${item.name}</td>
    <td>₹${item.price}</td>
    <td><button onclick="removeItem(${i})">Remove</button></td>
  `;
  table.appendChild(row);
  total += item.price;
});

document.getElementById("total").innerText = total;

function removeItem(i) {
  cart.splice(i, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}