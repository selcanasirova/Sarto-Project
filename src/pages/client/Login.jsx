import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomAlert from "../../components/CustomAlert";
import Header from "../../components/Header";

const SignUp = () => {
  const navigate = useNavigate();
  const [alertState, setAlertState] = useState("none");

  const customAlert = () => {
    if (alertState !== "none") {
      setTimeout(() => {
        setAlertState("");
      }, 10000);
      if (alertState === "gap") {
        return <CustomAlert text="Fill the gap" />;
      }
      if (alertState === "wrong") {
        return <CustomAlert text="Wrong Email or Password !" />;
      }
      if (alertState === "success") {
        return <CustomAlert text="Success " />;
      }
    }
  };

  const admin = [
    {
      user_mail: "admin@gmail.com",
      user_name: "Admin",
      user_pass: "123",
      user_status: "admin",
    },
  ];

  // const users = !localStorage.getItem("users") ? [] : JSON.parse(localStorage.getItem("users"));
  const users = [
    {
      user_mail: "selcanasirova@gmail.com",
      user_name: "Selcan",
      user_pass: "selcan123",
      user_status: "user",
    },
  ]

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentUser = [...users, ...admin].find((user) => user.user_mail === email);

    if (!email || !pass) {
      setAlertState("gap");
    } else {
      if (currentUser === undefined) {
        setAlertState("wrong");
      } else {
        if (email === currentUser.user_mail && pass === currentUser.user_pass) {
          setAlertState("success");
          localStorage.setItem("user", JSON.stringify(currentUser));
          if (currentUser.user_status === "admin") {
            navigate("/");
          } else {
            navigate("/");
          }
          window.location.reload();
        } else {
          setAlertState("wrong");
        }
      }
    }
  };

  return (
    <>
    <Header />
      <div className="login-page">
        <div className="login p-5 m-5">
          <h1 className="mt-5">Login</h1>

          <form onSubmit={handleSubmit}>
            <div className="input-group mb-3 py-5">
              <input
                type="text"
                className="p-2"
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            <div className="input-group mb-3">
              <input
                type="password"
                className="mb-5 p-2"
                placeholder="Password"
                onChange={(e) => {
                  setPass(e.target.value);
                }}
              />
            </div>

            <button type="submit" className="p-2 mt-5">
              Log in
            </button>
          </form>
          <button className="p-2 mt-5" onClick={() => navigate("/register")}>
            or Sign up
          </button>

          {customAlert()}
        </div>
      </div>
    </>
  );
};

export default SignUp;
