export function addToCart(item) {
  document.getElementById('but' + item.id).style.visibility="visible";
  setTimeout(() => {document.getElementById('but' + item.id).style.visibility="hidden"}, 50)
    return {
      type: 'add-to-cart / sucess',
      price: item.price,
      id: item.id,
      title: item.title,
      img: item.img,
    };
  }
  
  export function deleteFromCart(item) {
    return {
      type: 'delete-from-cart / sucess',
      price: item.price,
      id: item.id,
      title: item.title,
      img: item.img,
    };
  }

  export function deleteGoodCart(id, price) {
    return {
      type: 'delete-good-cart / sucess',
      id: id,
      price: price,
    };
  }
  