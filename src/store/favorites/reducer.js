// Начальное состояние
export const initialState = {
  goods: [],
};

// Обработчик действий
function reducer(state = initialState, action) {
  switch (action.type) {
    case "add-to-favorites / sucess":
      return {
        goods:
        state.goods.length > 0 && state.goods.filter((item) => item.id == action.id).length != 0
            ? state.goods
            : [
                ...state.goods,
                {
                  id: action.id,
                  title: action.title,
                  price: action.price,
                  img: action.img,
                },
              ],
      };

    default:
      // Нет изменений
      return state;
  }
}

export default reducer;
