const Home = () => {
  return (
    <div className="container">
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
      <button
        type="button"
        className="btn btn-lg outlineBtn"
        onClick={() => {
          const contactSection = document.getElementById("Contact");
          if (contactSection) {
            window.scrollTo({
              top: contactSection.offsetTop,
              behavior: "smooth",
            });
          }
        }}
      >
        <strong>Hire me</strong>
      </button>
    </div>
  );
};

export default Home;
