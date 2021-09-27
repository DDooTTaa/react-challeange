import React from "react";
import { coinApi } from "../api.js";
import PricePresenter from "./PricesPresenter.js";

export default class extends React.Component {
  state = {
    tickers: null,
    error: null,
    loading: true
  };

  async componentDidMount() {
    try {
      const tickers = (await coinApi.tickers()).data;
      this.setState({
        tickers
      });
    } catch {
      this.setState({
        error: "Can't find Movies info."
      });
    } finally {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    const { tickers, error, loading } = this.state;
    return <PricePresenter tickers={tickers} error={error} loading={loading} />;
  }
}
