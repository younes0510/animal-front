import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const  Formpage = () => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [gender, setGender] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
      await axios.post('http://localhost:3000/animals', {
        name,
        gender,
        description,
        image,
      });

      
      setName('');
      setGender('');
      setDescription('');
      setImage('');

  };

  return (
    <div className="container mx-auto p-6 bg-[#fed877] rounded-lg shadow-xl mt-10 max-w-3xl">
      <h2 className="text-3xl font-bold text-center text-[#354018] mb-6">Add a animal</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-lg font-semibold text-[#354018]">Pet Name</label>
          <input
            type="text"
            id="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
            className="w-full p-3 border-2 border-[#354018] rounded-md mt-2 focus:outline-none  transition"
          />
        </div>

        <div>
          <label htmlFor="gender" className="block text-lg font-semibold text-[#354018]">Pet Type</label>
          <select
            id="gender"
            name="gender"
            onChange={(e) => setGender(e.target.value)}
            value={gender}
            required
            className="w-full p-3 border-2 border-[#354018] rounded-md mt-2 focus:outline-none   transition"
          >
            <option value="">Select Type</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="bird">Bird</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="image" className="block text-lg font-semibold text-[#354018]">Pet Photo URL</label>
          <input
            type="text"
            id="image"
            onChange={(e) => setImage(e.target.value)}
            value={image}
            required
            className="w-full p-3 border-2 border-[#354018] rounded-md mt-2 focus:outline-none   transition"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-lg font-semibold text-[#354018]">Description</label>
          <textarea
            id="description"
            name="description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            rows="5"
            className="w-full p-3 border-2 border-[#354018] rounded-md mt-2 focus:outline-none  transition"
          />
        </div>

        <div className="flex justify-center mt-6">
         <button
            type="submit"
            className="bg-[#354018] text-white py-3 px-8 rounded-full hover:bg-yellow-400 hover:text-gray-900 transition duration-300 transform hover:scale-105"
          >
       Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Formpage