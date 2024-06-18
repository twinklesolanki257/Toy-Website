import { Link } from "react-router-dom";
import { FaPlusCircle } from "react-icons/fa";
import { FaCircleMinus } from "react-icons/fa6";
import { IoTrashBinSharp } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { proQtyInc, proQtyDec, cartProductRemove } from "./productSlice";
import { useEffect } from "react";

const Shop = () => {
    var netAmount = 0;

    const cartItem = useSelector((state) => state.addtocart.cart);
    const { cart } = useSelector((state) => state.addtocart);

    useEffect(() => {
        console.log(cart)
    })
    const dispatch = useDispatch();
    const productQntInc = (myid) => {
        dispatch(proQtyInc(myid));
    }

    const productQntDec = (myid) => {
        dispatch(proQtyDec(myid));
    }

    const pruductRemove = (myid) => {
        dispatch(cartProductRemove(myid));
    }

    const productData = cartItem.map((key) => {

        netAmount += key.price * key.quantity;

        return (
            <>
                    <tr className="tabledata" align="center">
                        <td>
                            <div id="imgbox1">
                                <img src={"images/" + key.image} style={{ width: "200px", height: "150px" }} />
                            </div>
                        </td>

                        <td> {key.name} </td>
                        <td> {key.price} </td>
                        <td>

                            <FaPlusCircle
                                onClick={() => { productQntInc(key.id) }}
                                style={{ marginRight: "8px", cursor: "pointer", color: "#81C408" }} />

                            <span style={{ border: "1px solid grey", width: "20px", padding: "10px" }}>
                                {key.quantity}
                            </span>


                            <FaCircleMinus
                                onClick={() => { productQntDec(key.id) }}
                                style={{ marginLeft: "8px", cursor: "pointer", color: "#81C408" }} />

                        </td>
                        <td> {key.price * key.quantity} </td>
                        <td>
                            <IoTrashBinSharp
                                onClick={() => { pruductRemove(key.id) }}
                                style={{ marginLeft: "8px", fontSize: "30px", cursor: "pointer", color: "#81C408" }} />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="7" >
                            <hr size="2" color="lightblue" />
                        </td>
                    </tr>
            </>
        )
    });

    return (
        <>
            <div className="mainheading">
                <h1>CheckOut</h1>
            </div>

            <table width="90%" align="center">
                <tr className="rowheading" align="center">
                    <td> </td>
                    <td> Product Name </td>
                    <td> Price per unit</td>
                    <td> Quantity </td>
                    <td> Total </td>
                    <td> Remove Item</td>
                </tr>
                <tr>
                    <td colSpan="7" >
                        <hr size="4" color="#81C408" />
                    </td>
                </tr>
                {productData}



            </table>
            <div className="netAmount" >
                Total Amount :     {netAmount}
            </div>

            <br /> <br />
            <div style={{ textAlign: "center", padding: "10px" }}>
                <Link to="/buynow" id="btnbuy" > Proceed To Buy </Link>
            </div>
        </>
    );
}

export default Shop;