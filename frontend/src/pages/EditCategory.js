import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './EditCategory.css';

const EditCategory = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [category, setCategory] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:5000/categories/${id}`)
      .then(response => setCategory(response.data.name))
      .catch(error => console.error('There was an error fetching the category!', error));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.patch(`http://localhost:5000/categories/${id}`, { name: category })
      .then(() => navigate('/dashboard'))
      .catch(error => console.error('There was an error updating the category!', error));
  };

  return (
    <div className="edit-category">
      <h1>Edit Category</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Category Name"
          required
        />
        <button type="submit">Update Category</button>
      </form>
    </div>
  );
};

export default EditCategory;
