//prepare type of initialState
export const initialState = { basket: [] };

// reducer action
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.anime],
      };
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex((animeItem) => {
        animeItem.id === action.id;
      });

      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `can't remove anime(id:${action.id}.It's not in the basket! )`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };
    default:
      return state;
  }
};
// send reducer
export default reducer;

// send function getBasketTotal

export const getBasketTotal = () => {
  return basket?.reduce((amount, anime) => amount + anime.price, 0);
};
