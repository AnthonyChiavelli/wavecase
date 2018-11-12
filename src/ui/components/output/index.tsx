import React, { Component } from 'react';
import './index.scss'


interface IOutputProps {
  value: string
}

class Output extends Component<IOutputProps> {

  private readonly textarea: React.RefObject<HTMLTextAreaElement>;

  constructor(props: IOutputProps) {
    super(props);

    this.textarea = React.createRef();
  }

  handleClickCopy = () => {
    if (this.textarea.current) {
      this.textarea.current.select();
      window.document.execCommand('copy');
    }
  };

  render() {
    return (
      <div className="Output">
        <form>
          <div className="form-group">
            <textarea
              ref={this.textarea}
              readOnly
              value={this.props.value}
              className="form-control">
            </textarea>
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.handleClickCopy}
            disabled={this.props.value.length === 0}
          >
            Copy
          </button>
        </form>
      </div>
    );
  }
}

export default Output;
