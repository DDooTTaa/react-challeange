import React from "react";
import Loader from "../Components/Loader";
import styled from "styled-components";
import PropTypes from "prop-types";

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
        coins.map((coin) => (
          <Item>
            #{coin.rank} {coin.name}/{coin.symbol}
            <Divider />
          </Item>
        ))}
      {error && <Item text={error} />}
    </Container>
  );

CoinPresenter.propTypes = {
  coins: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired
};

export default CoinPresenter;
