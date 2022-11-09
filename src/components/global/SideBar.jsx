import React,{useState}from 'react'
import "react-pro-sidebar/dist/css/styles.css";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import SideBarItem from './SideBarItem'
import { MdOutlineMenu } from "react-icons/md";

function OnboardModal() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Home");
  return (
    <div>
         <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MdOutlineMenu /> : undefined}
            style={{ margin: "10px 0 20px 0"}}>
            {!isCollapsed && (
              <div >
                <h1>
                  ADMIN
                </h1>
                <button onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MdOutlineMenu />
                </button>
              </div>
            )}
          </MenuItem>

          <div>
              <SideBarItem
              title="Home"
              to ="/Home"
              selected={selected}
              setSelected= {setSelected}
              icon={ <MdOutlineMenu/>}
              />
                 <SideBarItem
   title="Home"
   to ="/Home"
   selected={selected}
   setSelected= {setSelected}
   icon={ <MdOutlineMenu/>}
   />
      <SideBarItem
   title="Home"
   to ="/Home"
   selected={selected}
   setSelected= {setSelected}
   icon={ <MdOutlineMenu/>}
   />
      <SideBarItem
   title="Home"
   to ="/Home"
   selected={selected}
   setSelected= {setSelected}
   icon={ <MdOutlineMenu/>}
   />
          </div>
        </Menu>
      </ProSidebar>
    </div>
  )
}

export default OnboardModal;
