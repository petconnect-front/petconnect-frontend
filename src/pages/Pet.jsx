import { useState } from 'react';
import Navbar from '../components/common/Navbar';
import PetForm from '../components/pet/PetForm';
import PetCard from '../components/pet/PetCard';

function Pet() {
  const [pets, setPets] = useState([]);

  const addPet = (pet) => {
    setPets([{ id: Date.now(), ...pet }, ...pets]);
  };

  const deletePet = (id) => {
    setPets(pets.filter((p) => p.id !== id));
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="max-w-5xl mx-auto py-8 px-4">
        <h2 className="text-2xl font-bold text-center text-dark mb-6">
          Mis Mascotas 🐕🐾
        </h2>
        <PetForm onAdd={addPet} />
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {pets.map((pet) => (
            <PetCard key={pet.id} pet={pet} onDelete={deletePet} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pet;
