const { addProduct, deleteProduct, editProductName } = require("./function");
const products = require("./products");

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getInput(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

async function main() {
  // const id = await getInput("Enter product ID: ");
  // const name = await getInput("Enter product name: ");
  // const price = parseFloat(await getInput("Enter product price: "));
  // const discount = parseFloat(await getInput("Enter product discount: "));

  // const numImages = parseInt(
  //   await getInput("Enter the number of thumbnail images: ")
  // );
  // const additionalImages = [];
  // for (let i = 0; i < numImages; i++) {
  //   const imagePath = await getInput(
  //     `Enter path for thumbnail image ${i + 1}: `
  //   );
  //   additionalImages.push(imagePath);
  // }

  // const numDesc = parseInt(
  //   await getInput("Enter the number of descriptions: ")
  // );
  // const descriptions = [];
  // for (let i = 0; i < numDesc; i++) {
  //   const desc = await getInput(`Enter description ${i + 1}: `);
  //   descriptions.push(desc);
  // }

  // addProduct(
  //   parseInt(id),
  //   name,
  //   price,
  //   discount,
  //   additionalImages,
  //   descriptions
  // );
  // console.log(products);

  // const deleteId = await getInput("Enter ID of the product to delete: ");
  // deleteProduct(parseInt(deleteId));
  // console.log(products);

  const editId = await getInput("Enter ID of the product to edit name: ");
  const newName = await getInput("Enter the new name for the product: ");
  editProductName(parseInt(editId), newName);
  console.log(products);

  rl.close();
}

main();
