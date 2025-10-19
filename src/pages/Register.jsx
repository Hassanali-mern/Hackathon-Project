import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { auth } from '../firebase/firebaseConfig';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

const schema = yup.object({
  name: yup.string().trim().required('Full name is required'),
  email: yup.string().trim().email('Enter a valid email').required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is required'),
});

const Register = () => {
  const navigate = useNavigate();
  const [firebaseError, setFirebaseError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    setFirebaseError('');
    try {
      const userCred = await createUserWithEmailAndPassword(auth, data.email, data.password);
      // set display name
      await updateProfile(userCred.user, { displayName: data.name });
      navigate('/login');
    } catch (err) {
      console.error('Firebase register error', err);
      // map some common firebase error codes to friendly messages
      const code = err?.code || err?.message || '';
      let message = 'Registration failed. Please try again.';
      if (code.includes('auth/email-already-in-use')) message = 'This email is already in use.';
      else if (code.includes('auth/invalid-email')) message = 'The email address is not valid.';
      else if (code.includes('auth/weak-password')) message = 'Password is too weak. Use at least 6 characters.';
      setFirebaseError(message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-gray-50 to-purple-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white rounded-xl shadow-lg p-8">
        <div>
          <div className="flex justify-center mb-2">
            <i className="fas fa-rocket text-purple-600 text-4xl drop-shadow"></i>
          </div>
          <h2 className="mt-2 text-center text-3xl font-extrabold text-gray-900 tracking-tight">
            Create your <span className="text-purple-600">PitchCraft</span> account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{' '}
            <Link to="/login" className="font-medium text-purple-600 hover:text-purple-500 underline">
              sign in to your existing account
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)} noValidate>
          {firebaseError && (
            <div className="mb-2 text-center">
              <span className="text-sm text-red-600">{firebaseError}</span>
            </div>
          )}
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="mb-4">
              <label htmlFor="full-name" className="sr-only">Full name</label>
              <input
                id="full-name"
                {...register('name')}
                type="text"
                autoComplete="name"
                className={`appearance-none rounded-t-md relative block w-full px-3 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm transition-all duration-150`}
                placeholder="Full name"
              />
              {errors.name && <span className="text-xs text-red-600 mt-1 block">{errors.name.message}</span>}
            </div>
            <div className="mb-4">
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input
                id="email-address"
                {...register('email')}
                type="email"
                autoComplete="email"
                className={`appearance-none relative block w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm transition-all duration-150`}
                placeholder="Email address"
              />
              {errors.email && <span className="text-xs text-red-600 mt-1 block">{errors.email.message}</span>}
            </div>
            <div className="mb-4 relative">
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                {...register('password')}
                type={showPassword ? 'text' : 'password'}
                autoComplete="new-password"
                className={`appearance-none relative block w-full px-3 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm transition-all duration-150 pr-10`}
                placeholder="Password"
              />
              <button
                type="button"
                tabIndex={-1}
                className="absolute right-3 top-2 text-gray-400 hover:text-purple-600 focus:outline-none"
                onClick={() => setShowPassword((v) => !v)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
              {errors.password && <span className="text-xs text-red-600 mt-1 block">{errors.password.message}</span>}
            </div>
            <div className="mb-4 relative">
              <label htmlFor="confirm-password" className="sr-only">Confirm Password</label>
              <input
                id="confirm-password"
                {...register('confirmPassword')}
                type={showConfirmPassword ? 'text' : 'password'}
                autoComplete="new-password"
                className={`appearance-none rounded-b-md relative block w-full px-3 py-2 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm transition-all duration-150 pr-10`}
                placeholder="Confirm Password"
              />
              <button
                type="button"
                tabIndex={-1}
                className="absolute right-3 top-2 text-gray-400 hover:text-purple-600 focus:outline-none"
                onClick={() => setShowConfirmPassword((v) => !v)}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
              {errors.confirmPassword && <span className="text-xs text-red-600 mt-1 block">{errors.confirmPassword.message}</span>}
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-semibold rounded-md text-white bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 shadow-md transition-all duration-150"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2 justify-center">
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                  </svg>
                  Creating...
                </span>
              ) : 'Create account'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;