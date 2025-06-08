// pages/LandingPage.js
// import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Navbar'; // adjust path if needed

export default function LandingPage() {
  return (
    <div className="min-vh-100 bg-white d-flex flex-column">
      {/* Sticky Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="container my-auto py-5">
        <div className="row align-items-center">
          {/* Left Text */}
          <div className="col-lg-6 text-center text-lg-start mb-5 mb-lg-0">
            <h1 className="fw-bold text-primary mb-3">
              BUSINESS <br /> LANDING PAGE
            </h1>
            <p className="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore.
            </p>
            <button className="btn btn-outline-primary mt-3 px-4 py-2 rounded-pill">
              More Info
            </button>
          </div>

          {/* Right Image */}
          <div className="col-lg-6 text-center">
            <img
              src="/main.jpg"
              alt="Landing"
              className="img-fluid"
              style={{ maxWidth: "90%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
