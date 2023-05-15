import "./Register.css";


export default function Register() {
  return (
    <div className="Register">
        <span className="RegisterTitle">Register Here..</span>
      <div className="box">  
        <form  className="RegisterForm">
            <label htmlFor="">Username</label>
            <input type="text" className="RegisterInput" placeholder="Enter your Username" />
            <label htmlFor="">Email</label>
            <input type="email" className="RegisterInput" placeholder="Enter your email.." />
            <label htmlFor="">Password</label>
            <input type="password" className="RegisterInput"  placeholder="Enter your password.." />
            <button className="RegisterButton">Register</button>
        </form>
        </div>
            <button className="RegisterLoginButton">Login</button>
    </div>
  )
}
