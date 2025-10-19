import React, { useState } from 'react';
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
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <div className="flex justify-center">
            <i className="fas fa-rocket text-purple-600 text-4xl"></i>
          </div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create your PitchCraft account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{' '}
            <Link to="/login" className="font-medium text-purple-600 hover:text-purple-500">
              sign in to your existing account
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="rounded-md shadow-sm -space-y-px">
            {firebaseError && (
              <div className="mb-2 text-center">
                <span className="text-sm text-red-600">{firebaseError}</span>
              </div>
            )}
            <div className="mb-2">
              <label htmlFor="full-name" className="sr-only">Full name</label>
              <input
                id="full-name"
                {...register('name')}
                type="text"
                autoComplete="name"
                className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm`}
                placeholder="Full name"
              />
              {errors.name && <span className="text-sm text-red-600">{errors.name.message}</span>}
            </div>
            <div className="mb-2">
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input
                id="email-address"
                {...register('email')}
                type="email"
                autoComplete="email"
                className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm`}
                placeholder="Email address"
              />
              {errors.email && <span className="text-sm text-red-600">{errors.email.message}</span>}
            </div>
            <div className="mb-2">
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                {...register('password')}
                type="password"
                autoComplete="new-password"
                className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm`}
                placeholder="Password"
              />
              {errors.password && <span className="text-sm text-red-600">{errors.password.message}</span>}
            </div>
            <div>
              <label htmlFor="confirm-password" className="sr-only">Confirm Password</label>
              <input
                id="confirm-password"
                {...register('confirmPassword')}
                type="password"
                autoComplete="new-password"
                className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm`}
                placeholder="Confirm Password"
              />
              {errors.confirmPassword && <span className="text-sm text-red-600">{errors.confirmPassword.message}</span>}
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              {isSubmitting ? 'Creating...' : 'Create account'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;