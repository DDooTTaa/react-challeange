import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  margin-bottom: 15px;
`;

const Ranking = styled.span`
  font-weight: 600;
`;
const SLink = styled(Link)`
  text-decoration: underline;
`;

const Coin = ({ name, symbol, rank, id }) => (
  <Container>
    <SLink to={`/coins/${id}`}>
      <Ranking>#{rank}</Ranking> {name}/{symbol} ->
    </SLink>
  </Container>
);

Coin.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  rank: PropTypes.number.isRequired
};

export default Coin;
