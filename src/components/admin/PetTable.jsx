
const mockPets = [
  { id: 1, name: 'Luna', species: 'Perro', age: '2 años', owner: 'user1@correo.com' },
  { id: 2, name: 'Michi', species: 'Gato', age: '1 año', owner: 'refugio@petconnect.com' },
  { id: 3, name: 'Rocky', species: 'Conejo', age: '3 años', owner: 'admin@petconnect.com' },
];

function PetTable() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h3 className="text-lg font-semibold text-dark mb-4">Mascotas registradas</h3>
      <table className="w-full table-auto text-left">
        <thead>
          <tr className="bg-gray-200 text-gray-700">
            <th className="p-3">ID</th>
            <th className="p-3">Nombre</th>
            <th className="p-3">Especie</th>
            <th className="p-3">Edad</th>
            <th className="p-3">Dueño</th>
          </tr>
        </thead>
        <tbody>
          {mockPets.map((pet) => (
            <tr key={pet.id} className="border-t border-gray-200">
              <td className="p-3">{pet.id}</td>
              <td className="p-3">{pet.name}</td>
              <td className="p-3">{pet.species}</td>
              <td className="p-3">{pet.age}</td>
              <td className="p-3">{pet.owner}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}



export default PetTable;
