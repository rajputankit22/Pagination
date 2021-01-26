// import React from "react";
import React, { Component } from "react";
import "./button.css";
import "../Table/table.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchList } from "../../Store/Actions/listActions";

class TableData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      currentPage: 0
    };
  }

  componentDidMount() {
    this.props.fetchList(this.state.currentPage, "");
    this.setState({
      list: this.props.list
    });
  }

  componentWillReceiveProps(nextProps, prevProps) {
    this.setState({
      list: nextProps.list
    });
  }

  render() {
    const header = (
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Company</th>
          <th>Actions</th>
        </tr>
      </thead>
    );

    let data = this.state.list.map((item, index) => (
      <tr key={item._id}>
        <td>{item.name}</td>
        <td>{item.type}</td>
        <td>{item.company}</td>
        <td>
          <button className="button button1" name={item._id}>
            -
          </button>
        </td>
      </tr>
    ));
    return (
      <table className="Table">
        {" "}
        {header}
        <tbody>{data}</tbody>{" "}
      </table>
    );
  }
}

// Typechecking With PropTypes
TableData.propTypes = {
  list: PropTypes.array
};

// Map reducer's state as props
const mapStateToProps = (state) => ({
  list: state.list.dataList,
  currentPage: state.list.currentPage
});

export default connect(mapStateToProps, { fetchList })(TableData);
