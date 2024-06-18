import { useState } from "react";
import axios from "axios";

const Search=()=>
{
    const [nm,setNM]=useState("");
    const [myData,setMyData]=useState([]);

    const handleSubmit=()=>
    {
        let url=  `http://localhost:8000/Customers/?name=${nm}`;
        axios.get(url).then((res)=>{
            setMyData(res.data);
        });
    }

    const orderData=myData.map((key)=>{
        return(
            <>
            <tr>
                <td>{key.name}</td>
                <td>{key.sizee}</td>
                <td>{key.price}</td>
            </tr>
            </>
        )
    });

    return(
        <>
        <div className="yourod">
        <h1>Your Orders</h1>
        Order Name : <input type="text" value={nm} onChange={(e)=>{setNM(e.target.value)}}/>
        <button className="btorder" onClick={handleSubmit}>Order</button>
        <table border="1" align="center" width="600" bgcolor="orange">
            <tr bgcolor="">
                <th>Name</th>
                <th>Size</th>
                <th>Price</th>
            </tr>
            {orderData}
        </table>
        </div>
        </>
    )
}
export default Search;