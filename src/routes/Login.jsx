import React from 'react';

const LoginScreen = () => {
  const [auth, setAuth] = useState([]);

  const signin = async (e) => {
    e.preventDefault();
    const postBody = {
      username: e.target.username.value,
    };
    const login = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postBody),
    };
    const response = await fetch(`http://127.0.0.1:3000/auth/login`, login);
    const data = await response.json()
    const resp = [...auth];
    resp = data
    setAuth(resp)
  };

  return (
    <>
      <div className="container page-login">
        <h2>LOGIN</h2>
        <form onSubmit={signin} className="login-form" method="POST">
          <div className="add-padding-below">
            <input
              type="text"
              id="name"
              name="name"
              className="form-field"
              placeholder="Username"
              required
            />
          </div>
          <p className="signin-message">
            Don&apos;t have an account yet?
          </p>
        </form>
      </div>
    </>
  );
};

export default LoginScreen;
