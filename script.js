const totalQ = document.getElementById("total-quantity");
const totalP = document.getElementById("total-price");
const cards = document.getElementsByClassName("product-card");

for (let card of cards) {
  const productP = card.querySelector(".product-price");
  const add = card.querySelector(".add-quantity-button");
  const minus = card.querySelector(".minus-quantity-button");
  const quantity = card.querySelector(".quantity");

  add.onclick = () => {
    quantity.innerText++;
    totalQ.innerText++;
    totalP.innerText = parseInt(totalP.innerText) + parseInt(productP.innerText);
  };

  minus.onclick = () => {
    if (quantity.innerText > 0) {
      quantity.innerText--;
      totalQ.innerText--;
      totalP.innerText = parseInt(totalP.innerText) - parseInt(productP.innerText);
    }
  };
}
