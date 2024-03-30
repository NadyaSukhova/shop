// Начальное состояние
export const initialState = {
  list: [
    {
      headphones: [
        {
          id: 0,
          img: "headphones/headphones_1.png",
          price: 2927,
          oldPrice: 3527,
          title: "Apple BYZ S852I",
          rate: "4.7",
        },
        {
          id: 1,
          img: "headphones/headphones_2.png",
          price: 2327,
          title: "Apple EarPods",
          rate: "4.5",
        },
        {
          id: 2,
          img: "headphones/headphones_3.png",
          price: 2327,
          title: "Apple EarPods",
          rate: "4.5",
        },
        {
          id: 3,
          img: "headphones/headphones_1.png",
          price: 2927,
          title: "Apple BYZ S852I",
          rate: "4.7",
        },
        {
          id: 4,
          img: "headphones/headphones_2.png",
          price: 2327,
          title: "Apple EarPods",
          rate: "4.5",
        },
        {
          id: 5,
          img: "headphones/headphones_3.png",
          price: 2327,
          title: "Apple EarPods",
          rate: "4.5",
        },
      ],
      wirelessHeadphones: [
        {
          id: 6,
          img: "wireless-headphones/headphones_4.png",
          price: 9527,
          title: "Apple AirPods",
          rate: "4.7",
        },
        {id: 7,
          img: "wireless-headphones/headphones_5.png",
          price: 6527,
          title: "GERLAX GH-04",
          rate: "4.7",
        },
        {
          id: 8,
          img: "wireless-headphones/headphones_6.png",
          price: 7527,
          title: "BOROFONE BO4",
          rate: "4.7",
        },
      ],
    },
  ],
  waiting: false, // признак ожидания загрузки
};

// Обработчик действий
function reducer(state = initialState, action) {
  switch (action.type) {
    case "goods-load / start":
      return { ...state, list: [], waiting: true };

    case "goods-load / error":
      return { ...state, list: [], waiting: false };

    case "article/load-success":
      return { ...state, list: action.payload, waiting: false };

    default:
      // Нет изменений
      return state;
  }
}

export default reducer;
