import React from "react";
import "./LoginScreen.css";
function LoginScreen() {
  return (
    <div className="d-flex justify-content-center py-5 pt-5 bg-login">
      <div className="col-lg-3 col-md-4 col-sm-6">
        <h1 className="text-primary  display-3 mt-3">LOGIN</h1>
        <p className="text-secondary">Please enter your login and password !</p>
        {/* FORM */}
        <form>
          {/* EMAIL */}
          <div className="mt-5">
            <label for="email" className="form-label text-white">
              Email:
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              name="email"
            />
          </div>
          {/* PASSWORD */}
          <div class="mb-5 mt-4">
            <label for="pwd" class="form-label  text-white">
              Password:
            </label>
            <input
              type="password"
              class="form-control"
              id="pwd"
              placeholder="Enter password"
              name="pswd"
            />
          </div>
          <button type="submit" className="m-3 btn btn-primary">
            Login as Admin
          </button>
          <button type="submit" className="m-3 btn btn-primary">
            Login as Resident
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginScreen;
