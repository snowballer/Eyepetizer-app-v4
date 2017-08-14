import React, { Component } from 'react';
import './assets/css/normalize.css';
import styled, { injectGlobal } from 'styled-components';
import Route from './routes';

//注入全局样式
injectGlobal`
  body, html{
    height: 100%;
    background-color: rgba(51, 51, 51, 1);
    background-position: center;
    font-family: Lantinghei SC,Microsoft Yahei,Hiragino Sans GB,Helvetica Neue,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 13px;
    line-height: 1.5;
  }
  button {
    border: 0;
    outline: none;
  }
  a {
    text-decoration: none;
  }
`

const Container = styled.div`
  color: #fff;
  height: 100%;
`

class App extends Component {
  render() {
    return (
      <Container>
        {Route}
      </Container>
    );
  }
}

export default App;
