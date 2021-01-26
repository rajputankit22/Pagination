import React, { Component } from "react";
import PropTypes from "prop-types";
import "./pagination.css";
import { connect } from "react-redux";
import { fetchList } from "../../Store/Actions/listActions";

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPageNumber: 0,
      totalPage: 0
    };
  }

  fetchNewList = (e) => {
    console.log("----", e.target.name);
    this.props.fetchList(e.target.name);
  };

  fetchNewListBackward = (e) => {
    const { currentPage, fetchList } = this.props;
    if (currentPage !== 0) fetchList(currentPage - 1);
  };
  fetchNewListForward = (e) => {
    const { currentPage, totalPage, fetchList } = this.props;
    if (currentPage !== totalPage - 1) fetchList(currentPage + 1);
  };

  render() {
    let arr = [
      <button key={-1} onClick={this.fetchNewListBackward}>
        &laquo;
      </button>
    ];
    for (let index = 0; index < this.props.totalPage; index++) {
      arr.push(
        <button
          key={index}
          name={index}
          className={index === this.props.currentPage ? "active" : ""}
          onClick={this.fetchNewList}
        >
          {index + 1}
        </button>
      );
    }
    arr.push(
      <button key={-2} onClick={this.fetchNewListForward}>
        &raquo;
      </button>
    );

    return <div className="Pagination">{arr}</div>;
  }
}

// Typechecking With PropTypes
Pagination.propTypes = {
  totalPage: PropTypes.number,
  currentPage: PropTypes.number
};

// Map reducer's state as props
const mapStateToProps = (state) => ({
  totalPage: state.list.totalPage,
  currentPage: state.list.currentPage
});

export default connect(mapStateToProps, { fetchList })(Pagination);
