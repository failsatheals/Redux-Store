export const addToCart = (id, quantity, name, imageUrl, price) => {
    return {
      type: 'addToCart',
      //could restructure this to a payload to make it easier to pass when needed later
      productId: id,
      quantity: quantity,
      productName: name,
      productImageUrl: imageUrl,
      productPrice: price
    }
  }
  
 export const removeFromCart = (id, index) => {
    return {
      type: 'removeFromCart',
      productId: id,
      index: index
    }
  }
  
 export const checkout = () => {
    return {
      type: 'checkout'
    }
  }
