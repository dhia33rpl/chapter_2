const PostPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen bg-blue-200">
        <div className="flex flex-row items-center justify-center gap-10">
          <img
            src="https://i.pinimg.com/736x/dc/14/91/dc1491d3f5fa357926c873be8036943c.jpg" 
            alt="Foto Ezraaa"
            className="w-64 h-64 rounded-full object-cover shadow-lg"
          />

          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Halo, Aku Raihanah</h1>
            <p className="text-lg mb-6">Frontend Developer | RPL 6 kece</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PostPage;
