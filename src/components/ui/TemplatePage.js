import React, { Component } from 'react';
import '../../styles/templatePage.css';


class TemplatePage extends Component {
  constructor(props) {
    super(props);
    this.state = { modalIsOpen: false };
  }

  toggleModal = (isOpen) => {
    this.setState({ modalIsOpen: isOpen });
  };

  render() {
    return (
      <div className="full_height">
        {this.props.content}
      </div>
    );
  }
}

export default TemplatePage;
