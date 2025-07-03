function Post({ data }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
      <img
        src={data.image}
        alt={data.petName}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-dark">{data.petName}</h3>
        <p className="text-gray-700 mt-2">{data.description}</p>
      </div>
    </div>
  );
}

export default Post;
