import React from "react";
import Loader from "../Components/Loader";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div``;
const Title = styled.span`
  font-weight: 600;
  display: block;
  margin-bottom: 30px;
`;
const Links = styled.div`
  margin: 30px;
`;

const Descript = styled.span`
  font-weight: 100;
  display: block;
  margin-bottom: 10px;
`;

const Link = styled.a`
  text-decoration: underline;
`;

const Exchange = ({ name, description, links }) => (
  <Container>
    <Title>{name}</Title>
    {description && `${description.substring(0, 80)}...`}
    <Links>
      {links &&
        links.website &&
        links.website.map((w, i) => (
          <Link key={i} href={w}>
            {w}
          </Link>
        ))}
    </Links>
  </Container>
);

const Poster = ({ title }) => (
  <Descript>
    {title && title.length > 90 ? `${title.substring(0, 88)}...` : title}
  </Descript>
);

const ExchPresenter = ({ exchanges, loading }) =>
  loading ? (
    <Loader />
  ) : (
    exchanges.map((exchange) => <Exchange key={exchange.id} {...exchange} />)
  );

Exchange.propTypes = {
  loading: PropTypes.bool.isRequired,
  exchanges: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      links: PropTypes.shape({
        website: PropTypes.arrayOf(PropTypes.string.isRequired)
      })
    }).isRequired
  ).isRequired
};

export default ExchPresenter;
