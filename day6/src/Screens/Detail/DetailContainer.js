import React from "react";
import DetailPresenter from "./DetailPresenter";
import { getDetail } from "../../api.js";

export default class extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname }
    } = props;
    this.state = {};
  }

  async componentDidMount() {
    // console.log(this.props);
    // const {
    //   match: {
    //     params: { id }
    //   },
    //   history: { push },
    //   location: { pathname }
    // } = this.props;
    // const parseId = parseInt(id);
    // if (isNaN(parseId)) {
    //   return push("/");
    // }
    // let result = null;
    try {
      const request = await getDetail("btc-bitcoin").data;
      console.log("zzz" + request);
      // result = request.data;
    } catch {
      this.setState({ error: "can't find" });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { result, error, loading } = this.state;
    console.log(this.state);
    console.log(result);
    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}
