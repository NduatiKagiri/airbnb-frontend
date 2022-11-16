/*  eslint linebreak-style: ["error", "unix"]  */

function LoginScreen() {
  return (
    <div className="container page-login">
      <form action="#" className="login-form" method="POST">
        <h2>LOGIN</h2>

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
        <p className="signin-message">
          Don&apos;t have an account yet?
        </p>
      </form>
    </div>
  );
}
export default LoginScreen;
