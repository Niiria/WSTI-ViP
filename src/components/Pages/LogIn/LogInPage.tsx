import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function LogInPage() {
  document.title = 'ViP Login';
  const history = useHistory();
  const [login, setLogin] = useState('Admin');
  const [password, setPassword] = useState('Admin');
  const [error, setError] = useState(false);

  const handleChange = (e: any) => {
    switch (e.target.id) {
      case 'user_login':
        setLogin(e.target.value);
        break;
      case 'user_password':
        setPassword(e.target.value);
        break;
      default:
        break;
    }
  };

  const handleSumbit = (e: any) => {
    e.preventDefault();
    if (login !== 'Admin' || password !== 'Admin') {
      setError(true);
    } else {
      localStorage.setItem('login', 'true');
      window.location.reload();
      history.push('/main');
    }
  };

  return (
    <section className="relative LogInPage flex flex-col flex-grow background justify-center items-center">
      <img
        src="/img/logoLG.png"
        alt="logo"
        className="sm:absolute top-0 right-0 ml-auto p-4"
      />
      <div className="flex flex-grow flex-col mt-16 justify-center items-center  ">
        <h1 className="text-center text-gold text-5xl lg:text-6xl flex break-words stroke-black-text-shadow-3px font-sacramento mx-4 sm:mx-0">
          To continue you need to login
        </h1>
        <form
          className=" text-2xl flex flex-col text-center justify-center items-center flex-wrap sm:w-3/4 "
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
              className="border-4 h-16 sm:w-1/2 text-4xl text-black font-poppins   border-black rounded-lg logInPage_input_background px-3 mx-3"
              value={login}
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
              className="border-4 h-16 sm:w-1/2  text-4xl text-black font-poppins border-black rounded-lg logInPage_input_background px-3 mx-3"
              value={password}
              onChange={handleChange}
            />
          </label>
          <button
            type="submit"
            className="logInPage_btn_background w-1/3 hover:bg-orange-300 transform duration-1000 transition stroke-black-text-shadow-3px border-4 h-16 border-black text-gold text-5xl px-8 font-sacramento rounded-lg"
          >
            Enter
          </button>
        </form>

        {error ? (
          <p className="sm:absolute bottom-0 text-red-700 text-center text-5xl font-bold font-dancing_script  ">
            Error
          </p>
        ) : (
          <p />
        )}
      </div>
    </section>
  );
}
