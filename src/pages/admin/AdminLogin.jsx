import { useNavigate } from 'react-router-dom';

export default function Login({ onLogin }) {
  const navigate = useNavigate();

  const handleLogin = () => {
    onLogin();
    navigate('/admin/events');
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light px-3">
      <div className="d-flex flex-column flex-md-row bg-white rounded-4 shadow-lg w-100" style={{ maxWidth: '900px', overflow: 'hidden' }}>
        
        {/* Left Panel */}
        <div className="p-5 d-flex flex-column justify-content-center flex-fill">
          <h2 className="text-center fw-bold mb-2">LOGIN</h2>
          <p className="text-center text-muted mb-4">
            How do I get started lorem ipsum dolor at?
          </p>

          <div className="mb-3">
            <div className="input-group mb-3 bg-light rounded">
              <span className="input-group-text bg-light border-0">
                <i className="fas fa-user text-muted"></i>
              </span>
              <input
                type="text"
                className="form-control border-0 bg-light"
                placeholder="Username"
                aria-label="Username"
              />
            </div>

            <div className="input-group bg-light rounded">
              <span className="input-group-text bg-light border-0">
                <i className="fas fa-lock text-muted"></i>
              </span>
              <input
                type="password"
                className="form-control border-0 bg-light"
                placeholder="Password"
                aria-label="Password"
              />
            </div>
          </div>

          <button
            onClick={handleLogin}
            className="btn btn-primary w-100 py-2 fw-semibold shadow-sm"
          >
            Login Now
          </button>

          <hr className="my-4" />
          <p className="text-center fw-semibold small mb-3">Login with Others</p>

          <div className="d-grid gap-2">
            <button className="btn btn-outline-secondary d-flex align-items-center justify-content-center gap-2">
              <img
                src="https://img.icons8.com/color/20/000000/google-logo.png"
                alt="Google"
              />
              <span>Login with Google</span>
            </button>
            <button className="btn btn-outline-secondary d-flex align-items-center justify-content-center gap-2">
              <img
                src="https://img.icons8.com/color/20/000000/facebook-new.png"
                alt="Facebook"
              />
              <span>Login with Facebook</span>
            </button>
          </div>
        </div>

        {/* Right Panel */}
        <div
          className="d-none d-md-flex flex-fill align-items-center justify-content-center p-4"
          style={{
            background: 'linear-gradient(135deg, #7f51ff 0%, #5a37c8 100%)',
          }}
        >
          <div
            className="rounded-3 border border-white border-opacity-25 p-2"
            style={{ maxWidth: '400px' }}
          >
            <img
              src="/login.avif"
              alt="Login Visual"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
