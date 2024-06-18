import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Accountsignin = () => {
  const [input, setInput] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const myNav = useNavigate();


  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput(values => ({ ...values, [name]: value }));

  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    let url = " http://localhost:4000/Customers";
    axios.post(url, input).then((res) => {
      alert("Succesfully Registered!!!");
      myNav("/Login");
    });
  }
  return (
    <div className="registerbox">
      <div className="screen__content">
        <div className="container-register">
          <div className="screen">
            <h1 id="h1reg" class="h1 heading"> Registration Form</h1>
            <form className="login">
              <div className="login__field">
                <input type="text" name="name" value={input.name} onChange={handleInput} className="login__input" placeholder="User name" required />
              </div>
              <div className="login__field">
                <input type="number" name="number" value={input.number} onChange={handleInput} className='login__input' placeholder="Number" required />
              </div>
              <br />
              <div className="login__field">
                <input type="email" name="email" value={input.email} onChange={handleInput} className="login__input" placeholder="Email" />
              </div>
              <br />
              <div className="login__field">
                <input type="password" name="password" value={input.password} onChange={handleInput} className="login__input" placeholder="Password" />
              </div>
              <br />
              <button onClick={handleSubmit} id="btn" class="btn">Register Now</button>
              <br />
              <br />
              <div className="linklog">
                <p> Already a user! <Link to="/login" className="mynav">  Login  </Link> </p>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Accountsignin;