import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Toast from "../components/Toast";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const { register, toast } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: null,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    const result = await register(
      formData.name,
      formData.email,
      formData.password,
      formData.password_confirmation,
    );

    if (result.success) {
      navigate("/");
    } else if (result.errors) {
      setErrors(result.errors);
    }

    setLoading(false);
  };

  return (
    <>
      <Toast show={toast.show} message={toast.message} type={toast.type} />

      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div className="card shadow">
              <div className="card-body p-4">
                <h2 className="text-center mb-4">
                  <i className="bi bi-person-plus-fill text-primary me-2"></i>
                  Регистрация
                </h2>

                <form onSubmit={handleSubmit}>
                  {/* Имя */}
                  <div className="mb-3">
                    <label className="form-label">Имя</label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <i className="bi bi-person"></i>
                      </span>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`form-control ${errors.name ? "is-invalid" : ""}`}
                        placeholder="Введите ваше имя"
                        required
                      />
                    </div>
                    {errors.name && (
                      <div className="invalid-feedback d-block">
                        {errors.name[0]}
                      </div>
                    )}
                  </div>

                  {/* Email */}
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <i className="bi bi-envelope"></i>
                      </span>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`form-control ${errors.email ? "is-invalid" : ""}`}
                        placeholder="example@mail.com"
                        required
                      />
                    </div>
                    {errors.email && (
                      <div className="invalid-feedback d-block">
                        {errors.email[0]}
                      </div>
                    )}
                  </div>

                  {/* Пароль */}
                  <div className="mb-3">
                    <label className="form-label">Пароль</label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <i className="bi bi-lock"></i>
                      </span>
                      <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className={`form-control ${errors.password ? "is-invalid" : ""}`}
                        placeholder="Минимум 6 символов"
                        required
                        minLength={6}
                      />
                    </div>
                    {errors.password && (
                      <div className="invalid-feedback d-block">
                        {errors.password[0]}
                      </div>
                    )}
                  </div>

                  {/* Подтверждение пароля */}
                  <div className="mb-4">
                    <label className="form-label">Подтверждение пароля</label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <i className="bi bi-lock-fill"></i>
                      </span>
                      <input
                        type="password"
                        name="password_confirmation"
                        value={formData.password_confirmation}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Повторите пароль"
                        required
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn btn-primary w-100 py-2"
                  >
                    {loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2"></span>
                        Регистрация...
                      </>
                    ) : (
                      "Зарегистрироваться"
                    )}
                  </button>

                  <div className="text-center mt-3">
                    <span className="text-muted">Уже есть аккаунт?</span>{" "}
                    <Link to="/login" className="text-decoration-none">
                      Войти
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
