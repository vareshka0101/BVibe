import { createContext, useState, useContext, useEffect } from "react";
import api from "../services/api";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "success",
  });

  // Проверяем, есть ли сохраненный токен при загрузке
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetchUser();
    } else {
      setLoading(false);
    }
  }, []);

  const fetchUser = async () => {
    try {
      const response = await api.get("/user");
      setUser(response.data.user);
    } catch (error) {
      localStorage.removeItem("token");
    } finally {
      setLoading(false);
    }
  };

  const showToast = (message, type = "success") => {
    setToast({ show: true, message, type });
    setTimeout(
      () => setToast({ show: false, message: "", type: "success" }),
      3000,
    );
  };

  const register = async (name, email, password, password_confirmation) => {
    try {
      const response = await api.post("/register", {
        name,
        email,
        password,
        password_confirmation,
      });

      if (response.data.success) {
        localStorage.setItem("token", response.data.token);
        setUser(response.data.user);
        showToast("Регистрация прошла успешно!", "success");
        return { success: true };
      }
    } catch (error) {
      const message = error.response?.data?.message || "Ошибка при регистрации";
      showToast(message, "error");
      return {
        success: false,
        errors: error.response?.data?.errors,
      };
    }
  };

  const login = async (email, password) => {
    try {
      const response = await api.post("/login", { email, password });

      if (response.data.success) {
        localStorage.setItem("token", response.data.token);
        setUser(response.data.user);
        showToast("Вход выполнен успешно!", "success");
        return { success: true };
      }
    } catch (error) {
      const message = error.response?.data?.message || "Ошибка при входе";
      showToast(message, "error");
      return { success: false };
    }
  };

  const logout = async () => {
    try {
      await api.post("/logout");
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      localStorage.removeItem("token");
      setUser(null);
      showToast("Вы вышли из аккаунта", "success");
    }
  };

  const value = {
    user,
    loading,
    register,
    login,
    logout,
    toast,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
