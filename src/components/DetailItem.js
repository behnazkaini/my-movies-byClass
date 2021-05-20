import React from "react";

function getDetailData(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Film #" + id);
    }, 1000);
  });
}

class DetailItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      title: "",
    };
  }

  fetchAndUpdate = (id) => {
    this.setState({ loading: true });
    getDetailData(id).then((title) => {
      this.setState({ title, loading: false });
    });
  };

  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      this.fetchAndUpdate(this.props.id);
      //   getDetailData(this.props.id).then((title) => {
      //     this.setState({ title, loading: false });
      //   });
    }
  }

  componentDidMount() {
    this.fetchAndUpdate(this.props.id);
    // getDetailData(this.props.id).then((title) => {
    //   this.setState({ title, loading: false });
    // });
  }

  render() {
    return this.state.loading ? <Loading /> : this.state.title;
  }
}

export default DetailItem;

class Loading extends React.Component {
  componentWillUnmount() {
      console.log("Loading componentWillUnmount")
  }
  render() {
    return "Please wait ...";
  }
}
