import React from 'react';
import { BsHouse } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Logo = ({ extraClasses }) => (
  <div>
    <Link to="/">
      <div className={`logo-box font-['Secular_One'] ${extraClasses}`}>
        <BsHouse />
        <span>AirBnb</span>
      </div>
    </Link>
  </div>
);

Logo.propTypes = {
  extraClasses: PropTypes.string,
};

Logo.defaultProps = {
  extraClasses: '',
};

export default Logo;
