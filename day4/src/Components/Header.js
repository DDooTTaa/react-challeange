import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

const Header = styled.header`
  display: flex;
  margin-bottom: 30px;
`;
const List = styled.div`
  font-size: 36px;
  font-weight: 600;
  margin-right: 50px;
  margin-top: 30px;
  &: hover {
    background-color: yellow;
    color: white;
  }
`;

const HeaderTop = ({ location: { pathname } }) => (
  <>
    <GlobalStyles />
    <Header>
      <List selected={pathname === "/"}>
        <Link to="/">PRICES</Link>
      </List>
      <List selected={pathname === "/exchanges"}>
        <Link to="/exchanges">EXCHANGES</Link>
      </List>
      <List selected={pathname === "/coins"}>
        <Link to="/coins">COINS</Link>
      </List>
    </Header>
  </>
);

export default withRouter(HeaderTop);
/*
export default () => (
  <header>
    <ul>
      <li>
        <Link to="/">Prices</Link>
      </li>
      <li>
        <Link to="/exchanges">Exchanges</Link>
      </li>
      <li>
        <Link to="/coins">Coins</Link>
      </li>
    </ul>
  </header>
);
*/
