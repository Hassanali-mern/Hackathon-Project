import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { auth } from '../firebase/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';


const Login = () => {

  const dispatch = useDispatch()
  let isRegistered = useSelector((state) => state.auth.isRegistered);
    let [isShowPass, setIsShowPass] = useState(false);
    let [isSubmiting, setIsSubmiting] = useState(false);
    const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();


  const formSchema = yup.object({
    email: yup.string().required('Email is required').email('Enter a valid email'),
    password: yup.string().required('Password is required'),
  })

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(formSchema)
  });


  const onSubmit = async (data) => {
      setLoginError('');
      try {
        setIsSubmiting(true);
        await signInWithEmailAndPassword(auth, data.email, data.password);
        navigate('/dashboard');
      } catch (error) {
        let message = 'Login failed. Please try again.';
        if (error.code === 'auth/user-not-found') message = 'No user found with this email.';
        else if (error.code === 'auth/wrong-password') message = 'Incorrect password.';
        else if (error.code === 'auth/invalid-email') message = 'Invalid email address.';
        setLoginError(message);
      } finally {
        setIsSubmiting(false);
      }
  }

  return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-gray-50 to-purple-200 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white rounded-xl shadow-lg p-8">
          <div>
            <div className="flex justify-center mb-2">
              <i className="fas fa-rocket text-purple-600 text-4xl drop-shadow"></i>
            </div>
            <h2 className="mt-2 text-center text-3xl font-extrabold text-gray-900 tracking-tight">
              Sign in to <span className="text-purple-600">PitchCraft</span>
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{' '}
              <Link to="/register" className="font-medium text-purple-600 hover:text-purple-500 underline">
                create a new account
              </Link>
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)} noValidate>
            {loginError && (
              <div className="mb-2 text-center">
                <span className="text-sm text-red-600">{loginError}</span>
              </div>
            )}
            <div className="rounded-md shadow-sm -space-y-px">
              <div className="mb-4">
                <label htmlFor="email-address" className="sr-only">Email address</label>
                <input
                  id="email-address"
                  {...register('email')}
                  type="email"
                  autoComplete="email"
                  required
                  className={`appearance-none rounded-t-md relative block w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm transition-all duration-150`}
                  placeholder="Email address"
                />
                {errors.email && <span className="text-xs text-red-600 mt-1 block">{errors.email.message}</span>}
              </div>
              <div className="mb-4 relative">
                <label htmlFor="password" className="sr-only">Password</label>
                <input
                  id="password"
                  {...register('password')}
                  type={isShowPass ? 'text' : 'password'}
                  autoComplete="current-password"
                  required
                  className={`appearance-none rounded-b-md relative block w-full px-3 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm transition-all duration-150 pr-10`}
                  placeholder="Password"
                />
                <button
                  type="button"
                  tabIndex={-1}
                  className="absolute right-3 top-2 text-gray-400 hover:text-purple-600 focus:outline-none"
                  onClick={() => setIsShowPass((v) => !v)}
                >
                  {isShowPass ? <FaEyeSlash /> : <FaEye />}
                </button>
                {errors.password && <span className="text-xs text-red-600 mt-1 block">{errors.password.message}</span>}
              </div>
            </div>

            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-purple-600 hover:text-purple-500 underline">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmiting}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-semibold rounded-md text-white bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 shadow-md transition-all duration-150"
              >
                {isSubmiting ? (
                  <span className="flex items-center gap-2 justify-center">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                    </svg>
                    Signing in...
                  </span>
                ) : 'Sign in'}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
};

export default Login;