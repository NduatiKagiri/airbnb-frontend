import { Routes, Route } from 'react-router-dom';
import Reservation from '../pages/Reserve/Reservation';
import SignUp from '../pages/Home/SignUp';
import Splash from '../pages/Home/Splash';
import PrivateRoutes from './PrivateRoutes';
import AddHouseForm from '../pages/AddHouse/AddHouseForm';
import Houses from '../pages/ListOfHouses/Houses';
import DeleteHouse from '../pages/DeleteHouse/DeleteHouse';
import MyReservations from '../pages/MyReservations/MyReservations';

export default function RouterConfig() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/sign_up" element={<SignUp />} />
        <Route
          path="/add_house"
          element={(
            <PrivateRoutes requiresAdmin>
              <AddHouseForm />
            </PrivateRoutes>
          )}
        />
        <Route
          path="/delete_house"
          element={(
            <PrivateRoutes requiresAdmin>
              <DeleteHouse />
            </PrivateRoutes>
          )}
        />
        <Route
          path="/houses"
          element={(
            <PrivateRoutes>
              <Houses />
            </PrivateRoutes>
          )}
        />
        <Route
          path="/:id/details"
          element={(
            <PrivateRoutes>
              <Reservation />
            </PrivateRoutes>
          )}
        />
        <Route
          path="/my_reservations"
          element={(
            <PrivateRoutes>
              <MyReservations />
            </PrivateRoutes>
          )}
        />
        <Route
          path="/my_reservations/reservation/:id"
          element={(
            <PrivateRoutes>
              <Reservation />
            </PrivateRoutes>
          )}
        />
      </Routes>
    </div>
  );
}
