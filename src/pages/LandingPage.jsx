import 'bootstrap/dist/css/bootstrap.min.css';
import ExploreEvents from '../components/ExploreEvents'

export default function LandingPage() {
  return (
    <div className="min-vh-100 bg-white d-flex flex-column">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg shadow-sm py-3">
        <div className="container">
          <a className="navbar-brand fw-bold text-primary" href="#">LOGO</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item mx-2">
                <a className="nav-link text-dark" href="#">Home</a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link text-dark" href="#">About us</a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link text-dark" href="#">Course</a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link text-dark" href="#">Pricing</a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link text-dark" href="#">Contact</a>
              </li>
               <li className="nav-item mx-2">
                 <a href="/admin/login" className="nav-link text-dark">Admin Login</a>
              </li>
            </ul>
          </div>
          <a
            href="/admin/login"
            className="btn btn-primary rounded-pill px-4"
          >
            Get Started
          </a>
        </div>
      </nav>

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
      <div>
        <ExploreEvents/>
      </div>

      
    </div>
  );
}
