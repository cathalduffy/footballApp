import { useEffect } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import Hero from "../components/hero/hero";


const Logout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    auth.signOut().then(navigate("/"));
  });
  return <Hero />;
};

export default Logout;