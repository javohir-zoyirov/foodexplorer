import logo from "../image/logo.png";
import "./header.css";

export const Nav = () => {
  return (
    <div className="position-relative">
      <nav style={{ background: "#00111A" }} className="navbar navbar-expand-lg py-3 position-sticky top-0">
        <div className="container">
          <div className="navbar-brand">
            <img src={logo} alt="Logo" />
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <div className="navbar-nav flex-grow-1 pe-3">
              <div className="d-flex w-100">
                <input
                  placeholder="Busque por pratos ou ingredientes"
                  style={{
                    background: "#0D1D25",
                    color: "#7C7C8A",
                    width: "100%",  
                  }}
                  className="form-control border-0 input"
                />
              </div>
            </div>

            <div className="d-flex align-items-center gap-3">
              <button
                style={{ color: "#FFFFFF", background: "#750310" }}
                className="btn px-4 border-0"
              >
                Novo prato
              </button>
              <button className="btn border-0" type="submit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  fill="currentColor"
                  className="bi bi-box-arrow-in-right text-white"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
