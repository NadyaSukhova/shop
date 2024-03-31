export function addToFavorites(item) {
    return {
      type: 'add-to-favorites / succes',
      price: item.price,
      id: item.id,
      title: item.title,
      img: item.img
    };
  }
  