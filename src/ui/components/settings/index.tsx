import React, { Component } from 'react';
import { ISettings } from '../../../types/settings'
import './index.scss'


interface ISettingsProps {
  settings: ISettings,
  onUpdateSettings: (newSettings: ISettings) => void
}

class Settings extends Component<ISettingsProps> {

  handleModeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    if (newValue === 'alternating') {
      this.props.onUpdateSettings({
        ...this.props.settings,
        mode: 'alternating'
      })
    }
    else if (newValue === 'randomized') {
      this.props.onUpdateSettings({
        ...this.props.settings,
        mode: 'randomized',
        upperCaseBias: ('upperCaseBias' in this.props.settings) ? this.props.settings.upperCaseBias : .5
      })
    }
  };

  handleFrequencyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.props.onUpdateSettings({
      ...this.props.settings,
      mode: 'randomized',
      upperCaseBias: Number(event.target.value) / 100
    });
  };

  handleWhitespaceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.props.onUpdateSettings({
      ...this.props.settings,
      ignoreCrud: event.target.checked
    });
  };

  render() {
    return (
      <div className="Settings card p-3 mb-3">
        <form>

          <fieldset className="form-group">
            <div className="row">
              <legend className="col-form-label col-sm-2 pt-0">Mode</legend>
              <div className="col-sm-10">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gridRadios"
                    id="gridRadios1"
                    value="alternating"
                    checked={this.props.settings.mode === 'alternating'}
                    onChange={this.handleModeChange}
                  />
                    <label className="form-check-label" htmlFor="gridRadios1">
                      Alternating
                    </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gridRadios"
                    id="gridRadios2"
                    value="randomized"
                    checked={this.props.settings.mode === 'randomized'}
                    onChange={this.handleModeChange}
                  />
                    <label className="form-check-label" htmlFor="gridRadios2">
                      Randomized
                    </label>
                </div>
              </div>
            </div>
          </fieldset>
          <div className="form-group row">
            <label htmlFor="ignore-spaces" className="col-sm-2 col-form-label">Settings</label>
            <div className="col-sm-10">
              <div className="form-check">

                <input
                  disabled={this.props.settings.mode !== 'alternating'}
                  type="checkbox"
                  className="form-check-input"
                  id="ignore-spaces"
                  checked={this.props.settings.ignoreCrud}
                  onChange={this.handleWhitespaceChange}
                />
                <span>Ignore Spaces and Punctuation?</span>
              </div>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="cap-frequency" className="col-sm-2 col-form-label" data-disabled={this.props.settings.mode !== 'randomized'}>Capital Frequency</label>
            <div className="col-sm-10">
              <input
                disabled={this.props.settings.mode !== 'randomized'}
                type="range"
                className="form-control-range"
                id="cap-frequency"
                min="1"
                max="99"
                value={this.props.settings.mode === 'randomized' ? this.props.settings.upperCaseBias * 100 : 50}
                onChange={this.handleFrequencyChange}
              />
              <span>{this.props.settings.mode === 'randomized' ? Math.round(this.props.settings.upperCaseBias * 100) + '%' : null}</span>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Settings;