import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import { Link, useLocation, useNavigate } from 'react-router';
import { toast } from 'react-toast';

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

    const { createUser, setUser, signInWithGoogle } = useAuth();
    
    
  const navigate = useNavigate();
  const location = useLocation();

  const handleRegistration = (data) => {
    console.log("after register : ", data);
    createUser(data.email, data.password)
      .then((res) => {
        console.log(res.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // google sign in
  const handleGoogleSignIn = (e) => {
    e.preventDefault();
    signInWithGoogle()
      .then((res) => {
        const user = res.user;
        setUser(user);
        setUser(user);
        toast(`Welcome ${user.displayName || "User"}!`);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((err) => {
        if (err.code === "auth/account-exists-with-different-credential") {
          toast.error(
            "This email is already registered with another login provider. Please use that method."
          );
        } else {
          toast.error(err.message);
        }
      });
    };
    
  return (
    <div className="hero-content flex-col">
      <div className="text-center lg:text-left">
        <h1 className="text-3xl font-bold">Create an Account</h1>
        <p className="py-2 text-sm">Register with ZapShift</p>
      </div>

      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleSubmit(handleRegistration)}>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                {...register("email", { required: true })}
                className="input"
                placeholder="Email"
              />
              {errors.email?.type === "required" && (
                <p className="text-red-500" role="alert">
                  Email name is required
                </p>
              )}
              <label className="label">Password</label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 20,
                  pattern:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{20,}$/,
                })}
                className="input"
                placeholder="Password"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-500" role="alert">
                  Password is required
                </p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-500" role="alert">
                  Password must be 6 characters or longer
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-500" role="alert">
                  Password must have at least one uppercase, at least on
                  lowercase and at least one special characters
                </p>
              )}
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Register</button>

              <div className="flex items-center justify-center gap-2 my-2">
                <div className="h-px w-16 bg-gray-600/40"></div>
                <span className="text-sm text-gray-400/90">or</span>
                <div className="h-px w-16 bg-gray-600/40"></div>
              </div>

              {/* google signin */}
              <button
                type="button"
                onClick={handleGoogleSignIn}
                className="flex items-center justify-center gap-3 bg-white text-gray-800 px-5 py-2 rounded-lg w-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="google"
                  className="w-5 h-5"
                />
                Continue with Google
              </button>
            </fieldset>
          </form>
          <p className="text-sm text-gray-500 font-semibold text-center">
            <span className="hover:text-red-500 ">Nwe to Zap Shift ? </span>
            <Link to="/auth/login">
              <span className="text-red-500 hover:font-bold"> Login</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;