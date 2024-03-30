// Начальное состояние
export const initialState = {
  price: 0,
  goods: [],
};

// Обработчик действий
function reducer(state = initialState, action) {
  var increase = (id) => {
    var ind = state.goods
      .map(function (x) {
        return x.id;
      })
      .indexOf(id);
    var res = state.goods;
    res[ind].amount += 1;
    return res;
  }
  var decrease = (id) => {
    var ind = state.goods
      .map(function (x) {
        return x.id;
      })
      .indexOf(id);
    var res = state.goods;
    res[ind].amount -= 1;
    return res;
  }
  switch (action.type) {
    case "add-to-cart / sucess":
      return {
        price: state.price + action.price,
        goods:
        state.goods.length > 0 && state.goods.filter((item) => item.id == action.id).length != 0
            ? [...increase(action.id)]
            : [
                ...state.goods,
                {
                  id: action.id,
                  title: action.title,
                  price: action.price,
                  img: action.img,
                  amount: 1,
                },
              ],
      };
      case 'delete-from-cart / sucess':
        if (state.goods.filter((item) => item.id == action.id)[0].amount > 1)
      return{
        price: state.price - action.price,
        goods: [...decrease(action.id)]
      };
      else return {
        price: state.price - action.price,
        goods: [...state.goods.filter((item) => item.id != action.id)]
      };
      case 'delete-good-cart / sucess':
        return {
          price: state.price - action.price,
          goods: [...state.goods.filter((item) => item.id != action.id)]
        }
    default:
      // Нет изменений
      return state;
  }
}

export default reducer;
