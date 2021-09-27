import React from "react";
import { coinApi } from "../api.js";
import ExchangesPresenter from "./ExchangesPresenter.js";

export default class extends React.Component {
  state = {
    exchanges: null,
    error: null,
    loading: true
  };

  async componentDidMount() {
    try {
      const exchanges = (await coinApi.exchanges()).data;
      console.log(exchanges);
      this.setState({
        exchanges
      });
    } catch {
      this.setState({
        error: "Can't find Exchanges info."
      });
    } finally {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    const { exchanges, error, loading } = this.state;
    console.log(this.state);
    return (
      <ExchangesPresenter
        exchanges={exchanges}
        error={error}
        loading={loading}
      />
    );
  }
}
