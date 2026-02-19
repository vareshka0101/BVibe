import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import ProtectedContent from "../components/ProtectedContent";

export default function Home() {
  const { user } = useAuth();

  return (
    <>
      <ProtectedContent>
        <div className="container mt-4">
          {/* Приветственный баннер */}
          <div className="row mb-4">
            <div className="col-12">
              <div className="card bg-primary text-white">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-person-circle fs-1 me-3"></i>
                    <div>
                      <h1 className="h2 mb-1">Привет, {user?.name}!</h1>
                      <p className="mb-0 opacity-75">
                        <i className="bi bi-calendar-check me-2"></i>
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

          {/* Статистика */}
          <div className="row mb-4">
            <div className="col-md-4 mb-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="display-4 text-primary mb-2">
                    <i className="bi bi-activity"></i>
                  </div>
                  <h5 className="card-title">Тренировок</h5>
                  <p className="display-6 fw-bold text-primary">0</p>
                  <p className="text-muted small">За все время</p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="display-4 text-success mb-2">
                    <i className="bi bi-fire"></i>
                  </div>
                  <h5 className="card-title">Калории</h5>
                  <p className="display-6 fw-bold text-success">0</p>
                  <p className="text-muted small">За сегодня</p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="display-4 text-info mb-2">
                    <i className="bi bi-graph-up"></i>
                  </div>
                  <h5 className="card-title">Прогресс</h5>
                  <p className="display-6 fw-bold text-info">0%</p>
                  <p className="text-muted small">К цели</p>
                </div>
              </div>
            </div>
          </div>

          {/* Быстрые действия */}
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header bg-white">
                  <h5 className="mb-0">
                    <i className="bi bi-lightning-charge-fill text-warning me-2"></i>
                    Быстрые действия
                  </h5>
                </div>
                <div className="card-body">
                  <div className="row g-3">
                    <div className="col-sm-6 col-md-3">
                      <button className="btn btn-outline-primary w-100 py-3">
                        <i className="bi bi-plus-circle d-block fs-4 mb-2"></i>
                        Новая тренировка
                      </button>
                    </div>
                    <div className="col-sm-6 col-md-3">
                      <button className="btn btn-outline-success w-100 py-3">
                        <i className="bi bi-cup-straw d-block fs-4 mb-2"></i>
                        Добавить еду
                      </button>
                    </div>
                    <div className="col-sm-6 col-md-3">
                      <button className="btn btn-outline-info w-100 py-3">
                        <i className="bi bi-scissors d-block fs-4 mb-2"></i>
                        Записать вес
                      </button>
                    </div>
                    <div className="col-sm-6 col-md-3">
                      <button className="btn btn-outline-secondary w-100 py-3">
                        <i className="bi bi-list-check d-block fs-4 mb-2"></i>
                        История
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Информационная карточка */}
          <div className="row mt-4">
            <div className="col-12">
              <div className="card bg-light">
                <div className="card-body text-center p-4">
                  <i className="bi bi-info-circle fs-1 text-primary mb-3"></i>
                  <h4>Добро пожаловать в Fitness Tracker!</h4>
                  <p className="text-muted mb-0">
                    Здесь будет отображаться ваша статистика тренировок и
                    питания. Начните добавлять тренировки, чтобы увидеть
                    прогресс!
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
