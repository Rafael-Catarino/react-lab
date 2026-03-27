import { useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router";

export const Logout = () => {
  const { logout: performLogout } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    performLogout();
    navigate("/auth/login");
  }, [performLogout, navigate]);

  return null;
};
