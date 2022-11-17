import React,{useState}from 'react'
import "react-pro-sidebar/dist/css/styles.css";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import SideBarItem from './SideBarItem'
import { MdOutlineMenu,MdHome } from "react-icons/md";
import {RiShoppingBag2Fill} from "react-icons/ri"
import {HiCamera} from "react-icons/hi2"
import {FcShop} from "react-icons/fc"
import './SideBar.css';

function OnboardModal({props}) {
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
              title="HOUSES"
              to ="/Home"
              selected={selected}
              setSelected= {setSelected}
              icon={ <FcShop/>} />

                 <SideBarItem
                title="LIFESTYLE"
                to ="/Home"
                selected={selected}
                setSelected= {setSelected}
                 icon={ <HiCamera/>}/>

                  <SideBarItem
                 title="SHOP"
                to ="/Home"
                selected={selected}
               setSelected= {setSelected}
                icon={ <RiShoppingBag2Fill/>}/>

                    <SideBarItem
                title="CHECK HOUSE"
                to ="/Home"
                selected={selected}
                setSelected= {setSelected}
                icon={ <MdHome/>} />







          </div>
        </Menu>
      </ProSidebar>
    </div>
  )
}

export default OnboardModal;
