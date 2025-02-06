import photo1 from "/1.png";
import photo2 from "/2.png";
import photo3 from "/3.png";
import photo4 from "/4.png";
import photo5 from "/5.png";
import photo6 from "/6.png";

const productsArray = [
  {
    id: "1",
    title: "The Steal is Worth the Risk",
    price: 2000.99,
    source: photo1,
  },
  {
    id: "2",
    title: "No Blood No Foul",
    price: 2000.99,
    source: photo2,
  },
  {
    id: "3",
    title: "Be Like Mike",
    price: 2000.99,
    source: photo3,
  },
  {
    id: "4",
    title: "Michael Jyodan",
    price: 2000.99,
    source: photo4,
  },
  {
    id: "5",
    title: "Deep Three",
    price: 2000.99,
    source: photo5,
  },
  {
    id: "6",
    title: "Deep Three v2",
    price: 2000.99,
    source: photo6,
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
