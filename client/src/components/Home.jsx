const Home = () => {
  return (
    <div className="container px-5">
      <h1
        className="display-3"
        style={{
          fontFamily: "Playfair Display, serif",
        }}
      >
        <em>
          Hello, <span style={{ color: "#20C997" }}>I am Parth</span>
        </em>
      </h1>
      <h3 style={{ fontWeight: 600 }}>Web Developer & Designer</h3>
      <button type="button" className="btn outlineBtn">
        <strong>Hire me</strong>
      </button>
    </div>
  );
};

export default Home;
