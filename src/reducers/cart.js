//Logic in the increment/decrement stops large and negative numbers, could be reviewed here
const cartReducer = (state = [], action) => {
    switch(action.type){
      case 'addToCart':
        let index = state.findIndex((x => x.id === action.productId));
        if(index >= 0){
          state[index].quantity = state[index].quantity + action.quantity
          return [...state ];
        }else {
          return (
            [...state,
          {
            id: action.productId,
            quantity: action.quantity,
            name: action.productName,
            imageUrl: action.productImageUrl,
            price: action.productPrice
          }
        ])
      }
      case 'removeFromCart':
        let z = state.findIndex((x => x.id === action.productId));
        //I wanted to be sure we were removing the right item at the right index in relation to the UI
        if(z === action.index){
          let newstate = state.filter(item => item.id !== action.productId)
          return newstate;
        }else {
          //some kind of error checking
        }
        break;
      case 'checkout':
          return state = [];
    default:
        return state;
    }
  
  }

  export default cartReducer;