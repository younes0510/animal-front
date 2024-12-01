import axios from "axios";
import { useEffect, useState } from "react";
import AnimalCard from "./AnimalCard";

const Animalspage = () => {
  const [animals, setAnimals] = useState([]);
 

  useEffect(() => {
    const fetchAnimals = async () => {
   
        const response = await axios.get("http://localhost:3000/animals");
        setAnimals(response.data);
        
     
    };

    fetchAnimals();
  }, []);

  return (
    <div>
      <div className="max-w-screen-md mx-auto mt-16">
       

        <div className={"grid grid-cols-3 gap-10  p-9"}>
          {animals.map((animal) => (
            <AnimalCard key={animal._id} animal={animal} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Animalspage;
