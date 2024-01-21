const products = [
  { name: "Concealer", price: 2500 },
  { name: "Foundation", price: 6000 },
  { name: "Eyeliner", price: 2000 },
  { name: "Brow Pencil", price: 1000 },
  { name: "Mascara", price: 3500 },
  { name: "Blush", price: 2800 },
  { name: "Lipliner", price: 500 },
  { name: "Lip gloss", price: 3000 },
];

const cart = [];

function viewProducts() {
  console.log("These are the available makeup products:");
  products.forEach((product) => {
    console.log(`${product.name} - ${product.price}`);
  });
}

function addToCart(productName) {
  const product = products.find(
    (item) => item.name.toLowerCase() === productName.toLowerCase()
  );

  if (product) {
    cart.push(product);
    console.log("Product added to cart");
  } else {
    console.log("Product not found");
  }
}

function viewCart() {
  console.log("Shopping Cart:");
  cart.forEach((product) => {
    console.log(`${product.name} - ${product.price}`);
  });
}

function totalCost() {
  const total = cart.reduce((acc, product) => acc + product.price, 0);
  console.log("The total cost is " + total.toLocaleString());
}

viewProducts();
addToCart("Foundation");
addToCart("Eyeliner");
viewCart();
totalCost();
