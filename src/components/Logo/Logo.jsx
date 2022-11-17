import React from 'react';
import { FaCarAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Logo = ({ extraClasses }) => (
  <div>
    <Link to="/">
      <div className={`logo-box font-['Secular_One'] ${extraClasses}`}>
        <FaCarAlt />
        <span>HouseNow</span>
      </div>
    </Link>
  </div>
);



export default Logo;
