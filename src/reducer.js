export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return { ...state, basket: [...state.basket, action.item] };
    case "REMOVE_FROM_BASKET":
      let newBasket = [...state.basket];
      const idx = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (idx >= 0) {
        newBasket.splice(idx, 1);
      } else {
        console.warn(
          `Can't remove product(id: ${action.id}) as it's not in the basket.`
        );
      }
      return { ...state, basket: newBasket };
    default:
      return state;
  }
};

export default reducer;
