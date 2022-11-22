import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Navigate, useLocation,
} from 'react-router-dom';
import notFound from './404Page';

export default function PrivateRoutes({ children, requiresAdmin }) {
  const location = useLocation();
  const { user, status } = useSelector((state) => state.user);
  const isAdmin = user && user.role === 'admin';

  const isAuthenticated = user && user.id;

  if (status === 'loading') {
    return <div>Checking Authentication</div>;
  }

<<<<<<< Updated upstream
  if (!isAuthenticated || (status === 'success' && !user.id)) {
    return <Navigate to="/" state={{ from: location }} />;
  }
=======
  // if (!isAuthenticated || (status === 'success' && !user.id)) {
  //   return <Navigate to="/" state={{ from: location }} />;
  // }
>>>>>>> Stashed changes

  if (isAuthenticated && !isAdmin && requiresAdmin) {
    return <notFound />;
  }

  return children;
}
