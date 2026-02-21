import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// Компонент иконки - ВНЕ основного компонента
const StretchingIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 466.751 466.751"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M262.03 88.675c24.448 0 44.338-19.89 44.338-44.338C306.368 19.89 286.478 0 262.03 0c-24.447 0-44.337 19.89-44.337 44.337s19.89 44.338 44.337 44.338M407.875 98.751H227.721c-3.394 0-6.45 1.461-8.612 3.786-.303.26-.602.525-.887.813l-95.497 96.353c-2.063 2.081-3.384 4.648-3.993 7.356l-50.348-5.821c-5.8-.674-10.509 3.711-10.509 9.393v.687l-2.247-.285a10 10 0 0 0-1.232-.077c-5.338 0-9.521 4.137-9.521 9.418v14c0 5.18 4.268 9.926 9.504 10.581l3.601.457c.636 4.662 4.408 8.604 9.123 9.263l106.159 14.841c2.735.382 7.213.988 9.951 1.347l57.635 7.558c1.561.205 4.235 1.596 5.299 2.757l4.509 4.92c1.072 1.171 2.249 3.978 2.332 5.563l8.088 155.166c.274 5.267 4.559 9.576 9.8 9.923v.003c0 5.514 4.486 10 10 10h14c5.081 0 9.28-3.812 9.909-8.724a9.65 9.65 0 0 0 5.431-2.745 9.7 9.7 0 0 0 2.828-6.951l-1.283-214.268c.012-.188.027-.375.027-.564l-.054-103.748h96.142c7.72 0 14-6.28 14-14v-3c-.001-7.722-6.281-14.002-14.001-14.002m-192 54.624v62.892l-40.732-2.901a269 269 0 0 1-9.727-.909l-7.254-.839zm55.187 292.929-8.088-155.166c-.205-3.932-2.284-8.894-4.945-11.798l-4.509-4.92c-2.67-2.915-7.453-5.403-11.372-5.917l-57.635-7.558a1480 1480 0 0 1-9.867-1.336L68.488 244.77c-.227-.032-.612-33.524-.612-33.524l53.278 6.16c.395.564.817 1.113 1.3 1.626l2.45 2.602c2.77 2.94 6.659 4.627 10.671 4.627 3.93 0 7.628-1.548 10.414-4.359l1.445-1.458 16.833 1.946c2.808.325 7.368.751 10.166.95l126.948 9.042c.138.01.371.259.371.398l1.186 212.97c-3.563.126-31.867.729-31.876.554" />
  </svg>
);

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        background: "linear-gradient(135deg, #007086 0%, #66b3cc 100%)",
        boxShadow: "0 4px 15px rgba(0, 112, 134, 0.3)",
      }}
    >
      <div className="container">
        {/* Логотип */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <div
            className="me-2 d-flex align-items-center justify-content-center"
            style={{
              width: "40px",
              height: "40px",
              background: "linear-gradient(135deg, #f56800, #ed014b)",
              borderRadius: "8px",
              color: "white",
            }}
          >
            <StretchingIcon />
          </div>
          <span className="fw-bold text-white fs-4">BVibe</span>
        </Link>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            {user ? (
              <>
                {/* Иконка пользователя */}
                <li className="nav-item me-3">
                  <span className="nav-link text-white d-flex align-items-center gap-2">
                    <div style={{ color: "#f56800" }}>
                      <StretchingIcon />
                    </div>
                    <span className="fw-medium">{user.name}</span>
                  </span>
                </li>

                {/* Кнопка выхода */}
                <li className="nav-item">
                  <button
                    className="btn px-4 py-2 border-0 rounded-pill fw-semibold text-white"
                    onClick={handleLogout}
                    style={{
                      background: "#b96e7c",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = "#ed014b";
                      e.target.style.transform = "scale(1.05)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = "#b96e7c";
                      e.target.style.transform = "scale(1)";
                    }}
                  >
                    <i className="bi bi-box-arrow-right me-2"></i>
                    Выйти
                  </button>
                </li>
              </>
            ) : (
              <>
                {/* Кнопка ВХОД */}
                <li className="nav-item">
                  <Link
                    to="/login"
                    className="btn px-4 py-2 border-0 rounded-pill fw-semibold text-white"
                    style={{
                      background: "rgba(255, 255, 255, 0.15)",
                      transition: "all 0.3s ease",
                      textDecoration: "none",
                      display: "inline-block",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#f56800";
                      e.currentTarget.style.transform = "scale(1.05)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background =
                        "rgba(255, 255, 255, 0.15)";
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  >
                    <i className="bi bi-box-arrow-in-right me-2"></i>
                    Вход
                  </Link>
                </li>

                {/* Кнопка РЕГИСТРАЦИЯ */}
                <li className="nav-item ms-2">
                  <Link
                    to="/register"
                    className="nav-link px-3 py-2 text-white fw-semibold"
                    style={{
                      background: "#0f9352",
                      borderRadius: "50px",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = "#ed014b";
                      e.target.style.transform = "scale(1.05)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = "#0f9352";
                      e.target.style.transform = "scale(1)";
                    }}
                  >
                    <i className="bi bi-person-plus me-2"></i>
                    Регистрация
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
