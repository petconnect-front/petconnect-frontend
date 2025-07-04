import { useEffect, useState } from 'react';
import Navbar from '../components/common/Navbar';
import PostCard from '../components/feed/PostCard';
import { getAllPosts, createPost } from '../api/postApi';
import { uploadImage } from '../api/mediaApi';
import { useAuth } from '../context/AuthContext'; // 👈 importar contexto

function Feed() {
  const [posts, setPosts] = useState([]);
  const [formData, setFormData] = useState({
    petName: '',
    imageFile: null,
    description: '',
  });

  const { user } = useAuth(); // 👈 obtener usuario autenticado

  // 🔁 Cargar posts al iniciar
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getAllPosts();
        setPosts(data);
      } catch (err) {
        console.error('Error al obtener publicaciones:', err.message);
      }
    };

    fetchPosts();
  }, []);

  // 📝 Manejar cambios del formulario
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'imageFile') {
      setFormData({ ...formData, imageFile: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // 📤 Publicar nueva mascota
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const imageUrl = await uploadImage(formData.imageFile);

      const newPost = {
        petName: formData.petName,
        image: imageUrl,
        description: formData.description,
        userId: user?.id,
        author: user?.name || 'Usuario anónimo',
      };

      const created = await createPost(newPost);
      setPosts([created, ...posts]);

      setFormData({ petName: '', imageFile: null, description: '' });
    } catch (err) {
      console.error('Error al publicar:', err.message);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="max-w-2xl mx-auto py-6 px-4">
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl shadow-md p-6 mb-6 flex flex-col gap-4"
        >
          <h3 className="text-xl font-semibold text-dark text-center">
            Publicar nueva mascota 🐾
          </h3>

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
            type="file"
            name="imageFile"
            accept="image/*"
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

        {posts.length === 0 ? (
          <p className="text-center text-gray-600">No hay publicaciones aún.</p>
        ) : (
          posts.map((post) => (
            <PostCard key={post.id} data={post} currentUser={user} />
          ))
        )}
      </div>
    </div>
  );
}

export default Feed;
