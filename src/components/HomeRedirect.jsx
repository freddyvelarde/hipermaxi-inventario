import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HomeRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/inicio");
  }, [navigate]);

  return null;
};

export default HomeRedirect;
