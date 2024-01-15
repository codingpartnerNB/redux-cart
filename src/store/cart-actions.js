import { cartActions } from "./cartSlice";

export const sendCartData = (cart)=>{
    return async (dispatch)=>{
      dispatch(
        cartActions.showNotification({
          status: "Pending",
          title: "Sending...",
          message: "Sending cart data!",
        })
      );
  
      const sendRequest = async ()=>{
        const response = await fetch(
          "https://react-auth-bfbf6-default-rtdb.firebaseio.com/cart.json",
          {
            method: "PUT",
            body: JSON.stringify({items: cart.items, totalQuantity: cart.totalQuantity}),
          }
        );
        if (!response.ok) {
          throw new Error("Sending cart data failed!");
        }
      }
      try{
        await sendRequest();
        dispatch(
          cartActions.showNotification({
            status: "Success",
            title: "Success!",
            message: "Sent cart data successfully!",
          })
        );
      }catch(error){
        dispatch(
          cartActions.showNotification({
            status: "Error",
            title: "Error!",
            message: "Sending cart data failed!",
          })
        );
      }
      
    };
}

export const fetchCartData = ()=>{
    return async (dispatch)=>{
        const fetchData = async ()=>{
            const response = await fetch('https://react-auth-bfbf6-default-rtdb.firebaseio.com/cart.json');
            if(!response.ok){
                throw new Error("Could not fetch cart data!");
            }
            const data = await response.json();
            return data;
        }
        try{
            const cartData = await fetchData();
            dispatch(cartActions.replaceCart({
                items: cartData.items || [],
                totalQuantity: cartData.totalQuantity
            }));
        }catch(error) {
            dispatch(
                cartActions.showNotification({
                  status: "Error",
                  title: "Error!",
                  message: "Fetching cart data failed!",
                })
            );
        }
    }
}
  