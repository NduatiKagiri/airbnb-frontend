import React from 'react';
import { FcHome } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Logo = ({ extraClasses }) => (
  <div>
    <Link to="/">
      <div className={`logo-box font-['Secular_One'] ${extraClasses}`}>
        <FcHome />
        <span>  safeHome</span>
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
