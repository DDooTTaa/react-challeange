import React from "react";
import { coinApi } from "../api.js";
import COINPresenter from "./coinPresenter.js";

export default class extends React.Component {
  state = {
    coins: null,
    error: null,
    loading: true
  };

  async componentDidMount() {
    try {
      const coins = (await coinApi.coins()).data;
      console.log(coins);
      this.setState({
        coins
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
    const { coins, error, loading } = this.state;
    console.log(this.state);
    return <COINPresenter coins={coins} error={error} loading={loading} />;
  }
}
