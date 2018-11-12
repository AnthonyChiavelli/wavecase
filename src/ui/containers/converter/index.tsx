import React, { Component } from 'react';
import { connect } from 'react-redux'
import IStore from '../../../types/store';
import { ISettings } from '../../../types/settings';
import Input from '../../components/input';
import Output from '../../components/output';
import Settings from '../../components/settings';
import { receiveInput, receiveSettingsUpdate } from '../../../redux/actions';
import './index.scss';

interface IConverterProps {
  input: string
  output: string
  settings: ISettings
  receiveInput: (str: string) => void
  receiveSettingsUpdate: (newSettings: ISettings) => void
}

class Converter extends Component<IConverterProps> {

  render() {
    return (
      <div className="Converter card p-3">
        <Input value={this.props.input} onChange={this.props.receiveInput}/>
        <Settings settings={this.props.settings} onUpdateSettings={this.props.receiveSettingsUpdate}/>
        <Output value={this.props.output}/>
      </div>
    );
  }
}

const mapStateToProps = (state: IStore): IStore => state;
const mapDispatchToProps = {
  receiveInput,
  receiveSettingsUpdate
};

export default connect(mapStateToProps, mapDispatchToProps)(Converter);
