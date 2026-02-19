import { useEffect } from "react";

export default function Toast({ show, message, type, onClose }) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  const bgClass = type === "success" ? "bg-success" : "bg-danger";

  return (
    <div className="position-fixed top-0 end-0 p-3" style={{ zIndex: 9999 }}>
      <div
        className={`toast show align-items-center text-white ${bgClass} border-0`}
      >
        <div className="d-flex">
          <div className="toast-body">
            <i
              className={`bi ${type === "success" ? "bi-check-circle" : "bi-exclamation-circle"} me-2`}
            ></i>
            {message}
          </div>
          <button
            type="button"
            className="btn-close btn-close-white me-2 m-auto"
            onClick={onClose}
          ></button>
        </div>
      </div>
    </div>
  );
}
