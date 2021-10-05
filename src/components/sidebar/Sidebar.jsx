import { Link } from "react-router-dom";
import styled from "styled-components";
import { GoThreeBars, GoX } from "react-icons/go";
import { useState } from "react";
import { SidebarData } from "./SideBarData";
import SubMenu from "./SubMenu";

const Navbar = styled.nav`
background: rgba(255, 255, 255, 0.66);
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
border: 1px solid rgba(255, 255, 255, 0.23);
  
  height: 60px;
  top: 0;
  width: 100vw;
  display: flex;
  align-items: center;
  z-index: 100;
  position: fixed;

`;


const NavIcon = styled(Link)`
  margin-left: 1rem;
  font-size: 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  outline: none;
  color: #000000;
  -webkit-tap-highlight-color: transparent;

`;

const SidebarNav = styled.nav`
/* From https://css.glass */
background: rgba(255, 255, 255, 0.897);
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(15px);
-webkit-backdrop-filter: blur(15px);
border: 1px solid rgba(255, 255, 255, 0.23);
  width: 200px;
  height: 100vh;
  display: flex;
  justify-content: center;

  padding-top: 15px;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;
const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
  <Navbar>
        <NavIcon to="#">
          <GoThreeBars onClick={showSidebar} />
        </NavIcon>
        <h1 className="ml-4 font-mono font-extrabold text-lg">FintechVespro</h1>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to="#">
              <GoX onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </Navbar>
    </>
  );
};

export default Sidebar;





