import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export const Redirect = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/analisis-estructurado") {
      navigate("/analisis-estructurado/declaracion_de_propositos");
    }
    if (location.pathname === "/marco-teorico") {
      navigate("/marco-teorico/intro");
    }
  }, [location, navigate]);

  return null;
};
const HomeRedirect = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/inicio");
    }
  }, [location, navigate]);

  return null;
};

export default HomeRedirect;
