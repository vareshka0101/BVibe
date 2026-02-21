import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import ProtectedContent from "../components/ProtectedContent";

export default function Home() {
  const { user } = useAuth();

  return (
    <>
      <ProtectedContent>
        <div className="container mt-4">
          {/* Приветственный баннер с умным приветствием */}
          <div className="row mb-4">
            <div className="col-12">
              <div className="card border-0 rounded-4 overflow-hidden">
                <div
                  style={{
                    background:
                      "linear-gradient(135deg, #007086, #66b3cc, #0f9352)",
                    padding: "2px",
                  }}
                >
                  <div
                    className="card-body p-4"
                    style={{ backgroundColor: "white", borderRadius: "12px" }}
                  >
                    <div className="d-flex align-items-center">
                      <div
                        className="me-4 p-3 rounded-3"
                        style={{
                          background:
                            "linear-gradient(135deg, #f56800, #ed014b)",
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
                      <div>
                        <h1 className="h2 mb-1" style={{ color: "#007086" }}>
                          {/* УМНОЕ ПРИВЕТСТВИЕ */}
                          {(() => {
                            const hour = new Date().getHours();
                            if (hour >= 5 && hour < 12) {
                              return <> С добрым утром, {user?.name}!</>;
                            } else if (hour >= 12 && hour < 18) {
                              return <> Добрый день, {user?.name}!</>;
                            } else if (hour >= 18 && hour < 23) {
                              return <> Добрый вечер, {user?.name}!</>;
                            } else {
                              return <> Доброй ночи, {user?.name}!</>;
                            }
                          })()}
                        </h1>
                        <p className="mb-0" style={{ color: "#66b3cc" }}>
                          <i
                            className="bi bi-calendar-heart me-2"
                            style={{ color: "#ed014b" }}
                          ></i>
                          {new Date().toLocaleDateString("ru-RU", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* СТАТИСТИКА */}
          <div className="row mb-4">
            <div className="col-md-4 mb-3">
              <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
                <div
                  style={{
                    height: "4px",
                    background: "linear-gradient(90deg, #f56800, #ed014b)",
                  }}
                />
                <div className="card-body text-center p-4">
                  <div className="display-4 mb-2" style={{ color: "#f56800" }}>
                    <i className="bi bi-activity"></i>
                  </div>
                  <h5
                    className="card-title fw-semibold"
                    style={{ color: "#007086" }}
                  >
                    Тренировок
                  </h5>
                  <p className="display-6 fw-bold" style={{ color: "#ed014b" }}>
                    0
                  </p>
                  <p className="text-muted small">За все время</p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
                <div
                  style={{
                    height: "4px",
                    background: "linear-gradient(90deg, #0f9352, #007086)",
                  }}
                />
                <div className="card-body text-center p-4">
                  <div className="display-4 mb-2" style={{ color: "#0f9352" }}>
                    <i className="bi bi-fire"></i>
                  </div>
                  <h5
                    className="card-title fw-semibold"
                    style={{ color: "#007086" }}
                  >
                    Калории
                  </h5>
                  <p className="display-6 fw-bold" style={{ color: "#0f9352" }}>
                    0
                  </p>
                  <p className="text-muted small">За сегодня</p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
                <div
                  style={{
                    height: "4px",
                    background: "linear-gradient(90deg, #b96e7c, #ed014b)",
                  }}
                />
                <div className="card-body text-center p-4">
                  <div className="display-4 mb-2" style={{ color: "#b96e7c" }}>
                    <i className="bi bi-graph-up"></i>
                  </div>
                  <h5
                    className="card-title fw-semibold"
                    style={{ color: "#007086" }}
                  >
                    Прогресс
                  </h5>
                  <p className="display-6 fw-bold" style={{ color: "#ed014b" }}>
                    0%
                  </p>
                  <p className="text-muted small">Выполнено</p>
                </div>
              </div>
            </div>
          </div>

          {/* БЫСТРЫЕ ДЕЙСТВИЯ */}
          {/* Быстрые действия */}
          <div className="row">
            <div className="col-12">
              <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
                <div
                  style={{
                    height: "4px",
                    background:
                      "linear-gradient(90deg, #f56800, #ed014b, #b96e7c, #007086, #66b3cc, #0f9352)",
                  }}
                />
                <div className="card-body p-4">
                  <h5
                    className="mb-4 fw-semibold"
                    style={{ color: "#007086" }}
                  ></h5>
                  <div className="row g-3">
                    <div className="col-sm-6 col-md-3">
                      <button
                        className="btn w-100 py-3 border-0 rounded-3 fw-semibold text-white"
                        style={{
                          background:
                            "linear-gradient(135deg, #f56800, #ed014b)",
                          transition: "all 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.transform = "scale(1.05)";
                          e.target.style.boxShadow =
                            "0 10px 20px rgba(237, 1, 75, 0.3)";
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.transform = "scale(1)";
                          e.target.style.boxShadow = "none";
                        }}
                      >
                        <i className="bi bi-plus-circle d-block fs-4 mb-2"></i>
                        Новая тренировка
                      </button>
                    </div>
                    <div className="col-sm-6 col-md-3">
                      <button
                        className="btn w-100 py-3 border-0 rounded-3 fw-semibold text-white"
                        style={{
                          background:
                            "linear-gradient(135deg, #0f9352, #007086)",
                          transition: "all 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.transform = "scale(1.05)";
                          e.target.style.boxShadow =
                            "0 10px 20px rgba(0, 112, 134, 0.3)";
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.transform = "scale(1)";
                          e.target.style.boxShadow = "none";
                        }}
                      >
                        <i className="bi bi-cup-straw d-block fs-4 mb-2"></i>
                        Добавить еду
                      </button>
                    </div>
                    <div className="col-sm-6 col-md-3">
                      <button
                        className="btn w-100 py-3 border-0 rounded-3 fw-semibold text-white"
                        style={{
                          background:
                            "linear-gradient(135deg, #b96e7c, #ed014b)",
                          transition: "all 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.transform = "scale(1.05)";
                          e.target.style.boxShadow =
                            "0 10px 20px rgba(185, 110, 124, 0.3)";
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.transform = "scale(1)";
                          e.target.style.boxShadow = "none";
                        }}
                      >
                        {/* ИСПРАВЛЕНО: bi-stopwatch → bi-scale */}
                        <i className="bi bi-file-earmark-text d-block fs-4 mb-2"></i>
                        Записать вес
                      </button>
                    </div>
                    <div className="col-sm-6 col-md-3">
                      <button
                        className="btn w-100 py-3 border-0 rounded-3 fw-semibold"
                        style={{
                          background: "#66b3cc",
                          color: "#007086",
                          border: "2px solid #66b3cc",
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.background = "#66b3cc";
                          e.target.style.color = "white";
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background = "white";
                          e.target.style.color = "#007086";
                        }}
                      >
                        <i className="bi bi-list-check d-block fs-4 mb-2"></i>
                        История
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ИНФОРМАЦИОННАЯ КАРТОЧКА */}
          <div className="row mt-4">
            <div className="col-12">
              <div
                className="card border-0 rounded-4"
                style={{
                  background: "linear-gradient(135deg,  #66b3cc, #0189a4)",
                  border: "1px solid #66b3cc",
                }}
              >
                <div className="card-body text-center p-4">
                  <div
                    className="d-inline-block p-3 rounded-circle mb-3"
                    style={{
                      background: "linear-gradient(135deg, #f56800, #ed014b)",
                    }}
                  >
                    <i className="bi bi-heart-fill text-white fs-3"></i>
                  </div>
                  <h4 style={{ color: "#b7e4f3" }}>
                    Твой путь к здоровью начинается здесь
                  </h4>
                  <p className="mb-0" style={{ color: "#aae3f6" }}>
                    Каждая тренировка, каждый приём пищи - это шаг к лучшей
                    версии себя. Мы рядом, чтобы поддержать тебя на этом пути!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ProtectedContent>
    </>
  );
}
