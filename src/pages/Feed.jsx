import { useState } from 'react';
import Navbar from '../components/common/Navbar';
import PostCard from '../components/feed/PostCard';

function Feed() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      petName: 'Luna',
      image: 'https://placekitten.com/400/300',
      description: 'Luna es una gatita juguetona que busca hogar 🐾',
    },
    {
      id: 2,
      petName: 'Rocky',
      image: 'https://place-puppy.com/400x300',
      description: 'Rocky ama correr y dar abrazos 🐶💚',
    },
  ]);

  const [formData, setFormData] = useState({
    petName: '',
    image: '',
    description: '',
  });

  const currentUser = {
    id: 'user123',
    name: 'Diego'
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      ...formData,
    };
    setPosts([newPost, ...posts]);
    setFormData({ petName: '', image: '', description: '' });
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="max-w-2xl mx-auto py-6 px-4">
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl shadow-md p-6 mb-6 flex flex-col gap-4"
        >
          <h3 className="text-xl font-semibold text-dark text-center">Publicar nueva mascota 🐾</h3>
          <input
            type="text"
            name="petName"
            placeholder="Nombre de la mascota"
            value={formData.petName}
            onChange={handleChange}
            required
            className="p-3 border border-gray-300 rounded"
          />
          <input
            type="text"
            name="image"
            placeholder="URL de imagen"
            value={formData.image}
            onChange={handleChange}
            required
            className="p-3 border border-gray-300 rounded"
          />
          <textarea
            name="description"
            placeholder="Descripción"
            value={formData.description}
            onChange={handleChange}
            required
            className="p-3 border border-gray-300 rounded resize-none"
          />
          <button
            type="submit"
            className="bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            Publicar
          </button>
        </form>

        {posts.map((post) => (
          <PostCard key={post.id} data={post} currentUser={currentUser} />
        ))}
      </div>
    </div>
  );
}

export default Feed;
