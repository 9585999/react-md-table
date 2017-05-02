import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ModalOkCancel from '../Dialog/ModalOkCancel';

export default class ModalEditCell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tempText: props.text,
    };
    this.doOnOk = this.doOnOk.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  static propTypes = {
    row: PropTypes.number,
    column: PropTypes.number,
    text: PropTypes.string,
    onOk: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
    hidden: PropTypes.bool,
  }

  static defaultProps = {
    hidden: true,
  }

  componentWillReceiveProps(nextProps) {
    const { row, column, text } = this.props;
    if (nextProps.row === row && nextProps.column === column && nextProps.text === text) {
      return;
    }
    this.setState({ tempText: nextProps.text });
  }

  handleTextChange(e) {
    this.setState({ tempText: e.target.value });
  }

  doOnOk() {
    const { onOk, row, column } = this.props;
    const { tempText } = this.state;
    if (onOk) onOk(row, column, tempText);
  }

  render() {
    const { onCancel, hidden } = this.props;
    const { tempText } = this.state;

    return (
      <ModalOkCancel
        txtTitle="Edit cell content"
        onOk={this.doOnOk}
        onCancel={() => {if(onCancel) onCancel(); }}
        hidden={hidden}
        large>

        <textarea
          className="cellEdit"
          onChange={this.handleTextChange}
          value={tempText}
          placeholder="Text"
        />
      </ModalOkCancel>
    );
  }
}
