import { useState } from 'react';

function PetForm({ onAddPet }) {
  const [form, setForm] = useState({
    name: '',
    species: '',
    age: '',
    photoFile: null, // ahora usamos archivo en lugar de string
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'photoFile') {
      setForm({ ...form, photoFile: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const photo = form.photoFile
      ? URL.createObjectURL(form.photoFile)
      : '';

    const newPet = {
      name: form.name,
      species: form.species,
      age: form.age,
      photo,
    };

    onAddPet(newPet);

    // Reiniciar formulario
    setForm({
      name: '',
      species: '',
      age: '',
      photoFile: null,
    });

    e.target.reset(); // limpiar input file
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-6 mb-6">
      <h3 className="text-lg font-semibold text-dark mb-4">Agregar nueva mascota</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={form.name}
          onChange={handleChange}
          required
          className="p-3 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="species"
          placeholder="Especie"
          value={form.species}
          onChange={handleChange}
          required
          className="p-3 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="age"
          placeholder="Edad"
          value={form.age}
          onChange={handleChange}
          required
          className="p-3 border border-gray-300 rounded"
        />
        <input
          type="file"
          name="photoFile"
          accept="image/*"
          onChange={handleChange}
          required
          className="p-3 border border-gray-300 rounded"
        />
      </div>
      <button
        type="submit"
        className="mt-4 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
      >
        Guardar
      </button>
    </form>
  );
}

export default PetForm;
