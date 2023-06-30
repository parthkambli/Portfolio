import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

const Contact = () => {
  return (
    <div className="container fw-bold">
      <h1
        className="display-3"
        style={{
          fontFamily: "Playfair Display, serif",
        }}
      >
        <em>
          Contact<span style={{ color: "#20C997" }}> Me</span>
        </em>
      </h1>
      <div
        className="row m-2 p-2 rounded-4"
        style={{ backgroundColor: "#111418" }}
      >
        <div className="col-lg-6">
          <div className="d-flex p-2 ">
            <div className="w-auto h-50">
              <FaEnvelope className="display-3" style={{ color: "#20C997" }} />
            </div>
            <div className="px-2 py-1">
              <h5 className="m-0" style={{ fontWeight: 600 }}>
                Email
              </h5>
              <p className="m-0 fs-6 fw-light" style={{ color: "#999999" }}>
                parthkambli.pk1@gmail.com
              </p>
            </div>
          </div>
          <div className="d-flex p-2">
            <div className="w-auto h-50">
              <FaPhoneAlt className="display-3" style={{ color: "#20C997" }} />
            </div>
            <div className="px-2 py-1">
              <h5 className="m-0" style={{ fontWeight: 600 }}>
                Call me
              </h5>
              <p className="m-0 fs-6 fw-light" style={{ color: "#999999" }}>
                9284968052 / 8446639401
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="d-flex p-2">
            <div className="w-auto h-50">
              <FaWhatsapp className="display-3" style={{ color: "#20C997" }} />
            </div>
            <div className="px-2 py-1">
              <h5 className="m-0" style={{ fontWeight: 600 }}>
                Whatsapp
              </h5>
              <p className="m-0 fs-6 fw-light" style={{ color: "#999999" }}>
                9284968052
              </p>
            </div>
          </div>
          <div className="d-flex p-2">
            <div className="w-auto h-50">
              <MdLocationOn
                className="display-3"
                style={{ color: "#20C997" }}
              />
            </div>
            <div className="px-2 py-1">
              <h5 className="m-0" style={{ fontWeight: 600 }}>
                Address
              </h5>
              <p className="m-0 fs-6 fw-light" style={{ color: "#999999" }}>
                Patel Pada, Dahanu, Maharashtra, 401602
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="m-2 p-2">
        <form className="d-flex flex-column">
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Name" />
          </div>
          <div className="mb-3">
            <input type="email" className="form-control" placeholder="Email" />
          </div>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Subject" />
          </div>
          <div className="mb-3">
            <textarea
              cols="30"
              rows="3"
              className="form-control"
              placeholder="Your Message"
            ></textarea>
          </div>
          <div className="d-flex justify-content-end">
            <button type="submit" className="btn Btn ">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
