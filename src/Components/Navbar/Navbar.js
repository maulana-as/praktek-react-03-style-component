import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { NavigationBar } from "../../Styles/NavigationBar";
import { NavigationContainer } from "../../Styles/NavigationContainer";
import { SidebarItem } from "./SidebarItem";
import { StyledSearchBarContent } from "../../Styles/SearchBar";
import { StyleLogin } from '../../Styles/StyleLogin'
import { Button } from '../../Styles/Button'
import { OutlineButton } from '../../Styles/OutlineButton'

function NavbarDetik() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#000" }}>
        <NavigationBar>
          <NavigationContainer>
            <div className="navbar">
              <Link to="#" className="menu-bars">
                <FaIcons.FaBars className="fa-search"rs onClick={showSidebar} />
              </Link>
            </div>
            <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
              <ul className="nav-menu-items" onClick={showSidebar}>
                <li className="navbar-toggle">
                  <Link to="#" className="menu-bars">
                    <AiIcons.AiOutlineClose />
                  </Link>
                </li>
                {SidebarItem.map((item, index) => {
                  return (
                    <li key={index} className={item.cName}>
                      <Link to={item.path}>
                        {item.icon}
                        <span>{item.title}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <StyledSearchBarContent>
              <input type="text" placeholder="Cari Berita" />
               {/* <FaIcons.FaSearch className="fa-search" /> */}
            </StyledSearchBarContent>
            <StyleLogin >
              <Button>Daftar detikID</Button>
              <OutlineButton style={{marginLeft: "5px"}}>Masuk</OutlineButton>
            </StyleLogin>
          </NavigationContainer>
        </NavigationBar>
      </IconContext.Provider>
    </>
  );
}

export default NavbarDetik;
