import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className='flex justify-center items-center h-screen w-screen'>
      <form
        onSubmit={handleSubmit}
        className='bg-white p-20 px-28 rounded-lg shadow-md shadow-slate-300'
      >
        <h2 className='text-2xl font-extrabold text-gray-800 mb-6'>Sign Up</h2>
        <div className='mb-4'>
          <label htmlFor='name' className='block text-gray-700 font-bold mb-2'>
            Name
          </label>
          <input
            type='text'
            name='name'
            id='name'
            className='w-full border rounded-lg py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='email' className='block text-gray-700 font-bold mb-2'>
            Email
          </label>
          <input
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
            type='password'
            name='password'
            id='password'
            className='w-full border rounded-lg py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button
          type='submit'
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 my-3 px-4 rounded focus:outline-none focus:shadow-outline w-full'
        >
          Signup
        </button>
        <br />
        <span className='text-xl '>
          already have an account?{" "}
          <Link to='/login' className='text-blue-500'>
            Login
          </Link>
        </span>
        <br />
        <a
          type='submit'
          className='bg-red-500 hover:bg-blue-700 text-white font-bold py-2 my-3 px-4 w-full rounded focus:outline-none focus:shadow-outline text-center cursor-pointer'
        >
          Continue with Google
        </a>
      </form>
    </div>
  );
};

export default SignUp;
