import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Dashboard from "./Dashboard";
import "./Login.scss";
import Header from "../Component/Header";
import logo1 from "../image/logo1.png";
import Footer from "../Component/Footer";
import Seo from '../Component/Seo';

const API_URL = fetch('POST http://localhost:3307/api/users/verify-phone');

const LoginRegister = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [showOtpField, setShowOtpField] = useState(false);
  const [enteredOtp, setEnteredOtp] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm();

  // Toggle between Login & Register
  const toggleForm = () => {
    setIsRegister(!isRegister);
    setShowOtpField(false);
  };

  //  Send OTP Request**
  const sendOtp = async (data) => {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phone: data.phone }),
      });

      const result = await response.json();
      if (response.ok) {
        alert(`OTP Sent! Check your phone.`);
        setPhoneNumber(data.phone);
        setShowOtpField(true);
        setOtpSent(true);
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      console.log(error); 
      alert("Error sending OTP. Try again.");
    }
  };

  //  Verify OTP**
  const verifyOtp = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/verify`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phone: phoneNumber, otp: enteredOtp }),
      });

      const result = await response.json();
      if (response.ok) {
        alert("OTP Verified! Registration Successful.");
        setIsAuthenticated(true);
      } else {
        alert(`Invalid OTP: ${result.message}`);
      }
    } catch (error) {
      alert("Error verifying OTP. Try again.");
    }
  };

  // **Login (Dummy Function)**
  const onLogin = (data) => {
    setIsAuthenticated(true);
  };

  if (isAuthenticated) {
    return <Dashboard setIsAuthenticated={setIsAuthenticated} />;
  }

  return (
    <div className="auth-container">
       <Seo title="Login Page" description="this is login page" page="Login" keywords="wealth, financial freedom, risk management, strategies" />
      <Header />
      <div className="auth-card">
        <div className="logo-section1">
          <div className="logo1">
            <img src={logo1} alt="The Capital Tree Logo" className="logo1-img" title="The Capital Tree Logo" height="50px" width="50px" loading="eager"/>
          </div>
          <h1 className="brand-name">TheCapitalTree</h1>
        </div>

        {isRegister ? (
          <>
            <h2 className="auth-title">Register</h2>
            <p className="auth-subtitle">Create an account to get started</p>

            {!showOtpField ? (
              <form className="auth-form" onSubmit={handleSubmit(sendOtp)}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your full name"
                    {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && <p className="error">{errors.name.message}</p>}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    {...register("email", { required: "Email is required" })}
                  />
                  {errors.email && <p className="error">{errors.email.message}</p>}
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Enter your phone number"
                    {...register("phone", {
                      required: "Phone number is required",
                      pattern: { value: /^[0-9]{10}$/, message: "Enter a valid 10-digit phone number" },
                    })}
                  />
                  {errors.phone && <p className="error">{errors.phone.message}</p>}
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Create a strong password"
                    {...register("password", { required: "Password is required" })}
                  />
                  {errors.password && <p className="error">{errors.password.message}</p>}
                </div>

                <button type="submit" className="auth-button">Get OTP</button>
              </form>
            ) : (
              <form className="otp-form" onSubmit={verifyOtp}>
                <div className="form-group">
                  <label htmlFor="otp">Enter OTP</label>
                  <input
                    type="text"
                    id="otp"
                    placeholder="Enter 4-digit OTP"
                    maxLength="4"
                    value={enteredOtp}
                    onChange={(e) => setEnteredOtp(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="auth-button">Verify OTP</button>
              </form>
            )}

            <p className="toggle-message">
              Already have an account? <button onClick={toggleForm}>Log in</button>
            </p>
          </>
        ) : (
          <>
            <h2 className="auth-title-log">Log In</h2>
            <p className="auth-subtitle-log">Join for exclusive access</p>
            <form className="auth-form-log" onSubmit={handleSubmit(onLogin)}>
              <div className="form-group-log">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && <p className="error">{errors.email.message}</p>}
              </div>

              <div className="form-group-log">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  {...register("password", { required: "Password is required" })}
                />
                {errors.password && <p className="error">{errors.password.message}</p>}
              </div>

              <button type="submit" className="auth-button-log">Log in</button>
            </form>

            <p className="toggle-message-log">
              Don’t have an account? <button onClick={toggleForm}>Register</button>
            </p>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default LoginRegister;
