import React, { Component } from "react";
import PropTypes from "prop-types";
import "./searchbar.css";
import { connect } from "react-redux";
import { fetchList } from "../../Store/Actions/listActions";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }

  handleChange = (e) => {
    this.setState({
      search: e.target.value
    });
  };

  searchList = (e) => {
    e.preventDefault();
    this.props.fetchList(0, this.state.search);
  };

  render() {
    return (
      <form class="example">
        <input
          type="text"
          value={this.state.search}
          placeholder="Search.."
          onChange={this.handleChange}
          name="search"
        />
        <button onClick={this.searchList}>Search</button>
      </form>
    );
  }
}

// Typechecking With PropTypes
Search.propTypes = {
  totalPage: PropTypes.number,
  currentPage: PropTypes.number
};

// Map reducer's state as props
const mapStateToProps = (state) => ({
  totalPage: state.list.totalPage,
  currentPage: state.list.currentPage
});

export default connect(mapStateToProps, { fetchList })(Search);
