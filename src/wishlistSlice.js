import { createSlice } from "@reduxjs/toolkit";

const initialState={
    wishlist: localStorage.getItem("wishlist")
    ? JSON.parse(localStorage.getItem("wishlist"))
    : [],
}
const wishlistSlice= createSlice({
    name:"addtowishlist",
    initialState:initialState,
    reducers:{    
        addDatawish:(state, action)=>{
         var myitem=state.wishlist.filter((key)=>key.id==action.payload.id);  
            
            if (myitem.length>=1)
            {
                alert("This product Aleready Added!");
            }
            else 
            {        
                     state.wishlist.push(action.payload);
                     localStorage.setItem("wishlist", JSON.stringify(state.wishlist))
            }         
        },

       wishlistProductRemove:(state, action)=>{
            state.wishlist=state.wishlist.filter(item=>item.id!=action.payload);
            localStorage.setItem("wishlist", JSON.stringify(state.wishlist))

       }
    }
});
export const {addDatawish, cartProductRemove} = wishlistSlice.actions;
export default wishlistSlice.reducer;