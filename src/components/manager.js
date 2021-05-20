import React from "react";
import List from "./list";
import Detail from "./DetailItem";

class ListManager extends React.Component {
  constructor(props) {
    super(props);

    this.handleKeywordChange = this.handleKeywordChange.bind(this);
    this.handleOverSevenChange = this.handleOverSevenChange.bind(this);

    this.state = {
      keyword: "",
      overSeven: false,
      filmId: null,
    };

    console.log("manager constructor");
  }

  handleClick = (id) => {
    console.log("id",id)
    this.setState({ filmId: id });
  };
  handleKeywordChange(e) {
    this.setState({ keyword: e.target.value });
  }

  handleOverSevenChange(e) {
    this.setState({ overSeven: e.target.checked });
  }

  filterItems(keyword, overSeven) {
    return this.props.movies
      .filter((item) => item.name.toLowerCase().includes(keyword.toLowerCase()))
      .filter((item) => (overSeven ? item.rate > 7 : true));
  }

  componentDidMount() {
    console.log("manager componentDidMount");
  }

  render() {
    console.log("manager render");
    const { keyword, overSeven, filmId } = this.state;
    const finalArray = this.filterItems(keyword, overSeven).map((item) => ({
      id: item.id,
      text: item.name,
      rate: item.rate,
    }));

    return (
      <>
        <h2>Filtrable List!</h2>
        <div>
          Keyword:
          <input
            type="text"
            value={keyword}
            onChange={this.handleKeywordChange}
          />
        </div>
        <div>
          Only over 7.0
          <input
            type="checkbox"
            checked={overSeven}
            onChange={this.handleOverSevenChange}
          />
        </div>
        <div>
          <List items={finalArray} onClick={this.handleClick} />
        </div>
        {filmId > 0 && (
          <div>
            <Detail id={filmId} />
          </div>
        )}
      </>
    );
  }
}

export default ListManager;
