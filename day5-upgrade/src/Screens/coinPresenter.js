import React from "react";
import Loader from "../Components/Loader";
import styled from "styled-components";
import PropTypes from "prop-types";
import Coin from "../Components/Coin";

const Container = styled.div``;
const Item = styled.span``;
const Divider = styled.div``;

const CoinPresenter = ({ coins, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {coins &&
        coins.length > 0 &&
        coins
          .filter((coin) => coin.rank !== 0)
          .sort((first, second) => first.rank - second.rank)
          .map((coin) => <Coin key={coin.id} {...coin} />)}
      {error && <Item text={error} />}
    </Container>
  );

CoinPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  coins: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      symbol: PropTypes.string.isRequired,
      rank: PropTypes.number.isRequired
    }).isRequired
  ).isRequired
};

export default CoinPresenter;
