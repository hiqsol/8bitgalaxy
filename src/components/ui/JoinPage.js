import React, { Component } from 'react';
import TemplatePage from './TemplatePage.js';
import '../../styles/joinPage.css';

class JoinPage extends Component {
  state = { id: '' };

  handleSubmit = () => {
    const history = this.props.history;
    history.push('/lobby/' + this.state.id);
  };

  handleChange = (event) => {
    this.setState({
      id: event.target.value,
    });
  };
  
  render() {
    return (
      <TemplatePage
        content={
          <>
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                spellCheck="false"
                className="game-code-window"
                autoComplete="off"
                maxLength="11"
                placeholder="Room ID"
                value={this.state.id}
                onChange={this.handleChange}
              />
              <br />
              <div className="menu-button small" onClick={this.handleSubmit}>
                <span>Join</span>
              </div>
            </form>
          </>
        }
      />
    );
  }
}

export default JoinPage;
