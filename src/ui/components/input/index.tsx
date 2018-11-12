import React, { Component } from 'react';
import './index.scss'


interface IInputProps {
  value: string
  onChange: (newString: string) => void
}

class Input extends Component<IInputProps> {

  render() {
    return (
      <div className="Input">
        <form>
          <div className="form-group">
            <textarea
              className="form-control"
              onChange={(event) => this.props.onChange(event.target.value)}
              value={this.props.value}
              placeholder="Type here...">
            </textarea>
          </div>
        </form>
      </div>
    );
  }
}

export default Input;
