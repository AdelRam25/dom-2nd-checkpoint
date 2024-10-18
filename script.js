const totalQ = document.getElementById("total-quantity");
const totalP = document.getElementById("total-price");
const cards = document.getElementsByClassName("product-card");
const hearts = document.getElementsByClassName ('heart')


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
  }
}



 for (let heart of hearts) {
  heart.onclick = () => {
    if (heart.style.color == 'red') {
      heart.style.color = ''
    }
    else {
      heart.style.color = 'red'
    }
  }
 }

 
class Product {
  constructor(id, name, price) {
      this.id = id;
      this.name = name;
      this.price = price;
  }
}

class ShoppingCartItem {
  constructor(product, quantity) {
      this.product = product;
      this.quantity = quantity;
  }


  getTotalPrice() {
      return this.product.price * this.quantity;
  }
}


class ShoppingCart {
  constructor() {
      this.items = [];
  }


  addItem(product, quantity) {
      const existingItem = this.items.find(item => item.product.id == product.id);
      if (existingItem) {
          existingItem.quantity += quantity; 
      } else {
          const newItem = new ShoppingCartItem(product, quantity);
          this.items.push(newItem);
      }
  }


  removeItem(productId) {
      this.items = this.items.filter(item => item.product.id !== productId);
  }


  getTotal() {
      return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
  }


  displayItems() {
      console.log("Shopping Cart Items:");
      this.items.forEach(item => {
          console.log(`${item.product.name} (x${item.quantity}): ${item.getTotalPrice()}€`);
      });
      console.log(`Total: ${this.getTotal()}€`);
  }
}


const product1 = new Product(1, "Black Shaker 28oz Capacity", 19);
const product2 = new Product(2, "Pink Shaker 28oz Capacity", 24);
const product3 = new Product(3, "Red Shaker 28oz Capacity", 31);

const cart = new ShoppingCart();


cart.addItem(product1, 2); 
cart.addItem(product2, 1);
cart.addItem(product3, 3); 


cart.displayItems();
cart.removeItem(2); 
cart.displayItems();
