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
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get('https://backend-shalini.vercel.app/readtodo'); // Replace with your GET API endpoint
      console.log("Data of Todo",response);
      setTodos(response.data?.data?.rows);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };


  return (
    <>
      
      <div className="mt-6">
        <h2 className="text-xl font-bold">Todo List</h2>
        <ul className="list-disc pl-5">
          { todos?.length !== 0 &&  todos?.map((todo) => (
            <li key={todo.id} className="mb-2">
              <span className="font-medium">{todo.todo}</span> - <span className="text-gray-600">{todo.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
