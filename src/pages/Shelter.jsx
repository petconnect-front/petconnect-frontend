import { useState } from 'react';
import Navbar from '../components/common/Navbar';
import ShelterForm from '../components/shelter/ShelterForm';
import AnimalCard from '../components/shelter/AnimalCard';

function Shelter() {
  const [animals, setAnimals] = useState([
    {
      id: 1,
      name: 'Toby',
      description: 'Cachorro enérgico que ama jugar',
      photo: 'https://place-puppy.com/300x200',
    },
    {
      id: 2,
      name: 'Lola',
      description: 'Gatita tímida pero amorosa',
      photo: 'https://placekitten.com/300/200',
    },
  ]);

  const addAnimal = (animal) => {
    setAnimals([{ id: Date.now(), ...animal }, ...animals]);
  };

  const deleteAnimal = (id) => {
    setAnimals(animals.filter((a) => a.id !== id));
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="max-w-5xl mx-auto py-8 px-4">
        <h2 className="text-2xl font-bold text-center text-dark mb-6">
          Panel del Refugio 🐶🏡
        </h2>
        <ShelterForm onAdd={addAnimal} />
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {animals.map((animal) => (
            <AnimalCard key={animal.id} animal={animal} onDelete={deleteAnimal} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shelter;
