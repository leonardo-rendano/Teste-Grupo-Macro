import styled from 'styled-components';

export const NavWrapper = styled.nav`
  background: rgba(0,0,0,0.5);
  color: #FFF;

  .navBar {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    padding: 25px;
  }

  .logo-menu {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 10%;
    margin-right: 500px;
  }

  .logo-menu h3 {
    font-weight: 300;
  }
`;