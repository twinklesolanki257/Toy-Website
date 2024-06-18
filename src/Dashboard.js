import React from 'react'
import stocktoy from './toy img/toystock.avif';
import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { addData } from "./productSlice";
import { Link } from 'react-router-dom';
import { Fourth, Funskool } from './Product';

const Dashboard = () => {
    // update
    const [input, setinput] = useState({})

    const dispatch = useDispatch();
    const mydataAdd = (id, name, image, price) => {
        let productObj = { id: id, name: name, image: image, price: price, quantity: 1 };
        dispatch(addData(productObj));
    }


    const [myData, setMyData] = useState([]);
    const [newdata, setNewData] = useState([]); // Initialize newdata with an empty array

    const [myData1, setMyData1] = useState([]);

    // products
    const [mydata, setmydata] = useState([]);
    const loaddata = () => {
        let api = "http://localhost:4000/products";
        axios.get(api).then((res) => {
            setmydata(res.data);
        });
    }
    useEffect(() => {
        loaddata();
    }, []);

    const mydelete = (myid) => {
        let api = `http://localhost:4000/products/${myid}`
        axios.delete(api).then((res) => {
            alert("record deleted");
            loaddata();
        })
    }

    // customers list
    const loadData = () => {
        let url = "http://localhost:4000/Customers";
        axios.get(url).then((res) => {
            setMyData(res.data);
        });
    }
    useEffect(() => {
        loadData();

    }, []
    );

    const ans = myData.map((key) => (
        <tr className="order-data">
            <td>{key.name}</td>
            <td>{key.email}</td>
            <td>{key.password}</td>
        </tr>
    ));

    // query
    const loadData1 = () => {
        let url = "http://localhost:4000/query";
        axios.get(url).then((res) => {
            setMyData1(res.data);
        });
    }
    useEffect(() => {
        loadData1();

    }, []
    );

    const ans1 = myData1.map((key) => (
        <tr className="order-data">
            <td>{key.name}</td>
            <td>{key.email}</td>
            <td>{key.comment}</td>
        </tr>
    ));

    // product list display delete
    const display = mydata.map((key) => {
        return (
            <>
                <tr className='order-data'>
                    <td>{key.name}</td>
                    <td>{key.price}</td>
                    <td>
                        <a href='#' onClick={() => { mydelete(key.id) }}>
                            <i class='bx bxs-message-square-x'></i>
                        </a>
                    </td>
                </tr>
            </>
        )
    })

    // update
    const handleinput = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        setinput(values => ({ ...values, [name]: value }))
    }
    const handlesubmit = () => {
        let api = " http://localhost:4000/products";
        axios.post(api, input).then((response) => {
            alert("data savesss")
        })
    }

    return (
        <>
            <div className='dashboard'>
                <div>
                    <div class="container text-center">
                        <div class="row">
                            <div class="col">
                                <h3>6</h3>
                                Orders
                                <br />
                                <i class='bx bxs-plane-alt'></i>
                            </div>
                            <div class="col">
                                <h3>6</h3>
                                Delivered
                                <br />
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-truck" viewBox="0 0 16 16">
                                    <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
                                </svg>
                            </div>
                            <div class="col">
                                <h3>6</h3>
                                In Stock
                                <br />
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-seam-fill" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.01-.003.268-.108a.75.75 0 0 1 .558 0l.269.108.01.003zM10.404 2 4.25 4.461 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339L8 5.961 5.596 5l6.154-2.461z" />
                                </svg>
                            </div>
                            <div class="col">
                                <h3>6</h3>
                                Out of Stock
                                <br />
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-ban" viewBox="0 0 16 16">
                                    <path d="M15 8a6.97 6.97 0 0 0-1.71-4.584l-9.874 9.875A7 7 0 0 0 15 8M2.71 12.584l9.874-9.875a7 7 0 0 0-9.874 9.874ZM16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='d-flex con2'>
                    <div class="card mb-3">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src={stocktoy} class="img-fluid rounded-start" alt="..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Total Sales</h5>
                                    <p class="card-text">Toyy Shop</p>
                                    <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='statbox'>
                        <div className='stats'>
                            <h1>Stats</h1>
                            <p>Sales</p>
                            <div className="container2">
                                <div className="skills sales">100%</div>
                            </div>
                            <p>Stock</p>
                            <div className="container2">
                                <div className="skills stock">98%</div>
                            </div>
                            <p>Delivery</p>
                            <div className="container2">
                                <div className="skills delivery">80%</div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* user list */}
                <div className="customers-head">
                    <h2>Customers List</h2>
                </div>
                <div className="customers-list">
                    <table>
                        <thead>
                            <td>Name</td>
                            <td>Email ID</td>
                            <td>Password</td>
                        </thead>
                        {ans}

                    </table>
                </div>

                {/* query list */}
                <div className="query-head">
                    <h2>Customers Query</h2>
                </div>
                <div className="customers-list">
                    <table>
                        <thead>
                            <td>Name</td>
                            <td>Email ID</td>
                            <td>Comment</td>
                        </thead>
                        {ans1}

                    </table>
                </div>

                {/* product list */}
                <div className="query-head">
                    <h2>Products List</h2>
                </div>
                <div className="products-list">
                    <table>
                        <thead>
                            <td>Name</td>
                            <td>Price</td>
                            <td>Delete</td>
                        </thead>
                        {display}
                    </table>
                </div>

                <div className="query-head">
                    <h2>Update Products</h2>
                </div>
                <br></br>
                <div className='insertform'>
                    <div className='form-inputs'>
                        <div className='input'>
                            <span>Name</span><input type='text' name='name' onChange={handleinput} />
                        </div>
                        <div className='input'>
                            <span>Price</span><input type='text' name='price' onChange={handleinput} /> 

                        </div>
                        <br></br>
                        <button onClick={handlesubmit}>submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;