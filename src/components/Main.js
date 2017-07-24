require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'element-react';

import 'element-theme-default';

class AppComponent extends React.Component {
  render() {
    console.log(ReactDOM);
    return (
      <Button type="danger">Hello</Button>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
