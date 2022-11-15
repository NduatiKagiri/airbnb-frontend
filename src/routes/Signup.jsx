/* eslint linebreak-style: ["error", "unix"] */

function Signup() {
  return (
    <div className="container page-login">
      <form action="#" className="login-form" method="POST" id="signup-form">
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
  );
}
export default Signup;
