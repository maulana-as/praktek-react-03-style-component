import React, { useState } from "react";
import {
  HeaderWrapper,
  HeaderContainer,
  HeaderContentContainer,
  HeaderTabContainer,
  HeaderMenuAnchor,
} from "../../Styles/Header";

const Menu = () => {
  const menus = [
    "detikNews",
    "detikFinance",
    "detikWow",
    "detikOto",
    "detikInet",
    "detikHot",
    "detikSport",
    "detikTravel",
    "detikFood",
    "detikHealth",
  ];

  const [arrMenu, setarrMenu] = useState(menus);

  return (
    <div>
      <HeaderWrapper>
        <HeaderContainer>
          <HeaderContentContainer>
            <HeaderTabContainer>
            {
                arrMenu.map(menu => {
                    return (
                    <HeaderMenuAnchor >
                        <a href="#menu-one" style={{ textDecoration: 'none', color: "#fff"  }}>{menu}</a>
                    </HeaderMenuAnchor>
                    )
                })
            }
            
        </HeaderTabContainer>
          </HeaderContentContainer>
        </HeaderContainer>
      </HeaderWrapper>
    </div>
  );
};

export default Menu;
