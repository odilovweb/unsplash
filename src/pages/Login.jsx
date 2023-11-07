import React from "react";
import { FcGoogle } from "react-icons/fc";
import { SignupWithGoogle, logOut } from "../firebase/firebaseConfig";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../redux/likeSlice";
function Login() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.like);
  const handleLogin = () => {
    SignupWithGoogle()
      .then(({ user }) => {
        dispatch(addUser(user));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      {!user ? (
        <div className="w-full flex items-center justify-center flex-col h-screen">
          <h1 className="font-bold my-5 text-3xl">Sign in / Sign up</h1>
          <div>
            <button onClick={handleLogin} className="btn btn-accent">
              <span>
                <FcGoogle />
              </span>
              <span className="">Sign up with google</span>
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-3">
          <div className="avatar online">
            <div className="w-24 rounded-full">
              <img src={user.photoURL} />
            </div>
          </div>
          <h1 className="text-2xl font-mono font-semibold">
            {user.displayName}
          </h1>
          <button onClick={logOut} className="btn btn-warning">
            <span>
              <FcGoogle />
            </span>
            <span>Log Out</span>
          </button>
        </div>
      )}
    </>
  );
}

export default Login;
