import "./login.css";


export default function login() {
  return (
    <div className="login">
        <span className="loginTitle">Login</span>
        <form  className="loginForm">
            <label htmlFor="">Username</label>
            <input type="text" className="loginInput" placeholder="Enter your email.." />
            <label htmlFor="">Password</label>
            <input type="password" className="loginInput" placeholder="Enter your password.." />
            <button className="loginButton">Login</button>
        </form>
            <button className="loginRegisterButton">Register</button>
    </div>
  )
}
