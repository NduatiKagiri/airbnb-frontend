import React,{useState}from 'react'
import "react-pro-sidebar/dist/css/styles.css";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import SideBarItem from './SideBarItem'
import { MdOutlineMenu } from "react-icons/md";
import './SideBar.css';

function OnboardModal() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Home");
  return (
    <div id='header'>
         <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MdOutlineMenu /> : undefined}
            style={{ margin: "10px 0 20px 0"}}>
            {!isCollapsed && (
              <div className=' flex flex-row justify-between'>
                <h1 className=' font-rajdhan -rotate-12 underline text-lg' >
              Vespa
                </h1>
                <button onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MdOutlineMenu />
                </button>
              </div>
            )}
          </MenuItem>
          <div className=' flex flex-col mt-20 justify-center'>

              <SideBarItem
              title="MODELS"
              to ="/Home"
              selected={selected}
              setSelected= {setSelected}
              icon={ <MdOutlineMenu/>} />

                 <SideBarItem
                title="LIFESTYLE"
                to ="/Home"
                selected={selected}
                setSelected= {setSelected}
                 icon={ <MdOutlineMenu/>}/>

                  <SideBarItem
                 title="SHOP"
                to ="/Home"
                selected={selected}
               setSelected= {setSelected}
                icon={ <MdOutlineMenu/>}/>

                    <SideBarItem
                title="TEST DRIVE"
                to ="/Home"
                selected={selected}
                setSelected= {setSelected}
                icon={ <MdOutlineMenu/>} />







          </div>
        </Menu>
      </ProSidebar>
    </div>
  )
}

export default OnboardModal;
