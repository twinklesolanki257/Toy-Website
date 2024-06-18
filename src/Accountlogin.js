import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { stulogin } from "./stuloginSlice";
import { adminlogin } from "./adminSlice";

const Accountlogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usertype, setUsertype] = useState("student");
  const myDispatch = useDispatch();
  const myNav = useNavigate();

  const submitHandle = (e) => {
    if (usertype == "student") {
      e.preventDefault();
      let url = `http://localhost:4000/Customers?email=${email}`;
      axios.get(url).then((res) => {
        console.log(res.data);
        if (res.data.length == 1) {
          if (res.data[0].password == password) {
            let stunm = res.data[0].name;
            let stuid = res.data[0].id;
            myDispatch(stulogin({ stunm, stuid }));
            myNav("/shop");
          }
          else {
            alert("Invalid Password");
          }
        }
        else {
          alert("Invalid email!")
        }
      });

    }
    else {
      e.preventDefault();
      let url = `  http://localhost:4000/adminuser/?email=${email}`;
      axios.get(url).then((res) => {
        if (res.data.length == 1) {
          if (res.data[0].password == password) {

            let adminname = res.data[0].name;
            let adminid = res.data[0].id;
            // myDispatch(adminlogin({adminname, adminid}));
            myDispatch(adminlogin({ "adname": adminname, "adid": adminid }))
            myNav("/dashboard");
          }
          else {
            alert("Password dose not Match!!!");
          }
        }
        else {
          alert("Invalid Email!!!");
        }
      });
    }
  }

  return (
    <>
      <div className='registerbox'>
        <div class="screen__content">
          <div className="container-register">
            <div className="screen">
              <form className="login">
                <h1 class="h1 heading">LOGIN  FORM</h1>
                <div className="login__field">
                  <input type="email" name="email" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" required />
                </div>
                <br />
                <div className="login__field">
                  <input type="password" name="password" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" id="myInput" required />
                </div>
                <br />
                <select name="userRoll" className="select-option" value={usertype} onChange={(e) => { setUsertype(e.target.value) }}>
                  <option>Customer</option>
                  <option>Admin</option>
                </select>
                <button id="btn" class="btn" onClick={submitHandle}>Sign In</button>
                <br/><br/>
                <p>New User Register Here! <Link to="/signin" className="mynav"> Sign up </Link></p>

              </form>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
export default Accountlogin;