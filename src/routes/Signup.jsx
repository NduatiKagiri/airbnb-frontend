import React, { useState } from 'react';

const SignupScreen = () => {
  const [resp, setResp] = useState([]);

  const register = async (e) => {
    e.preventDefault();
    const postBody = {
      name: e.target.name.value,
      username: e.target.username.value,
      email: e.target.email.value,
    };
    const registration = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postBody),
    };
    const response = await fetch(`http://127.0.0.1:3000/users`, registration);
    const data = await response.json()
    const resp = [...resp];
    resp = data
    setResp(resp)
  };

  return (
    <>
      <div className="container page-login">
        <form onSubmit={register} className="login-form" method="POST" id="signup-form">
          <h2>SIGNUP</h2>

          <div className="add-padding-below">
            <input
              type="text"
              id="name"
              name="name"
              className="form-field"
              placeholder="Name"
              required
            />
          </div>
          <div className="add-padding-below">
            <input
              type="text"
              id="username"
              name="username"
              className="form-field"
              placeholder="Username"
              required
            />
          </div>
          <div className="add-padding-below">
            <input
              type="email"
              id="email"
              name="email"
              className="form-field"
              placeholder="Email"
              required
            />
          </div>
          <p className="signin-message">Already have an account?</p>
          <div className="form-bottom-bar">
            <button type="button">Send</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignupScreen;
