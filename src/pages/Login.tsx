import { Button } from 'antd';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoginMutation } from '../redux/features/auth/authApi';

const Login = () => {

    const { register, handleSubmit } = useForm()

    const [login,{data,error}]= useLoginMutation()
    console.log("data", data);
    console.log("error", error);

    const onSubmit = (data: any) => {
        console.log(data)
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label htmlFor="id" className="block text-sm font-jost font-medium text-gray-700">
               Id
              </label>
              <input
                type="text"
                id="id"
                {...register('user-id', { required: true })}
                className="block w-full px-3 py-2 mt-1 text-gray-700 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="id"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                {...register('password', { required: true })}
                className="block w-full px-3 py-2 mt-1 text-gray-700 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="password"
              />
            </div>
            <div>
              <button
                type="submit"
                className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    );
};

export default Login;