// Начальное состояние
export const initialState = {
  lang: 'rus'
};

// Обработчик действий
function reducer(state = initialState, action) {
  switch (action.type) {
    case "change-language / sucess":
      return {
        lang: action.payload
      };

    default:
      // Нет изменений
      return state;
  }
}

export default reducer;
