import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";

const Login = () => {
  const {
    logInUserWithEmailPassword,
    logInUserWithGoogle,
    ForgetPassword,
    loading,
  } = useContext(AuthContext);

  // Navigation Setup
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const from = location?.state?.from.pathname || "/";
  console.log(from);

  // Validation With React Hook Form
  const { register, handleSubmit, error } = useForm();
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmitForm = ({ email, password }) => {
    logInUserWithEmailPassword(email, password)
      .then(() => {
        setLoading(true);
        alert("login sucessfully");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        alert(error.message);
      });

    setEmail("");
    setPassword("");
  };

  const handleForgetPassword = (email) => {
    ForgetPassword(email);
  };

  return (
    <div className='flex justify-center items-center  h-screen w-screen'>
      <form
        onSubmit={handleSubmit(handleSubmitForm)}
        className='bg-white p-20 px-28 rounded-lg shadow-md shadow-slate-300'
      >
        <h2 className='text-2xl font-extrabold text-gray-800 mb-6'>Log In</h2>
        <div className='mb-4'>
          <label htmlFor='email' className='block text-gray-700 font-bold mb-2'>
            Email
          </label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            type='email'
            name='email'
            id='email'
            className='w-full border rounded-lg py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className='mb-6'>
          <label
            htmlFor='password'
            className='block text-gray-700 font-bold mb-2'
          >
            Password
          </label>
          <input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters long",
              },
              maxLength: {
                value: 20,
                message: "Password must not exceed 20 characters",
              },
              pattern: {
                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                message:
                  "Password must contain at least one uppercase letter, one lowercase letter, and one number",
              },
            })}
            type={show ? "text" : "password"}
            name='password'
            id='password'
            className='w-full border rounded-lg py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
            value={password}
            onChange={handlePasswordChange}
          />
          {show ? (
            <span className='cursor-pointer' onClick={() => setShow(false)}>
              Hide
            </span>
          ) : (
            <span className='cursor-pointer' onClick={() => setShow(true)}>
              Show
            </span>
          )}
        </div>
        <span className='text-sm mb-4'>
          Forget password?{" "}
          <span
            className='text-blue-500 cursor-pointer'
            onClick={() => handleForgetPassword(email)}
          >
            reset
          </span>
        </span>
        <button
          type='submit'
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 my-3 px-4 w-full rounded focus:outline-none focus:shadow-outline'
        >
          Login
        </button>
        <br />
        <span className='text-md'>
          New here?{" "}
          <Link to='/signup' className='text-blue-500'>
            Signup
          </Link>
        </span>
        <br />
        <a
          onClick={logInUserWithGoogle}
          type='submit'
          className='bg-red-500 hover:bg-blue-700 text-white font-bold py-2 my-3 px-4 w-full rounded focus:outline-none focus:shadow-outline text-center cursor-pointer'
        >
          Continue with Google
        </a>
      </form>
    </div>
  );
};

export default Login;
