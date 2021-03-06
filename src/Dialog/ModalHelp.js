import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, Glyphicon } from 'react-bootstrap';

export default class ModalHelp extends Component {
  static propTypes = {
    onOk: PropTypes.func.isRequired,
    hidden: PropTypes.bool,
  }

  static defaultProps = {
    hidden: true,
  }

  render() {
    const { onOk, hidden } = this.props;

    return (
      <Modal show={!hidden} onHide={() => {if(onOk) onOk(); }} bsSize="large">
        <Modal.Header closeButton>
          <Modal.Title>Help</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="help-intro">
            <h4>Introduction</h4>
            <p>This React.js app is made for <a href="https://www.Collaborizm.com/" target="_blank">Collaborizm</a> as I was tired of writing Markdown for tables by hand for posts.</p>
            <p>A big shout-out to <a href="https://www.collaborizm.com/profile/21339?utm_content=user_link&utm_source=user_Hyt3y6XK" target="_blank">Robert Lancer</a>, the CTO of Collaborizm for inspiring this project.</p>
            <p>
              App by <a href="https://www.collaborizm.com/profile/Hyt3y6XK?utm_content=user_link&utm_source=user_Hyt3y6XK" target="_blank">Harsha Alva</a>.
              Made for <a href="https://www.collaborizm.com/" target="_blank">Collaborizm</a> with <Glyphicon glyph="heart" /> and <a href="https://facebook.github.io/react/" target="_blank">React</a>
            </p>

            <br />

            <h4>Features</h4>
            <ul>
              <li>
                <b>Large Input Grid</b>
                <p>The grid supports up to 10 columns and 30 rows.</p>
              </li>

              <li>
                <b>Markdown Importer</b>
                <p>Easily import an existing Markdown Table</p>
              </li>

              <li>
                <b>State Persistence</b>
                <p>Saves table size, import markdown and input grid state in the browser's LocalStorage.</p>
              </li>

              <li>
                <b>Column Text Align</b>
                <p>Set the text alignment to left (default), center and right for each column in the input grid.</p>
              </li>

              <li>
                <b>Input Grid Keyboard Navigation</b>
                <p>Use up, down, left and right arrow keys to navigate between cells in the input grid.</p>
              </li>

              <li>
                <b>Popout Cell Value Editor</b>
                <p>Press enter or double-click on a cell to enter cell value.</p>
              </li>

              <li>
                <b>Cell Text Overflow Indicator</b>
                <p>Shows red ellipsis (...) when the cell value is long.</p>
              </li>

              <li>
                <b>Markdown Result Viewer with Copy button</b>
                <p>Pretty-printed result viewer with line numbers. Use the copy button to copy Markdown to the Clipboard.</p>
              </li>

            </ul>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button bsStyle="primary" onClick={() => {if(onOk) onOk(); }}>Ok</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
