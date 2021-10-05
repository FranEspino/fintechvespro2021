import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SidebarLink = styled(Link)`
  margin-top: 18px;
  display: flex;
  color: #e02a1f;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
  list-style: none;
  height: 40px;
  text-decoration: none;
  font-size: 18px;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    background: #f1e0e0;
    border-left: 3px solid #000000;
  }
`;

const Sidebarlabel = styled.span`
  margin-left: 16px;
  color: #000000;
`;

const SidebarlabelF = styled.span`
  position: absolute;
  margin-left: 39px;
  margin-top: -22px;
  color: #000000;
`;
const DropdownLink = styled(Link)`
  height: 40px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #e02a1f;
  font-size: 18px;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    background: #f1e0e0;
    border-left: 3px solid #ffffff;
  }
`;
const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);
  const showSubmenu = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink to={item.path} onClick={item.subMenu && showSubmenu}>
        <div>
          {item.icon}
          <SidebarlabelF>{item.title}</SidebarlabelF>
        </div>
        <div>
          {item.subMenu &&
          subnav /*Si el item tiene un subMenu y si ha dado click en el nav padre*/
            ? item.iconOpened /* Para item.subMenu Se muestra el icono hacia abajo*/
            : item.subMenu /*Esto cumplira con la condición se se encuentre abajo y así podemos customizarla*/
            ? item.iconClosed /*Para subnav es decir cuando se da click en el nav padre*/
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subMenu.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index}>
              {item.icon}
              <Sidebarlabel>{item.title}</Sidebarlabel>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default SubMenu;
