import React from "react";
import Header from "./Header";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import checkValidate from "../utils/validate.jsx";
import { addUser } from "../utils/userSlice.jsx";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { PROFILE_PIC } from "../utils/constant.jsx";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, seterrorMessage] = useState(null);
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = checkValidate(email.current.value, password.current.value);
    seterrorMessage(message);
    if (message) return;

    if (isSignIn) {
      //sign in  logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: PROFILE_PIC,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              seterrorMessage(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div className="relative">
      <Header />
      <div
        className="w-full h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("https://assets.nflxext.com/ffe/siteui/vlv3/0b0dad79-ad4d-42b7-b779-8518da389976/web/IN-en-20250908-TRIFECTA-perspective_0647b106-80e1-4d25-9649-63099752b49a_small.jpg")`,
        }}
      />
      <form
        onSubmit={handleSubmit}
        className="w-1/4 min-w-[400px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/80 p-10 rounded-2xl text-white"
      >
        <h1 className="text-3xl font-bold py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignIn && (
          <input
            type="text"
            ref={name}
            name="name"
            placeholder="Full Name"
            className="p-3 rounded-md m-1 my-3 w-full bg-gray-700 text-white placeholder-gray-400"
            required={!isSignIn}
          />
        )}

        <input
          type="email"
          ref={email}
          name="email"
          placeholder="Email address"
          className="p-3 rounded-md m-1 my-3 w-full bg-gray-700 text-white placeholder-gray-400"
          required
        />

        <input
          type="password"
          ref={password}
          name="password"
          placeholder="Password"
          className="p-3 rounded-md m-1 my-3 bg-gray-700 w-full text-white placeholder-gray-400"
          required
        />
        <p className="p-2 text-red-800">{errorMessage}</p>
        <button
          type="submit"
          onClick={handleSubmit}
          className="p-3 rounded-md m-2 my-4 bg-red-700 w-full hover:bg-red-800 transition-colors"
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        <p className="text-sm py-6 text-center">
          {isSignIn ? (
            <>
              New to Netflix?{" "}
              <button
                type="button"
                onClick={toggleSignInForm}
                className="text-blue-400 hover:underline"
              >
                Sign up now.
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                type="button"
                onClick={toggleSignInForm}
                className="text-blue-400 hover:underline"
              >
                Sign in now.
              </button>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
