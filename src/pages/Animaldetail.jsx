import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AnimalDetail = () => {
  const [animal, setAnimal] = useState({});
 
  const { id } = useParams();

  useEffect(() => {
    const fetchAnimal = async () => {
      
        const response = await axios.get(`http://localhost:3000/animals/${id}`);
        setAnimal(response.data);
       
      
    };

    fetchAnimal();
  }, [id]);


  return (
    <div className="max-w-4xl mx-auto p-6 bg-[#e6c676] shadow-lg rounded-lg mb-10">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">{animal.name}</h1>
      <img
        src={animal.image}
        alt={animal.name}
        className="w-full max-w-sm mx-auto rounded-lg mb-6"
      />
      <p className="text-2xl font-bold text-red-900 mb-2">{animal.gender}</p>
      <p className="text-gray-700">{animal.description}</p>
    </div>
  );
};

export default AnimalDetail;
