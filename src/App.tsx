import React, { Component } from 'react';
import { Provider } from 'react-redux'

import Converter from './ui/containers/converter';
import configureStore from './redux/store';
import './App.scss';

class App extends Component {

  render() {
    return (
      <Provider store={configureStore()}>
        <div className="App">
          <header>AlTeRnAtInG cApS</header>
          <div className="container">
            <div className="row">
              <div className="col-sm">
                <Converter/>
              </div>
            </div>
          </div>

        </div>
      </Provider>
    );
  }
}

export default App;
