const items = [
  { name: "Concealer", price: 2500 },
  { name: "Foundation", price: 6000 },
  { name: "Eyeliner", price: 2000 },
  { name: "Brow Pencil", price: 1000 },
  { name: "Blush", price: 2800 },
];

const cart = [];

function viewItems() {
  console.log("These are the available makeup products:");
  items.forEach((item) => {
    console.log(`${item.name} - ${item.price}`);
  });
}

function addToCart(productName) {
  const product = items.find(
    (item) => item.name.toLowerCase() === productName.toLowerCase()
  );

  if (product) {
    cart.push(product);
    console.log("Added to cart!");
  } else {
    console.log("Item not found");
  }
}

function viewCart() {
  console.log("Shopping Cart:");
  cart.forEach((item) => {
    console.log(`${item.name} - ${item.price}`);
  });
}

function totalCost() {
  const total = cart.reduce((acc, item) => acc + item.price, 0);
  console.log("The total cost is " + total);
}

viewItems();
addToCart("Foundation");
addToCart("Eyeliner");
viewCart();
totalCost();
