import { Link } from "react-router-dom"
import {useContext} from "react";
import { AuthContext } from '../../context/authContext';
import "./login.scss"

export const Login = () => {
    const {login} = useContext(AuthContext);
    const handleLogin=()=>{
        login()
    }
  return (
    <div className="login">
        <div className="card">
            <div className="left">
                <h1>HI There</h1>
                <p>Welcome to a new area of socializing and chit-chatting with your friends.</p>
                <span>Dont't you have a account</span>
                <Link to="/register">
                <button>Register</button>
                </Link>
                
            </div>
            <div className="right">
                <h1>Login</h1>
                <form>
                    <input type="text" placeholder="username" />
                    <input type="password" placeholder="password"/>
                    <button onClick={handleLogin}>Submit</button>
                </form>
            </div>
        </div>
    </div>

  )
}
