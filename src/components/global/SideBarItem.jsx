import React from 'react'
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";



export default function SideBarItem({   title, to, icon, selected, setSelected   }) {

return (

  <MenuItem
    active={selected === title}
    style={{

    }}
    onClick={() => setSelected(title)}
    icon={icon}
  >
    <p>{title}</p>
    <Link to={to} />
  </MenuItem>
  )
}
