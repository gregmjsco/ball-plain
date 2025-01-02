const productsArray = [
  {
    id: "1",
    title: "The Steal is Worth the Risk",
    price: 2000.99,
    source: "/1.png",
  },
  {
    id: "2",
    title: "No Blood No Foul",
    price: 2000.99,
    source: "/2.png",
  },
  {
    id: "3",
    title: "Be Like Mike",
    price: 2000.99,
    source: "/3.png",
  },
  {
    id: "4",
    title: "Michael Jyodan",
    price: 2000.99,
    source: "/4.png",
  },
  {
    id: "5",
    title: "Deep Three",
    price: 2000.99,
    source: "/5.png",
  },
  {
    id: "6",
    title: "Deep Three v2",
    price: 2000.99,
    source: "/6.png",
  },
];

function getProductData(id) {
  let productData = productsArray.find((product) => product.id === id);

  if (productData == undefined) {
    console.log("Product data does not exist for ID: " + id);
    return undefined;
  }

  return productData;
}

export { productsArray, getProductData };
