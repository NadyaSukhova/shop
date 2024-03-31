export function addToCart(item) {
  if (document.getElementById("but" + item.id)) {
    document.getElementById("but" + item.id).style.visibility = "visible";
    setTimeout(() => {
      document.getElementById("but" + item.id).style.visibility = "hidden";
    }, 50);
  }
  return {
    type: "add-to-cart / succes",
    price: item.price,
    id: item.id,
    title: item.title,
    img: item.img,
  };
}

export function deleteFromCart(item) {
  return {
    type: "delete-from-cart / succes",
    price: item.price,
    id: item.id,
    title: item.title,
    img: item.img,
  };
}

export function deleteGoodCart(id, price) {
  return {
    type: "delete-good-cart / succes",
    id: id,
    price: price,
  };
}
