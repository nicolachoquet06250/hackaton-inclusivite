import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginBox from "../components/loginBox";

const Login = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    navigate('/dashboard');
  })

  return (
    <LoginBox/>
  );
};

export default Login;