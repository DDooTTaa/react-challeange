import React from "react";
import Loader from "../Components/Loader";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div``;
const Item = styled.span``;
const Divider = styled.div``;

const PricePresenter = ({ tickers, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {tickers &&
        tickers.length > 0 &&
        tickers.map((p) => (
          <Item>
            {p.name} / {p.symbol}: ${p.quotes.USD.price}
            <Divider />
          </Item>
        ))}
      {error && <Item text={error} />}
    </Container>
  );

PricePresenter.propTypes = {
  exchanges: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired
};

export default PricePresenter;

// import React from "react";
// import Loader from "../Components/Loader";
// import styled from "styled-components";
// import PropTypes from "prop-types";

// const Container = styled.div``;
// const Item = styled.span``;
// const Divider = styled.div``;

// const PricePresenter = ({ tickers, error, loading }) =>
//   loading ? (
//     <Loader />
//   ) : (
//     <Container>
//       {tickers &&
//         tickers.length > 0 &&
//         tickers.map((p) => (
//           <Item>
//             {p.name} / {p.symbol}: ${p.quotes.USD.price}
//             <Divider />
//           </Item>
//         ))}
//       {error && <Item text={error} />}
//     </Container>
//   );

// PricePresenter.propTypes = {
//   tickers: PropTypes.array,
//   error: PropTypes.string,
//   loading: PropTypes.bool.isRequired
// };

// export default PricePresenter;
