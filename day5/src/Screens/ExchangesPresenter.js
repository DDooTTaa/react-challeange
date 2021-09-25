import React from "react";
import Loader from "../Components/Loader";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div``;
const Title = styled.span`
  font-weight: 600;
`;
const Divider = styled.div`
  margin: 30px;
`;

const Descript = styled.span`
  font-weight: 100;
`;
const SLink = styled(Link)`
  border-bottom: 1px solid black;
  font-weight: 100;
`;

const Poster = ({ title }) => (
  <Descript>
    {title && title.length > 90 ? `${title.substring(0, 88)}...` : title}
    <Divider />
  </Descript>
);

const ExchPresenter = ({ exchanges, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {exchanges &&
        exchanges.length > 0 &&
        exchanges.map((e) => (
          <Title>
            {e.name}
            <Divider />
            <Poster title={e.description} />
            <SLink to={e.links?.website[0]}>{e.links?.website[0]}</SLink>
            <Divider />
          </Title>
        ))}
      {error && <Title text={error} />}
    </Container>
  );

ExchPresenter.propTypes = {
  exchanges: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired
};

export default ExchPresenter;
