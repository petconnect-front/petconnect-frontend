import { useState } from 'react';
import Navbar from '../components/common/Navbar';
import PetCard from '../components/pet/PetCard';
import PetForm from '../components/pet/PetForm';

function PetProfile() {
  const [pets, setPets] = useState([
    {
      id: 1,
      name: 'Max',
      species: 'Perro',
      age: '3 años',
      photo: 'https://place-puppy.com/300x300',
    },
    {
      id: 2,
      name: 'Mia',
      species: 'Gato',
      age: '2 años',
      photo: 'https://placekitten.com/300/300',
    },
  ]);

  const addPet = (newPet) => {
    setPets([{ id: Date.now(), ...newPet }, ...pets]);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto py-8 px-4">
        <h2 className="text-2xl font-bold mb-6 text-dark text-center">Mis Mascotas 🐶🐱</h2>
        <PetForm onAddPet={addPet} />
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {pets.map((pet) => (
            <PetCard key={pet.id} pet={pet} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PetProfile;
