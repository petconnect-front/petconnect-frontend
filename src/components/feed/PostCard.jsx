import { useState } from 'react';

function PostCard({ data, currentUser }) {
  const [reactions, setReactions] = useState({
    love: [],
    cute: []
  });

  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const toggleReaction = (type) => {
    const userId = currentUser.id;
    const alreadyReacted = reactions[type].includes(userId);

    const updated = {
      ...reactions,
      [type]: alreadyReacted
        ? reactions[type].filter(id => id !== userId)
        : [...reactions[type], userId]
    };

    setReactions(updated);
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const comment = {
      id: Date.now(),
      userId: currentUser.id,
      userName: currentUser.name,
      content: newComment,
      createdAt: new Date().toLocaleString(),
    };

    setComments([comment, ...comments]);
    setNewComment('');
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
      <div className="p-4 flex items-center gap-4">
        <img
          src={data.authorAvatar || 'https://cdn-icons-png.flaticon.com/512/616/616408.png'}
          alt="avatar"
          className="w-10 h-10 rounded-full object-cover border"
        />
        <div>
          <p className="font-semibold text-dark">{data.authorName || 'Usuario anónimo'}</p>
          <p className="text-sm text-gray-500">{data.createdAt || 'Hace un momento'}</p>
        </div>
      </div>

      {data.image && (
        <img
          src={data.image}
          alt={data.petName}
          className="w-full h-64 object-cover"
        />
      )}

      <div className="p-4">
        <h3 className="text-xl font-semibold text-dark">{data.petName}</h3>
        <p className="text-gray-800 mb-3">{data.description}</p>

        {/* Reacciones */}
        <div className="flex gap-6 items-center mb-2">
          <button
            onClick={() => toggleReaction('love')}
            className={`text-2xl ${reactions.love.includes(currentUser.id) ? 'text-red-500' : 'text-gray-400'}`}
          >
            🐶
          </button>
          <span className="text-sm text-gray-600">{reactions.love.length} Amor animal</span>

          <button
            onClick={() => toggleReaction('cute')}
            className={`text-2xl ${reactions.cute.includes(currentUser.id) ? 'text-pink-500' : 'text-gray-400'}`}
          >
            🥹
          </button>
          <span className="text-sm text-gray-600">{reactions.cute.length} Ternura</span>
        </div>

        <div className="mt-1 text-xs text-gray-500">
          ❤️ Reaccionaron: {reactions.love.concat(reactions.cute).join(', ') || 'Nadie aún'}
        </div>

        {/* Comentarios */}
        <div className="mt-6">
          <form onSubmit={handleAddComment} className="flex flex-col gap-2">
            <input
              type="text"
              placeholder="Escribe un comentario..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="p-2 border border-gray-300 rounded"
            />
            <button
              type="submit"
              className="self-end bg-green-600 text-white py-1 px-4 rounded hover:bg-green-700 text-sm"
            >
              Comentar
            </button>
          </form>

          <div className="mt-4 space-y-3">
            {comments.map((comment) => (
              <div key={comment.id} className="border-t pt-2 text-sm">
                <p className="font-medium text-dark">{comment.userName}</p>
                <p>{comment.content}</p>
                <p className="text-xs text-gray-400">{comment.createdAt}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
