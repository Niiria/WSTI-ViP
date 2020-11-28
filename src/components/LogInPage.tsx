import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function LogInPage({ setLogInPage }: any) {
  // const [login, setLogin] = useState('');
  // const [password, setPassword] = useState('');
  const [error, setError] = useState(true);
  useEffect(() => {
    setLogInPage(false);
  });

  const handleChange = () => {};

  const handleSumbit = () => {};

  return (
    <section className=" LogInPage flex flex-col flex-grow background justify-center items-center">
      <img
        src="/img/logoLG.png"
        alt="logo"
        className="absolute  sm:right-0 top-0 m-auto sm:m-4"
      />
      <div className="flex flex-col justify-center mt-30-vh items-center  ">
        <h1 className="text-center text-gold text-px-72 flex break-words stroke-black-text-shadow-3px font-sacramento mx-4 sm:mx-0">
          To continue you need to login
        </h1>
        <form
          className=" text-2xl flex flex-col text-center justify-center flex-wrap sm:w-3/4 "
          onSubmit={handleSumbit}
        >
          <label
            className="text-gold stroke-black-text-shadow-3px m-2 mx-12 text-5xl font-sacramento flex flex-col items-center sm:flex-row sm:justify-center  "
            htmlFor="user_login"
          >
            Login:
            <input
              autoComplete="off"
              id="user_login"
              type="text"
              className="border-4 h-16 sm:w-1/2 w-3/4 text-black font-poppins   border-black rounded-lg logInPage_input_background px-3 mx-3"
              value="Admin"
              onChange={handleChange}
            />
          </label>
          <label
            className="text-gold stroke-black-text-shadow-3px m-2 text-5xl font-sacramento flex flex-col items-center sm:flex-row sm:justify-center  "
            htmlFor="user_password"
          >
            Password:
            <input
              autoComplete="off"
              id="user_password"
              type="text"
              className="border-4 h-16 sm:w-1/2 w-3/4 text-black font-poppins border-black rounded-lg logInPage_input_background px-3 mx-3"
              value="Password"
              onChange={handleChange}
            />
          </label>
        </form>
        <button
          type="submit"
          className="mt-4 sm:mt-0 logInPage_button_background hover:bg-orange-300 transform duration-1000 transition stroke-black-text-shadow-3px border-4 h-16 border-black text-gold text-5xl px-8 flex font-sacramento rounded-lg"
        >
          <Link to="/main" onClick={() => setLogInPage(true)}>
            Enter
          </Link>
        </button>

        {error ? (
          <div className="text-red-700 text-center text-6xl ">Error</div>
        ) : (
          <div />
        )}
      </div>
    </section>
  );
}
