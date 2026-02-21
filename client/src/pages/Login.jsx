import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Toast from "../components/Toast";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { login, toast } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const result = await login(formData.email, formData.password);

    if (result.success) {
      navigate("/");
    }

    setLoading(false);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Toast show={toast.show} message={toast.message} type={toast.type} />

      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div className="card shadow-lg border-0 rounded-4 overflow-hidden">
              {/* Верхний градиент */}
              <div
                style={{
                  height: "8px",
                  background:
                    "linear-gradient(90deg, #f56800, #ed014b, #b96e7c, #007086, #66b3cc, #0f9352)",
                }}
              />

              <div
                className="card-body p-5"
                style={{ backgroundColor: "#f8f9fa" }}
              >
                {/* Логотип с иконкой растяжки */}
                <div className="text-center mb-4">
                  <div
                    className="d-inline-block p-3 rounded-3 mb-3"
                    style={{
                      background: "linear-gradient(135deg, #f56800, #ed014b)",
                      boxShadow: "0 10px 20px rgba(237, 1, 75, 0.2)",
                    }}
                  >
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 466.751 466.751"
                      fill="white"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M262.03 88.675c24.448 0 44.338-19.89 44.338-44.338C306.368 19.89 286.478 0 262.03 0c-24.447 0-44.337 19.89-44.337 44.337s19.89 44.338 44.337 44.338M407.875 98.751H227.721c-3.394 0-6.45 1.461-8.612 3.786-.303.26-.602.525-.887.813l-95.497 96.353c-2.063 2.081-3.384 4.648-3.993 7.356l-50.348-5.821c-5.8-.674-10.509 3.711-10.509 9.393v.687l-2.247-.285a10 10 0 0 0-1.232-.077c-5.338 0-9.521 4.137-9.521 9.418v14c0 5.18 4.268 9.926 9.504 10.581l3.601.457c.636 4.662 4.408 8.604 9.123 9.263l106.159 14.841c2.735.382 7.213.988 9.951 1.347l57.635 7.558c1.561.205 4.235 1.596 5.299 2.757l4.509 4.92c1.072 1.171 2.249 3.978 2.332 5.563l8.088 155.166c.274 5.267 4.559 9.576 9.8 9.923v.003c0 5.514 4.486 10 10 10h14c5.081 0 9.28-3.812 9.909-8.724a9.65 9.65 0 0 0 5.431-2.745 9.7 9.7 0 0 0 2.828-6.951l-1.283-214.268c.012-.188.027-.375.027-.564l-.054-103.748h96.142c7.72 0 14-6.28 14-14v-3c-.001-7.722-6.281-14.002-14.001-14.002m-192 54.624v62.892l-40.732-2.901a269 269 0 0 1-9.727-.909l-7.254-.839zm55.187 292.929-8.088-155.166c-.205-3.932-2.284-8.894-4.945-11.798l-4.509-4.92c-2.67-2.915-7.453-5.403-11.372-5.917l-57.635-7.558a1480 1480 0 0 1-9.867-1.336L68.488 244.77c-.227-.032-.612-33.524-.612-33.524l53.278 6.16c.395.564.817 1.113 1.3 1.626l2.45 2.602c2.77 2.94 6.659 4.627 10.671 4.627 3.93 0 7.628-1.548 10.414-4.359l1.445-1.458 16.833 1.946c2.808.325 7.368.751 10.166.95l126.948 9.042c.138.01.371.259.371.398l1.186 212.97c-3.563.126-31.867.729-31.876.554" />
                    </svg>
                  </div>
                  <h2 className="fw-bold" style={{ color: "#007086" }}>
                    Вперед к результатам!
                  </h2>
                  <p style={{ color: "#66b3cc" }}>Войдите в свой аккаунт</p>
                </div>

                <form onSubmit={handleSubmit} autoComplete="off">
                  {/* Email */}
                  <div className="mb-4">
                    <label
                      className="form-label fw-semibold"
                      style={{ color: "#007086" }}
                    >
                      Email
                    </label>
                    <div className="input-group">
                      <span
                        className="input-group-text bg-white border-end-0"
                        style={{ borderColor: "#66b3cc" }}
                      >
                        <i
                          className="bi bi-envelope"
                          style={{ color: "#f56800" }}
                        ></i>
                      </span>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-control border-start-0"
                        style={{
                          borderColor: "#66b3cc",
                          padding: "12px",
                          color: "#007086",
                        }}
                        placeholder="example@mail.com"
                        required
                        autoComplete="off"
                      />
                    </div>
                  </div>

                  {/* Пароль с глазком */}
                  <div className="mb-4">
                    <label
                      className="form-label fw-semibold"
                      style={{ color: "#007086" }}
                    >
                      Пароль
                    </label>
                    <div className="input-group">
                      <span
                        className="input-group-text bg-white border-end-0"
                        style={{ borderColor: "#66b3cc" }}
                      >
                        <i
                          className="bi bi-lock"
                          style={{ color: "#ed014b" }}
                        ></i>
                      </span>
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="form-control border-start-0 border-end-0"
                        style={{
                          borderColor: "#66b3cc",
                          padding: "12px",
                          color: "#007086",
                        }}
                        placeholder="••••••••"
                        required
                        autoComplete="off"
                      />
                      <span
                        className="input-group-text bg-white border-start-0"
                        style={{ borderColor: "#66b3cc", cursor: "pointer" }}
                        onClick={togglePasswordVisibility}
                      >
                        <i
                          className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`}
                          style={{ color: "#007086" }}
                        ></i>
                      </span>
                    </div>
                  </div>

                  {error && (
                    <div
                      className="alert border-0 rounded-3"
                      style={{
                        backgroundColor: "#b96e7c20",
                        color: "#b96e7c",
                        borderLeft: "4px solid #b96e7c",
                      }}
                      role="alert"
                    >
                      <i
                        className="bi bi-exclamation-triangle-fill me-2"
                        style={{ color: "#ed014b" }}
                      ></i>
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn w-100 py-3 border-0 rounded-3 fw-semibold text-white mb-4"
                    style={{
                      background: "linear-gradient(135deg, #f56800, #ed014b)",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background =
                        "linear-gradient(135deg, #ed014b, #b96e7c)";
                      e.target.style.transform = "translateY(-2px)";
                      e.target.style.boxShadow =
                        "0 10px 20px rgba(237, 1, 75, 0.3)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background =
                        "linear-gradient(135deg, #f56800, #ed014b)";
                      e.target.style.transform = "translateY(0)";
                      e.target.style.boxShadow = "none";
                    }}
                  >
                    {loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2"></span>
                        Вход...
                      </>
                    ) : (
                      "Войти"
                    )}
                  </button>

                  <div className="text-center">
                    <span style={{ color: "#66b3cc" }}>Нет аккаунта?</span>{" "}
                    <Link
                      to="/register"
                      className="text-decoration-none fw-semibold"
                      style={{ color: "#0f9352" }}
                      onMouseEnter={(e) => (e.target.style.color = "#f56800")}
                      onMouseLeave={(e) => (e.target.style.color = "#0f9352")}
                    >
                      Создать аккаунт
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
