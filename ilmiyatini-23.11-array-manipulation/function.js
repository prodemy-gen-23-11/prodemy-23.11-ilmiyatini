const products = require("./products");

function addProduct(id, name, price, discount, additionalImages, descriptions) {
  const image = additionalImages[0];
  const beforePrice = price + (price * discount) / 100;
  const newProduct = {
    id: id,
    name: name,
    beforePrice: beforePrice,
    price: price,
    discount: discount,
    image: image,
    additionalImages: additionalImages,
    descriptions: descriptions,
  };
  products.push(newProduct);
  console.log(`Product with ID ${id} has been successfully added.`);
}

function deleteProduct(id) {
  const index = products.findIndex((product) => product.id === id);
  if (index !== -1) {
    products.splice(index, 1);
    console.log(`Product with ID ${id} has been successfully deleted.`);
  } else {
    console.log(`Product with ID ${id} not found.`);
  }
}

function editProductName(id, newName) {
  const product = products.find((product) => product.id === id);
  if (product) {
    product.name = newName;
    console.log(
      `The name of the product with ID ${id} has been successfully changed to ${newName}.`
    );
  } else {
    console.log(`Product with ID ${id} not found.`);
  }
}
module.exports = {
  addProduct,
  deleteProduct,
  editProductName,
};
