import { Link } from "react-router-dom";
import { IoTrashBinSharp } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { cartProductRemove } from "./wishlistSlice";
import { useEffect } from "react";

const Liked = () => {
    var netAmount = 0;

    const wishItem = useSelector((state) => state.addtowishlist.wishlist);
    const { wishlist } = useSelector((state) => state.addtowishlist);

    useEffect(() => {
        console.log(wishlist)
    })
    const dispatch = useDispatch();
    const pruductRemove = (myid) => {
        dispatch(cartProductRemove(myid));
    }

    const productData = wishItem.map((key) => {

        return (
            <>
                <div className="cartData">
                    <div id="imgbox">
                        <img src={"images/" + key.image} style={{ width: "250px", height: "270px" }} />
                    </div>
                    <br />
                    <h4> {key.name} </h4>

                    <div className="producprice">
                        <h5> Rs. <span style={{ fontWeight: "100" }}>{key.price} </span> </h5>
                    </div>
                </div>

                <td>
                    <IoTrashBinSharp
                        onClick={() => { pruductRemove(key.id) }}
                        style={{ marginLeft: "8px", fontSize: "30px", cursor: "pointer", color: "#81C408" }} />
                </td>

            </>
        )
    });

    return (
        <>
            <div className="mainheading">
                <h1>Wishlist</h1>
            </div>

            <div className='outlet1'>
                    <div id="cartItem">
                        <div className='pages-head-img'>
                            
                        </div>
                        {productData}
                    </div>
                </div>
        </>
    );
}

export default Liked;