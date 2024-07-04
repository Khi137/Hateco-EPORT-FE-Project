import { useLocation, useNavigate } from "react-router-dom";

export const withRouter = (Component) => {
  const Wrapper = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    return <Component location={location} navigate={navigate} {...props} />;
  };

  return Wrapper;
};
