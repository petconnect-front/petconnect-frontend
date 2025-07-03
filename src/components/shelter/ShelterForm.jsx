import { useState } from 'react';

function ShelterForm({ onAdd }) {
  const [form, setForm] = useState({
    name: '',
    description: '',
    photoFile: null,
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

    const previewUrl = form.photoFile
      ? URL.createObjectURL(form.photoFile)
      : '';

    const animal = {
      name: form.name,
      description: form.description,
      photo: previewUrl, // Usamos una URL temporal del archivo local
    };

    onAdd(animal);

    // Reiniciar
    setForm({ name: '', description: '', photoFile: null });
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow">
      <h3 className="text-lg font-semibold mb-4 text-dark">Agregar animal en adopción</h3>
      <div className="grid gap-4">
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={form.name}
          onChange={handleChange}
          className="p-3 border border-gray-300 rounded"
          required
        />
        <textarea
          name="description"
          placeholder="Descripción"
          value={form.description}
          onChange={handleChange}
          className="p-3 border border-gray-300 rounded resize-none"
          required
        />
        <input
          type="file"
          name="photoFile"
          accept="image/*"
          onChange={handleChange}
          className="p-3 border border-gray-300 rounded"
          required
        />
        <button
          type="submit"
          className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
        >
          Publicar
        </button>
      </div>
    </form>
  );
}

export default ShelterForm;
