import React,{useState}from 'react'
import "react-pro-sidebar/dist/css/styles.css";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import SideBarItem from './SideBarItem'

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
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{ margin: "10px 0 20px 0"}}>
            {!isCollapsed && (
              <div >
                <h1>
                  ADMIN
                </h1>
                <Button onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </Button>
              </div>
            )}
          </MenuItem>

          <div>
              <SideBarItem
              title="Models"
              to ="/model"
              selected={selected}
              setSelected={setSelected}
              />
          </div>
        </Menu>
      </ProSidebar>
    </div>
  )
}

export default OnboardModal;
