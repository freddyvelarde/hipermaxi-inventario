import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

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
