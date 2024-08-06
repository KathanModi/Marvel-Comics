import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './CreateCategory.css';

const CreateCategory = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCategory = { name };
    axios.post('http://localhost:5000/categories', newCategory)
      .then(() => navigate('/dashboard'))
      .catch(error => console.error('There was an error creating the category!', error));
  };

  return (
    <div className="create-category">
      <h1>Create Category</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Category Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button type="submit">Create Category</button>
      </form>
    </div>
  );
};

export default CreateCategory;
