import { Link } from 'react-router-dom'; 

const AnimalCard = ({ animal }) => {
    return (
        <div className="text-center shadow-xl rounded-lg border overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl cursor-pointer bg-[#fed877]">
            <img 
                src={animal.image} 
                alt={animal.name} 
                className="w-screen h-[200px]" 
            />
            <div className="p-4 ">
                <h1 className="text-3xl font-bold   text-red-600">{animal.name}</h1>
                <div className="flex flex-col items-center mt-2">
                    <h4 className="text-black text-2xl font-semibold">{animal.gender}</h4> 
                    <h5 className="text-sm text-gray-500 capitalize">{animal.description}</h5>
                    <Link 
                        to={`/animals/${animal._id}`} 
                        className="text-blue-500 hover:underline"
                    >
                         Details
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default AnimalCard;
