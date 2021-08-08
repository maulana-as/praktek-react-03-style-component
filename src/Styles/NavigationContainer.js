import styled from 'styled-components';
import { Container } from '../Globalstyles';

export const NavigationContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  position: sticky;
  ${Container};

  .menu-bars {
    margin-left: 10rem;
    font-size: 1.2rem;
  }

  .nav-menu {
    background-color: #fff;
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: -100%;
    transition: 850ms;
  }

  .nav-menu-items {
    /* width: 440px; */
    height: calc(100% - 46px);
    position: fixed;
    z-index: 1;
    transition: 0.25s ease-in-out;
    padding: 0 0 20px 0;
    /* top: 46px; */
    /* width: 100%; */
    /* column-count: 2; Specify no. of columns */
  }

  .nav-menu.active {
    left: 0;
    transition: 350ms;
  }

  ..navbar {
    background-color: #fff;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 10px;
  }

  .navbar-toggle {
    background-color: #fff;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: start;
    align-items: center;
  }
`;
