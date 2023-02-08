import './Register.scss'
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className='register'>
        <div className="card">
            <div className="left">
                <h1>Quillon Social.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt provident dignissimos eum, tempora et quo recusandae vero itaque atque ratione sit temporibus molestiae earum, cupiditate aspernatur iusto tempore quas rem.</p>
                
                <span>Do you have an account?</span>

                <Link to ='/login'>
                <button>Login</button>
                </Link>
            </div>
            <div className="right">
                <h1>Register</h1>
                <form action="">
                    <input type="text" placeholder='Username' />
                    <input type="email" placeholder='Email' />
                    <input type="text" placeholder='Name' />
                    <input type="password" placeholder='Password' />
                    <button>Register</button>
                </form>
            </div>
        </div>
    </div>)
}

export default Register