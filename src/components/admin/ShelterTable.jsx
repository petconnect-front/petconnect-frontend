
const mockShelters = [
  { id: 1, name: 'Refugio Patitas Felices', email: 'contacto@patitasfelices.org', phone: '123-456-7890' },
  { id: 2, name: 'Hogar Animalito', email: 'info@hogaranimalito.com', phone: '987-654-3210' },
  { id: 3, name: 'Casa Peluditos', email: 'contacto@casapeluditos.com', phone: '555-666-7777' },
];

function ShelterTable() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h3 className="text-lg font-semibold text-dark mb-4">Refugios registrados</h3>
      <table className="w-full table-auto text-left">
        <thead>
          <tr className="bg-gray-200 text-gray-700">
            <th className="p-3">ID</th>
            <th className="p-3">Nombre</th>
            <th className="p-3">Correo</th>
            <th className="p-3">Teléfono</th>
          </tr>
        </thead>
        <tbody>
          {mockShelters.map((shelter) => (
            <tr key={shelter.id} className="border-t border-gray-200">
              <td className="p-3">{shelter.id}</td>
              <td className="p-3">{shelter.name}</td>
              <td className="p-3">{shelter.email}</td>
              <td className="p-3">{shelter.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ShelterTable;
