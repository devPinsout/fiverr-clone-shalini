'use client';

import axios from 'axios';
import Link from 'next/link';
import { useState, useEffect, ChangeEvent, FormEvent } from 'react';


interface Todo {
  id: number;
  todo: string;
  date: string;
}

export default function Form() {
  const [formState, setFormState] = useState({ todo: '', date: '' });
  const [errors, setErrors] = useState<{ todo: string; date: string }>({ todo: '', date: '' });
  const [message, setMessage] = useState('');
  

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({ todo: '', date: '' });
    setMessage('');

    try {
      const response = await axios.post('https://backend-shalini.vercel.app/addtodo', formState);
      if (response.data.error) {
        setErrors(response.data.errors || {});
        setMessage(response.data.message || 'Failed to create todo.');
      } else {
        setMessage('Todo created successfully!');
        setFormState({ todo: '', date: '' }); 
      }
    } catch (error) {
      console.error('API Error:', error);
      setMessage('API Error: Failed to create todo.');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="rounded-md bg-gray-50 p-4 md:p-6">
          {/* Todo Field */}
          <div className="mb-4">
            <label htmlFor="todo" className="mb-2 block text-sm font-medium">
              Todo
            </label>
            <div className="relative">
              <input
                id="todo"
                name="todo"
                type="text"
                value={formState.todo}
                onChange={handleChange}
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                required
                aria-describedby="todo-error"
              />
            </div>
            <div id="todo-error" aria-live="polite" aria-atomic="true">
              {errors.todo && <p className="mt-2 text-sm text-red-500">{errors.todo}</p>}
            </div>
          </div>

          {/* Date Field */}
          <div className="mb-4">
            <label htmlFor="date" className="mb-2 block text-sm font-medium">
              Number of work
            </label>
            <div className="relative">
              <input
                id="date"
                name="date"
                type="text"
                value={formState.date}
                onChange={handleChange}
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                required
                aria-describedby="date-error"
              />
            </div>
            <div id="date-error" aria-live="polite" aria-atomic="true">
              {errors.date && <p className="mt-2 text-sm text-red-500">{errors.date}</p>}
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-end gap-4">
          <Link
            href="/getlist"
            className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
          >
            Get list
          </Link>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
          Create Todo
        </button>
        </div>
        {message && (
          <p className="mt-4 text-sm text-green-500">
            {message}
          </p>
        )}
      </form>

      
    </>
  );
}
