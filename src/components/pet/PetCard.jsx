function PetCard({ pet }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <img
        src={pet.photo}
        alt={pet.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-dark">{pet.name}</h3>
        <p className="text-gray-700">{pet.species} · {pet.age}</p>
      </div>
    </div>
  );
}

export default PetCard;
