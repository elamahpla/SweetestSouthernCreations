import React, { Component } from 'react';

class InformationToggle extends Component {
  state = {
    visibility: false
  }
  handleToggleVisibility = () => {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      };
    });
  }
  render() {
    return (
      <div>
        <button
          className="Requests-Toggle"
          onClick={this.handleToggleVisibility}>
            {this.state.visibility ? <p>Hide</p> : <p>Special Requests</p>}
        </button>
        {this.state.visibility && (
          <div>
            <br/>
            <p>test</p>
          </div>
        )}
      </div>
    );
  }
}

export default InformationToggle;