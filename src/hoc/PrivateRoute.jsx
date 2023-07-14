import { selectLogIn } from 'Redux/auth/selector';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router';

export const PrivateRoute = ({ children }) => {
  const isLogIn = useSelector(selectLogIn);
  const location = useLocation();

  if (!isLogIn) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};
