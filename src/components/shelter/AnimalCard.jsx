function AnimalCard({ animal, onDelete }) {
  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">
      <img src={animal.photo} alt={animal.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h4 className="text-lg font-bold text-dark">{animal.name}</h4>
        <p className="text-gray-700 mb-2">{animal.description}</p>
        <button
          onClick={() => onDelete(animal.id)}
          className="text-red-500 hover:text-red-600 text-sm font-medium"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default AnimalCard;
