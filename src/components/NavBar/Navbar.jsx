import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Footer from '../Footer/Footer';
import Logo from '../Logo/Logo';

const Navbar = (props) => {
  const { open } = props;
  const { user } = useSelector((state) => state.user);
  return (
    <nav className={open ? '' : '-translate-x-48'}>
      <Logo />
      {user && user.id && (
        <div className="flex justify-center items-center flex-col">
          <img alt={user.name} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzmq-qZ59s8d_kkqQ0ym3w2PuGuvKR6ZNB5AdLKFqA2Q&s" className="p-1 w-20 h-20 object-cover rounded-full ring-2 ring-gray-300" />
          <h2 className="pt-3">{user.name}</h2>
          <h2 className="text-sm">{user.email}</h2>
        </div>
      )}
      <ul>
        <li>
          <NavLink to="houses">Houses</NavLink>
        </li>
        <li>
          <NavLink to="my_reservations">My Reservations</NavLink>
        </li>
        {user && user.role === 'admin' && (
          <>
            <li>
              <NavLink to="add_house">Add House</NavLink>
            </li>
            <li>
              <NavLink to="delete_house">Delete House</NavLink>
            </li>
          </>
        )}
      </ul>
      <Footer />
    </nav>
  );
};

Navbar.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default Navbar;
